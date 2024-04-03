export default function Personalized({title, resume, titles}) {
  return (
    <div className="flex flex-col gap-5 p-5 w-96 bg-slate-900 text-white rounded-md shadow-2xl pt-10">
      <h5 className="font-bold text-center text-2xl text-orange-500 uppercase">{title}</h5>
      <p>{resume}</p>
      <hr />
      <table>
        <thead className="bg-orange-500 text-orange-950 font-bold text-center">
          <tr>
            <td>Include</td>
          </tr>
        </thead>
        <tbody className="bg-slate-300 text-slate-950 font-medium text-center">
          {titles.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <p className="bg-orange-500 text-orange-950 pl-7 pr-7 pt-2 pb-2 rounded-md text-xl text-center font-bold hover:shadow-sm hover:shadow-orange-700">
          <a href={import.meta.env.VITE_LINKEDIN_ROUTE} target='_blank' rel="noopener noreferrer">let's talk</a>
        </p>
      </div>
    </div>
  )
}
