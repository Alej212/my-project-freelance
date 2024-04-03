
export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-10 bg-slate-950 mt-10 p-16 text-orange-500">
      <ul className="flex gap-10">
        <li><a href="#">Cookies policy</a></li>
        <li><a href="#">Security policy</a></li>
      </ul>
      <img src="/logoblank.svg" alt="" className="h-20 w-20"/>
      <ul className="flex gap-10">
        <li><a href="#">Future works</a></li>
        <li><a href="#">My resume</a></li>
      </ul>
    </div>
  )
}
