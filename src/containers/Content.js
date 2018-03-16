import React from 'react';

import './Content.css';

const Content = ({children}) =>
    <div className="ContentWrapper">
        <div className="Content">{children}</div>
    </div>;

export default Content;