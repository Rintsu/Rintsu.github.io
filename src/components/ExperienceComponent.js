import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { A } from "hookrouter";
import '../styles/ExperienceStyles.css';
import HomeIcon from '@material-ui/icons/Home';

export default class ExperienceComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="experience-page">
        <div className="wrapper2">
          <div className="browse-btn go-home">
            <A href="/"><HomeIcon fontSize="large"/> </A>
          </div>
          <div className="browse-btn go-back">
            <Tooltip title="About me" placement="bottom">
              <div>
                <A href="/about-me">&#171;</A>
              </div>
            </Tooltip>
          </div>
          <div className="browse-btn go-next">
          <Tooltip title="Skillz" placement="bottom">
            <div>
              <A href="/skillz">&#187;</A>
            </div>
          </Tooltip>
          </div>

          <h1 className="header-experience underline">Experience</h1>
          <div className="work-placement">
            <div className="work-1">
              <h2>Junior fullstack developer</h2>
              <h4>Mtech Digital Solutions <br></br> <span className="smaller-text">11/2019 - Present</span></h4>
            </div>
            <div className="work-2">
              <h2>Front-end trainee</h2>
              <h4>Nordic eCommerce Group <br></br> <span className="smaller-text">04/2019 - 06/2019</span></h4>
            </div>
            <div className="work-1-description">
                <ul>
                  <li><span className="highlight">Successfully maintaining</span> dozens of different web applications used by corporate and individual clients in agricultural sector</li>
                  <li>Working extensively from front-end's <span className="highlight">Javascript</span> to back-end's <span className="highlight">C#</span>, <span className="highlight">T-SQL</span> and <span className="highlight">REST API's</span></li>
                  <li>Adding new features, e.g. new search parameters and input fields</li>
                  <li>Fetching data with <span className="highlight">SQL procedures</span></li>
                  <li>Tirelessly <span className="highlight">fixing</span> minor and major <span className="highlight">bugs</span></li>
                  <li><span className="highlight">Managing</span> client support box</li>
                </ul>
            </div>
            <div className="work-2-description">
                <ul>
                  <li>Planning and <span className="highlight">wireframing</span> new landing page for ERP system</li>
                  <li>Implementing <span className="highlight">responsive websites</span> with Wordpress and ePages</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

    );
    }
}
