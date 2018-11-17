import React, { Component } from 'react'
import TitleBox from "../../components/TitleBox";
import './Landing.css';

export default class SetUp extends Component {
    render() {
        return (
            <TitleBox title="Install Code Penguin" titlesize="h2" footer={false}>
                <ul>
                    <li>Before startting mak sure you have internet connection</li>
                </ul>
                <h3>In git bash terminal:</h3>
                <ol>
                    <li>Locate where you want your app folder to be</li>
                    <li>Get the repo: <span className="mono-text">$ git clone https://github.com/cefimenda/code-penguin.git</span></li>
                    <li>Enter app folder and install the packages:
                        <ul>
                            <li><span className="mono-text">$ cd code-penguin</span> then</li>
                            <li><span className="mono-text">$ yarn </span> or <span className="mono-text">$ npm install</span></li>
                        </ul>
                    </li>
                    <li>Install react packages (from app main folder enter in to client folder):
                        <ul>
                            <li><span className="mono-text">$ cd client</span> then</li>
                            <li><span className="mono-text">$ yarn </span> or <span className="mono-text">$ npm install</span></li>
                        </ul>
                    </li>
                    <li>Running locally (from client folder go to penguin folder):
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
