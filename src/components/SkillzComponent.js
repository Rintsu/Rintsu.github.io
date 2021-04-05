import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { A } from "hookrouter";
import '../styles/SkillzStyles.css';

export default class SkillzComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            showText: false
        }
    }

    componentDidMount() {
        this.timeoutId = setTimeout(function () {
            this.setState({ open: true });
        }.bind(this), 300);

        this.timeoutText = setTimeout(function () {
            this.setState({ showText: true });
        }.bind(this), 2000);

        // this.getDivs();
    }

    componentWillUnmount() {
        if(this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        if(this.timeoutText) {
            clearTimeout(this.timeoutText);
        }
    }

    // getDivs = () => {
    //     var circles = document.getElementsByClassName("circle");

    //     var winWidth = window.innerWidth;
    //     var winHeight = window.innerHeight;

    //     for (var i = 0; i < circles.length; i++){
    //         var thisCircle = circles[i];

    //         var randomTop = this.getRandomNumber(0, winHeight);
    //         var randomLeft = this.getRandomNumber(0, winWidth);

    //         thisCircle.style.top = randomTop + "px";
    //         thisCircle.style.top = randomLeft + "px";
    //     }
    // }

    //     getRandomNumber = (min, max) => {
    //     return Math.random() * (max - min) + min;
    // }


    render() {
        return(
            <div className="skillz-page">
                <div className="wrapper4">
                <div className="browse-btn go-home">
                        <A href="/"><HomeIcon fontSize="large" /> </A>
                    </div>
                    <div className="browse-btn go-back">
                        <Tooltip title="Experience" placement="bottom">
                            <div>
                                <A href="/experience">&#171;</A>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="browse-btn go-next">
                        <Tooltip title="About Me" placement="bottom">
                            <div>
                                <A href="/about-me">&#187;</A>
                            </div>
                        </Tooltip>
                    </div>

                    <h1 className="header-skillz underline">Skillz</h1>

                    <div className="skillz-area">
                        <div className="meter-info">
                            <Tooltip title="These skill meters are based purely on my personal feeling, confidence level and time spent on each technology." placement="left">
                                <InfoOutlinedIcon/>
                            </Tooltip>
                        </div>
                        <div className="circle-area">
                            <div className={this.state.open ? 'circle circle-sql open open-sql' : 'circle'}>
                                <span className={this.state.showText ? 'circle-text-show' : 'circle-text'}>SQL</span>
                            </div>
                            <div className={this.state.open ? 'circle circle-visualstudio open open-visualstudio' : 'circle'}>
                                <span className={this.state.showText ? 'circle-text-show' : 'circle-text'}>Visual Studio</span>
                            </div>
                            <div className={this.state.open ? 'circle circle-css open open-css' : 'circle'}>
                             <span className={this.state.showText ? 'circle-text-show' : 'circle-text'}>HTML+CSS</span>
                            </div>
                            <div className={this.state.open ? 'circle circle-csharp open open-csharp' : 'circle'}>
                                <span className={this.state.showText ? 'circle-text-show' : 'circle-text'}>C#</span>
                            </div>
                            <div className={this.state.open ? 'circle circle-angular open open-angular' : 'circle'}>
                                <span className={this.state.showText ? 'circle-text-show' : 'circle-text'}>Angular</span>
                            </div>
                            <div className={this.state.open ? 'circle circle-restAPI open open-restAPI' : 'circle'}>
                                <span className={this.state.showText ? 'circle-text-show' : 'circle-text'}>REST API</span>
                            </div>
                            <div className={this.state.open ? 'circle circle-javascript open open-javascript' : 'circle'}>
                                <span className={this.state.showText ? 'circle-text-show' : 'circle-text'}>Javascript</span>
                            </div>
                        </div>
                        <div className="key-words">
                            <div className="key-words-header">
                                <p>Other key words familiar to me (more or less) :</p>
                            </div>
                            <p>Jira</p>
                            <p>SQL Management Studio</p>
                            <p>TeamCity</p>
                            <p>Octopus Deploy</p>
                            <p>Debugging <span>&#128027;</span></p>
                            <p>Figma</p>
                            <p>Git</p>
                            <p>React</p>
                        </div>
                    </div>

                </div>
            </div>
                
        )
    }
}
