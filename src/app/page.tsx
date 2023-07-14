import About from "./components/aboutMe"
import Proyects from "./components/proyects"
import { aboutMe,skills,experience } from "./data/data"

export default function Home() {
  return (
    <div>
      <About skills={skills} aboutMe={aboutMe} />
      <Proyects experience={experience} />
    </div>
  )
}
