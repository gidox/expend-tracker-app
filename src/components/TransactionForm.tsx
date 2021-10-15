import * as React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Layout, Text, Button, Datepicker } from "@ui-kitten/components";
import { View, TextInput } from "react-native";

type FormData = {
  amount: string;
  date: string;
  description: string;
};

const transactionValidationSchema = Yup.object().shape({
  amount: Yup.string().required("*Required"),
  date: Yup.string().required("*Required"),
  description: Yup.string(),
});

export function TransactionForm(): React.ReactElement {
  const [date, setDate] = React.useState(new Date());
  const initialValues: FormData = { amount: "", date: "", description: "" };

  return (
    <Layout level="1">
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
          <View>
            <Input
              value={values.description}
              placeholder="Description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
            />
            {errors && errors.description && <Text>{errors.description}</Text>}
            <Input
              value={values.amount}
              keyboardType="number-pad"
              placeholder="Amount"
              onChangeText={handleChange("amount")}
              onBlur={handleBlur("amount")}
            />
            {errors && errors.amount && <Text>{errors.amount}</Text>}
            <Datepicker
              date={new Date(date)}
              onSelect={(nextDate) => {
                setDate(nextDate);
                setFieldValue("date", nextDate.toISOString());
              }}
            />
            {errors && errors.date && <Text>{errors.date}</Text>}
            <Button onPress={() => handleSubmit()}>Submit</Button>
          </View>
        )}
      </Formik>
    </Layout>
  );
}
