import React, { useState } from "react";
import axios from "axios";

import {
  Checkbox,
  CircularProgress,
  InputLabel,
  TextField,
} from "@mui/material";
import { BasicButton } from "../Buttons/BasicButton";

import styles from "./TaskCards.module.scss";

export const TaskCard = ({ task, toggleCompleted }) => {
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(task.name);

  const onClick = () => {
    setLoading(true);
    setTimeout(
      () => {
        toggleCompleted(task);
      },
      task.completed ? 0 : 300
    );
  };

  const onTextChange = ({ target }) => {
    setVal(target.value);
  };

  const onNameChange = (e) => {
    axios
      .put(`http://localhost:8080/tasks/task/${task.id}`, { name: val })
      .catch((e) => {
        console.log(e);
      })
      .then(() => {
        setEditing(false);
      });
  };

  if (editing) {
    return (
      <div className={styles.taskCard}>
        <TextField
          hiddenLabel
          size="small"
          className={styles.inlineField}
          value={val}
          onChange={onTextChange}
        />
        <BasicButton onClick={onNameChange} label="Change Name" />
      </div>
    );
  }

  return (
    <div className={styles.taskCard}>
      {loading && !task.completed ? (
        <>
          <CircularProgress size={24} className={styles.loader} />
          <strike>
            <InputLabel onClick={() => setEditing(true)} for={val}>
              {val}
            </InputLabel>
          </strike>
        </>
      ) : (
        <>
          <Checkbox
            label={val}
            defaultChecked={task.completed}
            onClick={onClick}
          />
          <InputLabel onClick={() => setEditing(true)} for={val}>
            {val}
          </InputLabel>
        </>
      )}
    </div>
  );
};
