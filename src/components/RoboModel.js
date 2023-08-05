import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function RoboModel(props) {
  const { nodes, materials } = useGLTF('/robot.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.BlackMetal} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.ButterflyBody} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.ButterflyWings} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Glow} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.OrangePaint} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Stripes} />
      </group>
    </group>
  )
}

useGLTF.preload('/robot.gltf')
