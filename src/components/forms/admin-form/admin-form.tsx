"use client";

import { useState } from "react";
import { Filter, Trash2, Upload } from "lucide-react";
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

// টাইপ ডিফাইন করা হলো
interface IProject {
  id: number;
  title: string;
}

const AdminForm = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [projectFile, setProjectFile] = useState<File | null>(null);

  const stats = [
    { title: "Download CV", total: 150 },
    { title: "Visits", total: 180 },
    { title: "Projects", total: 50 },
    { title: "Offer", total: 80 },
  ];

  const projects: IProject[] = [
    { id: 1, title: "Project One" },
    { id: 2, title: "Project Two" },
    { id: 3, title: "Project Three" },
  ];

  // ফাইল আপলোড হ্যান্ডলার
  const handleUpload = (type: "CV" | "Project") => {
    const fileToUpload = type === "CV" ? cvFile : projectFile;

    if (!fileToUpload) {
      alert(`দয়া করে আগে একটি ${type} ফাইল সিলেক্ট করুন!`);
      return;
    }

    console.log(`${type} আপলোড হচ্ছে:`, fileToUpload.name);
    alert(`${type} সফলভাবে প্রসেস করা হয়েছে!`);
  };

  return (
    <div className="p-6 space-y-8 bg-slate-50 min-h-screen">
      {/* 1. Stats Grid */}
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

      {/* 2. Upload Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-3">
          <label className="text-sm font-semibold">Upload CV</label>
          <input
            type="file"
            onChange={(e) => setCvFile(e.target.files?.[0] || null)}
            className="text-sm border p-2 rounded"
          />
          <Button onClick={() => handleUpload("CV")} className="w-full gap-2">
            <Upload size={16} /> Upload CV
          </Button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-3">
          <label className="text-sm font-semibold">Upload Project</label>
          <input
            type="file"
            onChange={(e) => setProjectFile(e.target.files?.[0] || null)}
            className="text-sm border p-2 rounded"
          />
          <Button
            onClick={() => handleUpload("Project")}
            className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700"
          >
            <Upload size={16} /> Upload Project
          </Button>
        </div>
      </div>

      {/* 3. Table Section */}
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
            {projects.map((project, index) => (
              <TableRow key={project.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-semibold">{project.title}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="text-red-600">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminForm;