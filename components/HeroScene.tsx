"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Subtle hero backdrop: a slow-drifting particle field with faint
 * connective lines, tinted by the site accent. Pointer-reactive,
 * DPR-capped, pauses off-screen, respects reduced motion.
 */
export default function HeroScene() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = mount.current;
    if (!el) return;

    const isDark = () => document.documentElement.classList.contains("dark");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const N = 260;
    const spread = 16;
    const positions = new Float32Array(N * 3);
    const seeds = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * (spread * 0.55);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      seeds[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.055,
      transparent: true,
      opacity: 0.75,
      color: isDark() ? 0xD9A05B : 0x8F5B23,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geo, mat);

    // connective lines between near neighbours (computed once)
    const linePos: number[] = [];
    for (let i = 0; i < N; i += 2) {
      for (let j = i + 1; j < Math.min(i + 4, N); j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        if (dx * dx + dy * dy < 4.2) {
          linePos.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
    const lineMat = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.14,
      color: isDark() ? 0xD9A05B : 0x8F5B23,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);

    const group = new THREE.Group();
    group.add(points, lines);
    scene.add(group);

    const mouse = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const resize = () => {
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    let running = true;
    const io = new IntersectionObserver(([e]) => (running = e.isIntersecting));
    io.observe(el);

    const themeObs = new MutationObserver(() => {
      const c = isDark() ? 0xD9A05B : 0x8F5B23;
      mat.color.setHex(c);
      lineMat.color.setHex(c);
    });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!running) return;
      const t = clock.getElapsedTime();
      const pos = geo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < N; i++) {
        pos.array[i * 3 + 1] += Math.sin(t * 0.5 + seeds[i]) * 0.0009;
        pos.array[i * 3] += Math.cos(t * 0.35 + seeds[i]) * 0.0007;
      }
      pos.needsUpdate = true;
      group.rotation.y += (mouse.x * 0.22 - group.rotation.y) * 0.03;
      group.rotation.x += (-mouse.y * 0.14 - group.rotation.x) * 0.03;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      themeObs.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      geo.dispose();
      lineGeo.dispose();
      mat.dispose();
      lineMat.dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} className="absolute inset-0 [&>canvas]:h-full [&>canvas]:w-full" aria-hidden />;
}
