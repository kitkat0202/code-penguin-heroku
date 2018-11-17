import React, { Component } from 'react'
import TitleBox from "../../components/TitleBox";
import './Landing.css';

export default class SetUp extends Component {
    render() {
        return (
            <TitleBox title="Install Code Penguin" titlesize="h2" footer={false}>
                <ul>
                    <li>Before starting, make sure you have an internet connection.</li>
                </ul>
                <h3>In the git bash terminal:</h3>
                <ol>
                    <li>Locate where you want your app folder to be</li>
                    <li>Get the repo: <span className="mono-text">$ git clone https://github.com/cefimenda/code-penguin.git</span></li>
                    <li>Enter app folder and install the following packages:
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
                    <li>Running locally (go to penguin folder from the client folder):
                        <ul>
                            <li><span className="mono-text">$ cd ../penguin</span> then</li>
                            <li><span className="mono-text">$ yarn start</span></li>
                        </ul>
                    </li>
                </ol>
            </TitleBox>
        )
    }
}
