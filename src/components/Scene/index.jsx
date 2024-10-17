import React from 'react';
import { Experience } from '@/components/Experience';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useProgress, Html, ScrollControls } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 1, 5], fov: 62 }}
      >
        <color
          attach='background'
          args={['#000000']}
        />
        <Suspense fallback={<Loader />}>
          <Experience
          // section={section}
          // menuOpened={menuOpened}
          />
        </Suspense>
        {/* <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -5, -1]}
        >
          <planeGeometry
            attach='geometry'
            args={[50, 100]}
          />
          <meshStandardMaterial
            attach='material'
            map={floorTexture} // Aplica la textura al material
          />
        </mesh> */}
      </Canvas>
    </>
  );
}

// 'use client';
// import { Box, Container } from '@mui/material';

// import { Canvas, useThree } from '@react-three/fiber';

// import { Suspense } from 'react';
// import { useProgress, Html, ScrollControls } from '@react-three/drei';
// import RobotPlayGround from '../Models/RobotPlayGround';
// import MechDrone from '../Models/MechDrone';

// function Loader() {
//   const { progress } = useProgress();
//   return <Html center>{progress.toFixed(1)} % loaded</Html>;
// }

// export default function Scene() {
//   return (
//     <Canvas
//       gl={{ antialias: true }}
//       dpr={[1, 1.5]}

//     >

//       <directionalLight
//         position={[-1, -1, 1]}
//         intensity={4}
//       />
//       <Suspense fallback={<Loader />}>

//         <MechDrone />

//       </Suspense>

//     </Canvas>
//   );
// }
