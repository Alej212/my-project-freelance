import Galery from "./Galery"
import { Canvas } from "@react-three/fiber"
import Box from "./Box"
import Video from "./Video"

export default function PresentationSection() {
  return (
    <>
    <section className="
    flex flex-col justify-center items-center
    bg-none text-center w-full"
    >
      <div className="">
        <div className="relative">
          <Video />
            <div className="flex flex-col items-center absolute top-64 w-full z-10">
              <h2 className="font-bold text-6xl w-6/12 z-20 text-slate-200">  
                Your <span className="">Business Idea</span> to the digital world
              </h2>
              <Canvas style={{height: '15rem', width: '15rem'}} >
                <ambientLight intensity={2.5} />
                <Box />
              </Canvas>
            </div>
        </div>
        <Galery />
      </div>
    </section>
    </>
  )
}
