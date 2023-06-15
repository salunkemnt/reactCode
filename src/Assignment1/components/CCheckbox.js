import React from 'react';
import { Checkbox } from '@mui/material';

const CCheckbox = (props) => {
  const { onChange } = props;

  return (
    <div>
      <Checkbox onChange={onChange} />
    </div>
  );
};

export default CCheckbox;
