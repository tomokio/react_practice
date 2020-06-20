import React from 'react';

function Title (props){
  return(
    <div className="titleSection">
    <h2
      style = {props.style}
      id    = "versionStatement">
      {props.children}</h2>
    </div>
  );
}

export default Title;
