export type Transaction = {
  id: number;
  description: string;
  amount: number;
  currency: string;
  dated: string;
  type: string;
  createdAt: string;
};

export type TransactionFormData = {
  amount: string;
  dated: string;
  description: string;
  saveAsTag: boolean;
  type: "db" | "cr";
};
