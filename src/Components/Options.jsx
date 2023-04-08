import React from "react";

function Options({props,index}) {
  let id = props.id
  let answers = props.options

  return (
    <div>
      <ul className="list-group text-start">
      {answers.map(function(a){
        if (id === 1) {
          return <button className="list-group-item list-group-item-action">{a.id}. {a.option}</button>
        }
      })}
      </ul>
    </div>
  );
}

export default Options;