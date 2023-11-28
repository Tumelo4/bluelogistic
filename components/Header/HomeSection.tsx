"use client"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import EarthDayMap from "@/assets/textures/8k_earth_daymap.jpg"
import EarthClouds from "@/assets/textures/8k_earth_clouds.jpg"
import EarthSpecularMap from "@/assets/textures/8k_earth_specular_map.jpg"
import EarthNormalMap from "@/assets/textures/8k_earth_normal_map.jpg"
import { OrbitControls, Stars } from '@react-three/drei'
import { TextureLoader} from "three"
import * as THREE from "three"

const HomeSection = () => {
    const [colorMap, normalMap, specularMap, cloudsMap]= useLoader(TextureLoader, [EarthDayMap.src, EarthNormalMap.src, EarthSpecularMap.src, EarthClouds.src]);
    const MeshFunction = () => {
        const earthRef = useRef<any>();
        const cloudRef = useRef<any>();
        useFrame(({clock}) => {
            const elapsedTime = clock.getElapsedTime();
            earthRef.current.rotation.y = elapsedTime/6;
            cloudRef.current.rotation.y = elapsedTime/6;
        })
        return (
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
                <mesh ref={cloudRef}>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial 
                        map = {cloudsMap} 
                        opacity={0.4} 
                        depthWrite={false} 
                        transparent={true}
                        side={THREE.DoubleSide} 
                    />
                </mesh>
                <mesh ref={earthRef}>
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
        );
    }

    return (
        <Canvas>
            <MeshFunction />
        </Canvas>
    );
}
export default HomeSection;