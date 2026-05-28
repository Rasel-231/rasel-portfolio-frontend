import { tagtypes } from "@/types/types";
import { baseApi } from "./baseApi";


const AUTH_URL = "auth";

const apiService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                data: loginData
            }),
            invalidatesTags: [tagtypes.user],
        }),
        profile: build.query({
            query: () => ({
                url: `${AUTH_URL}/profile`,
                method: "GET",
            }),
            providesTags: [tagtypes.user],
        }),
        changePassword: build.mutation({
            query: (passwordData) => ({
                url: `${AUTH_URL}/change-password`,
                method: "POST",
                data: passwordData
            }),
        }),
        forgotPassword: build.mutation({
            query: (emailData) => ({
                url: `${AUTH_URL}/forgot-password`,
                method: "POST",
                data: emailData
            }),
        }),
        resetPassword: build.mutation({
            query: (resetData) => ({
                url: `${AUTH_URL}/reset-password`,
                method: "POST",
                data: resetData
            }),
        }),
        logout: build.mutation({
            query: () => ({
                url: `${AUTH_URL}/logout`,
                method: "POST"
            }),
            invalidatesTags: [tagtypes.user],
        }),
    }),
});

export const {
    useLoginMutation,
    useProfileQuery,
    useChangePasswordMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useLogoutMutation,
} = apiService 