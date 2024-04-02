import { Icon } from '@iconify/react';

export default function AboutMeSection() {
  return (
    <section id='aboutme' className="flex flex-col gap-6 items-center">
        <h5 className="text-3xl font-bold">about me</h5>
        <p className="w-6/12 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti vel neque ipsa aperiam repudiandae, laborum ipsum temporibus tempore deserunt officiis eum aliquam exercitationem maiores voluptatum culpa atque tempora saepe.
        </p>
        <div className="flex gap-8">
            <div className="flex justify-center items-center h-16 w-16 bg-slate-950 rounded-full">
              <a href={import.meta.env.VITE_LINKEDIN_ROUTE} target='_blank' rel="noopener noreferrer">
                <Icon icon='uil:linkedin' className='text-slate-300 hover:text-slate-50 h-10 w-10'></Icon>
              </a>
            </div>
            <div className="flex justify-center items-center h-16 w-16 bg-slate-950 rounded-full">
              <a href={import.meta.env.VITE_GITHUB_ROUTE} target='_blank' rel="noopener noreferrer">
                <Icon icon='bi:github' className='text-slate-300 hover:text-slate-50 h-10 w-10'></Icon>
              </a>
            </div>
            {/* <div className="flex justify-center items-center h-16 w-16 bg-black rounded-full">
              <Icon icon='uil:linkedin' className='text-white h-10 w-10'></Icon>
            </div> */}
        </div>
    </section>
  )
}
