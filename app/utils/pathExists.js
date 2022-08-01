import { access } from "fs/promises";

/**
 * Checks if the given path exists
 * @param {String} path Path to check
 */
export async function pathExists(path) {
  try {
    await access(path);
    return true;
  } catch (e) {
    return false;
  }
}
