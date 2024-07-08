"use client"
import React from "react";
import styles from "./styles.module.css";
import Text from "@/components/atoms/text";
import Link from "next/link";
import Button from "@/components/molecules/button";

const HomeScreen = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_container}>
        <Text variant={"h1"} color="#000" text="Добро пожаловать" />
        <Text
          variant={"medium"}
          color="#000"
          text="Проверьте свои знания в области информационных технологий, пройдя этот тест"
        />

        <Link href={"/quiz"} className={styles.container_btn}>
          <Button text="Пройдите тест" color="#fff" bgColor="#3300FF" variant={"normal"} />
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
