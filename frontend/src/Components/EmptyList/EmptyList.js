import React from "react";
import styles from "./EmptyList.module.scss";
import emptyListImage from "public/empty-list.svg";
import Image from "next/image";
import { Typography } from "@mui/material";

export const EmptyList = () => {
  return (
    <div className={styles.emptyList}>
      <div className={styles.illustrationContainer}>
        <Image src={emptyListImage} />
      </div>
      <Typography variant="body2" component="p">
        You're all caught up! 🎉
      </Typography>
    </div>
  );
};
