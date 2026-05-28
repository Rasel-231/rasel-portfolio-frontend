import { tagtypes } from "@/types/types";
import { baseApi } from "./baseApi";

const AI_URL = "assistant"; 

export const aiApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        chatWithAi: build.mutation({
            query: (chatData) => ({
                url: `${AI_URL}/chat`,
                method: "POST",
                data: chatData,
            }),
            invalidatesTags: [tagtypes.ai], 
        }),
        
        getAiInsights: build.query({
            query: (topic) => ({
                url: `${AI_URL}/insights/${topic}`,
                method: "GET",
            }),
            providesTags: [tagtypes.ai],
        }),
    }),
});

export const {
    useChatWithAiMutation,
    useGetAiInsightsQuery,
} = aiApi;