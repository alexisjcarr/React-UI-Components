import React from "react";
import "./TextContent.scss";

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const TextContent = () => {
    return (
        <div className="TextContent">
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
}

export default TextContent;