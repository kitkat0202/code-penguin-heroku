import React, { Component } from 'react'
import './HoverBox.css';

export default class HoverBox extends Component {
    gotoHolochain = () => {
        this.props.handle("Holochain")
    }

    gotoSetUp = () => {
        this.props.handle("SetUp")
    }

    gotoRunning = () => {
        this.props.handle("Running")
    }

    gotoTroubleshoot = () => {
        this.props.handle("Additional")
    }

    render() {
        const { currState } = this.props
        return (
            <div className="fixed-box" style={{ right : "5%", boxShadow: `10px 10px 8px #00000091`}}>
                <h1>Download Instructions</h1>
                <div className="steps-box">
                    <p>Step 1: <span onClick={this.gotoHolochain} style={{ fontWeight: `${currState === "Holochain" ? "bolder" : "normal"}`}}>Holochain</span></p>
                    <hr />
                    <p>Step 2: <span onClick={this.gotoSetUp} style={{ fontWeight: `${currState === "SetUp" ? "bolder" : "normal"}`}}>App Set Up</span></p>
                    <hr />
                    <p>Step 3: <span onClick={this.gotoRunning} style={{ fontWeight: `${currState === "Running" ? "bolder" : "normal"}`}}>Running App</span></p>
                    <hr />
                    <span onClick={this.gotoTroubleshoot} style={{ fontWeight: `${currState === "Additional" ? "bolder" : "normal"}`}}>Additional Resources</span>
                </div>
            </div>
        )
    }
}
