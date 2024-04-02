import Galery from "./Galery"
import { Canvas } from "@react-three/fiber"
import Box from "./Box"

export default function PresentationSection() {
  return (
    <>
    <section className="
    flex flex-col justify-center items-center gap-56
    bg-none text-center w-full"
    >
      <h1 className="font-semibold text-6xl w-6/12 mb-24">  
        Your <span className="text-orange-600">Business Idea</span> to the digital world
      </h1>
      <Galery />
      <Canvas className="top-0 -z-10" style={{position: 'absolute'}}>
        <ambientLight intensity={2.5} />
        <Box />
      </Canvas>
    </section>
    </>
  )
}
