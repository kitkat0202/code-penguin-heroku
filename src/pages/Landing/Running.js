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
            <p>To run the app locally, look at the <span className="on-click" onClick={this.gotoSetUp}>set up steps</span></p>
            <TitleBox title="Creating Task" titlesize="h3" footer={false}>
                <p>Tasks can be problems you need solved or mini projects you don't have time to finish and need help with from the code-penguin community. Tasks can easlity be created by clicking the <i style={{color: "#00b5ad"}}>New Task</i> button on the <u>Marketplace</u>, as long as you have enough pebbles to pay for it. </p>
                <img src={imgNewTask} alt="form" />
            </TitleBox>
            <TitleBox title="Reading Task" titlesize="h3" footer={false}>
                <p>You can browse all of the created tasks at the <u>Marketplace</u>. You can also filter the tasks by:</p>
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
                <p>Click on the card to view. Click the card again to view the back and preview the task details. To look at the task in depth you can click the <i style={{color: "#00b5ad"}}>View</i> button on the card, whick will bring you to the task detail page. This page will show you all the details on the card along with submitted solutions and comments others have made on the task.</p>
                <img src={imgMarket} alt="marketplace" />
                <img src={imgMarket2} alt="marketplace" />
            </TitleBox>
            <TitleBox title="Solving Task" titlesize="h3" footer={true}>
                <p>A <a href="https://github.com/">GitHub</a> account is needed to submit a solution and only github repositories will be accepted as a valid solution.</p>
                <p>To solve a task, you need to go the the task detail page, toggle to the solution side and add a description and github link. If the creator has already accepted or paid for a solution then no new solutions can be submitted. However, you may still comment on the task and submissions.</p>
                <img src={imgTask} alt="task page" />
                <img src={imgTask2} alt="task page" />
            </TitleBox>
            <TitleBox title="Ways to earn more pebbles" titlesize="h3" footer={false}>
                <h4>There are 2 ways to earn pebbles: </h4>
                <ol>
                    <li>You can earn pebbles by solving tasks. The value of each task can be found at the top-left corner of each task card or top-right corner of the task's details page.</li>
                    <li>Another way to earn pebbles is to log in daily and collect your daily pebbles.</li>
                </ol>
                <img src={imgProf} alt="profile page" />
            </TitleBox>
        </React.Fragment>
        )
    }
}
