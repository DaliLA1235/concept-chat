import React from "react";
import '../Components/myStyles.css';
import Sidebar from "./sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import Users_Groups from "./Users_Groups";
import Login from "./Login";
function MainContainer() {
      
      return <div className="main-container">
            <Sidebar />
            {/*<Welcome />*/}
           {/*<CreateGroups />*/}
            {/* <WorkArea /> */}
           <ChatArea />
           {/*<Users_Groups />*/}
            {/*<Login/>*/}

      </div>;
}
export default MainContainer;  