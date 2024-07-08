import React from "react"
import styles from "./styles.module.css"
import { ITextProps} from "./interface"

const Text = ({ variant, text, color = "#000" }: ITextProps) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={styles.h1} style={{ color: color }}>
          {text}
        </h1>
      )

    case "h2":
      return (
        <h2 className={styles.h2} style={{ color: color }}>
          {text}
        </h2>
      )

    case "h3":
      return (
        <h3 className={styles.h3} style={{ color: color }}>
          {text}
        </h3>
      )

    case "medium":
      return (
        <p className={styles.medium} style={{ color: color }}>
          {text}
        </p>
      )

    case "large":
      return (
        <p className={styles.large} style={{ color: color }}>
          {text}
        </p>
      )
    case "xlarge":
      return (
        <p className={styles.xlarge} style={{ color: color }}>
          {text}
        </p>
      )
    case "xxlarge":
      return (
        <h1 className={styles.xxlarge} style={{ color: color }}>
          {text}
        </h1>
      )
    case "small":
      return (
        <p className={styles.small} style={{ color: color }}>
          {text}
        </p>
      )

      case "xsmall":
        return (
          <p className={styles.xsmall} style={{ color: color }}>
            {text}
          </p>
        )

    case "normal":
      return (
        <p className={styles.normal} style={{ color: color }}>
          {text}
        </p>
      )

      case "normalActive":
        return (
          <p className={styles.normalActive} style={{ color: color }}>
            {text}
          </p>
        )

    default:
      return (
        <p className={styles.normal} style={{ color: color }}>
          {text}
        </p>
      )
  }
}

export default Text
