import React, { Component } from 'react'
import TitleBox from "../../components/TitleBox";
import './Landing.css';

export default class SetUp extends Component {
    render() {
        return (
            <TitleBox title="Additional Resources" titlesize="h2" footer={false}>
                <ul>
                <li>Holochain site: <a href="https://holochain.org/" target="_blank" rel="noopener noreferrer">https://holochain.org/</a></li>
                    <li>Holochain developer site: <a href="https://developer.holochain.org/" target="_blank" rel="noopener noreferrer">https://developer.holochain.org/</a></li>
                    <li>Holochain github: <a href="https://github.com/holochain" target="_blank" rel="noopener noreferrer">https://github.com/holochain</a></li>
                    <li>Other apps using Holochain: <a href="https://github.com/holochain/apps" target="_blank" rel="noopener noreferrer">https://github.com/holochain/apps</a></li>
                    <hr />
                    <h3>Troubleshooting Error</h3>
                    <li>If you are getting the error <span className="mono-text">"A required privilege is not held by the client"</span> on windows: <a href="https://appuals.com/a-required-privilege-is-not-held-by-the-client-0x80070522/" target="_blank" rel="noopener noreferrer">https://appuals.com/a-required-privilege-is-not-held-by-the-client-0x80070522/</a></li>
                </ul>
            </TitleBox>
        )
    }
}
