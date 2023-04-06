import React from "react";


export const GroupCardComponent= () => {
    return <div className="border">
        <h5 text-align="right">Group Net ninjas | duration:1 mo 10 d</h5>
        <div className="progress-container">
            <div className="progress-bar">
                <span data-width="80%"></span>
                <div className="yes">67% done</div>
            </div>
        </div>
        <br/>
        <b>Ceating task management web application for CE..</b><br/><small>tasks</small> <br/>
        <input type="checkbox" value="complete site design" />complete site design<br/>
        <input type="checkbox" value="use case diagram" />
        <del>use case diagram</del>
        <br/>
        <input type="checkbox" value="ERD diagram for our DB" />
        <del>ERD diagram for our DB</del>
        <br/>
    </div>

}