import React, { useState } from "react";
import '../Components/myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from "./ConversationsItem";
function Sidebar() {
    const [conversations, setConversations] = useState([
        {
            name: "Test#1",
            lastMessage: "Last Message #1",
            timeStamp: "today",
        },
        {
            name: "Test#2",
            lastMessage: "Last Message #2",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
    ]);
    return (
        <div className="sidebar-container">
            <div className="sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <PersonAddAltIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <NightlightOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sb-search">
                < IconButton >
                    <SearchIcon />
                </ IconButton >
                <input placeholder="search" className="search-box"/>
            </div>
            <div className="sb-conversations">
                {conversations.map((conversation) => {
                    return <ConversationsItem  props={conversation} key={conversation.name}/>
                })}
            </div>
        </div>
    );
}

export default Sidebar;  