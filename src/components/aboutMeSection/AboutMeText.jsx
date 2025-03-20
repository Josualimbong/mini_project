import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, doloribus molestiae alias, hic qui eius architecto voluptatem soluta, fugiat eos sit minus harum saepe modi aperiam eveniet optio expedita temporibus.</p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link spy={true} smooth={true} duration={500} offset={-120} to="projects" className="cursor-pointer text-white hover:text-cyan transition-all duration-500">
          My Projects
        </Link>
      </button>
    </div>
  )
}

export default AboutMeText
