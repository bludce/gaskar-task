import React from 'react';

import './btn.sass';

const Btn = ({title, onClick}) => (
  <div className="btn" onClick={onClick}>{title}</div>
);

export default Btn;