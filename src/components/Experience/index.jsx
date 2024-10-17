import React, { memo } from 'react';
import { MeshReflectorMaterial, OrbitControls, PresentationControls, Stage } from '@react-three/drei';
import { Avatar } from '../Avatar/index';

export const Experience = memo(() => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={Math.PI / 2} />
      <directionalLight
        position={[-10, 10, 0]}
        intensity={1}
      />
      <pointLight
        position={[10, 10, 10]}
        decay={0}
        intensity={Math.PI * 2}
      />
      <group position-y={-1}>
        <Avatar />
      </group>
      <mesh
        position={[0, -1.1, 0]}
        rotation-y={Math.PI / 2}
      >
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <MeshReflectorMaterial
          color='#cccccc'
          metalness={0.1}
          roughness={0.1}
          envMapIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={1}
        />
      </mesh>
    </>
  );
});

Experience.displayName = 'Experience';
