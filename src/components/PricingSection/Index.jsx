import Card from "./Card"
import Personalized from "./Personalized"
import data from './Card.json'
import data2 from './Personalized.json'

export default function PricingSection() {
  return (
    <div id="pricing" className="flex flex-col items-center w-full">
      <h3 className="text-3xl font-semibold">Pricing</h3>
      <div className="flex flex-wrap justify-center gap-10 pt-16">
        {data.map((item, index) => (
          <Card key={index} title={item.title} resume={item.resume} titlesTable={item.includes} cost={item.cost}/>
        ))}
        {data2.map((item, index) => (
          <Personalized key={index} title={item.title} resume={item.resume} titles={item.titles} />
        ))}
      </div>
    </div>
  )
}
