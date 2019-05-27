import React from 'react';

import './Header.scss';
import ImageThumbnail from './ImageThumbnail';
import TextContent from'./TextContent';

const HeaderContainer = () => {
    return (
        <div className="HeaderContainer">
            <ImageThumbnail />
            <TextContent />
        </div>  
    );
}

export default HeaderContainer;