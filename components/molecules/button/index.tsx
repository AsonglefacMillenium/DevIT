import React from "react";
import { IButtonProps } from "./interface";
import styles from "./styles.module.css";
import Text from "@/components/atoms/text";

const Button = ({
  text,
  color,
  bgColor,
  variant,
  paddingHorizontal,
  paddingVertical,
  disabled
}: IButtonProps) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: bgColor,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
      }}
      onClick={() => onclick}
      disabled={disabled}
    >
      <Text text={text} color={color} variant={variant} />
    </button>
  );
};

export default Button;
