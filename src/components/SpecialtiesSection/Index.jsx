import Specialities from "./Specialities"

export default function SpecialitiesSection() {
  return (
    <section id="specialities" className="flex flex-col items-center gap-16 mt-28 ">
        <div className="flex gap-12 pl-16 pr-5">
            <h3 className="font-bold text-4xl w-6/12">Digital Desing <span className="text-orange-600">+</span> Develop</h3>
            <p className="font-medium mt-1">
            Whatever the project, it will always need these 6 specialties to make it a safe and quality project, whether it is a small restaurant, a bar or a large and elaborate office or business software, you will always want your service to be safe and Best of all, this fact is thought about your brand.
            </p>
        </div>
        <Specialities />
    </section>
  )
}
