import React from "react";

function Options({props,index}) {
  let id = props.id
  let answers = props.options

  return (
    <div>
      {answers.map(function(a){
        if (id === 1) {
          return <li>{a.option}</li>
        }
      })}
    </div>
  );
}

export default Options;