import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function ThreeBackground() {
  const containerRef = useRef(null);
  const scrollRef = useRef({ current: 0, target: 0 });
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    // Soft, deep dark space fog
    scene.background = new THREE.Color("#030712");
    scene.fog = new THREE.FogExp2("#030712", 0.005);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 150);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // --- Create Network Nodes (Points) ---
    const nodeCount = 60;
    const nodes = [];
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      // Spread nodes along a cylinder/pipeline coordinate system
      const r = 25 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      // Span Z coordinates from -250 to 250
      const z = -250 + (i / nodeCount) * 500 + (Math.random() - 0.5) * 20;

      nodes.push({ x, y, z, originalX: x, originalY: y, speed: 0.1 + Math.random() * 0.4 });
      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;
    }

    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    
    // Cyan-glowing nodes
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x0cfbff,
      size: 1.8,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // --- Create Connections (Lines) ---
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.15
    });

    const linePositions = [];
    // Link nodes that are spatially close along the Z pipeline
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distZ = Math.abs(nodes[i].z - nodes[j].z);
        if (distZ < 45) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist2D = Math.sqrt(dx * dx + dy * dy);
          if (dist2D < 40) {
            linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
            linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
          }
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const networkLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(networkLines);

    // --- Create Flow Packets (Glowing Particles) ---
    // These particles traverse along the Z lines representing packets passing routing cores
    const packetCount = 25;
    const packets = [];
    const packetGeo = new THREE.BufferGeometry();
    const packetPos = new Float32Array(packetCount * 3);

    for (let i = 0; i < packetCount; i++) {
      const nodeIndex = Math.floor(Math.random() * nodeCount);
      const packet = {
        x: nodes[nodeIndex].x,
        y: nodes[nodeIndex].y,
        z: nodes[nodeIndex].z,
        currentNode: nodeIndex,
        targetNode: (nodeIndex + 1) % nodeCount,
        progress: Math.random()
      };
      packets.push(packet);
      packetPos[i * 3] = packet.x;
      packetPos[i * 3 + 1] = packet.y;
      packetPos[i * 3 + 2] = packet.z;
    }

    packetGeo.setAttribute("position", new THREE.BufferAttribute(packetPos, 3));
    const packetMat = new THREE.PointsMaterial({
      color: 0xec4899, // Magenta/pink packets
      size: 2.5,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true
    });
    const packetPoints = new THREE.Points(packetGeo, packetMat);
    scene.add(packetPoints);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x0cfbff, 0.8);
    dirLight.position.set(0, 1, 1);
    scene.add(dirLight);

    // --- Interaction Observers ---
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      // Scroll moves camera Z position from 160 down to -160
      scrollRef.current.target = 160 - scrollPercent * 320;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 12;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 12;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // --- Animation loop ---
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Slow drift animation on nodes
      const posAttr = nodePoints.geometry.attributes.position;
      const time = clock.getElapsedTime() * 0.5;

      for (let i = 0; i < nodeCount; i++) {
        // Orbit original position slightly
        const node = nodes[i];
        node.x = node.originalX + Math.sin(time * node.speed) * 2;
        node.y = node.originalY + Math.cos(time * node.speed) * 2;
        
        posAttr.setXYZ(i, node.x, node.y, node.z);
      }
      posAttr.needsUpdate = true;

      // Animate packet movements along node pathways
      const packetAttr = packetPoints.geometry.attributes.position;
      for (let i = 0; i < packetCount; i++) {
        const p = packets[i];
        p.progress += delta * 0.4;
        if (p.progress >= 1.0) {
          p.progress = 0;
          p.currentNode = p.targetNode;
          p.targetNode = Math.floor(Math.random() * nodeCount);
        }

        const startNode = nodes[p.currentNode];
        const endNode = nodes[p.targetNode];

        // Interpolate position
        p.x = THREE.MathUtils.lerp(startNode.x, endNode.x, p.progress);
        p.y = THREE.MathUtils.lerp(startNode.y, endNode.y, p.progress);
        p.z = THREE.MathUtils.lerp(startNode.z, endNode.z, p.progress);

        packetAttr.setXYZ(i, p.x, p.y, p.z);
      }
      packetAttr.needsUpdate = true;

      // Smooth scroll camera transitions (lerp)
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.08;
      camera.position.z = scrollRef.current.current;

      // Smooth mouse parallax translation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      
      camera.position.x = mouseRef.current.x;
      camera.position.y = -mouseRef.current.y;
      camera.lookAt(0, 0, camera.position.z - 80);

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);
    // Initial call to align variables
    handleScroll();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose materials/geometries
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none select-none overflow-hidden" 
    />
  );
}

export default ThreeBackground;
