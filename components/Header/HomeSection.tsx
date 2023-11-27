"use client"
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import EarthDayMap from "@/assets/textures/8k_earth_daymap.jpg"
import EarthClouds from "@/assets/textures/8k_earth_clouds.jpg"
import EarthSpecularMap from "@/assets/textures/8k_earth_specular_map.jpg"
import EarthNormalMap from "@/assets/textures/8k_earth_normal_map.jpg"
import { OrbitControls, Stars } from '@react-three/drei'
import { TextureLoader} from "three"
import * as THREE from "three"



const HomeSection = () => {

    const [colorMap, normalMap, specularMap, cloudsMap]= useLoader(TextureLoader, [EarthDayMap.src, EarthNormalMap.src, EarthSpecularMap.src, EarthClouds.src]);

    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <Stars 
                    radius={300} 
                    depth={60} 
                    count= {15000} 
                    factor={7} 
                    saturation={0}
                    fade={true} 
                />
                <mesh>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial 
                        map = {cloudsMap} 
                        opacity={0.4} 
                        depthWrite={false} 
                        transparent={true}
                        side={THREE.DoubleSide} 
                    />
                </mesh>
                <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial specularMap={specularMap} />
                    <meshStandardMaterial map = {colorMap} />
                    <OrbitControls 
                        enableZoom={true} 
                        enablePan={true}
                        enableRotate={true}
                        zoomSpeed={1}
                        panSpeed={0.5}
                        rotateSpeed={0.4}
                    />
                </mesh>
            </Suspense>
        </Canvas>
    )
}
export default HomeSection
