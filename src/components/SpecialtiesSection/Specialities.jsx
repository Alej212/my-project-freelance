
export default function Specialities() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 justify-center gap-10 pl-32 pr-32 w-9/12 text-white font-medium">
        <div className="
        flex flex-col justify-center items-center gap-5
        h-56 w-56 bg-slate-900 rounded-md">
          <img src="/Specialities/web.png" alt="" loading="lazy" className="h-24 w-24 object-cover"/>
          <p>Web Development</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5
        h-56 w-56 bg-slate-900 rounded-md">
          <img src="/Specialities/mobile.png" alt="" loading="lazy" className="h-24 w-24 object-cover"/>
          <p>Mobile Development</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5
        h-56 w-56 bg-slate-900 rounded-md">
          <img src="/Specialities/uxdesign.png" alt="" loading="lazy" className="h-24 w-24 object-cover"/>
          <p>UI UX Design</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5
        h-56 w-56 bg-slate-900 rounded-md">
          <img src="/Specialities/server.png" alt="" loading="lazy" className="h-24 w-24 object-cover"/>
          <p>Backend Development</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5
        h-56 w-56 bg-slate-900 rounded-md">
          <img src="/Specialities/DB.png" alt="" loading="lazy" className="h-24 w-24 object-cover"/>
          <p>Data Bases</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5
        h-56 w-56 bg-slate-900 rounded-md">
          <img src="/Specialities/security.png" alt="" loading="lazy" className="h-24 w-24 object-cover"/>
          <p>Security</p>
        </div>
    </div>
  )
}
