import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export function Avatar(props) {
  const { scene, animations } = useGLTF('/assets/models/avatar_ajrv_animated.glb');

  // scene.traverse((mesh, i) => {
  //   if (mesh.name.startsWith('Armature')) {
  //     mesh.name = 'Armature_1';
  //   }
  // });

  const cloneScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(cloneScene);

  const group = useRef();

  const [click, setClick] = useState(false);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!click) {
      actions['dynamic_pose_animation'].reset().fadeOut(0.5).stop();
      actions['standing_greeting_animation'].reset().fadeIn(0.5).play();
    }
    return () => {
      actions['standing_greeting_animation'].reset().fadeOut(0.5).stop();
      actions['dynamic_pose_animation'].reset().fadeIn(0.5).play();
    };
  }, [click, actions]);

  // useFrame((state, delta) => {
  //   group.current.getObjectByName('Head').lookAt(state.camera.position);
  // });

  return (
    <group
      {...props}
      ref={group}
      dispose={null}
      onClick={() => setClick(!click)}
      scale={[1.5, 1.5, 1.5]}
    >
      <group name='Scene'>
        <group name='avatar'>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name='avaturn_body'
            geometry={nodes.avaturn_body.geometry}
            material={materials.avaturn_body_material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name='avaturn_hair_0'
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name='avaturn_hair_1'
            geometry={nodes.avaturn_hair_1.geometry}
            material={materials.avaturn_hair_1_material}
            skeleton={nodes.avaturn_hair_1.skeleton}
          />
          <skinnedMesh
            name='avaturn_look_0'
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
          <skinnedMesh
            name='avaturn_shoes_0'
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/avatar_ajrv_animated.glb');
