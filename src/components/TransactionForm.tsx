import React, { useRef, useState, ReactElement } from "react";
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
  Radio,
  Spinner,
} from "@ui-kitten/components";
import { View, StyleSheet, Keyboard } from "react-native";
import { TransactionFormData } from "@shared";

type TransactionFormProps = {
  onSubmit: (transactionData: TransactionFormData) => void;
  isLoading: boolean;
};

const transactionValidationSchema = Yup.object().shape({
  amount: Yup.string().required("*Required"),
  dated: Yup.string().required("*Required"),
  description: Yup.string(),
  saveAsTag: Yup.boolean(),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  formControl: {
    marginVertical: 10,
  },
  bottom: {
    position: "absolute",
    bottom: 40,
    flex: 1,
    flexDirection: "row",
  },
});

export function TransactionForm({
  onSubmit,
  isLoading = false,
}: TransactionFormProps): React.ReactElement {
  const [date, setDate] = useState(new Date());
  const amountRef = useRef();
  const datePickerRef = useRef();

  const initialValues: TransactionFormData = {
    amount: "",
    dated: "",
    description: "",
    type: "db",
    saveAsTag: false,
  };

  return (
    <Layout style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
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
                autoFocus
                value={values.description}
                placeholder="Description"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                returnKeyType="next"
                onSubmitEditing={() => {
                  amountRef?.current?.focus();
                }}
              />
              {errors && errors.description && (
                <Text style={{ color: "danger" }}>{errors.description}</Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Input
                value={values.amount}
                ref={amountRef}
                keyboardType="number-pad"
                placeholder="Amount"
                onChangeText={handleChange("amount")}
                onBlur={handleBlur("amount")}
                returnKeyType="next"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                  datePickerRef?.current?.focus();
                }}
              />
              {errors && errors.amount && <Text>{errors.amount}</Text>}
            </View>
            <View style={styles.formControl}>
              <Datepicker
                ref={datePickerRef}
                date={new Date(date)}
                onFocus={() => Keyboard.dismiss()}
                style={{ zIndex: 9999 }}
                onSelect={(nextDate) => {
                  setDate(nextDate);
                  setFieldValue("dated", nextDate.toISOString());
                }}
              />
              {errors && errors.dated && <Text>{errors.dated}</Text>}
            </View>

            <View
              style={[
                styles.formControl,
                { flexDirection: "row", marginVertical: 20 },
              ]}
            >
              <Radio
                checked={values.type === "db"}
                onChange={() => setFieldValue("type", "db")}
              >
                Debit
              </Radio>
              <Radio
                checked={values.type === "cr"}
                onChange={() => setFieldValue("type", "cr")}
              >
                Credit
              </Radio>
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
            <View style={styles.bottom}>
              <Button
                style={{ flex: 1, marginLeft: 20 }}
                onPress={() => handleSubmit()}
                accessoryLeft={isLoading && LoadingIndicator}
                disabled={isLoading}
              >
                Submit
              </Button>
            </View>
          </>
        )}
      </Formik>
    </Layout>
  );
}

const LoadingIndicator = (props) => (
  <View
    style={[
      props.style,
      {
        justifyContent: "center",
        alignItems: "center",
      },
    ]}
  >
    <Spinner size="small" status="control" />
  </View>
);
