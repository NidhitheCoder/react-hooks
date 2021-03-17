import React from 'react';
import ComponentE from './ComponentE';

function ComponentC(props) {
  return (
    <div>
      Component C
      <ComponentE />
    </div>
  );
}

export default ComponentC;