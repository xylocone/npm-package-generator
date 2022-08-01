import { execaCommand } from "execa";

/**
 * Install npm dependencies for the scaffolded package
 * @param { Path } targetDir Target directory
 */
export async function installDependencies(targetDir) {
  try {
    await execaCommand("npm install", {
      cwd: targetDir,
    });
  } catch (e) {
    console.error(e.stderr);
    throw e;
  }
}
