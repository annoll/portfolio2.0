// src/components/Projects.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Icons } from "./ui/icons";
import { Project } from "../types";

export default function Projects() {
  // State para sa napiling project na i-pe-preview
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="space-y-4 scroll-mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono tracking-wider text-brand-muted uppercase">
          01 — Featured Projects
        </h2>
        <span className="text-xs font-mono text-brand-muted">
          {projects.length} Works
        </span>
      </div>

      {/* Project Cards List */}
      <div className="space-y-3">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ y: -2 }}
            className="group block p-3.5 rounded-lg border border-brand-border bg-brand-card/40 hover:border-brand-muted/60 hover:bg-brand-card/70 cursor-pointer transition-all"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              {/* Thumbnail Container */}
              {project.imageSrc && (
                <div className="w-full sm:w-28 h-20 rounded border border-brand-border bg-brand-bg overflow-hidden relative shrink-0">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                    <span className="text-[10px] font-mono bg-black/70 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Preview
                    </span>
                  </div>
                </div>
              )}

              {/* Details */}
              <div className="space-y-1.5 flex-1 w-full">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-brand-light group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono border border-brand-border px-1.5 py-0.5 rounded text-brand-muted">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-brand-muted bg-brand-card px-1.5 py-0.5 rounded border border-brand-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Image Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-xl border border-brand-border bg-brand-bg p-5 space-y-4 shadow-2xl"
            >
              {/* Header & Close Button */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-brand-light">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-muted">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-md text-brand-muted hover:text-brand-light hover:bg-brand-card transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Full Image Display */}
              <div className="rounded-lg border border-brand-border overflow-hidden bg-black/40 max-h-80 flex items-center justify-center">
                <img
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>

              {/* Description & Links */}
              <p className="text-xs text-brand-muted leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-brand-border">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-brand-muted border border-brand-border px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Action Button */}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-brand-border bg-brand-card text-brand-light hover:border-brand-muted transition-colors"
                  >
                    <Icons.github className="w-3.5 h-3.5" />
                    View Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
