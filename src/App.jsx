import Landing from "./Landing-Page"
import About from "./AboutMe-Page"
import Education from "./Education-Page"
import Projects from "./Projects"
import Contact from "./Contact"
import { useState, useEffect, useRef } from 'react'
import Header from "./Header"
import { BiUpArrowAlt } from "react-icons/bi";

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

  function scrollToTop(){
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
  }

  return (
    <>
      <Header setScrollIntoViewIndex={setScrollIntoViewIndex}/>
      <div ref={landingPage}>
        <Landing setScrollIntoViewIndex={setScrollIntoViewIndex} />
      </div>
      <div ref={aboutPage}>
        <About/>
      </div>
      <div ref={projectsPage}>
        <Projects/>
      </div>
      <div ref={educationPage}>
        <Education/>
      </div>
      <div ref={contactPage}>
        <Contact/>
      </div>
      <span onClick={scrollToTop} className="scrollToTop"><BiUpArrowAlt /></span>
    </>
  )

}

export default App
