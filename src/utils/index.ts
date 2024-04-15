import axios from "axios";
import useSWR from "swr";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_END_POINT,
});
