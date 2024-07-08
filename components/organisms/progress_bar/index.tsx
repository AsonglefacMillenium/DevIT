import React from "react";
import styles from "./styles.module.css";
import Text from "@/components/atoms/text";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className={styles.progress}>
      <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "4rem" }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#3300FF",
            height: "12px",
            borderRadius: "4rem"
          }}
        ></div>
      </div>
      
      <div className={styles.progress_record}>
        <Text text={current} color="#000" variant={"small"} />
        <Text text={total} color="#000" variant={"small"} />
      </div>
    </div>
  );
};

export default ProgressBar;
