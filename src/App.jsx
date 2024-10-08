import Landing from "./Landing-Page"
import About from "./AboutMe-Page"
import Education from "./Education-Page"
import Projects from "./Projects"
import Contact from "./Contact"
import { useState, useEffect, useRef } from 'react'

function App() {

  const [scrollIntoViewIndex, setScrollIntoViewIndex] = useState(-1);

  const landingPage = useRef();
  const aboutPage = useRef();
  const projectsPage = useRef();
  const educationPage = useRef();
  const contactPage = useRef();


  const sections = [landingPage, aboutPage, projectsPage, educationPage, contactPage];

  useEffect(() => {

    if (scrollIntoViewIndex >= 0) {
      sections[scrollIntoViewIndex].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }

  }, [scrollIntoViewIndex])

  return (
    <>
      <div ref={landingPage}>
        <Landing key={0} setScrollIntoViewIndex={setScrollIntoViewIndex} />
      </div>
      <div ref={aboutPage}>
        <About key={1} />
      </div>
      <div ref={projectsPage}>
        <Projects key={2} />
      </div>
      <div ref={educationPage}>
        <Education key={3} />
      </div>
      <div ref={contactPage}>
        <Contact key={4} />
      </div>
    </>
  )

}

export default App
