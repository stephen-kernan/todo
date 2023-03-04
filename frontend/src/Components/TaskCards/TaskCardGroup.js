import React, { useState } from "react";

import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import { Typography } from "@mui/material";

import styles from "./TaskCards.module.scss";
import { TaskCard } from "./TaskCard";

export const TaskCardGroup = ({
  groupLabel = "No Due Date",
  tasks = [],
  toggleCompleted,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const dateWithoutTime =
    groupLabel !== "null" ? groupLabel?.split("T")[0] : "No Due Date";

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.taskCardGroup}>
      <Typography
        variant="subtitle2"
        component="h2"
        onClick={toggleCollapse}
        className={styles.title}
      >
        {collapsed ? <ArrowRight /> : <ArrowDropDown />}
        {dateWithoutTime === "No Due Date" ? "No Due Date" : dateWithoutTime}
      </Typography>
      {!collapsed &&
        tasks.map((task) => (
          <TaskCard
            toggleCompleted={toggleCompleted}
            task={task}
            key={task.id}
          />
        ))}
    </div>
  );
};
