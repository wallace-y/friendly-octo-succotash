import React from "react";
import Options from "./Options";

function Question() {
  const quiz = [
    {
      id: 1,
      question: "Which planet in our solar system is the closest to the sun?",
      options: [
        { id: 1, option: "Venus", isCorrect: false },
        { id: 2, option: "Mars", isCorrect: false },
        { id: 3, option: "Mercury", isCorrect: true },
        { id: 4, option: "Earth", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "Which country is home to the tallest mountain in the world?",
      options: [
        { id: 1, option: "China", isCorrect: false },
        { id: 2, option: "Nepal", isCorrect: true },
        { id: 3, option: "India", isCorrect: false },
        { id: 4, option: "Japan", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "Who painted the Mona Lisa?",
      options: [
        { id: 1, option: "Vincent van Gogh", isCorrect: false },
        { id: 2, option: "Leonardo da Vinci", isCorrect: true },
        { id: 3, option: "Michelangelo", isCorrect: false },
        { id: 4, option: "Pablo Picasso", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "Which country is famous for inventing pizza?",
      options: [
        { id: 1, option: "Italy", isCorrect: true },
        { id: 2, option: "Greece", isCorrect: false },
        { id: 3, option: "France", isCorrect: false },
        { id: 4, option: "Spain", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "What is the largest organ in the human body?",
      options: [
        { id: 1, option: "Liver", isCorrect: false },
        { id: 2, option: "Heart", isCorrect: false },
        { id: 3, option: "Lungs", isCorrect: false },
        { id: 4, option: "Skin", isCorrect: true }
      ]
    },
    {
      id: 6,
      question: "Which of the following is not a primary color?",
      options: [
        { id: 1, option: "Blue", isCorrect: false },
        { id: 2, option: "Green", isCorrect: false },
        { id: 3, option: "Yellow", isCorrect: false },
        { id: 4, option: "Purple", isCorrect: true }
      ]
    },
      {
    id: 7,
    question: "Who is credited with discovering electricity?",
    options: [
      { id: 1, option: "Isaac Newton", isCorrect: false },
      { id: 2, option: "Thomas Edison", isCorrect: false },
      { id: 3, option: "Benjamin Franklin", isCorrect: true },
      { id: 4, option: "Alexander Graham Bell", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "Which animal is known for having the longest neck?",
    options: [
      { id: 1, option: "Giraffe", isCorrect: true },
      { id: 2, option: "Elephant", isCorrect: false },
      { id: 3, option: "Hippopotamus", isCorrect: false },
      { id: 4, option: "Rhino", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "Which popular social media platform was originally called 'The Facebook'?",
    options: [
      { id: 1, option: "Twitter", isCorrect: false },
      { id: 2, option: "Facebook", isCorrect: false },
      { id: 3, option: "LinkedIn", isCorrect: true },
      { id: 4, option: "Instagram", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "Which of the following is not a programming language?",
    options: [
      { id: 1, option: "Basketball", isCorrect: false },
      { id: 2, option: "Soccer", isCorrect: false },
      { id: 3, option: "Baseball", isCorrect: true },
      { id: 4, option: "Football", isCorrect: false }
    ]
  }
  ]
  let currentQuestionId = 1;
  let currentQuestionIndex = currentQuestionId -1;
  let currentQuestion = quiz[currentQuestionIndex].question
  

  return (
    <div>
      <p>Question {currentQuestionId}</p>
      <p>{currentQuestion}</p>
      {quiz.map(function(q){
        return <Options props={q}/>
      })}
    </div>
  );
}

export default Question;