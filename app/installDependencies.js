import { execaCommand } from "execa";

// Internal dependencies
import { highlight, info } from "./utils/inform.js";

/**
 * Install npm dependencies for the scaffolded package
 * @param { Path } targetDir Target directory
 */
export async function installDependencies(targetDir) {
  try {
    await execaCommand("npm install", {
      cwd: targetDir,
    });
    await execaCommand("npm run prepare", {
      cwd: targetDir,
    });

    info(
      "Now, you need to initialize a git repository in your project (`git init`) and add a Github remote repo. Then, you need to create two Github repo secrets to complete the configuration:"
    );

    info(
      `1. ${highlight(
        "GH_TOKEN"
      )} : This is supposed to contain a Github Personal Access Token. Learn how to make one at (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Make sure to make it permissive enough (might as well check all the boxes if you are unsure).`
    );

    info(
      `2.  ${highlight(
        "NPM_TOKEN"
      )} : This one is supposed to contain an npm automation token. Check out (https://docs.npmjs.com/creating-and-viewing-access-tokens/) to know how to make one.`
    );
  } catch (e) {
    console.error(e.stderr);
    throw e;
  }
}
