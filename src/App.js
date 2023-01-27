import React, { useState } from "react";
import "./App.css";

export default function App() {
  const questions = [
    {
      questionText: "What your favorite object?",
      answerOptions: [
        { answerText: "Sport" },
        { answerText: "Gaming" },
        { answerText: "Reading" },
      ],
    },
    {
      questionText: "How often do you shop online?",
      answerOptions: [
        { answerText: "3+ times/week" },
        { answerText: "1-2 times/week" },
        { answerText: "1+ times/month" },
      ],
    },
    {
      questionText: "What your favorite brand technology-based?",
      answerOptions: [
        { answerText: "Apple" },
        { answerText: "Amazon" },
        { answerText: "Samsung" },
      ],
    },
    {
      questionText: "How many hours did you sleep?",
      answerOptions: [
        { answerText: "under  4 hours" },
        { answerText: "5 hours" },
        { answerText: "more than 6 hours" },
      ],
    },
    {
      questionText: "What is your average height",
      answerOptions: [
        { answerText: "150-165 cm" },
        { answerText: "165-175 cm" },
        { answerText: "more than 175 cm" },
      ],
    },
    {
      questionText: "What your favorite university?",
      answerOptions: [
        { answerText: "Gajah Mada University" },
        { answerText: "Diponegoro University" },
        { answerText: "University of Indonesia" },
      ],
    },
    {
      questionText: "How long did you read?",
      answerOptions: [
        { answerText: "1 hour" },
        { answerText: "2 hours" },
        { answerText: " more than 2 hours" },
      ],
    },
    {
      questionText: "Are you agree with Abortion?",
      answerOptions: [
        { answerText: "Agree" },
        { answerText: "Not Agree" },
        { answerText: "Neutral" },
      ],
    },
    {
      questionText: "What your degree?",
      answerOptions: [
        { answerText: "Engineering" },
        { answerText: "Pre-Medical" },
        { answerText: "Management" },
      ],
    },
    {
      questionText: "How many presidents of Indonesia do you know?",
      answerOptions: [
        { answerText: "6" },
        { answerText: "5" },
        { answerText: "7" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showEndSection, setshowEndSection] = useState(false);
  const [section, setSection] = useState(0);

  const handleAnswerOptionClick = () => {
    setSection(section + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setshowEndSection(true);
    }
  };
  return (
    <div className="app">
      {showEndSection ? (
        <div className="score-section">Thank you for your response</div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
