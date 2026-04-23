import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Environment, useGLTF, Html, useProgress } from '@react-three/drei';

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div style={{ color: 'white', fontFamily: 'var(--font-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div className="spinner" style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTop: '3px solid var(--brand-color, #fff)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <div style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    {progress.toFixed(0)}% Loaded
                </div>
                <style>{`
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                `}</style>
            </div>
        </Html>
    );
}

const ModelHoverMover = ({ children, followCursor }) => {
    const groupRef = useRef();

    useFrame((state) => {
        if (followCursor && groupRef.current) {
            // Target rotation based on mouse coordinates (-1 to 1)
            const targetRotationY = (state.pointer.x * Math.PI) / 6; // Max 30 degrees
            const targetRotationX = -(state.pointer.y * Math.PI) / 12; // Max 15 degrees

            // Smooth interpolation (lerping)
            groupRef.current.rotation.y += 0.05 * (targetRotationY - groupRef.current.rotation.y);
            groupRef.current.rotation.x += 0.05 * (targetRotationX - groupRef.current.rotation.x);
        }
    });

    return <group ref={groupRef}>{children}</group>;
};

const RealCarModel = ({ color, modelPath }) => {
    const { scene } = useGLTF(modelPath);

    useEffect(() => {
        if (scene) {
            scene.traverse((child) => {
                if (child.isMesh && child.material) {
                    // Try to color the car body if material is named 'body' or 'paint'
                    if (child.material.name.toLowerCase().includes('body') ||
                        child.material.name.toLowerCase().includes('paint') ||
                        child.material.name.toLowerCase().includes('color')) {
                        child.material.color.set(color);
                        child.material.needsUpdate = true;
                    }
                }
            });
        }
    }, [scene, color]);

    return <primitive object={scene} scale={0.8} />;
};

const Car3DShowcase = ({ carColor = '#ffffff', modelPath = '/models/car.glb', followCursor = false }) => {
    return (
        <div className="canvas-container" style={{ width: '100%', height: '100%' }}>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [5, 2, 5], fov: 45 }} gl={{ antialias: true, toneMappingExposure: 1.2 }}>
                <color attach="background" args={['#050505']} />

                <Suspense fallback={<Loader />}>
                    <ModelHoverMover followCursor={followCursor}>
                        <Stage environment="dawn" intensity={0.6} contactShadow={{ resolution: 1024, opacity: 0.8, blur: 2 }} shadowBias={-0.0015}>
                            <RealCarModel color={carColor} modelPath={modelPath} />
                        </Stage>
                    </ModelHoverMover>
                </Suspense>

                {!followCursor && (
                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={1.2}
                        enableZoom={true}
                        enablePan={false}
                        enableDamping={true}
                        dampingFactor={0.05}
                        minDistance={3}
                        maxDistance={8}
                        makeDefault
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 2}
                    />
                )}
                {followCursor && (
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                    />
                )}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

// Preload all models to avoid stutter (optional, removed fixed generic preload for dynamic paths)

export default Car3DShowcase;
