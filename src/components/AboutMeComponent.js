import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';
import Modal from './ModalComponent.js'
import { A } from "hookrouter";
import '../styles/AboutMeStyles.css';

import rollerskating from '../assets/swoosh.png';
import brekky from '../assets/brekky.png';
import musicClip from '../assets/clip.mp3';

export default class AboutMeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRoller: false,
            showBrekky: false
        };
    }

    showRollerModal = () => {
        this.setState({ showRoller: true })
    }

    showBrekkyModal = () => {
        this.setState({ showBrekky: true })
    }

    hideModal = () => {
        this.setState({ showRoller: false, showBrekky: false })
    }

    render() {
        return (
            <div className="about-page">
                <div className="wrapper3">
                    <div className="browse-btn go-home">
                        <A href="/"><HomeIcon fontSize="large" /> </A>
                    </div>
                    <div className="browse-btn go-back">
                        <Tooltip title="Skillz" placement="bottom">
                            <div>
                                <A href="/skillz">&#171;</A>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="browse-btn go-next">
                        <Tooltip title="Experience" placement="bottom">
                            <div>
                                <A href="/experience">&#187;</A>
                            </div>
                        </Tooltip>
                    </div>

                    <h1 className="header-about-me underline">About me</h1>
                    <div className="rather-be-grid">
                        <p className="bio">Junior developer looking for new waves to ride on.<br></br> 
                        One who <span className="highlight">understands</span> the importance of <span className="highlight">good communication</span> and agile ways of work. <br></br> 
                        One keen on the little things but <span className="highlight">aiming for the big picture</span>.<br></br> 
                        One wanting to <span className="highlight">join the creation</span> of something <span className="highlight">bold and beautiful.</span></p>
                        <p className="extra">But if you really want to know</p>
                        <div className="rather-be-1">
                            <Modal showRoller={this.state.showRoller} handleClose={this.hideModal}>
                                <img src={rollerskating} id="roller-pic" alt="Woman carving concrete waves with quad rollerskates"/>
                            </Modal>
                            <button 
                                type="button"
                                id="rollerskating"
                                onClick={this.showRollerModal}>
                                    I'd rather go . . .
                            </button>
                        </div>
                        <div className="rather-be-2">
                            <Modal showBrekky={this.state.showBrekky} handleClose={this.hideModal}>
                                <img src={brekky} id="breaky-pic" alt="Woman surprised at the back of a blue van, making breakfast"/>
                            </Modal>
                            <button 
                                type="button"
                                id="breakfast"
                                onClick={this.showBrekkyModal}>
                                    And eat my breakfast in . . .
                            </button>
                        </div>

                        <div className="rather-be-3">
                            <p className="best-song-ever">Listening this on repeat:</p>
                            <audio
                                autoPlay={false}
                                controls={true} >
                                    <source type="audio/mp3" src={musicClip} />
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
