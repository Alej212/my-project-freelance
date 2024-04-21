export default function Video() {
  return (
    <div className="relative">
        <div className="bg-slate-900 bg-opacity-45 absolute top-0 w-full h-full z-10"></div>
        <video src="/video.mp4" autoPlay loop muted/>
    </div>
  )
}
