import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useRef } from "react";

// Define the shader material
const PulseMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color("#C08A2D"),
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv - 0.5;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec2 vUv;

    void main() {
      float dist = length(vUv);
      float thickness = 0.05 + 0.01 * sin(uTime * 2.0);
      float outer = 0.48;
      float inner = outer - thickness;

      float ring = smoothstep(inner, inner + 0.002, dist) - smoothstep(outer - 0.002, outer, dist);
      float curve = smoothstep(inner, outer, dist);
      float alpha = ring * (0.6 + 0.4 * (1.0 - curve));

      gl_FragColor = vec4(uColor, alpha);
    }
  `
);

// Extend pentru a putea folosi în JSX
extend({ PulseMaterial });

// 💡 TypeScript: define JSX type pentru pulseMaterial
declare global {
  namespace JSX {
    interface IntrinsicElements {
      pulseMaterial: any; // sau mai strict: ReactThreeFiber.Node<PulseMaterialType, typeof PulseMaterial>
    }
  }
}

export default function ShaderPulse() {
  const materialRef = useRef<any>();
  const meshRef = useRef<any>();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uTime = t;
    }
    if (meshRef.current) {
      meshRef.current.scale.set(0.9, 0.9, 1);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <pulseMaterial ref={materialRef} transparent />
    </mesh>
  );
}
