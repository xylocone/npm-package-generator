import { walk } from "@root/walk";
import { rename } from "fs/promises";

// Internal dependencies
import { error } from "./utils/inform.js";

/**
 * Rename the copied template files by stripping away their ending .mustache extension
 * @param {Path} targetDir Path of the directory in which the files are to be renamed
 */
export async function renameCopiedFiles(targetDir) {
  try {
    await walk(targetDir, async (e, absPath) => {
      if (e) throw e;

      let newPath = absPath.replace(/(.+)\.mustache$/, "$1");
      if (absPath == newPath) return;

      await rename(absPath, newPath);
    });
  } catch (e) {
    error("Could not rename copied template files.");
    console.trace(e);
    throw e;
  }
}
