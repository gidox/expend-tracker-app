import * as React from "react";
import { Input, Layout, Text, Button, Datepicker } from "@ui-kitten/components";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput } from "react-native";

type FormData = {
  amount: string;
  date: string;
};

export function TransactionForm(): React.ReactElement {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  const [date, setDate] = React.useState(new Date());

  return (
    <Layout level="1">
      <View>
        <Controller
          name="amount"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              placeholder="Amount"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.amount && <Text>This is required.</Text>}

        <Controller
          name="date"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Datepicker
              date={new Date(value)}
              onSelect={(nextDate) => {
                setDate(nextDate);
                setValue("date", nextDate.toString());
              }}
            />
          )}
          defaultValue={date.toString()}
        />

        {errors.date && <Text>This is required.</Text>}

        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
      </View>
    </Layout>
  );
}
