import React, { Component } from 'react'
import TitleBox from "../../components/TitleBox";
import imgNewTask from "../../images/newtask.png"
import imgMarket from "../../images/marketplace.png"
import imgMarket2 from "../../images/marketplace2.png"

import imgProf from "../../images/profpage.png"
import imgTask from "../../images/taskdetail.png"
import imgTask2 from "../../images/taskdetail2.png"
import './Landing.css';

export default class Running extends Component {
    gotoSetUp = () => {
        this.props.handle("SetUp")
    }

    render() {
        return (
        <React.Fragment>
            <p>To run app locally look at the <span className="on-click" onClick={this.gotoSetUp}>set up steps</span></p>
            <TitleBox title="Creating Task" titlesize="h3" footer={false}>
                <p>Tasks can be problems you need solved or mini projects you dont have time to finish and need alittle help from the community. Tasks can easlity be created by clicking the <i style={{color: "#00b5ad"}}>New Task</i> button on the <u>Marketplace</u>, as long as you have the coin to pay for it. </p>
                <img src={imgNewTask} alt="form" />
            </TitleBox>
            <TitleBox title="Reading Task" titlesize="h3" footer={false}>
                <p>You can browse all the created taske at the <u>Marketplace</u>. You can also filter the tasks by:</p>
                <ul className="title-list">
                    <li>Creator</li>
                    <li>Date</li>
                    <li>Tag</li>
                    <li>Pebble Count</li>
                </ul>
                <p>And sort by:</p>
                <ul className="title-list">
                    <li>Date</li>
                    <li>Title</li>
                    <li>Pebble Count</li>
                </ul>
                <p>Click on the card to bring the card to front view. Click the card again to flip the card and preview the task details. To look at the task in depth you can click the <i style={{color: "#00b5ad"}}>View</i> button on the card, whick you bring you to the task detail page. This page will show you all the details on the card along with submitted solutions and comments others have made on the card.</p>
                <img src={imgMarket} alt="marketplace" />
                <img src={imgMarket2} alt="marketplace" />
            </TitleBox>
            <TitleBox title="Solving Task" titlesize="h3" footer={true}>
                <p>A <a href="https://github.com/">GitHub</a> account is needed to submit a sloultion only a github repo can be submitted as a solution.</p>
                <p>To solve a task you need to go the the task detail page toggle to the solution side to the task page and add text and github link. If the creator has already chosen a solution then no new solutions can be submitted. However you can still add comments to the page.</p>
                <img src={imgTask} alt="task page" />
                <img src={imgTask2} alt="task page" />
            </TitleBox>
            <TitleBox title="Ways to earn more pebbles" titlesize="h3" footer={false}>
                <h4>There are 2 ways to earn pebbles: </h4>
                <ol>
                    <li>You can earn pebbles by solving tasks. The value of each task can be found at the top-left of each task card or top-right of the task detailed page</li>
                    <li>Another way to earn pebbles is the login daily and collect your daily pebbles</li>
                </ol>
                <img src={imgProf} alt="profile page" />
            </TitleBox>
        </React.Fragment>
        )
    }
}
