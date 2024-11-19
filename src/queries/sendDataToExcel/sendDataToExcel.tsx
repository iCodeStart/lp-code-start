import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface DataExcel {
  nome: string;
  email: string;
  telefone: string;
}

const sendDataToExcel = async (data: DataExcel): Promise<void> => {
  return await axios.post(
    "https://api-code-start.netlify.app/.netlify/functions/api/sendData",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const useSendDataToExcel = () => {
  return useMutation<void, AxiosError, DataExcel>({
    mutationFn: sendDataToExcel,
  });
};
