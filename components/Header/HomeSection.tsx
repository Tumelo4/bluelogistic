"use client"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import EarthDayMap from "@/assets/textures/8k_earth_daymap.jpg"
import EarthClouds from "@/assets/textures/8k_earth_clouds.jpg"
import EarthSpecularMap from "@/assets/textures/8k_earth_specular_map.jpg"
import { OrbitControls, Stars } from '@react-three/drei'
import { TextureLoader} from "three"
import * as THREE from "three"

const HomeSection = () => {
    const [colorMap, specularMap, cloudsMap]= useLoader(TextureLoader, [EarthDayMap.src, EarthSpecularMap.src, EarthClouds.src]);
    const cameraPosition: [number, number, number] = [0, 0, 3];
    const MeshFunction = () => {
        const earthCloudGroupRef = useRef<any>();
        useFrame(({ clock }) => {
            const elapsedTime = clock.getElapsedTime();
            earthCloudGroupRef.current.rotation.y = elapsedTime / 6;
        });
        return (
            <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <Stars
                    radius={300}
                    depth={60}
                    count={5000}
                    factor={7}
                    saturation={0}
                    fade={true}
                />
                <group ref={earthCloudGroupRef}>
                    <mesh>
                    <sphereGeometry args={[1.005, 16, 16]} />
                    <meshPhongMaterial
                        map={cloudsMap}
                        opacity={0.4}
                        depthWrite={false}
                        transparent={true}
                        alphaTest={0.2}
                        side={THREE.DoubleSide}
                    />
                    </mesh>
                    <mesh>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshPhongMaterial specularMap={specularMap} />
                    <meshStandardMaterial map={colorMap} />
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        zoomSpeed={1}
                        panSpeed={0.5}
                        rotateSpeed={0.4}
                    />
                    </mesh>
                </group>
            </Suspense>
        );
    }

    return (
        <Canvas  camera={{ position: cameraPosition }}>
            <MeshFunction />
        </Canvas>
    );
}
export default HomeSection;