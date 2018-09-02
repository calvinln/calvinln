import React, { Component } from 'react';
import img_2048 from './images/2048.png';
import img_memgame from './images/memgame.png';
import img_pixelart from './images/pixelart.png';
import './App.css';

function Project(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="project">
        <div className="project-image">
          <a href={props.demo_link}>
            <img src={props.img} alt="" />
          </a>
        </div>
        <div className="project-text">
          <h3 className="project-title">
            <a href={props.demo_link}>{props.name}</a>
          </h3>
          <p>{props.description}</p>
          <div className="project-links">
            <a href={props.demo_link}>Demo</a>
            <span className="separator">/</span>
            <a href={props.code_link}>Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    let projects = [
      {
        name: '2048',
        img: img_2048,
        description:
          'A replica of the 2048 game built from scratch for coding practice and fun.',
        demo_link: 'https://2048.calvinln.com/',
        code_link: 'https://github.com/calvinln/2048'
      },
      {
        name: 'Memory Game',
        img: img_memgame,
        description:
          'Find all the matching cards on the board with minimal moves.',
        demo_link: 'https://memgame.calvinln.com/',
        code_link: 'https://github.com/calvinln/memory-game'
      },
      {
        name: 'Pixel Art Maker',
        img: img_pixelart,
        description: 'Draw colorful pixel art on a resizable canvas.',
        demo_link: 'https://pixelart.calvinln.com/',
        code_link: 'https://github.com/calvinln/pixel-art-maker'
      }
    ];
    let projectList = projects.map(project => (
      <Project
        name={project.name}
        img={project.img}
        description={project.description}
        demo_link={project.demo_link}
        code_link={project.code_link}
      />
    ));
    return (
      <div className="container">
        <div className="row">
          <div className="col-6" id="name">
            <a href="https://calvinln.com" className="letter-space">
              Calvin Nguyen
            </a>
          </div>
        </div>
        <div id="project-page">
          <div className="row text-center">
            <h1 className="col-12 info">
              Hi, I’m Calvin, a software developer.
            </h1>
          </div>
          <div className="row project-section">
            {projectList}
            {/* <!-- <div className="more-about-me letter-space">
          <a href="" className="col-12">More about me</a>
        </div> --> */}
          </div>
        </div>

        <div className="row" id="footer">
          <div className="col-12 text-center letter-space">
            <a href="mailto:me@calvinln.com">Email</a>
            <span className="separator">/</span>
            <a href="https://drive.google.com/file/d/1_QhsVHQNqXjp_I3mPGtHsDvz2liCLfXy/view?usp=sharing">
              Resume
            </a>
            <span className="separator">/</span>
            <a href="https://www.linkedin.com/in/calvinln/">Linkedin</a>
            <span className="separator">/</span>
            <a href="https://github.com/calvinln">Github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
