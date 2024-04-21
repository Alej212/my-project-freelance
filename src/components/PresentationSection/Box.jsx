import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export default function Box() {
  const meshRef = useRef()
  const [time, setTime] = useState(0)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z -= 0.01
      setTime(time + delta);
//      meshRef.current.position.y = Math.sin(time);
    }
  })

  return (
    <mesh ref={meshRef} scale={2.8} position={[0,-0.7,-.5]} >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#f96b4d"  />
    </mesh>
  )
}
