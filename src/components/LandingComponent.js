import React from 'react';
import { A } from "hookrouter";
// import * as THREE from 'three';

import '../styles/LandingStyles.css';

export default class LandingComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    // componentDidMount() {
        //starry sky, but doesn't work with grid items
        //should be positioned with position:absolute

    //     var scene = new THREE.Scene();
    //     var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000 );
    //     camera.position.z = 10;
                    
    //     var renderer = new THREE.WebGLRenderer(); 
    //     renderer.setSize(window.innerWidth, window.innerHeight); 
    //     this.mount.appendChild(renderer.domElement);
        
    //     var stars = [];
        
    //     for (let i = 0; i < 200; i++) {
    //       let geometry = new THREE.SphereGeometry(0.01, 50, 50);
    //       let material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
    //       let star = new THREE.Mesh(geometry, material);
    //       star.position.set(getRandom(), getRandom(), getRandom());
          
    //       stars.push(star);
    //     }
        
    //     for (let j = 0; j < stars.length; j++) {
    //       scene.add(stars[j]);
    //     }
        
    //     var lightness = 0;
    //     var rotSpeed = 0.001;
        
    //     function animate() {
    //         for (let k = 0; k < stars.length; k++) {
    //             let star = stars[k];
    //             lightness > 100 ? lightness = 0 : lightness++;
    //             star.material.color = new THREE.Color("hsl(0, 0%, " + lightness + "%)");
    //         }
            
    //         let x = camera.position.x;
    //         let z = camera.position.z;
    //         camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
    //         camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
    //         camera.lookAt(scene.position);
            
    //         renderer.render(scene, camera);
    //         requestAnimationFrame(animate);
            
    //     }
    //     animate();
        
    //     function getRandom() {
    //       var num = Math.floor(Math.random()*10) + 1;
    //       num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
    //       return num;
    //     }
    // }


    render() {
        return (
            <div className="landing-page">
                <div className="wrapper">
                    <h1 className="lastName">KUUKSO</h1>
                    <h2 className="firstName">Riina</h2>
                    <svg width="100%" height="100%" viewBox="0 0 400 400" className="triangle">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#252123" stopOpacity="1" />
                                <stop offset="100%" stopColor="#151314" stopOpacity="1"  />
                            </linearGradient>
                        </defs>
                        <polygon points="0,0 400,0 200,300" stroke="#C061E7" strokeWidth="4" fill="url(#gradient)"/>
                    </svg> 
                    <div className="button-grid">
                        <button id="otherButton">
                            <A href="/about-me">About me</A>
                        </button>
                        <button id="experienceButton">
                            <A href="/experience">Experience</A>
                        </button>
                        <button id="skillzButton">
                            <A href="/skillz">Skillz</A>
                        </button>
                        </div>

                </div>  
                {/* <div className="stars" ref={ ref => (this.mount = ref) }></div> */}
            </div>

        )
    }
}