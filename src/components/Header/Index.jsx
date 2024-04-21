import { Icon } from "@iconify/react/dist/iconify.js"

export default function Header() {
  return (
    <nav className="
    fixed top-5 left-1/2 transform -translate-x-1/2 z-30
    flex justify-between items-center
    bg-slate-900 text-white font-semibold p-2 w-11/12 rounded-full">
        <div className="
        flex items-center justify-center
        h-14 w-2/12 rounded-full"
        >
          <img src="/logoblank.svg" alt="" className="h-full w-full"/>
        </div>
        <ul className="
        flex justify-center items-center gap-12
        h-14 w-6/12"
        >
          <li className="hover:text-orange-500 cursor-default"><a href="#works">My works</a></li>
          <li className="hover:text-orange-500 cursor-default"><a href="#aboutme">About me</a></li>
          <li className="hover:text-orange-500 cursor-default"><a href="#specialities">Specilities</a></li>
          <li className="hover:text-orange-500 cursor-default"><a href="#pricing">Pricing</a></li>
        </ul>
        <div className="
        flex items-center justify-center
        hover:bg-orange-600 bg-slate-800 text-orange-500 border-2 border-orange-600 hover:text-slate-950 h-14 w-2/12 rounded-full">
          <a href={import.meta.env.VITE_LINKEDIN_ROUTE} target='_blank' rel="noopener noreferrer" className="font-bold flex gap-3 items-center">          
            Contact Me
            <Icon icon='ic:round-call' fontSize='1.5rem' style={{}}></Icon>
          </a>
        </div>
    </nav>
  )
}
