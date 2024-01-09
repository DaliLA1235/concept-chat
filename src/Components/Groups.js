import React from "react";
import '../Components/myStyles.css';
import logo from "../icons/Logo.png";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Groups() {
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <div className="list-container">
            <div className={"ug-header" + (lightTheme ? "" : "dark")}>
                <img
                    src={logo}
                    style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
                />
                <p className={"ug-title" + (lightTheme ? "" : "dark")}>
                    Available Groups
                </p>
            </div>
            <div className={"sb-search" + (lightTheme ? "" : "dark")}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input
                    placeholder="Search"
                    className={"search-box" + (lightTheme ? "" : "dark")} />
            </div>
            <div className="ug-list">
                <div className={"list-tem" + (lightTheme ? "" : "dark")} >
                    <p className={"con-icon" + (lightTheme ? "" : "dark")}>T</p>
                    <p className={"con-title" + (lightTheme ? "" : "dark")}>Test Group</p>
                </div>
                <div className={"list-tem" + (lightTheme ? "" : "dark")} >
                    <p className={"con-icon" + (lightTheme ? "" : "dark")}>T</p>
                    <p className={"con-title" + (lightTheme ? "" : "dark")}>Test Group</p>
                </div>{" "}
                <div className={"list-tem" + (lightTheme ? "" : "dark")} >
                    <p className={"con-icon" + (lightTheme ? "" : "dark")}>T</p>
                    <p className={"con-title" + (lightTheme ? "" : "dark")}>Test Group</p>
                </div> 
            </div >
        </div>

    );
}
export default Groups;  