import React, { Component } from 'react'
import TitleBox from "../../components/TitleBox";
import HoloLogo from "../../images/Holochain_logo.png";
import './Landing.css';

export default class Download extends Component {
    render() {
        return (
        <React.Fragment>
            <a href="https://developer.holochain.org/" target="_blank" rel="noopener noreferrer"><img className="holo-logo" src={HoloLogo} alt="Holochain Logo" /></a>
            <TitleBox title="Install Holochain" titlesize="h2" footer={false}>
                <h4><u>Installing with Go</u></h4>
                <ol>
                    <li>Install GO, by downloading the installer for your operating system from below. Note that holochain-proto will only work with GO versions between 1.8 and 1.10. (1.11 will NOT work).</li>
                    <p><a href="https://dl.google.com/go/go1.10.4.windows-amd64.msi">Windows</a></p>
                    <p><a href="https://dl.google.com/go/go1.10.4.darwin-amd64.pkg">MAC</a></p>
                    <p><a href="https://dl.google.com/go/go1.10.4.linux-amd64.tar.gz">Linux</a></p>
                    <li>Add a new environment variable called GOPATH which points to the directory on your computer where Go libraries get installed. How to do this depends on your computer and operating system. Instructions for the most common platforms are below.</li>
                    <TitleBox title="For Mac and Linux" titlesize="h4" footer={false}>
                        <p>If you DO NOT have a shell profile file, follow ALL these instructions in your terminal. If you know about shell profiles, and have one, just do steps 4 and 5</p>
                        <ol>
                            <li><span className="mono-text">$ cd ~</span></li>
                            <li><span className="mono-text">$ touch .bash_profile</span></li>
                            <li><span className="mono-text">$ open .bash_profile</span></li>
                            <li>in your editor, add the following to .bash_profile, and save it</li>
                            <p className="mono-text">export GOPATH="$HOME/go" <br />export PATH="$GOPATH/bin:$PATH" </p>
                            <li><span className="mono-text">$ source .bash_profile</span></li>
                        </ol>
                    </TitleBox>
                    <TitleBox title="For Windows" titlesize="h4" footer={false}>
                        <p>First you'll need to install some necessary programs if you don't already have them.</p>
                        <ul>
                            <li><a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Install Windows git</a>. Be sure to select the appropriate options so that git is accessible from the Windows command line.  N.B.: you must make sure to auto line-feed conversion set correctly, or when you check out dna files from repos, it may change the dna by changing the line endings which will change the hash of the application.</li>
                            <li><a href="http://gnuwin32.sourceforge.net/packages/make.htm#download" target="_blank" rel="noopener noreferrer">Install GnuWin32 make</a>.</li>
                        </ul>
                        <p>Next, in your Control Panel, select <i>System>Advanced system settings>Environment Variables</i>... and under <i>System Variables</i> do the following:</p>
                        <ol>
                            <li>Add a new entry with the name <span className="terminal-box">GOPATH</span> and the value <span className="terminal-box">%USERPROFILE%\go</span> (Or your Go workspace folder).</li>
                            <li>Double-click Path, and in the window that pops up add the following entries:
                                <ul>
                                    <li><span className="terminal-box">%GOPATH%\bin</span></li>
                                    <li><span className="terminal-box">C:\Go\bin</span> (Or wherever you installed Go to + <span className="terminal-box">\bin</span>).</li>
                                    <li><span className="terminal-box">C:\Program Files (x86)\GnuWin32\bin</span> (Or wherever you installed GnuWin32 make to + <span className="terminal-box">\bin</span>).</li>
                                </ul>
                            </li>
                        </ol>
                    </TitleBox>
                    <li>Run the following command in a terminal to download the library and command lines tools</li>
                    <p className="mono-text">$ go get -d -v <a href="https://github.com/holochain/holochain-proto" target="_blank" rel="noopener noreferrer">github.com/holochain/holochain-proto</a></p>
                    <li>Lastly, change directories into the new holochain-proto directory, and run maketo build the library and command lines tools for your computer.</li>
                    <p><strong>MAC and LINUX:</strong> <span className="mono-text">$ cd $GOPATH/src/<a href="https://github.com/holochain/holochain-proto" target="_blank" rel="noopener noreferrer">github.com/holochain/holochain-proto</a></span></p>
                    <p><strong>WINDOWS:</strong> <span className="mono-text">$ cd %GOPATH%/src/<a href="https://github.com/holochain/holochain-proto" target="_blank" rel="noopener noreferrer">github.com/holochain/holochain-proto</a></span></p>
                    <p>and then (on both)</p>
                    <p className="mono-text">$ make</p>
                    <p>And thats it!</p>
                    <p>To see an initial confirmation that it works, you can try running one of the commands to check your version. You should see a result something like the following. </p>
                    <p className="mono-text">$ hcadmin -v <br />hcadmin version 0.0.x (holochain y)</p>
                    <a href="https://developer.holochain.org/Command_Line_Tools" target="_blank" rel="noopener noreferrer">With Holochain installed, the next step is understanding the command line tools...</a>
                </ol>
                <div className="foot-note">
                    <hr />
                    <p>* Info provided by <a href="https://developer.holochain.org/Install_Holochain" target="_blank" rel="noopener noreferrer">Holochain site</a></p>
                </div>
            </TitleBox>
        </React.Fragment>
        )
    }
}
