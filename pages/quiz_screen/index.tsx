import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ProgressBar from "@/components/organisms/progress_bar";
import QuestionCard from "@/components/organisms/question_card";
import { Question } from "@/types/question.type";
//import questions  from "./questions";
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

const questions: Question[] = [
  {
    id: 1,
    text: "Что такое операционная система?",
    options: [
      "Это просто программа на компьютере, как и другие - Word или Chrome",
      "Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный",
      "Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем",
      'Нет такого понятия, есть понятие "файловая система"',
    ],
    correctAnswer:
      "Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем",
  },
  {
    id: 2,
    text: "Является ли Android операционной системой?",
    options: [
      "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
      "Нет, операционные системы бывают только для ПК",
      "Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные",
      "Это домашняя страничка в настройках вашего браузера",
    ],
    correctAnswer:
      "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
  },
  {
    id: 3,
    text: "Что такое процессор компьютера?",
    options: [
      "Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки",
      "Это общее название всех комплектующих компьютера",
      "Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств",
      "Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц",
    ],
    correctAnswer:
      "Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств",
  },
  {
    id: 4,
    text: "Какие бывают разрядности у современных процессоров?",
    options: ["32 и 64 бита", "12 и 32 бита", "15 и 32 бита", "86 и 64 бита"],
    correctAnswer: "32 и 64 бита",
  },
  {
    id: 5,
    text: "Какой тип процессора чаще всего используют мобильные девайсы?",
    options: [
      "iOS использует Intel, остальные используют AMD",
      "Чаще всего используют Intel",
      "Чаще всего используют AMD",
      "Чаще всего используют ARM",
    ],
    correctAnswer: "Чаще всего используют ARM",
  },
  {
    id: 6,
    text: "Для чего компьютеру нужна RAM?",
    options: [
      "Для быстрого доступа к данным",
      "Для долгосрочного хранения данных",
      "Для правильной фрагментации памяти",
      "Для дефрагментации данных",
    ],
    correctAnswer: "Для быстрого доступа к данным",
  },
  {
    id: 7,
    text: "Чем отличается HDD от SSD?",
    options: [
      "HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее",
      "HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее",
      "SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее",
      "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее",
    ],
    correctAnswer:
      "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее",
  },
  {
    id: 8,
    text: "Как отличаются между собой USB?",
    options: [
      "Бывают только USB 2.0 и 3.2",
      "Бывают только micro-USB и mini-USB",
      "USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).",
      "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)",
    ],
    correctAnswer:
      "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)",
  },
  {
    id: 9,
    text: "Какой файловой системы не существует?",
    options: ["Fat", "NTFS", "APFS", "BolSFS"],
    correctAnswer: "BolSFS",
  },
];
