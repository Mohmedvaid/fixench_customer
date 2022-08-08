import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";

// creating separate component for the formik context to avoid repetition and ugly code
const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
