"use client";
import { Search } from "lucide-react";
import { useState } from "react";

const categories = ["Transfer", "Application", "Website"];
const authors = ["All", "Alireza Ezlegini", "Fateme Ahmadi"];

export default function BlogSidebar() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState("All");

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <aside className="w-full lg:w-56 shrink-0 flex flex-col gap-6">
      {/* Search */}
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-sm">
        <Search className="w-4 h-4 text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder="Search Blog Posts"
          className="flex-1 text-sm text-gray-600 outline-none bg-transparent placeholder:text-gray-400"
        />
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Categories</h4>
        <ul className="space-y-2.5">
          {categories.map((cat) => (
            <li key={cat} className="flex items-center gap-2.5">
              <button
                onClick={() => toggleCategory(cat)}
                className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                  selectedCategories.includes(cat)
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedCategories.includes(cat) && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <span className="text-sm text-gray-600">{cat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Author */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Author</h4>
        <ul className="space-y-2.5">
          {authors.map((author) => (
            <li key={author} className="flex items-center gap-2.5">
              <button
                onClick={() => setSelectedAuthor(author)}
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                  selectedAuthor === author
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedAuthor === author && (
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </button>
              <span className="text-sm text-gray-600">{author}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}