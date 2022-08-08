import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).max(10000).label("Price"),
  description: yup.string().label("Description"),
  category: yup.string().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: "Furniture" },
  { label: "Cars", value: "Cars" },
  { label: "Electronics", value: "Electronics" },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({});
