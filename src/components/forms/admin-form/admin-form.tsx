"use client";

import { useState } from "react";
import { Filter, Trash2, Upload, FileText, ImagePlus, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useUploadCvMutation,
  useStatsQuery,
} from "@/redux/api/queryApi/settingsApi";
import { toast } from "react-toastify";

interface IProject {
  _id: string;
  title: string;
  liveLink: string;
  githubLink?: string;
  description: string;
  technology: string[];
  imageUrl: string;
}

const TECH_OPTIONS = ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "TypeScript"];

const AdminForm = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [projectFile, setProjectFile] = useState<File | null>(null);
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [liveLink, setLiveLink] = useState<string>("");
  const [githubLink, setGithubLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [techStack, setTechStack] = useState<string[]>([]);

  const { data: projectsData, isLoading: isProjectsLoading } = useGetProjectsQuery(undefined);
  const [createProject, { isLoading: isProjectUploading }] = useCreateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();
  const [uploadCv, { isLoading: isCvUploading }] = useUploadCvMutation();
  const { data: stateResponse } = useStatsQuery({});

  // Fix: আপনার অবজেক্ট স্ট্রাকচারের সাথে মিলিয়ে স্ট্যাটগুলো ম্যাপিং করছি
  const statsData = stateResponse?.data;
  const stats = statsData 
    ? [
        { title: "Download CV", total: statsData.cvDownloads?.[0]?.total || 0 },
        { title: "Visits", total: statsData.totalVisits?.count || 0 },
        { title: "Projects", total: projectsData?.data?.length || 0 },
        { title: "Offer", total: statsData.offers || 0 },
      ]
    : [
        { title: "Download CV", total: 0 },
        { title: "Visits", total: 0 },
        { title: "Projects", total: 0 },
        { title: "Offer", total: 0 },
      ];

  const handleCheckboxChange = (tech: string) => {
    setTechStack((prev) =>
      prev.includes(tech) ? prev.filter((item) => item !== tech) : [...prev, tech]
    );
  };

  const handleUpload = async (type: "CV" | "Project") => {
    const fileToUpload = type === "CV" ? cvFile : projectFile;

    if (!fileToUpload) {
      toast.error(`Please select a ${type} file first!`);
      return;
    }

    const formData = new FormData();

    if (type === "CV") {
      formData.append("file", fileToUpload);
      try {
        await uploadCv(formData).unwrap();
        toast.success("CV uploaded successfully!");
        setCvFile(null);
      } catch {
        toast.error("Failed to upload CV.");
      }
    } else {
      if (!projectTitle.trim()) {
        toast.error("Please enter a project title!");
        return;
      }
      if (!liveLink.trim()) {
        toast.error("Please enter a live link URL!");
        return;
      }
      if (techStack.length === 0) {
        toast.error("Please select at least one tech stack!");
        return;
      }
      if (!description.trim()) {
        toast.error("Please enter a description!");
        return;
      }

      const projectPayload = {
        title: projectTitle,
        liveLink: liveLink,
        technology: techStack,
        githubLink: githubLink.trim() ? githubLink : null,
        description: description,
      };

      formData.append("data", JSON.stringify(projectPayload));
      formData.append("image", fileToUpload);

      try {
        await createProject(formData).unwrap();
        toast.success("Project uploaded successfully!");
        setProjectFile(null);
        setProjectTitle("");
        setLiveLink("");
        setGithubLink("");
        setDescription("");
        setTechStack([]);
      } catch {
        toast.error("Failed to upload project. Check URL formats.");
      }
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProject(id).unwrap();
      toast.success("Project deleted successfully!");
    } catch {
      toast.error("Failed to delete project.");
    }
  };

  return (
    <div className="p-6 space-y-8 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <h1 className="text-[10px] md:text-sm text-slate-500 font-medium uppercase">
              {stat.title}
            </h1>
            <span className="text-xl md:text-3xl font-bold text-slate-900 mt-1 block">
              {stat.total}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between transition-all duration-200 hover:shadow-md lg:col-span-4 min-h-[380px]">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <FileText size={20} />
              </div>
              <h2 className="text-base font-bold text-slate-800">Curriculum Vitae (CV)</h2>
            </div>
            
            <div className="relative group border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-xl p-6 bg-slate-50/50 text-center transition-colors mb-4 mt-6">
              <input
                type="file"
                id="cv-upload"
                onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                className="absolute inset-0 opacity-0 cursor-pointer"
                disabled={isCvUploading}
              />
              <div className="space-y-2">
                <Upload size={28} className="mx-auto text-slate-400 group-hover:text-indigo-500 transition-colors" />
                <p className="text-sm font-medium text-slate-600">
                  {cvFile ? cvFile.name : "Click to browse or drag CV file"}
                </p>
                <p className="text-xs text-slate-400">PDF, DOC or DOCX up to 5MB</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => handleUpload("CV")} 
            disabled={isCvUploading} 
            className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700 font-medium shadow-sm transition-all h-10 mt-auto"
          >
            <Upload size={16} /> {isCvUploading ? "Uploading..." : "Upload CV"}
          </Button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between transition-all duration-200 hover:shadow-md lg:col-span-8 min-h-[380px]">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <ImagePlus size={20} />
              </div>
              <h2 className="text-base font-bold text-slate-800">Project Showcases</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Project Title *</label>
                <input
                  type="text"
                  placeholder="e.g. MarketHub Dashboard"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full text-sm border border-slate-200 bg-slate-50/50 p-2.5 rounded-xl outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-slate-400"
                  disabled={isProjectUploading}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                  <Globe size={12} /> Live Link *
                </label>
                <input
                  type="text"
                  placeholder="https://example.com"
                  value={liveLink}
                  onChange={(e) => setLiveLink(e.target.value)}
                  className="w-full text-sm border border-slate-200 bg-slate-50/50 p-2.5 rounded-xl outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-slate-400"
                  disabled={isProjectUploading}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                Tech Stack *
              </label>
              <div className="flex flex-wrap gap-2 pt-2">
                {TECH_OPTIONS.map((tech) => (
                  <label key={tech} className="flex items-center gap-2 text-sm border border-slate-200 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={techStack.includes(tech)}
                      onChange={() => handleCheckboxChange(tech)}
                      className="accent-emerald-600"
                    />
                    {tech}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Description *</label>
              <textarea
                placeholder="Enter project description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full text-sm border border-slate-200 bg-slate-50/50 p-2.5 rounded-xl outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                rows={3}
                disabled={isProjectUploading}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                  GitHub Repository (Optional)
                </label>
                <input
                  type="text"
                  placeholder="https://github.com/username/repo"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  className="w-full text-sm border border-slate-200 bg-slate-50/50 p-2.5 rounded-xl outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-slate-400"
                  disabled={isProjectUploading}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Preview Image *</label>
                <div className="relative group border border-slate-200 hover:border-emerald-400 rounded-xl p-2 bg-slate-50/50 text-center transition-colors max-h-[42px] flex items-center justify-center overflow-hidden">
                  <input
                    type="file"
                    id="project-upload"
                    onChange={(e) => setProjectFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    disabled={isProjectUploading}
                  />
                  <div className="flex items-center gap-2 truncate">
                    <Upload size={14} className="text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" />
                    <p className="text-xs font-medium text-slate-600 truncate max-w-[200px]">
                      {projectFile ? projectFile.name : "Choose image file"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => handleUpload("Project")}
            disabled={isProjectUploading}
            className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 font-medium shadow-sm transition-all h-10 mt-6"
          >
            <Upload size={16} /> {isProjectUploading ? "Uploading..." : "Upload Project"}
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h1 className="text-xl font-bold">Project List</h1>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter size={16} /> Filter
          </Button>
        </div>

        <Table>
          <TableCaption>A list of your all projects.</TableCaption>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead>SI</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isProjectsLoading ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">Loading projects...</TableCell>
              </TableRow>
            ) : projectsData?.data?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">No projects found.</TableCell>
              </TableRow>
            ) : (
              projectsData?.data?.map((project: IProject, index: number) => (
                <TableRow key={project._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-semibold">{project.title}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button 
                        onClick={() => handleDeleteProject(project._id)} 
                        variant="ghost" 
                        size="icon" 
                        className="text-red-600"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminForm;