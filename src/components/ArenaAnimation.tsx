import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ArenaAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00D2FF, 2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const purpleLight = new THREE.PointLight(0xBD00FF, 2, 100);
    purpleLight.position.set(-5, -5, 5);
    scene.add(purpleLight);

    // 1v1 Battle Arena Elements (Stylized Code Brackets & VS Emblem)
    const group = new THREE.Group();

    // Left Bracket
    const bracketGeom = new THREE.TorusGeometry(2, 0.05, 16, 4, Math.PI);
    const blueMat = new THREE.MeshPhongMaterial({ 
      color: 0x00D2FF, 
      emissive: 0x00D2FF, 
      emissiveIntensity: 0.5 
    });
    const leftBracket = new THREE.Mesh(bracketGeom, blueMat);
    leftBracket.position.x = -2.5;
    leftBracket.rotation.z = Math.PI / 2;
    group.add(leftBracket);

    // Right Bracket
    const rightBracket = new THREE.Mesh(bracketGeom, blueMat);
    rightBracket.position.x = 2.5;
    rightBracket.rotation.z = -Math.PI / 2;
    group.add(rightBracket);

    // VS Core (Glowing Sphere)
    const coreGeom = new THREE.SphereGeometry(0.8, 32, 32);
    const purpleMat = new THREE.MeshPhongMaterial({ 
      color: 0xBD00FF, 
      emissive: 0xBD00FF, 
      emissiveIntensity: 0.8 
    });
    const core = new THREE.Mesh(coreGeom, purpleMat);
    group.add(core);

    // Rotating Rings
    const ringGeom = new THREE.TorusGeometry(3.5, 0.02, 16, 100);
    const ring1 = new THREE.Mesh(ringGeom, blueMat);
    const ring2 = new THREE.Mesh(ringGeom, purpleMat);
    ring2.rotation.x = Math.PI / 2;
    group.add(ring1);
    group.add(ring2);

    scene.add(group);
    camera.position.z = 8;

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      group.rotation.y += 0.005;
      core.scale.setScalar(1 + Math.sin(Date.now() * 0.002) * 0.1);
      ring1.rotation.z += 0.01;
      ring2.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};
