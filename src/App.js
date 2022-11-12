import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={"Sade Spencer"}
          message={
            "Sade Spencer received her Ph.D in Neurosceince from the University of Texas Southwestern Medical Center in Dallas and is currently an assistant professor at the University of Minnesota. She has many fields of interest including behavioral pharmacology, substance use disorders, and neuroplasticity. Her current research focuses on understanding psychostimulants and cannabinoids, aiming to reveal new therapeutic targets for treating addiction and preventing relapse. When she is not in the lab she also enjoys running and cooking."
          }
          link={
            "https://drupalish.ahc.umn.edu/bios/show-image.php?i=Sade_Spencer.jpg"
          }
          imgSize={about.imageSize}
          resume={
            "https://med.umn.edu/bio/department-of-pharmacology/sade-spencer"
          }
          id={"Sade_Spencer"}
        />
      )}
      {about.show && (
        <AboutMe
          heading={"Ida Momennejad"}
          message={
            "Ida is a principal researcher in reinforcement learning at Microsoft Research NYC. She got her Ph.D from Bernstein Center for Computational Neuroscience in Berlin, Germany. She also got her M.Sc. Utrecht University in the Netherlands. Her main focus with neuroscience is seeing how the brain works when it comes to memory and control in goal-oriented behaviors. She also studies how the world can shape decision making, learning, and planning.  "
          }
          link={
            "https://static.wixstatic.com/media/a6d7e4_cf4dd65c52504eca921730a5a657e78a~mv2.jpg/v1/fill/w_242,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ida_edited.jpg"
          }
          imgSize={about.imageSize}
          resume={"https://www.momen-nejad.org/"}
          id={"Ida_Momennejad"}
        />
      )}
      {about.show && (
        <AboutMe
          heading={"Tufikameni Brima"}
          message={
            "Tufikameni Brima received her Ph.D. in Developmental epilepsy/Human Biomechanics from Charles University in Prague and is currently a Research Assistant Professor at the University of Rochester in New York. Her research explores the use of EEG to investigate neural correlates, specifically for rare genetic diseases and those with neurodevelopmental disorders (such as Batten disease and Rett syndrome). Her goal is to understand how neurodevelopmental disorders impact sensorimotor function, cognitive function, and perceptual function in a noninvasive and unbiased manner, ultimately aiding in tracking of disease progression and understanding the effect of therapeutic interventions. "
          }
          link={
            "https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/25718.jpg"
          }
          imgSize={about.imageSize}
          resume={
            "https://www.urmc.rochester.edu/people/29762972-tufikameni-brima"
          }
          id={"Tufikameni_Brima"}
        />
      )}
      {about.show && (
        <AboutMe
          heading={"Gina Turrigiano"}
          message={
            "Gina Turrigiano received her Ph.D from the Unviersity of California, San Diego in 1990 and is currently a Joseph Levitan Professor at Brandeis University teaching a variety of courses from Principles of Neuroscience to Practices of Research. She is known for her research in homeostasis and neural circuit plasticity, where her team discovered synaptic scaling, the mechanism that maintains the constant firing rates of action potentials. Some of her current research includes studying how homeostatic mechanisms react and interact with typical synaptic plasticity such as LTP and LTD."
          }
          link={
            "https://www.brandeis.edu/biology/faculty/faculty-page-images/turrigiano-400.jpg"
          }
          imgSize={about.imageSize}
          resume={
            "https://www.brandeis.edu/biology/faculty/turrigiano-gina.html"
          }
          id={"Gina_Turrigiano"}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path='/' exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
