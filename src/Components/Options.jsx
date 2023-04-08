import React from "react";

function Options({props,index}) {
  let id = props.id
  let currentQuestionId = 1;
  let answers = props.options;
  let score = 0;


  function handleSelection(e) {
    let currentAnswer;
    // if (this.isCorrect === true) {
    //   score ++;
    // }
    currentQuestionId++;
  }

  return (
    <div>
      <ul className="list-group text-start">
      {answers.map(function(a){
        if (id === currentQuestionId) {
          return <button onClick={handleSelection} className="list-group-item list-group-item-action">{a.id}. {a.option} {a.isCorrect}</button>
        }
      })}
      </ul>
    </div>
  );
}

export default Options;