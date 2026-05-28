import { tagtypes } from "@/types/types";
import { baseApi } from "./baseApi";

const PORTFOLIO_URL = "settings";

const settingsApiService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // --- Project Endpoints ---
        getProjects: build.query({
            query: () => ({ url: `${PORTFOLIO_URL}/projects`, method: "GET" }),
            providesTags: [tagtypes.project],
        }),
        createProject: build.mutation({
            query: (formData) => ({
                url: `${PORTFOLIO_URL}/create-project`, // ✅ was: upload-project
                method: "POST",
                data: formData,
                contentType: "multipart/form-data",
            }),
            invalidatesTags: [tagtypes.project],
        }),
        deleteProject: build.mutation({
            query: (id) => ({
                url: `${PORTFOLIO_URL}/project/${id}`, // ✅ same
                method: "DELETE",
            }),
            invalidatesTags: [tagtypes.project],
        }),

        // --- File/CV Endpoints ---
        getFiles: build.query({
            query: () => ({ url: `${PORTFOLIO_URL}/files`, method: "GET" }), // ✅ was missing
            providesTags: [tagtypes.cv],
        }),
        uploadCv: build.mutation({
            query: (formData) => ({
                url: `${PORTFOLIO_URL}/upload-cv`, // ✅ same
                method: "POST",
                data: formData,
                contentType: "multipart/form-data",
            }),
            invalidatesTags: [tagtypes.cv],
        }),
        deleteCv: build.mutation({
            query: (id) => ({
                url: `${PORTFOLIO_URL}/file/${id}`, // ✅ was: delete-cv/:id
                method: "DELETE",
            }),
            invalidatesTags: [tagtypes.cv],
        }),
        downloadCv: build.query({
            query: (id) => ({
                url: `${PORTFOLIO_URL}/download/${id}`, // ✅ was: download-cv (id নেই ছিল)
                method: "GET",
            }),
            providesTags: [tagtypes.cv],
        }),
    }),
});

export const {
    useGetProjectsQuery,
    useCreateProjectMutation,
    useDeleteProjectMutation,
    useGetFilesQuery,   
    useUploadCvMutation,
    useDeleteCvMutation,
    useDownloadCvQuery,
} = settingsApiService;