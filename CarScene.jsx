import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, Html, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Component } from 'react';
import * as THREE from 'three';

function Vehicle({ progress }) {
  const group = useRef();
  const { scene } = useGLTF('/models/fortuner.glb');
  const cloned = useMemo(() => scene.clone(true), [scene]);
  useEffect(() => {
    cloned.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true; obj.receiveShadow = true;
        if (obj.material) {
          obj.material = obj.material.clone();
          if ('roughness' in obj.material) obj.material.roughness = THREE.MathUtils.lerp(.34, .16, progress);
          if ('metalness' in obj.material) obj.material.metalness = Math.min(.9, obj.material.metalness + progress * .08);
        }
      }
    });
  }, [cloned, progress]);
  useFrame((state, delta) => {
    if (!group.current) return;
    const targetY = progress * Math.PI * .18;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 3, delta);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, Math.sin(progress * Math.PI) * .03, 3, delta);
  });
  return <primitive ref={group} object={cloned} scale={2.05} position={[0,-0.78,0]} />;
}

function SceneFallback() {
  return <Html center><div className="w-52 text-center text-[10px] uppercase tracking-[.2em] text-white/50">Loading vehicle</div></Html>;
}

class SceneErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div className="absolute inset-0 grid place-items-center bg-[#0a0a09]"><div className="max-w-xs px-6 text-center"><p className="eyebrow text-[#cbb78a]">Vehicle model</p><p className="mt-3 text-xs leading-5 text-white/40">Add <span className="text-white/65">/public/models/fortuner.glb</span> to activate the cinematic 3D experience.</p></div></div>;
    return this.props.children;
  }
}

export default function CarScene({ progress }) {
  return <SceneErrorBoundary><Canvas dpr={[1, 1.5]} camera={{ position: [4.7, 1.35, 7.4], fov: 34 }} gl={{ antialias: true, powerPreference: 'high-performance' }} shadows>
    <color attach="background" args={['#0a0a09']} />
    <ambientLight intensity={0.35 + progress * .18} />
    <directionalLight position={[4,5,4]} intensity={2.3} color="#fff8eb" castShadow />
    <directionalLight position={[-4,2,-2]} intensity={1.2} color="#bfc7d2" />
    <spotLight position={[0,5,-1]} intensity={5 + progress * 3} angle={.55} penumbra={.8} distance={12} />
    <Suspense fallback={<SceneFallback />}><Vehicle progress={progress} /><Environment preset="city" environmentIntensity={.3 + progress * .25}/><ContactShadows position={[0,-1.08,0]} opacity={.35} scale={8} blur={2.5} /></Suspense>
  </Canvas></SceneErrorBoundary>;
}
