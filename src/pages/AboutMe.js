import Intro from '../components/Intro';
import Contact from '../components/Contact';

function AboutMe() {
  return (
    <div className="Page">
      <div className="row split-column">
        <Intro />
        <Contact />
      </div>
    </div>
  )
}
export default AboutMe;
