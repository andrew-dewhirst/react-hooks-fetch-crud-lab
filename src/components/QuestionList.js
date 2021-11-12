import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {

function deleteIndividualQuestion(id) {
  onDeleteQuestion(id)
}

function updateIndividualQuestion(updatedQuestion) {
  onUpdateQuestion(updatedQuestion)
}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem 
            key={question.id}
            id={question.id} 
            prompt={question.prompt} 
            answers={question.answers} 
            correctIndex={question.correctIndex}
            deleteIndividualQuestion={deleteIndividualQuestion} 
            updateIndividualQuestion={updateIndividualQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
