import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => {                 // it will align content center
    
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
