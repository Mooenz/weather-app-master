import React from 'react';

import { MainStyles } from './styles';

const Button = ({ body, location, handleClose }) => {
  return location ? (
    <MainStyles className="material-icons" location>
      {body}
    </MainStyles>
  ) : (
    <MainStyles onClick={handleClose}>{body}</MainStyles>
  );
};

export default Button;
