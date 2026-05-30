import { tagtypes } from "@/types/types";
import { baseApi } from "./baseApi";

const MESSAGE_URL = "messages";

const messageApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        sendMessage: build.mutation({
            query: (messageData) => ({
                url: `${MESSAGE_URL}/send`,
                method: "POST",
                data: messageData
            }),
            invalidatesTags: [tagtypes.message],
        }),
        getAllMessages: build.query({
            query: () => ({
                url: `${MESSAGE_URL}/read`,
                method: "GET",
            }),
            providesTags: [tagtypes.message],
        }),
    }),
});

export const {
    useSendMessageMutation,
    useGetAllMessagesQuery,
} = messageApi;