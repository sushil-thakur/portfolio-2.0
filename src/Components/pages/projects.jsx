import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { projectsData } from "../../data/items";
export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Memoized animation variants for better performance
  const containerVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.2 : 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    }),
    [shouldReduceMotion]
  );

  const titleVariants = useMemo(
    () => ({
      initial: { opacity: 0, x: shouldReduceMotion ? 0 : -50 },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0.2 : 1,
          delay: shouldReduceMotion ? 0 : 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    }),
    [shouldReduceMotion]
  );

  const projectVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        x: shouldReduceMotion ? 0 : 100,
        scale: shouldReduceMotion ? 1 : 0.95,
      },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0.2 : 0.7,
          ease: [0.16, 1, 0.3, 1],
          scale: { duration: shouldReduceMotion ? 0.2 : 0.6 },
        },
      },
      exit: {
        opacity: 0,
        x: shouldReduceMotion ? 0 : -100,
        scale: shouldReduceMotion ? 1 : 0.95,
        transition: {
          duration: shouldReduceMotion ? 0.1 : 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }),
    [shouldReduceMotion]
  );

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentProject(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  }, []);

  const project = projectsData[currentProject];

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-5xl font-bold mb-16 uppercase font-bebas tracking-wider"
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        Creations
      </motion.h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject}
          className="flex flex-col md:flex-row gap-8 mb-8"
          variants={projectVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          layout
        >
          <motion.div
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.h2
              className="text-2xl mb-8"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <span className="font-normal">{project.number}</span> /{" "}
              {project.name}
            </motion.h2>

            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.8,
                y: shouldReduceMotion ? 0 : 20,
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.5,
                ease: shouldReduceMotion ? "easeOut" : [0.34, 1.56, 0.64, 1],
              }}
            >
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                {project.type}
              </span>
            </motion.div>

            <motion.p
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {project.description}
            </motion.p>

            <motion.p
              className="text-base text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {project.technicalDetails}
            </motion.p>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:underline"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      x: 8,
                      transition: {
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    }
              }
            >
              View Project on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="h-4 w-4"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex-1 md:flex-[1.2]"
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.9,
              y: shouldReduceMotion ? 0 : 30,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.div
              className="bg-gray-600 w-full aspect-video overflow-hidden rounded-lg"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.02,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    }
              }
            >
              <img
                src={project.mainImage}
                alt={project.name}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                  shouldReduceMotion ? "" : "hover:scale-110"
                }`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="flex justify-between items-center mt-12"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.8,
          delay: shouldReduceMotion ? 0 : 1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <motion.button
          onClick={prevProject}
          className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.05,
                  y: -2,
                  transition: {
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }
          }
          whileTap={
            shouldReduceMotion
              ? {}
              : {
                  scale: 0.95,
                  transition: {
                    duration: 0.1,
                  },
                }
          }
        >
          Previous
        </motion.button>

        <div className="flex gap-2">
          {projectsData.map((_, index) => (
            <motion.span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentProject ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setCurrentProject(index)}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.3,
                      transition: {
                        duration: 0.2,
                        ease: [0.34, 1.56, 0.64, 1],
                      },
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 0.9,
                      transition: {
                        duration: 0.1,
                      },
                    }
              }
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.4,
                delay: shouldReduceMotion ? 0 : 1.1 + index * 0.05,
                ease: shouldReduceMotion ? "easeOut" : [0.34, 1.56, 0.64, 1],
              }}
            />
          ))}
        </div>

        <motion.button
          onClick={nextProject}
          className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.05,
                  y: -2,
                  transition: {
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }
          }
          whileTap={
            shouldReduceMotion
              ? {}
              : {
                  scale: 0.95,
                  transition: {
                    duration: 0.1,
                  },
                }
          }
        >
          Next
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
