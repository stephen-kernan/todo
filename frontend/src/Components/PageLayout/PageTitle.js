import React from "react";
import { Typography } from "@mui/material";
import styles from "./PageLayout.module.scss";
import { BasicButton } from "../Buttons/BasicButton";

export const PageTitle = ({ button, children }) => {
  return (
    <div className={styles.nav}>
      <Typography variant="subtitle1" component="div" className={styles.header}>
        {children}
      </Typography>

      {button}
    </div>
  );
};
