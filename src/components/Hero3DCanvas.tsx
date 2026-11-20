import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Eye, RotateCw } from 'lucide-react';
import { sound } from '../utils/sound';

interface Hero3DCanvasProps {
  reducedMotion: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ reducedMotion }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [activeInteraction, setActiveInteraction] = useState(false);

  useEffect(() => {
    // If reducedMotion is toggled on, skip WebGL creation to save battery & GPU
    if (reducedMotion) return;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Detect WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080a, 0.04);

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      // Clamp pixel ratio on mobile to 1.5 to guarantee 60fps
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      currentMount.appendChild(renderer.domElement);
    } catch {
      setWebglSupported(false);
      return;
    }

    // Geometry 1: Core Polyhedron (MERN & ML Quantum Node)
    const coreGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x111625,
      emissive: 0x00283a,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: wireframeMode
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
    scene.add(coreMesh);

    // Geometry 2: Outer Wireframe Cage (Adrien Quechon brutalist wireframe)
    const wireGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMaterial);
    scene.add(wireMesh);

    // Geometry 3: Tech Orbit Ring 1 (MERN Orbit)
    const ringGeo1 = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x0df2c9,
      transparent: true,
      opacity: 0.6
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    // Geometry 4: Tech Orbit Ring 2 (Machine Learning Orbit)
    const ringGeo2 = new THREE.TorusGeometry(3.3, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Geometry 5: Floating Binary & Star Particles
    const particleCount = window.innerWidth < 768 ? 140 : 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const neonColor = new THREE.Color(0x0df2c9);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;

      const mixedColor = Math.random() > 0.5 ? cyanColor : neonColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0df2c9, 2, 20);
    pointLight2.position.set(-5, -4, 4);
    scene.add(pointLight2);

    // Mouse & Touch Pointer tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.8;
      targetRotationX = -y * 0.6;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
        setActiveInteraction(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousPointerX;
      const deltaY = e.touches[0].clientY - previousPointerY;

      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;

      previousPointerX = e.touches[0].clientX;
      previousPointerY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setTimeout(() => setActiveInteraction(false), 800);
    };

    window.addEventListener('mousemove', handlePointerMove);
    currentMount.addEventListener('touchstart', handleTouchStart, { passive: true });
    currentMount.addEventListener('touchmove', handleTouchMove, { passive: true });
    currentMount.addEventListener('touchend', handleTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newW = currentMount.clientWidth;
      const newH = currentMount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth dampening towards target mouse/touch rotation
      coreMesh.rotation.y += (targetRotationY - coreMesh.rotation.y) * 0.05 + 0.003;
      coreMesh.rotation.x += (targetRotationX - coreMesh.rotation.x) * 0.05 + 0.002;

      wireMesh.rotation.y = -coreMesh.rotation.y * 0.8;
      wireMesh.rotation.x = coreMesh.rotation.x * 0.7;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;

      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeEventListener('touchstart', handleTouchStart);
        currentMount.removeEventListener('touchmove', handleTouchMove);
        currentMount.removeEventListener('touchend', handleTouchEnd);
        if (renderer.domElement && currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
      }
      coreGeo.dispose();
      coreMaterial.dispose();
      wireGeo.dispose();
      wireMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [reducedMotion, wireframeMode]);

  return (
    <div className="relative w-full h-[360px] sm:h-[450px] lg:h-[550px] flex items-center justify-center select-none overflow-hidden">
      {/* 3D WebGL Canvas Mount Container */}
      {!reducedMotion && webglSupported ? (
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      ) : (
        /* 2D Fallback / High-Efficiency Mode */
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Concentric Pulsing SVG rings */}
            <div className="absolute inset-0 rounded-full border border-[#00f0ff]/30 animate-ping opacity-30" />
            <div className="absolute inset-4 rounded-full border border-[#0df2c9]/40 animate-spin-slow" />
            <div className="absolute inset-10 rounded-full border border-dashed border-[#38bdf8]/50 animate-spin" />
            
            {/* Center Core */}
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#111116] via-[#1a1a24] to-[#0d0d12] border-2 border-[#00f0ff] glow-cyan flex flex-col items-center justify-center text-center p-3">
              <span className="text-xs font-mono text-[#00f0ff] font-bold tracking-wider">VS.CORE</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">2D LITE MODE</span>
              <span className="text-[9px] text-[#0df2c9] mt-2 font-mono">MERN + ML</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating 3D Micro Controls (Adrien Quechon interactive pill) */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-20 flex items-center justify-between sm:justify-end gap-2 text-xs font-mono">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111116]/80 backdrop-blur-md border border-[#23232e] text-zinc-400 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#0df2c9] animate-pulse" />
          <span className="hidden sm:inline">WebGL 3D Core:</span>
          <span className="text-zinc-200">
            {reducedMotion ? '2D Fallback' : activeInteraction ? 'Active Drag' : 'Tracking Cursor'}
          </span>
        </div>

        {!reducedMotion && webglSupported && (
          <button
            onClick={() => {
              sound.playClick(850);
              setWireframeMode(!wireframeMode);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111116]/90 backdrop-blur-md border border-[#23232e] hover:border-[#00f0ff] text-zinc-300 hover:text-[#00f0ff] transition-colors text-[11px]"
            title="Toggle Wireframe Architecture"
          >
            {wireframeMode ? <Eye className="w-3.5 h-3.5 text-[#00f0ff]" /> : <RotateCw className="w-3.5 h-3.5 text-[#0df2c9]" />}
            <span>{wireframeMode ? 'Shaded' : 'Wireframe'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
