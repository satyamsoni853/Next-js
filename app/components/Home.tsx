"use client";
// Home.tsx
import { useState } from "react";
import logo1 from "../logo1.svg";
import logo2 from "../logo2.svg";
import ProgressCircle from "./ProgressCircle";
import TrendPill from "./TrendPill"; // Import the new component
import MyUploads from "./MyUploads"; // Import MyUploads component

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100 font-sans lg:flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-cyan-900 text-white flex-col transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center space-y-2 mb-8 p-4">
          <img src={logo1.src} alt="Logo" className="h-10 w-auto" />
          <img src={logo2.src} alt="Logo" className="h-5 w-auto" />
        </div>
        {/* Nav Links */}
        <nav className="flex-grow px-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block p-3 rounded-md bg-cyan-800 font-semibold text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Stages & Checklist
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Upload Docs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Preferred Vendors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Targets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Zee Sales Targets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
              >
                MAI Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-between items-center p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Pending Questions</span>
                <span className="bg-white text-cyan-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Logout Button */}
        <div className="p-4">
          <a
            href="#"
            className="block p-3 rounded-md hover:bg-cyan-800 text-gray-300 hover:text-white transition-colors duration-200"
          >
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-sm z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button
                  className="lg:hidden text-gray-500 focus:outline-none"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <img
                  src="https://picsum.photos/seed/user/40/40"
                  alt="User"
                  className="rounded-full w-10 h-10"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow p-4 sm:p-6 lg:p-8">
          {/* Dashboard Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Account Progress Section */}
            <div className="md:col-span-2 xl:col-span-1 flex flex-col gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-gray-700 mb-4">
                  Account Progress
                </h3>
                <ProgressCircle
                  percentage={85}
                  color="#3B82F6"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-600 mb-4">
                  Steps Completed
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between text-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                      <span>Profile Setup</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center justify-between text-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                      <span>Initial Training</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center justify-between text-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                      <span>Legal Documents</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-600 mb-4">
                  Steps Remaining
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between text-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                      <span>Financial Integration</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-20 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center justify-between text-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                      <span>Final Review</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 opacity-20 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column for other dashboards */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 text-gray-700">
                  Total Franchisees Onboard
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <p className="text-4xl font-bold text-gray-800">14</p>
                    <TrendPill value={7.4} className="ml-4" />
                  </div>
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1f721b424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Avatar 1"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Avatar 2"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt="Avatar 3"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Avatar 4"
                    />
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-gray-600 text-xs font-medium ring-2 ring-white">
                      +7
                    </span>
                  </div>
                </div>
                <div className="w-full rounded-full gap-5 h-2.5 mb-4 flex">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: "20%", backgroundColor: "#1F7EAA" }}
                  ></div>
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: "50%", backgroundColor: "#2FBDFF" }}
                  ></div>
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: "30%", backgroundColor: "#97DEFF" }}
                  ></div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      <span>Stage 1 (Initial Inquiry)</span>
                    </div>
                    <span className="font-semibold">02</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                      <span>Stage 2 (Document Submission)</span>
                    </div>
                    <span className="font-semibold">07</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-blue-300"></span>
                      <span>Stage 3 (Training)</span>
                    </div>
                    <span className="font-semibold">05</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 text-gray-800">
                  Key Insights & Feedback
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-4xl font-bold text-gray-900">10%</p>
                    <p className="text-gray-500">Sales Growth</p>
                  </div>
                  <div className="text-right">
                    <img
                      src="https://picsum.photos/seed/user/40/40"
                      alt="Top Performer Logo"
                      className="rounded-full w-12 h-12 mb-2 m-auto"
                    />
                    <span
                      className="text-blue-400 text-xs font-semibold px-4 py-2 rounded-full"
                      style={{ backgroundColor: "#BAE9FF" }}
                    >
                      Top Performer
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-700 mb-2">Feedback</p>
                  <div className="flex items-start space-x-2">
                    <span className="h-2 w-2 rounded-full bg-gray-400 mt-2"></span>
                    <p className="text-gray-600 text-sm">
                      Franchisees are requesting more detailed training
                      materials.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-700">
                  Financial Wellbeing
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-4xl font-bold text-gray-800">20</div>
                  <TrendPill value={2.1} className="" />
                </div>
                <p className="text-gray-500">Total Franchisees</p>
                <div className="mt-4 flex justify-between space-x-4">
                  <div className="flex-1 bg-gray-100 p-5 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Target</p>
                    <p className="font-semibold text-gray-800">$500,000</p>
                  </div>
                  <div className="flex-1 bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Current</p>
                    <p className="font-semibold text-gray-800">$450,000</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 text-gray-800">
                  Prospect Leads
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <img
                      src="https://picsum.photos/seed/user/40/40"
                      alt="Wade Warren"
                      className="rounded-full w-10 h-10 mr-4"
                    />
                    <div className="flex-1 flex justify-between items-center">
                      <p className="font-semibold text-gray-800">Wade Warren</p>
                      <p className="text-gray-500 text-sm">
                        Stage: Initial Inquiry
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <img
                      src="https://picsum.photos/seed/user/40/40"
                      alt="Ava Wright"
                      className="rounded-full w-10 h-10 mr-4"
                    />
                    <div className="flex-1 flex justify-between items-center">
                      <p className="font-semibold text-gray-800">Ava Wright</p>
                      <p className="text-gray-500 text-sm">
                        Stage: Initial Inquiry
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <img
                      src="https://picsum.photos/seed/cody/40/40"
                      alt="Cody Fisher"
                      className="rounded-full w-10 h-10 mr-4"
                    />
                    <div className="flex-1 flex justify-between items-center">
                      <p className="font-semibold text-gray-800">Cody Fisher</p>
                      <p className="text-gray-500 text-sm">
                        Stage: Initial Inquiry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MyUploads />
        </main>
      </div>
    </div>
  );
};

export default Home;