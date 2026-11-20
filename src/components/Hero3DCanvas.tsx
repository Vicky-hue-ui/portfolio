import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw } from 'lucide-react';
import { sound } from '../utils/sound';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Hero3DCanvasProps {
  reducedMotion: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ reducedMotion }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [activeInteraction, setActiveInteraction] = useState(false);

  useEffect(() => {
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
    scene.fog = new THREE.FogExp2(0x08080a, 0.035);

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.8;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      currentMount.appendChild(renderer.domElement);
    } catch {
      setWebglSupported(false);
      return;
    }

    // Group to hold the central avatar & node mesh
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Vicky Samal Avatar Medallion (Circular Texture Plane)
    const textureLoader = new THREE.TextureLoader();
    const avatarTexture = textureLoader.load(PERSONAL_INFO.photoUrl);
    avatarTexture.generateMipmaps = true;
    avatarTexture.minFilter = THREE.LinearMipmapLinearFilter;

    // Front Avatar Face
    const avatarGeo = new THREE.CircleGeometry(1.35, 64);
    const avatarMaterial = new THREE.MeshBasicMaterial({
      map: avatarTexture,
      side: THREE.FrontSide
    });
    const avatarMesh = new THREE.Mesh(avatarGeo, avatarMaterial);
    coreGroup.add(avatarMesh);

    // Back Plate of the Medallion (Dark tech carbon backing)
    const backMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f1118,
      metalness: 0.9,
      roughness: 0.2,
      side: THREE.BackSide
    });
    const backMesh = new THREE.Mesh(avatarGeo, backMaterial);
    coreGroup.add(backMesh);

    // Glowing Cyan Bezel Ring around the photo
    const bezelGeo = new THREE.RingGeometry(1.35, 1.45, 64);
    const bezelMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide
    });
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMaterial);
    coreGroup.add(bezelMesh);

    // Outer Neon Emerald Accent Ring
    const outerRingGeo = new THREE.RingGeometry(1.5, 1.54, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x0df2c9,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7
    });
    const outerRingMesh = new THREE.Mesh(outerRingGeo, outerRingMat);
    coreGroup.add(outerRingMesh);

    // 2. Outer Wireframe Icosahedron Node Mesh (Enclosing Cage)
    const cageGeo = new THREE.IcosahedronGeometry(2.35, 1);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: wireframeMode ? 0.75 : 0.35
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMaterial);
    scene.add(cageMesh);

    // 3. Orbiting Tech Rings (MERN Orbit & ML Orbit)
    const ringGeo1 = new THREE.TorusGeometry(3.0, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x0df2c9,
      transparent: true,
      opacity: 0.65
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.5, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // 4. Floating Binary & Star Dust Particles
    const particleCount = window.innerWidth < 768 ? 160 : 300;
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
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0df2c9, 2.5, 20);
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

      targetRotationY = x * 0.75;
      targetRotationX = -y * 0.55;
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

      // Smooth dampening towards target rotation
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.05;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.05;
      coreGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.1;

      // Outer wireframe cage rotates independently around Vicky's avatar
      cageMesh.rotation.y = elapsedTime * 0.25;
      cageMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.3;

      // Orbiting rings
      ring1.rotation.z = elapsedTime * 0.22;
      ring2.rotation.z = -elapsedTime * 0.18;

      // Pulsing outer ring
      outerRingMesh.rotation.z = -elapsedTime * 0.3;

      // Particles gentle drift
      particles.rotation.y = elapsedTime * 0.025;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.08;

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
      avatarGeo.dispose();
      avatarMaterial.dispose();
      backMaterial.dispose();
      bezelGeo.dispose();
      bezelMaterial.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      cageGeo.dispose();
      cageMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      avatarTexture.dispose();
      renderer.dispose();
    };
  }, [reducedMotion, wireframeMode]);

  return (
    <div className="relative w-full h-[360px] sm:h-[450px] lg:h-[540px] flex items-center justify-center select-none overflow-hidden">
      {/* 3D WebGL Canvas Mount Container */}
      {!reducedMotion && webglSupported ? (
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      ) : (
        /* 2D Fallback / High-Efficiency Mode with Vicky's Image */
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Animated neon circles */}
            <div className="absolute inset-0 rounded-full border border-[#00f0ff]/30 animate-ping opacity-30" />
            <div className="absolute inset-2 rounded-full border border-[#0df2c9]/40 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-dashed border-[#38bdf8]/50 animate-spin" />
            
            {/* Center Avatar with Cyber Bezel */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-[#00f0ff] via-[#0df2c9] to-[#38bdf8] shadow-[0_0_35px_-5px_rgba(0,240,255,0.4)]">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Vicky Samal"
                className="w-full h-full object-cover rounded-full border-2 border-[#08080a]"
              />
              <div className="absolute bottom-1 right-2 px-2.5 py-0.5 rounded-full bg-[#08080a]/90 border border-[#0df2c9] text-[10px] font-mono text-[#0df2c9] font-bold">
                ● ACTIVE
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating 3D Micro Controls */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-20 flex items-center justify-between sm:justify-end gap-2 text-xs font-mono">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111116]/90 backdrop-blur-md border border-[#23232e] text-zinc-400 text-[11px] shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#0df2c9] animate-pulse" />
          <span className="hidden sm:inline">Avatar Node Mesh:</span>
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111116]/90 backdrop-blur-md border border-[#23232e] hover:border-[#00f0ff] text-zinc-300 hover:text-[#00f0ff] transition-colors text-[11px] shadow-lg"
            title="Toggle Cage Wireframe Intensity"
          >
            {wireframeMode ? <Eye className="w-3.5 h-3.5 text-[#00f0ff]" /> : <RotateCw className="w-3.5 h-3.5 text-[#0df2c9]" />}
            <span>{wireframeMode ? 'Light Cage' : 'Bold Cage'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
