import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// Componente do Logo V em 3D
function VinnxLogo({ floatSpeed = 1 }) {
    const groupRef = useRef()

    // Rotação suave contínua
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
        }
    })

    // Criar as formas do logo usando Shape + Extrude
    const vShape = useMemo(() => {
        const shape = new THREE.Shape()

        // V principal - lado esquerdo (braço esquerdo do V)
        // Começando do topo esquerdo
        shape.moveTo(-2.2, 1.5)
        shape.lineTo(-1.6, 1.5)
        shape.lineTo(0, -1.2)
        shape.lineTo(-0.6, -1.2)
        shape.lineTo(-2.2, 1.5)

        return shape
    }, [])

    const vShape2 = useMemo(() => {
        const shape = new THREE.Shape()

        // V principal - lado direito (braço direito do V)
        shape.moveTo(0.6, 1.5)
        shape.lineTo(1.2, 1.5)
        shape.lineTo(0, -1.2)
        shape.lineTo(-0.6, -1.2)
        shape.lineTo(0.6, 1.5)

        return shape
    }, [])

    const triangleShape = useMemo(() => {
        const shape = new THREE.Shape()

        // Triângulo no canto superior direito
        shape.moveTo(1.4, 1.5)
        shape.lineTo(2.2, 1.5)
        shape.lineTo(1.8, 0.7)
        shape.lineTo(1.4, 1.5)

        return shape
    }, [])

    const extrudeSettings = {
        steps: 1,
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 3,
    }

    return (
        <Float
            speed={floatSpeed}
            rotationIntensity={0.2}
            floatIntensity={0.5}
        >
            <group ref={groupRef} scale={1.2}>
                {/* Braço esquerdo do V */}
                <mesh castShadow receiveShadow>
                    <extrudeGeometry args={[vShape, extrudeSettings]} />
                    <meshStandardMaterial
                        color="#22C55E"
                        metalness={0.3}
                        roughness={0.4}
                        envMapIntensity={1}
                    />
                </mesh>

                {/* Braço direito do V */}
                <mesh castShadow receiveShadow>
                    <extrudeGeometry args={[vShape2, extrudeSettings]} />
                    <meshStandardMaterial
                        color="#22C55E"
                        metalness={0.3}
                        roughness={0.4}
                        envMapIntensity={1}
                    />
                </mesh>

                {/* Triângulo superior direito */}
                <mesh castShadow receiveShadow>
                    <extrudeGeometry args={[triangleShape, extrudeSettings]} />
                    <meshStandardMaterial
                        color="#22C55E"
                        metalness={0.3}
                        roughness={0.4}
                        envMapIntensity={1}
                    />
                </mesh>

                {/* Glow effect - esfera de luz atrás */}
                <mesh position={[0, 0, -0.5]} scale={2.5}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshBasicMaterial
                        color="#22C55E"
                        transparent
                        opacity={0.05}
                    />
                </mesh>
            </group>
        </Float>
    )
}

// Partículas flutuantes ao redor
function FloatingParticles({ count = 30 }) {
    const particles = useMemo(() => {
        return Array.from({ length: count }, () => ({
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5,
            ],
            scale: Math.random() * 0.1 + 0.02,
        }))
    }, [count])

    return (
        <>
            {particles.map((particle, i) => (
                <Float key={i} speed={2} floatIntensity={2}>
                    <mesh position={particle.position}>
                        <sphereGeometry args={[particle.scale, 8, 8]} />
                        <meshBasicMaterial color="#22C55E" transparent opacity={0.6} />
                    </mesh>
                </Float>
            ))}
        </>
    )
}

// Componente principal da cena 3D
function Logo3DScene() {
    return (
        <div className="logo-3d-container">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />

                {/* Iluminação */}
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#22C55E" />

                {/* Environment map para reflexos */}
                <Environment preset="city" />

                {/* Logo 3D */}
                <VinnxLogo />

                {/* Partículas */}
                <FloatingParticles count={20} />
            </Canvas>
        </div>
    )
}

export default Logo3DScene
