import { Question } from "@/types/question.type";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Text from "@/components/atoms/text";
import Button from "@/components/molecules/button";

interface QuestionCardProps {
  question: Question;
  onNext: (selectedOption: string) => void;
  isLastQuestion: boolean;

  
}


const QuestionCard = ({
  question,
  onNext,
  isLastQuestion,
}: QuestionCardProps) => {


  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedOption === null) return;
    onNext(selectedOption);
  };

  return (
    <div className={styles.questionCard}>
      <Text text={question.text} color="#000" variant={"h3"} />

      <form onSubmit={handleSubmit}>
        <div className={styles.questionCard_questions}>
        {question.options.map((option, index) => (
          <div key={index} className={styles.question}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </div>
        ))}
        </div>
        
        <div className={styles.questionCard_btn}>
          <Button
            text={isLastQuestion ? "Submit" : "Next"}
            type="submit"
            bgColor={!selectedOption? "": "#3300FF"}
            color="#fff"
            disabled={!selectedOption}
            variant={"normal"}
          />
        </div>
        
      </form>
    </div>
  );
};

export default QuestionCard;
