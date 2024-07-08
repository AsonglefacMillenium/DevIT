import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ProgressBar from "@/components/organisms/progress_bar";
import QuestionCard from "@/components/organisms/question_card";
import { Question } from "@/types/question.type";
import { questions } from "./questions_data";
import ResultScreen from "@/components/templates/response";
import Text from "@/components/atoms/text";

const shuffleArray = (array: any[]): any[] => {
  return array.sort(() => Math.random() - 0.5);
};
const QuizScreen = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<
    { questionId: number; selectedOption: string }[]
  >([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    const shuffled = shuffleArray(questions).map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
    setShuffledQuestions(shuffled);
  }, []);

  const handleNextQuestion = (selectedOption: string) => {

    setResponses((prevResponses) => [
      ...prevResponses,
      {
        questionId: shuffledQuestions[currentQuestionIndex].id,
        selectedOption,
      },
    ]);
    if (currentQuestionIndex === shuffledQuestions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setResponses([]);
    setShowResults(false);
    const shuffled = shuffleArray([...questions]).map((question) => ({
      ...question,
      options: shuffleArray([...question.options]),
    }));
    setShuffledQuestions(shuffled);
  };

  if (shuffledQuestions.length === 0) return <div>Loading...</div>;

  if (showResults) {
    return (
      <ResultScreen
        questions={shuffledQuestions}
        responses={responses}
        onRestart={handleRestartQuiz}
      />
    );
  }

  return (
    <div className={styles.quiz}>

      <div className={styles.quiz_wrapper}>
        <Text variant={"h1"} text="Тестирование" color="#000" />
        <QuestionCard
          question={shuffledQuestions[currentQuestionIndex]}
          onNext={handleNextQuestion}
          // onSubmit={handleSubmit}
          isLastQuestion={currentQuestionIndex === shuffledQuestions.length - 1}
        />
        <ProgressBar
          current={currentQuestionIndex + 1}
          total={shuffledQuestions.length}
        />
      </div>
    </div>
  );
};

export default QuizScreen;
