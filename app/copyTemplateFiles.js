import Scaffold from "scaffold-generator";
import mustache from "mustache";
import { relative, join, resolve } from "path";
import { mkdir, copyFile } from "fs/promises";
import { walk } from "@root/walk";
import { fileURLToPath } from "url";

// Internal dependencies
import { error } from "./utils/inform.js";
import { pathExists } from "./utils/pathExists.js";

/**
 * Copy template files into the CWD
 * @param {Path} targetDir Target directory (into which the template contents are to be copied)
 * @param {Object} data Render data
 */
export async function copyTemplateFiles(targetDir, data) {
  const templateDir = getTemplateDirectory();

  try {
    await walk(templateDir, async (err, absPath, item) => {
      if (err) throw err;

      let relativePath = relative(templateDir, absPath);

      const scaffold = new Scaffold({
        data,
        render: mustache.render,
      });

      if (relativePath == "") return;
      if (await pathExists(join(targetDir, relativePath))) return;

      if (item.isDirectory()) {
        await mkdir(join(targetDir, relativePath));
      } else if (item.isFile()) {
        if (item.name.endsWith(".mustache"))
          await scaffold.copy(absPath, join(targetDir, relativePath));
        else await copyFile(absPath, join(targetDir, relativePath));
      }
    });
  } catch (e) {
    error("Could not copy template files.");
    console.trace(e);
    throw e;
  }
}

/**
 * Get the path of the template directory from its name
 * @returns {Path} Path to the template
 */
function getTemplateDirectory() {
  return resolve(fileURLToPath(import.meta.url), "..", "template");
}
