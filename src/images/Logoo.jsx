/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from 'react-three-fiber';

 function Logo({ ...props }) {
  const group = useRef()
  useFrame(()=> {
    group.current.rotation.y += 0.005
  })
  const { nodes, materials } = useGLTF('/logoo.glb')
  return (
    <group ref={group} {...props} dispose={null}  scale={1.75}>
      <group position={[0.58, -0.58, 0]} rotation={[-1.54, -0.54, 3.14]} scale={[0.46, 0.15, 0.31]}>
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/logoo.glb')

export default function LogoModel() {
  return(
    <div style={{ width: "30rem", height: "70vh" }}>
  <Canvas>
  <ambientLight intensity={3.5}/>
  <spotLight intensity={3.5} position={[300, 300, 4000]} />
  <spotLight intensity={1.6} position={[30, 30, 50]} angle={0.5} penumbra={1} castShadow />
  <Suspense fallback={null}>
     <Logo />
  </Suspense>
</Canvas>
</div>
)};
