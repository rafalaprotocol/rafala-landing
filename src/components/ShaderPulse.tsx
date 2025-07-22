import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useRef } from "react";

// Material cu efect de curbura subtilă
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

      // Grosimea inelului pulsează spre interior
      float thickness = 0.05 + 0.01 * sin(uTime * 2.0);

      float outer = 0.48;
      float inner = outer - thickness;

      float ring = smoothstep(inner, inner + 0.002, dist) - smoothstep(outer - 0.002, outer, dist);

      // Simulare curbura: fade spre interior (efect vizual 3D)
      float curve = smoothstep(inner, outer, dist); // 0 la inner, 1 la outer
      float alpha = ring * (0.6 + 0.4 * (1.0 - curve)); // fade interior

      gl_FragColor = vec4(uColor, alpha);
    }
  `
);

extend({ PulseMaterial });

export default function ShaderPulse() {
  const ref = useRef<any>();
  const meshRef = useRef<any>();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.uTime = t;
    }
    if (meshRef.current) {
      meshRef.current.scale.set(0.9, 0.9, 1);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <pulseMaterial ref={ref} transparent />
    </mesh>
  );
}
