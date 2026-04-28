"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export class ParticlesSwarm {
    count: number;
    container: HTMLElement;
    speedMult: number;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    composer: EffectComposer;
    dummy: THREE.Object3D;
    color: THREE.Color;
    target: THREE.Vector3;
    pColor: THREE.Color;
    geometry: THREE.TetrahedronGeometry;
    material: THREE.MeshBasicMaterial;
    mesh: THREE.InstancedMesh;
    positions: THREE.Vector3[];
    clock: THREE.Clock;
    animationId?: number;

    constructor(container: HTMLElement, count = 10000) {
        this.count = count;
        this.container = container;
        this.speedMult = 1.4345070719718933;
        
        // SETUP
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.01);
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
        this.camera.position.set(0, 0, 100);
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance", alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0); // Transparent background
        this.container.appendChild(this.renderer.domElement);

        // POST PROCESSING
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.strength = 1.8; bloomPass.radius = 0.4; bloomPass.threshold = 0;
        this.composer.addPass(bloomPass);

        // OBJECTS
        this.dummy = new THREE.Object3D();
        this.color = new THREE.Color();
        this.target = new THREE.Vector3();
        this.pColor = new THREE.Color();
        
        this.geometry = new THREE.TetrahedronGeometry(0.25);
        this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        
        this.mesh = new THREE.InstancedMesh(this.geometry, this.material, this.count);
        this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.scene.add(this.mesh);
        
        this.positions = [];
        for(let i=0; i<this.count; i++) {
            this.positions.push(new THREE.Vector3((Math.random()-0.5)*100, (Math.random()-0.5)*100, (Math.random()-0.5)*100));
            this.mesh.setColorAt(i, this.color.setHex(0x00ff88));
        }
        
        this.clock = new THREE.Clock();
        this.animate = this.animate.bind(this);
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);
        
        this.animate();
    }

    handleResize() {
        if (!this.camera || !this.renderer || !this.composer) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        this.animationId = requestAnimationFrame(this.animate);
        const time = this.clock.getElapsedTime() * this.speedMult;
        
        if((this.material as any).uniforms && (this.material as any).uniforms.uTime) {
            (this.material as any).uniforms.uTime.value = time;
        }

        // API Stubs
        const PARAMS: Record<string, number> = {"drift":0,"snap":5,"radius":50};
        const addControl = (id: string, l: string, min: number, max: number, val: number) => {
             return PARAMS[id] !== undefined ? PARAMS[id] : val;
        };
        
        const count = this.count; // Alias for user code
        
        for(let i=0; i<this.count; i++) {
            let target = this.target;
            let color = this.pColor;
            
            // INJECTED CODE
            const driftSpeed   = addControl("drift",  "Ambient Drift Speed",   0.0,  2.0,  0.3);
            const snapForce    = addControl("snap",   "Attention Snap Force",  0.0,  5.0,  2.0);
            const clusterRadius = addControl("radius","Cluster Radius",        5.0, 50.0, 18.0);
            
            // Fibonacci sphere — stable, uniform, zero GC
            const fi    = (i + 0.5) / count;
            const phi   = Math.acos(1.0 - 2.0 * fi);
            const theta = 6.28318530718 * i * 0.6180339887;
            const R     = 80.0;
            const bx    = R * Math.sin(phi) * Math.cos(theta);
            const by    = R * Math.cos(phi);
            const bz    = R * Math.sin(phi) * Math.sin(theta);
            
            // Ambient drift — layered slow sines, unique per particle
            const fd  = i * 0.00031;
            const t   = time;
            const ds  = driftSpeed;
            const dx  = Math.sin(fd * 7.3  + t * ds * 0.40       ) * 4.5;
            const dy  = Math.cos(fd * 5.1  + t * ds * 0.35       ) * 4.5;
            const dz  = Math.sin(fd * 9.7  + t * ds * 0.45 + 1.2 ) * 4.5;
            
            // 4 attention node positions (inside sphere, static)
            const n0x = 30.0;  const n0y =  20.0; const n0z = -15.0;
            const n1x = -25.0; const n1y = -30.0; const n1z =  20.0;
            const n2x =  10.0; const n2y =  35.0; const n2z =  30.0;
            const n3x = -35.0; const n3y =  15.0; const n3z = -25.0;
            
            // Periodic activations — cubed for sharp violent snap rise
            const r0 = Math.max(0.0, Math.sin(t * 0.41         )); const a0 = r0 * r0 * r0;
            const r1 = Math.max(0.0, Math.sin(t * 0.29 + 2.1   )); const a1 = r1 * r1 * r1;
            const r2 = Math.max(0.0, Math.sin(t * 0.53 + 4.2   )); const a2 = r2 * r2 * r2;
            const r3 = Math.max(0.0, Math.sin(t * 0.37 + 1.0   )); const a3 = r3 * r3 * r3;
            
            const cr = Math.max(1.0, clusterRadius);
            
            // Per-node: radial gate * activation = pull weight
            const d0x = n0x - bx; const d0y = n0y - by; const d0z = n0z - bz;
            const pull0 = Math.max(0.0, 1.0 - Math.sqrt(d0x*d0x + d0y*d0y + d0z*d0z + 0.01) / cr) * a0;
            
            const d1x = n1x - bx; const d1y = n1y - by; const d1z = n1z - bz;
            const pull1 = Math.max(0.0, 1.0 - Math.sqrt(d1x*d1x + d1y*d1y + d1z*d1z + 0.01) / cr) * a1;
            
            const d2x = n2x - bx; const d2y = n2y - by; const d2z = n2z - bz;
            const pull2 = Math.max(0.0, 1.0 - Math.sqrt(d2x*d2x + d2y*d2y + d2z*d2z + 0.01) / cr) * a2;
            
            const d3x = n3x - bx; const d3y = n3y - by; const d3z = n3z - bz;
            const pull3 = Math.max(0.0, 1.0 - Math.sqrt(d3x*d3x + d3y*d3y + d3z*d3z + 0.01) / cr) * a3;
            
            // Weighted blend of all active node targets, gated by snapForce
            const wt         = pull0 + pull1 + pull2 + pull3 + 0.0001;
            const totalPull  = Math.min(1.0, (wt / 0.0001) > 1.0 ? wt * snapForce * 0.25 : 0.0);
            const snapX      = (pull0*n0x + pull1*n1x + pull2*n2x + pull3*n3x) / wt;
            const snapY      = (pull0*n0y + pull1*n1y + pull2*n2y + pull3*n3y) / wt;
            const snapZ      = (pull0*n0z + pull1*n1z + pull2*n2z + pull3*n3z) / wt;
            
            // Final position: lerp drifted base toward dominant snap target
            target.set(
              bx + dx + (snapX - bx - dx) * totalPull,
              by + dy + (snapY - by - dy) * totalPull,
              bz + dz + (snapZ - bz - dz) * totalPull
            );
            
            // Color — neon hue per particle slot
            const slot  = i % 3;
            const neonH = slot === 0 ? 0.50 : (slot === 1 ? 0.10 : 0.33);
            // L: 0.1 (void grey) → 0.5 (neon) → 1.0 (white flash) as pull grows
            const lit   = 0.10 + totalPull * 0.90;
            const sat   = totalPull > 0.015 ? 1.0 : 0.0;
            
            color.setHSL(neonH, sat, lit);
            
            // UPDATE
            this.positions[i].lerp(this.target, 0.1);
            this.dummy.position.copy(this.positions[i]);
            this.dummy.updateMatrix();
            this.mesh.setMatrixAt(i, this.dummy.matrix);
            this.mesh.setColorAt(i, this.pColor);
        }
        this.mesh.instanceMatrix.needsUpdate = true;
        if (this.mesh.instanceColor) {
            this.mesh.instanceColor.needsUpdate = true;
        }
        
        this.composer.render();
    }
    
    dispose() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.handleResize);
        this.geometry.dispose();
        this.material.dispose();
        this.scene.remove(this.mesh);
        this.renderer.dispose();
        if (this.container && this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }
}

export default function ParticlesBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        
        const swarm = new ParticlesSwarm(containerRef.current, 5000); // reduced count for smoother mobile performance
        
        return () => {
            swarm.dispose();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
        />
    );
}
