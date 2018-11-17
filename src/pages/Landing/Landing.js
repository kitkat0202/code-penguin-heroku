import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Main from "./Main";
import Holochain from "./Holochain";
import SetUp from "./SetUp";
import Running from "./Running";
import Additional from "./Additional";
import HoverBox from "../../components/HoverBox/HoverBox";
import './Landing.css';

export default class Landing extends Component {
    state = {
        page: "Additional"
    }

    handleState = state => {
        if (this.state.page !== "Main") {
            this.refs.scroll.scrollIntoView()
        }
        this.setState({ page: state })
    }

    render() {
        const focus = "right"
        return (
        <React.Fragment>
            <Navbar landing="true" handle={this.handleState} />
            <Hero heroimg="https://images.unsplash.com/photo-1536242918817-db5e93c7a0e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b334adee965d8d086cb0ad8bc445ce4&auto=format&fit=crop&w=1950&q=80" />
            <HoverBox handle={this.handleState} currState={this.state.page}/> 
            <Container padding={focus} bgcolor="rgb(32,32,32)">
                <div ref="scroll"></div>
                {this.state.page === "Holochain" ? <Holochain /> : this.state.page === "SetUp" ? <SetUp /> : this.state.page === "Running" ? <Running handle={this.handleState} /> : this.state.page === "Additional" ? <Additional /> : <Main />}
            </Container>
            <Container bgcolor="#111">
                <p>&copy; 2018 By Coding Penguins</p>
            </Container>
        </React.Fragment>
        );
    }
}
