import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";

import Head from "next/head";
import { Field, Form, Formik } from "formik";
import { InputLabel, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import { BasicButton } from "@/Components/Buttons/BasicButton";
import { PageTitle } from "@/Components/PageLayout/PageTitle";

import styles from "@/styles/TaskForm.module.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  due_date: Yup.date(),
});

const initalValues = {
  name: "",
  due_date: null,
};

export const TaskForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/tasks/task", values)
      .then(() => {
        window.location = "/";
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const redirectHome = () => {
    window.location = "/";
  };

  const handleDateChange = (e, setFieldValue) => {
    setFieldValue("due_date", e);
  };

  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PageTitle>New Task</PageTitle>
        <Formik
          initialValues={initalValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formProps) => (
            <Form className={styles.taskForm}>
              <div>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Field as={TextField} name="name" />
              </div>

              <div>
                <InputLabel htmlFor="due_date">Due Date</InputLabel>
                <Field
                  as={DatePicker}
                  name="due_date"
                  className={styles.datePicker}
                  onChange={(e) => handleDateChange(e, formProps.setFieldValue)}
                />
              </div>

              <div className={styles.formButtons}>
                <BasicButton
                  label="Create New Task"
                  type="submit"
                  disabled={loading}
                  loading={loading}
                />
                <BasicButton
                  label="Cancel"
                  type="button"
                  color="secondary"
                  onClick={redirectHome}
                  sx={{
                    color: "black",
                  }}
                  disabled={loading}
                  loading={loading}
                />
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default TaskForm;
