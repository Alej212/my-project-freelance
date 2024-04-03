
export default function Header() {
  return (
    <nav className="
    fixed top-5 left-1/2 transform -translate-x-1/2 z-10
    flex justify-between items-center
    bg-slate-800 text-white font-semibold p-2 w-11/12 rounded-full">
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
        bg-slate-500 hover:bg-slate-800 hover:border-2 border-orange-400 hover:text-orange-500 h-14 w-2/12 rounded-full">
          <a href={import.meta.env.VITE_LINKEDIN_ROUTE} target='_blank' rel="noopener noreferrer" className="font-semibold">          
            Contact Me
          </a>
        </div>
    </nav>
  )
}
