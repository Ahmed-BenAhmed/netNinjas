import React from "react";
import './App.css';
import { DetailTaskPureComponent } from "./Components/Task/Detail/DetailTaskPureComponent";
import moment from "moment"


const App = () => {
    const taskDuration = moment("20230410","YYYYMMDD").fromNow()
    return (
        <div>
            hello world

            <DetailTaskPureComponent task={{
                title: "GO Home",
                group: {
                    groupName: "Net Ninjas"
                },
                duration: taskDuration,
                description: "This is a group created to participate in CEC competion"
            }}/>
        </div>

  );
}

export default App;