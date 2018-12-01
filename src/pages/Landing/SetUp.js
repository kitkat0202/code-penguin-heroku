import React, { Component } from 'react'
import TitleBox from "../../components/TitleBox";
import './Landing.css';

export default class SetUp extends Component {
    render() {
        return (
            <TitleBox title="Install Code Penguin" titlesize="h2" footer={false}>
                
                <h3>Before starting, make sure you have Holochain installed and initialized, and are connected to the internet.</h3>
                <h3>In GitBash or Terminal:</h3>
                <ol>
                    <li>Locate where you want your app folder to be</li>
                    <li>Get the repo: <span className="mono-text">$ git clone https://github.com/cefimenda/code-penguin.git</span></li>
                    <li>Enter the app's root folder and install the following packages:
                        <ul>
                            <li><span className="mono-text">$ cd code-penguin</span> then</li>
                            <li><span className="mono-text">$ yarn </span> or <span className="mono-text">$ npm install</span></li>
                        </ul>
                    </li>
                    <li>Install react packages (enter in to client folder from the app's main folder ):
                        <ul>
                            <li><span className="mono-text">$ cd client</span> then</li>
                            <li><span className="mono-text">$ yarn </span> or <span className="mono-text">$ npm install</span></li>
                        </ul>
                    </li>
                    <li>Build the holochain directory on your local machine.
                        <ul>
                            <li><span className="mono-text">$ cd ../penguin</span> then</li>
                            <li><span className="mono-text">$ hcadmin join . code-penguin</span></li>
                        </ul>
                    </li>
                    <li>Then back to the home directory, and run the start script!
                        <ul>
                            <li><span className="mono-text">$ cd ..</span> then</li>
                            <li><span className="mono-text">$ yarn start</span></li>
                        </ul>
                    </li>
                </ol>
            </TitleBox>
        )
    }
}
