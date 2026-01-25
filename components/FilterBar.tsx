"use client";

import { useState, useEffect } from "react";
import { App } from "@/types/app";
import { motion } from "framer-motion";

interface FilterBarProps {
  apps: App[];
  onFilterChange: (filteredApps: App[]) => void;
}

const categories = ["All", "Image Gen", "Chat", "3D", "Business"];
const sortOptions = ["Popular", "Newest", "Name A-Z"];

export default function FilterBar({ apps, onFilterChange }: FilterBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");

  useEffect(() => {
    let filtered = [...apps];

    if (searchQuery) {
      filtered = filtered.filter(
        (app) =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((app) => app.category.includes(selectedCategory));
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "Newest":
          return 0;
        case "Name A-Z":
          return a.name.localeCompare(b.name);
        case "Popular":
        default:
          return a.featured ? -1 : b.featured ? 1 : 0;
      }
    });

    onFilterChange(filtered);
  }, [searchQuery, selectedCategory, sortBy, apps, onFilterChange]);

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Search */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search apps..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 text-sm bg-bg-secondary/50 border border-white/10 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-primary/50 transition-colors"
        />
      </div>

      {/* Category */}
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
              selectedCategory === cat
                ? "bg-accent-primary/20 text-accent-primary border border-accent-primary/30"
                : "bg-bg-secondary/50 text-text-secondary border border-white/10 hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-3 py-2 text-sm bg-bg-secondary/50 border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-accent-primary/50 transition-colors"
      >
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </motion.div>
  );
}
