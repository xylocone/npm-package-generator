import { mkdir } from "fs/promises";

// Internal dependencies
import { copyTemplateFiles } from "./copyTemplateFiles.js";
import { renameCopiedFiles } from "./renameCopiedFiles.js";
import { error } from "./utils/inform.js";
import { pathExists } from "./utils/pathExists.js";

/**
 * Generate package files in the CWD
 * @param { Path } targetDir Target directory
 * @param { Object } data Package template rendering data
 */
export async function generatePackageFiles(targetDir, data) {
  try {
    if (await pathExists(targetDir)) {
      error(`Directory already exists in the CWD.`);
      throw new Error();
    } else {
      await mkdir(targetDir);
    }

    await copyTemplateFiles(targetDir, data);
    await renameCopiedFiles(targetDir);
  } catch (e) {
    error("Could not generate package files.");
    console.trace(e);
    throw e;
  }
}
