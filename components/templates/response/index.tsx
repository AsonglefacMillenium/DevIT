import Text from "@/components/atoms/text";
import Button from "@/components/molecules/button";
import { Question } from "@/types/question.type";
import React from "react";
import styles from "./styles.module.css";

interface ResultScreenProps {
 
  questions: Question[];
  responses: { questionId: number; selectedOption: string }[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  questions,
  responses,
  onRestart,
}) => {
  const getResult = (questionId: number, selectedOption: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (question) {
      const isCorrect = question.correctAnswer === selectedOption;
      return { isCorrect, question };
    }
    return { isCorrect: false, question: null };
  };

  const correctAnswersCount = responses.filter((response) => {
    const result = getResult(response.questionId, response.selectedOption);
    return result.isCorrect;
  }).length;

  return (
    <div className={styles.result}>
      <div className={styles.result_wrapper}>
        {correctAnswersCount == questions.length ? (
          <div className={styles.result_msg}>
            <Text text="Поздравляем!" color="" variant={"h1"} />
            <Text
              text="Вы правильно ответили на все вопросы. Вы действительно отлично разбираетесь в IT. "
              color=""
              variant={"h3"}
            />
          </div>
        ) : correctAnswersCount >= questions.length / 2 ? (
          <div className={styles.result_msg}>
            <Text text="Хороший результат!" color="" variant={"h1"} />
            <Text
              text={`Вы ответили правильно на ${correctAnswersCount} вопросов. Так держать!`}
              color=""
              variant={"h3"}
            />
          </div>
        ) : correctAnswersCount < questions.length / 2 &&
          correctAnswersCount != 0 ? (
          <div className={styles.result_msg}>
            <Text text="He Хороший результат!" color="" variant={"h1"} />
            <Text
              text={`Вы ответили правильно на ${correctAnswersCount} вопросов. Нужно подучить теорию.`}
              color=""
              variant={"h3"}
            />
          </div>
        ) : (
          <div className={styles.result_msg}>
            <Text text="Упс :(" color="" variant={"h1"} />
            <Text
              text="Вы неправильно ответили на все вопросы. Нужно подучить теорию."
              color=""
              variant={"h3"}
            />
          </div>
        )}

        {responses.map((response) => {
          const { isCorrect, question } = getResult(
            response.questionId,
            response.selectedOption
          );
          if (!question) return null;
          return (
            <div
              key={response.questionId}
              className={styles.result_card}
              style={{ backgroundColor: isCorrect ? "#E5F5E1" : "#FFE0E0" }}
            >
              <Text text={question.text} color="#000" variant={"medium"} />
              <Text
                text={response.selectedOption}
                color="#000"
                variant={"normal"}
              />
            </div>
          );
        })}

        <div className={styles.result_btn} onClick={onRestart}>
          <Button text="Пройти еще раз" bgColor="#3300FF" color="#fff" onClick={onRestart} />
        </div>
        
      </div>
    </div>
  );
};

export default ResultScreen;
