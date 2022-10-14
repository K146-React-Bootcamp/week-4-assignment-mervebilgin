import React, { useContext } from "react";
import "./UserComments.css";
import { themeContext } from "../../Context";

const UserComments = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (

    <div className="usercomments" id="usercomments">  
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          404 Not Found Page 😓
          </span>
        </div>
    </div>

  );
};

export default UserComments;
