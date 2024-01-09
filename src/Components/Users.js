import React, { useEffect, useState } from "react";
import '../Components/myStyles.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import logo from "../icons/Logo.png";
import { useDispatch, useSeleclor } from "framer-motion";
import { AnimatePresence, motion } from 'framer-motion';
import axios fron "axios"
import { useNavigate } from "react-router-dom";

function Users() {
  const [refresh, setRefresh] = userState(true);
  const lightTheme = useSelector((state) => state.themeKey);
  const [users, SetUsers] = useState([]);
  const usetData = JSON.parse(localeStorage.getItem("useData"));
  //console.log("Data from LocalStorage : ",userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated")
    nav(-1);
  }
  useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${useDate.data.token}`,
      },
    };
    axios.get("http://localhost:8080/user/fetchUsers", config).then(
      console.log("User Data from API", data));
    SetUsers(data.data);
  },
    [refresh]
  );
  return (
    <AnimationPresence>
      <Motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: "0.3",
        }}
        className="list-container">
        <div className={"ug-header" + (lightTheme ? "" : "dark")}>
          <img
            src={logo}
            style={{ height: "2rem", widh: "2rem", marginLeft: "10px" }} />
          <p className={"ug-title" + (lightTheme ? "" : "dark")}>Available Users
          </p>
          <IconButton>
            className={"icon" + (lightTheme ? "" : "dark")}
            onClick={() => {
              setRefresh(!refresh);
            }}
            <RefreshIcon />
          </IconButton>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : "dark")}>
          <IconButton className={"icon" + (lightTheme ? "" : "dark")}>
            <SearchIcon />
          </IconButton>
          <input
            placeholder="search"
            className={"search-box" + (lightTheme ? "" : "dark")} />
        </div>
        <div className="ug-list">
          {users.map((user, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={"list-tem" + (lightTheme ? "" : "dark")}>
                Key={index}
                onClick={() => {
                  console.log("creating chat with", user.name);
                  const config = {
                    headers: {
                      Authorization: `Bearer ${userData.data.token}`,
                    },
                  };
                  axios.post(
                    //"http://localhost:8080/chat/",
                    {
                      //userId: user.id,
                    },
                    config
                  );
                }}
                <p className={"con-icon" + (lightTheme ? "" : "dark")}>T</p>
                <P className={"con-icon" + (lightTheme ? "" : "dark")}>
                  {user.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Motion.div>
    </AnimationPresence >

  );
}
export default Users; 