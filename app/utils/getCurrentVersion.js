import { join } from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

/**
 * Get the package version
 * @returns {Promise<String>} Package version
 */
export async function getCurrentVersion() {
  const pkgRoot = join(fileURLToPath(import.meta.url), "..", "..", "..");
  const pkg = JSON.parse(await readFile(join(pkgRoot, "package.json")));
  return pkg.version;
}
