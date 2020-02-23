import React, { ReactElement } from 'react';

const Button = ({ title }): ReactElement => (
  <button type="submit" style={{ background: 'red' }}>
    {title}
  </button>
);

export default Button;
