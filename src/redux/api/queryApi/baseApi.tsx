import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../redux-setup/axiosBaseQuery";
import { tagtypeList } from "@/types/types";


export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl:"http://localhost:5000/api/v1/" }),
  endpoints: () => ({}),
  tagTypes: tagtypeList,
});