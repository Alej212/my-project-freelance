
export default function RecentWorksSection() {
  return (
    <div id="works" className="flex flex-col gap-16 p-5 w-10/12 rounded-xl text-center">
        <h3 className="text-4xl font-extrabold uppercase">Recent Works</h3>
        <div className="grid grid-cols-3 gap-10 justify-center">
            <div className="bg-black h-96 rounded-md overflow-hidden shadow-2xl relative">
              <div className="flex items-center justify-center
              absolute top-0 left-0 w-full h-full hover:bg-slate-900 hover:bg-opacity-70">
                <p className="font-bold text-2xl text-white text-opacity-0 hover:text-orange-400">
                  <a href={import.meta.env.VITE_ECOMMERCE_ROUTE} rel="noopener noreferrer" target="_blank">Ecommerce Link</a>
                </p>
              </div>
              <img src="/ecommerce-frontend.webp"  alt="" className="w-full object-cover"/>
            </div>
            <div className="bg-black h-96 rounded-md overflow-hidden shadow-2xl relative">
              <div className="flex items-center justify-center 
              absolute top-0 left-0 w-full h-full hover:bg-slate-900 hover:bg-opacity-70">
                <p className="font-bold text-2xl text-white text-opacity-0 hover:text-orange-400">
                  <a href={import.meta.env.VITE_MOVIEPAGE_ROUTE} rel="noopener noreferrer" target="_blank">Movie Page Link</a>
                </p>
              </div>
              <img src="/movie-page-frontend.webp" alt="" className="w-full object-cover"/>
            </div>
            <div className="bg-black h-96 rounded-md overflow-hidden shadow-2xl relative">
              <div className="flex items-center justify-center 
              absolute top-0 left-0 w-full h-full hover:bg-slate-900 hover:bg-opacity-70">
                <p className="font-bold text-2xl text-white text-opacity-0 hover:text-orange-400">
                  <a href={import.meta.env.VITE_CRYPTOPAGE_ROUTE} rel="noopener noreferrer" target="_blank">Crypto Page Link</a>
                </p>
              </div>
              <img src="/crypto-page.png" alt="" className="w-full object-cover"/>
            </div>
        </div>
    </div>
  )
}
