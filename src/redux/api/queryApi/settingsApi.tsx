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
                url: `${PORTFOLIO_URL}/upload-project`, // ✅ was: upload-project
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
        visitorCount: build.mutation({
            query: (name) => ({
                url: `${PORTFOLIO_URL}/visit/${name}`, 
                method: "POST",
            }),
            invalidatesTags: [tagtypes.visit],
        }),
        stats: build.query({
            query: () => ({ 
                url: `${PORTFOLIO_URL}/stats`,
                method: "GET" }), 
            providesTags: [tagtypes.visit],
        }),
        downloadCv: build.query({
            query: (id) => ({
                url: `${PORTFOLIO_URL}/download/${id}`, 
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
    useVisitorCountMutation,
    useStatsQuery,
} = settingsApiService;