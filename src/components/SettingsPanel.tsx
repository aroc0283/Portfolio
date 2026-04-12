"use client";

import {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS } from "@/lib/config";
import type { PortfolioConfig, SectionId, Link } from "@/lib/types";
import { SectionTabs } from "./SectionTabs";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  config: PortfolioConfig;
  onSave: (config: PortfolioConfig) => void;
}

const SPRING = { type: "spring" as const, stiffness: 300, damping: 30 };

export function SettingsPanel({
  isOpen,
  onClose,
  config,
  onSave,
}: SettingsPanelProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("intro");
  const [labelInput, setLabelInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [notesValue, setNotesValue] = useState(config[activeSection].notes);
  const notesTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Keep notes in sync when switching sections
  useEffect(() => {
    setNotesValue(config[activeSection].notes);
  }, [activeSection, config]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const addLink = useCallback(() => {
    const url = urlInput.trim();
    const label = labelInput.trim();
    if (!url) return;

    const newLink: Link = { url, label: label || url };
    const updated: PortfolioConfig = {
      ...config,
      [activeSection]: {
        ...config[activeSection],
        links: [...config[activeSection].links, newLink],
      },
    };
    onSave(updated);
    setLabelInput("");
    setUrlInput("");
  }, [urlInput, labelInput, config, activeSection, onSave]);

  const removeLink = useCallback(
    (index: number) => {
      const links = config[activeSection].links.filter((_, i) => i !== index);
      onSave({
        ...config,
        [activeSection]: { ...config[activeSection], links },
      });
    },
    [config, activeSection, onSave]
  );

  const handleNotesChange = (value: string) => {
    setNotesValue(value);
    clearTimeout(notesTimer.current);
    notesTimer.current = setTimeout(() => {
      onSave({
        ...config,
        [activeSection]: { ...config[activeSection], notes: value },
      });
    }, 500);
  };

  const currentSection = SECTIONS.find((s) => s.id === activeSection)!;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.75)", zIndex: 100, backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={SPRING}
            className="fixed top-0 right-0 bottom-0 flex flex-col"
            style={{
              width: "min(420px, 100vw)",
              backgroundColor: "var(--surface-low)",
              borderLeft: "none",
              zIndex: 101,
              boxShadow: "-40px 0 80px rgba(12,14,23,0.6)",
            }}
          >
            {/* Panel content staggers in after panel lands */}
            <motion.div
              className="flex flex-col h-full"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.15,
                    staggerChildren: 0.04,
                  },
                },
              }}
            >
              {/* Header */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "none", paddingBottom: "16px" }}
              >
                <h2
                  className="font-body font-medium"
                  style={{ color: "var(--on-surface)", fontSize: "15px", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  Settings
                </h2>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                  aria-label="Close settings"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M2 2l12 12M14 2L2 14" />
                  </svg>
                </button>
              </motion.div>

              {/* Section tabs */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="px-5 pt-4 pb-3"
                style={{ borderBottom: "none", paddingBottom: "12px" }}
              >
                <SectionTabs
                  activeSection={activeSection}
                  onSelect={setActiveSection}
                  config={config}
                />
              </motion.div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
                {/* Active section label */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p
                    className="font-body"
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    {currentSection.title}
                  </p>
                </motion.div>

                {/* Add link form */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="space-y-2.5"
                >
                  <input
                    type="text"
                    placeholder="Label (e.g. 'Q3 Campaign Thread')"
                    value={labelInput}
                    onChange={(e) => setLabelInput(e.target.value)}
                    className="w-full rounded-lg px-3 py-2.5 font-body outline-none transition-all"
                    style={{
                      backgroundColor: "var(--surface-high)",
                      border: "none",
                      color: "var(--on-surface)",
                      fontSize: "13px",
                      fontFamily: "var(--font-inter), sans-serif",
                      borderRadius: "10px",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 0 2px var(--primary)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="URL or file path"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addLink()}
                      className="flex-1 rounded-lg px-3 py-2.5 font-body outline-none transition-all"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        border: "0.5px solid rgba(255,255,255,0.08)",
                        color: "var(--text-primary)",
                        fontSize: "13px",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px var(--accent-glow)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--border-subtle)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    <motion.button
                      onClick={addLink}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-4 py-2.5 rounded-full font-medium text-white flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-deep) 100%)",
                        fontSize: "13px",
                        fontFamily: "var(--font-inter), sans-serif",
                        color: "#fff",
                      }}
                    >
                      + Add
                    </motion.button>
                  </div>
                </motion.div>

                {/* Saved links */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {config[activeSection].links.length > 0 && (
                    <p
                      className="font-body mb-2"
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Saved links
                    </p>
                  )}
                  <AnimatePresence initial={false}>
                    {config[activeSection].links.map((link, i) => (
                      <motion.div
                        key={`${link.url}-${i}`}
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, x: -20 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="flex items-start gap-2 py-2 px-3 rounded-lg mb-1.5"
                          style={{
                            backgroundColor: "var(--surface-high)",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="flex-1 min-w-0">
                            <p
                              className="font-body truncate"
                              style={{
                                color: "var(--text-primary)",
                                fontSize: "13px",
                              }}
                            >
                              {link.label}
                            </p>
                            <p
                              className="font-body truncate"
                              style={{
                                color: "var(--text-muted)",
                                fontSize: "11px",
                              }}
                            >
                              {link.url}
                            </p>
                          </div>
                          <button
                            onClick={() => removeLink(i)}
                            className="flex-shrink-0 p-1 rounded transition-colors mt-0.5"
                            style={{ color: "var(--text-muted)" }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#ef4444")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "var(--text-muted)")
                            }
                            aria-label="Remove link"
                          >
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            >
                              <path d="M1 1l11 11M12 1L1 12" />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Notes */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p
                    className="font-body mb-2"
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Notes
                  </p>
                  <textarea
                    placeholder="Talking points, context, reminders…"
                    value={notesValue}
                    onChange={(e) => handleNotesChange(e.target.value)}
                    className="w-full rounded-lg px-3 py-2.5 font-body outline-none transition-all resize-y"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      border: "0.5px solid rgba(255,255,255,0.08)",
                      color: "var(--text-primary)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      minHeight: "120px",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px var(--accent-glow)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
