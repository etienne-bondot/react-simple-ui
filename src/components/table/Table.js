import React from 'react';
import './Table.css';

const Table = ({children, ...props}) =>
    <table border={props.bordered ? 1 : 0} className="Table">{children}</table>;

export default Table;