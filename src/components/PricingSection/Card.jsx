export default function Card({title, resume, titlesTable, cost}) {
  return (
    <div className="flex flex-col gap-5 bg-slate-50 w-96 rounded-md shadow-2xl pt-10 p-5">
      <h5 className="font-bold text-slate-900 text-center text-2xl uppercase">{title}</h5>
      <p>
        {resume}
      </p>
      <table>
        <thead className="bg-orange-500 text-orange-950 font-semibold text-center">
          <tr>
            <td>Include</td>
          </tr>
        </thead>
        <tbody className="bg-slate-200 text-slate-950 font-medium text-center">
          {titlesTable.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <p className="bg-orange-500 text-orange-950 pl-7 pr-7 pt-2 pb-2 rounded-md text-center font-bold hover:shadow-sm hover:shadow-slate-700">
          <a href="" className="">Cost {cost} $</a>
        </p>
      </div>
    </div>
  )
}
