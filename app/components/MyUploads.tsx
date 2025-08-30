"use client";
import React, { useState, useMemo } from "react";
import {
  FileImage,
  EllipsisVertical,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
  FileVideo2,
  FileAudio2,
  FileBadge,
} from "lucide-react"; // Using Lucide for a modern icon set
import pdf from '../pdf.png'
import doc from '../doc.png'

interface Document {
  name: string;
  size: string;
  type: "Legal" | "Vendors & Assets" | "Technology" | "Financial";
  aiInclusion: boolean;
  dashboardInclusion: boolean;
  stageAccess: string;
  icon: "pdf" | "jpg" | "mp4" | "doc" | "aep" | "mp3";
}

const documents: Document[] = [
  {
    name: "Tech requirements.pdf",
    size: "200 KB",
    type: "Legal",
    aiInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Full",
    icon: "pdf",
  },
  {
    name: "Dashboard screenshot.jpg",
    size: "720 KB",
    type: "Vendors & Assets",
    aiInclusion: false,
    dashboardInclusion: true,
    stageAccess: "Onboarding",
    icon: "pdf",
  },
  {
    name: "Dashboard prototype recording.mp4",
    size: "16 MB",
    type: "Technology",
    aiInclusion: false,
    dashboardInclusion: true,
    stageAccess: "Franchisee",
    icon: "doc",
  },
  {
    name: "Financial Overview.docx",
    size: "4.2 MB",
    type: "Financial",
    aiInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Prospect",
    icon: "doc",
  },
  {
    name: "UX Design Guidelines.docx",
    size: "400 KB",
    type: "Legal",
    aiInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Onboarding",
    icon: "doc",
  },
  {
    name: "Dashboard interaction.aep",
    size: "12 MB",
    type: "Legal",
    aiInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Onboarding",
    icon: "pdf",
  },
  {
    name: "Briefing call recording.mp3",
    size: "18.6 MB",
    type: "Financial",
    aiInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Prospect",
    icon: "pdf",
  },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocuments, setSelectedDocuments] = useState<Set<string>>(new Set());

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allDocumentNames = new Set(filteredDocuments.map((doc) => doc.name));
      setSelectedDocuments(allDocumentNames);
    } else {
      setSelectedDocuments(new Set());
    }
  };

  const handleSelect = (docName: string) => {
    const newSelectedDocuments = new Set(selectedDocuments);
    if (newSelectedDocuments.has(docName)) {
      newSelectedDocuments.delete(docName);
    } else {
      newSelectedDocuments.add(docName);
    }
    setSelectedDocuments(newSelectedDocuments);
  };

  const getIcon = (iconType: "pdf" | "jpg" | "mp4" | "mp3" | "doc" | "aep") => {
    switch (iconType) {
      case "pdf":
        return <img src={pdf.src} alt="PDF Icon" className="h-6 w-6" />;
      case "jpg":
        return <FileImage className="h-6 w-6 text-green-500" />;
      case "mp4":
        return <FileVideo2 className="h-6 w-6 text-blue-500" />;
      case "mp3":
        return <FileAudio2 className="h-6 w-6 text-purple-500" />;
      case "doc":
        return <img src={doc.src} alt="DOC Icon" className="h-6 w-6" />;
      case "aep":
        return <FileBadge className="h-6 w-6 text-cyan-500" />;
      default:
        return null;
    }
  };

  const getBadgeColor = (type: "Legal" | "Vendors & Assets" | "Technology" | "Financial") => {
    switch (type) {
      case "Legal":
        return "bg-blue-100 text-blue-800";
      case "Vendors & Assets":
        return "bg-green-100 text-green-800";
      case "Technology":
        return "bg-purple-100 text-purple-800";
      case "Financial":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const ToggleSwitch = ({ checked }: { checked: boolean }) => (
    <div
      className={`relative w-10 h-6 rounded-full transition-colors duration-200 ease-in-out ${
        checked ? "bg-blue-500" : "bg-gray-200"
      }`}
    >
      <div
        className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
          checked ? "translate-x-4" : ""
        }`}
      />
    </div>
  );

  return (
    <div className="flex  justify-center  items-center min-h-screen bg-gray-100  ">
      <div className="container  w-full rounded-2xl mt-4 bg-white  shadow-lg border  border-b-gray-200  ">
        <div className="flex flex-col  p-4 border border-gray-200 sm:flex-row justify-between items-start sm:items-center ">
          <div className=""  >
            <h3 className="font-bold text-2xl text-gray-800">My Uploads</h3>
            <p className="text-gray-500 text-sm">
              Documents that are uploaded by you.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 mt-2 sm:mt-0">
            <EllipsisVertical className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center space-x-4 p-4 border border-gray-200 ">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Search here..."
              className="w-100 pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button className="hidden sm:flex w-auto flex-shrink-0 items-center justify-center space-x-2 px-6 py-2 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <SlidersHorizontal className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>
        <div  >
          <div className="overflow-x-auto  border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
              
                
                <th
                  scope="col"
                  className="px-6 flex items-end-safe gap-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    onChange={handleSelectAll}
                    checked={
                      filteredDocuments.length > 0 &&
                      selectedDocuments.size === filteredDocuments.length
                    }
                  />
                  Document Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Document Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell whitespace-nowrap"
                >
                  AI App Inclusion
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell whitespace-nowrap"
                >
                  Dashboard Inclusion
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Stage Access
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {/* Actions */}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDocuments.map((doc, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 mr-4"
                        checked={selectedDocuments.has(doc.name)}
                        onChange={() => handleSelect(doc.name)}
                      />
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                        {getIcon(doc.icon)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {doc.name}
                        </div>
                        <div className="text-sm text-gray-500">{doc.size}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeColor(
                        doc.type
                      )}`}
                    >
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                    <div className="flex justify-start">
                      <ToggleSwitch checked={doc.aiInclusion} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                    <div className="flex justify-start">
                      <ToggleSwitch checked={doc.dashboardInclusion} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative">
                      <select
                        className="block w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        defaultValue={doc.stageAccess}
                      >
                        <option>Full</option>
                        <option>Onboarding</option>
                        <option>Prospect</option>
                        <option>Franchisee</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-gray-600 hover:text-red-900">
                      Delete
                    </a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;