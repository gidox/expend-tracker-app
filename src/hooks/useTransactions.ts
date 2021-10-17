import { TransactionFormData } from "@shared/types";
import { useMutation, UseMutationOptions, useQuery } from "react-query";
import { supabase } from "../supabaseClient";

const getTransactions = async () => {
  let { data, error } = await supabase
    .from("transactions")
    .select("*")
    .order("updated_at", { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export function useTransactions() {
  return useQuery("transactions", getTransactions, { refetchOnMount: true });
}

const postTransaction = async (transactionData: TransactionFormData) => {
  const submitData = {
    ...transactionData,
    save_as_tag: transactionData.saveAsTag,
    amount: Number(transactionData.amount),
  };
  delete submitData.saveAsTag;
  const { data, error } = await supabase
    .from("transactions")
    .insert([submitData]);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export function useTransactionMutation(
  options?: UseMutationOptions<T, any, TransactionFormData>
) {
  return useMutation("transactions", postTransaction, options);
}
