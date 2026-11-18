"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { useWizard } from "@/context/WizardContext";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

export function ModeSelection() {
  const { setMode } = useWizard();
  const router = useRouter();

  const handleModeSelect = (mode: "standard" | "advanced") => {
    setMode(mode);
    router.push("/creator/upload-content/media-input");
  };

  const shortcuts = useMemo(
    () => [
      {
        id: "verification-standard-mode",
        label: "Choose Standard Mode",
        keys: ["1"],
        handler: () => handleModeSelect("standard"),
        category: "Verification",
      },
      {
        id: "verification-advanced-mode",
        label: "Choose Advanced Mode",
        keys: ["2"],
        handler: () => handleModeSelect("advanced"),
        category: "Verification",
      },
    ],
    [setMode, router]
  );
  const { getDisplayKeys } = useKeyboardShortcuts({ shortcuts });
  const standardShortcut = getDisplayKeys(shortcuts[0]).join("+");
  const advancedShortcut = getDisplayKeys(shortcuts[1]).join("+");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Select Verification Mode</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => handleModeSelect("standard")}
          className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left"
        >
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold">Standard Mode</h3>
            <kbd className="rounded border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300" aria-label={`Shortcut ${standardShortcut}`}>
              {standardShortcut}
            </kbd>
          </div>
          <p className="text-gray-600">
            Upload your media file and we&apos;ll compute the hash for you.
          </p>
        </button>
        <button
          onClick={() => handleModeSelect("advanced")}
          className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left"
        >
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold">Advanced Mode</h3>
            <kbd className="rounded border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300" aria-label={`Shortcut ${advancedShortcut}`}>
              {advancedShortcut}
            </kbd>
          </div>
          <p className="text-gray-600">
            Manually enter content and manifest hashes for verification.
          </p>
        </button>
      </div>
    </div>
  );
}
