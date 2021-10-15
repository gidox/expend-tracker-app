import * as React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Input,
  Layout,
  Text,
  Button,
  Datepicker,
  CheckBox,
  Divider,
} from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";

type FormData = {
  amount: string;
  date: string;
  description: string;
  saveAsTag: boolean;
};

const transactionValidationSchema = Yup.object().shape({
  amount: Yup.string().required("*Required"),
  date: Yup.string().required("*Required"),
  description: Yup.string(),
  saveAsTag: Yup.boolean(),
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
  },
  formControl: {
    marginVertical: 10,
  },
});

export function TransactionForm(): React.ReactElement {
  const [date, setDate] = React.useState(new Date());
  const initialValues: FormData = {
    amount: "",
    date: "",
    description: "",
    saveAsTag: false,
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={transactionValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
        }) => (
          <>
            <View style={styles.formControl}>
              <Input
                value={values.description}
                placeholder="Description"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
              />
              {errors && errors.description && (
                <Text>{errors.description}</Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Input
                value={values.amount}
                keyboardType="number-pad"
                placeholder="Amount"
                onChangeText={handleChange("amount")}
                onBlur={handleBlur("amount")}
              />
              {errors && errors.amount && <Text>{errors.amount}</Text>}
            </View>
            <View style={styles.formControl}>
              <Datepicker
                date={new Date(date)}
                onSelect={(nextDate) => {
                  setDate(nextDate);
                  setFieldValue("date", nextDate.toISOString());
                }}
              />
              {errors && errors.date && <Text>{errors.date}</Text>}
            </View>
            <Divider />
            <View style={styles.formControl}>
              <CheckBox
                checked={values.saveAsTag}
                onChange={(nextChecked: boolean) =>
                  setFieldValue("saveAsTag", nextChecked)
                }
              >
                {`Save transaction has tag?`}
              </CheckBox>
            </View>

            <Divider />

            <Button onPress={() => handleSubmit()}>Submit</Button>
          </>
        )}
      </Formik>
    </View>
  );
}
