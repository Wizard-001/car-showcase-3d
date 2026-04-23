import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, Environment } from '@react-three/drei';
import './ScrollAnimationSection.css';

// The animated 3D Model component
const AnimatedCar = ({ scrollProgress }) => {
    // We'll use the newly provided Koenigsegg model for this showcase
    const { scene } = useGLTF('/models/koenigsegg.glb');
    const groupRef = useRef();

    useFrame(() => {
        if (!groupRef.current) return;

        // Animate based on scrollProgress (0 to 1)

        // 1. Rotation: slowly rotate the car up to 360 degrees as the user scrolls
        const targetRotationY = scrollProgress * Math.PI * 2;
        groupRef.current.rotation.y += 0.1 * (targetRotationY - groupRef.current.rotation.y);

        // 2. Camera Zoom/Positioning via group scaling and translating
        // We'll keep the car much closer to the center instead of sliding it far away
        let targetScale = 0.85;
        let targetX = 0;
        let targetZ = 0;

        if (scrollProgress < 0.3) {
            // First phase: enter screen gently
            targetScale = 0.85 + (scrollProgress / 0.3) * 0.15; // 0.85 -> 1.0
            targetX = 0.5 - (scrollProgress / 0.3) * 0.5; // Slide in from right just a bit
        } else if (scrollProgress < 0.7) {
            // Second phase: center piece
            targetScale = 1.0;
            targetX = 0;
            targetZ = ((scrollProgress - 0.3) / 0.4) * 0.5; // push forward very slightly (0 to 0.5)
        } else {
            // Third phase: exit screen gently
            targetScale = 1.0 - ((scrollProgress - 0.7) / 0.3) * 0.15; // 1.0 -> 0.85
            targetX = -((scrollProgress - 0.7) / 0.3) * 0.5; // Slide out to left just a bit
            targetZ = 0.5; // Hold the subtle forward position
        }

        // Lerp scale and position for smoothness
        groupRef.current.scale.setScalar(
            groupRef.current.scale.x + 0.1 * (targetScale - groupRef.current.scale.x)
        );
        groupRef.current.position.x += 0.1 * (targetX - groupRef.current.position.x);
        groupRef.current.position.z += 0.1 * (targetZ - groupRef.current.position.z);
    });

    return (
        <group ref={groupRef}>
            <primitive object={scene} />
        </group>
    );
};

const ScrollAnimationSection = () => {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Calculate scroll progress through this specific 300vh section
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            // rect.top is the distance from the top of the viewport to the top of the section
            // When rect.top == 0, the section has just hit the top of the screen
            // The section is 300vh tall, and we want to track it while it scrolls.
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;

            // Distance scrolled *into* the element
            const scrollDistance = -rect.top;
            // The total scrollable distance within the element before it leaves the viewport
            const maxScrollDistance = elementHeight - windowHeight;

            if (scrollDistance > 0 && scrollDistance <= maxScrollDistance) {
                // We are actively scrolling through this sticky section
                let progress = scrollDistance / maxScrollDistance;
                // Clamp between 0 and 1
                progress = Math.max(0, Math.min(1, progress));
                setScrollProgress(progress);
            } else if (scrollDistance <= 0) {
                setScrollProgress(0);
            } else {
                setScrollProgress(1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Text to display at different scroll phases for Koenigsegg
    let activeText = "";
    if (scrollProgress > 0.1 && scrollProgress < 0.4) {
        activeText = "Megawatt Power";
    } else if (scrollProgress >= 0.4 && scrollProgress < 0.7) {
        activeText = "Revolutionary Engineering";
    } else if (scrollProgress >= 0.7 && scrollProgress < 0.95) {
        activeText = "Pure Hypercar";
    }

    return (
        <section className="scroll-animation-container" ref={sectionRef}>
            <div className="sticky-wrapper">
                <div className="canvas-wrapper">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 8], fov: 45 }} gl={{ antialias: true }}>
                        <color attach="background" args={['#050505']} />
                        <ambientLight intensity={0.5} />
                        <Suspense fallback={null}>
                            <Stage environment="city" intensity={0.6} contactShadow={{ resolution: 1024, opacity: 0.8, blur: 2 }} shadowBias={-0.0015}>
                                <AnimatedCar scrollProgress={scrollProgress} />
                            </Stage>
                        </Suspense>
                        <Environment preset="city" />
                    </Canvas>
                </div>

                {/* Overlay Text that fades in/out based on scroll */}
                <div className="scroll-text-overlay">
                    <h2 className={activeText ? 'fade-in' : 'fade-out'}>
                        {activeText}
                    </h2>
                </div>

                {/* Scrolldown indicator */}
                <div className={`scroll-indicator ${scrollProgress > 0.05 ? 'fade-out' : ''}`}>
                    <p>Keep Scrolling to Explore</p>
                    <div className="mouse-icon"></div>
                </div>
            </div>
        </section>
    );
};

export default ScrollAnimationSection;
