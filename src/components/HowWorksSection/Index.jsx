
export default function HowWorksSection() {
  return (
    <section className="flex flex-col gap-16 p-5 w-10/12 rounded-xl text-center">
        <h3 className="text-4xl font-bold">How Works</h3>
        <div className="grid grid-cols-3 grid-rows-1 gap-10 justify-center">
            <div className="flex flex-col items-center bg-black h-72 rounded-md">
              <h5 className="text-white">Agreement</h5>
              <img src="/Works/agreement.png" alt="" loading="lazy" className="h-20 w-20 object-cover"/>
            </div>
            <div className="flex flex-col items-center bg-black h-72 rounded-md">
              <h5 className="text-white">Working on the solution</h5>
              <img src="/Works/recovery.png" alt="" loading="lazy" className="h-20 w-20 object-cover"/>
            </div>
            <div className="flex flex-col items-center bg-black h-72 rounded-md">
              <h5 className="text-white">Delivery</h5>
              <img src="/Works/delivery.png" alt="" loading="lazy" className="h-20 w-20 object-cover"/>
            </div>
        </div>
    </section>
  )
}
