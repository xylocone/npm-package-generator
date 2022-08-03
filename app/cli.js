#!/usr/bin/env node

import { join } from "path";
import { Command } from "commander";

// Internal dependencies
import { getCurrentVersion } from "./utils/getCurrentVersion.js";
import { installDependencies } from "./installDependencies.js";
import { generatePackageFiles } from "./generatePackageFiles.js";
import { info, highlight } from "./utils/inform.js";
import Task from "./utils/Task.js";
import TaskRunner from "./utils/TaskRunner.js";

const tasks = new TaskRunner();
const program = new Command();

program
  .name("npm-pkg-gen")
  .description("Scaffold an npm package")
  .version(await getCurrentVersion())
  .argument("<package-name>", "Package Name")
  .action(async (packageName) => {
    const targetDir = join(process.cwd(), packageName);

    info(
      `NOTE: You must make sure that the package name you provide is available on the npm registry at ${highlight(
        "https://npmjs.com"
      )}. If the package name you provide is taken, you won't immediately get an error, but your CI job will fail later.`
    );

    tasks.pushTask(
      new Task("Generating theme files...", async () => {
        await generatePackageFiles(targetDir, { packageName });
      })
    );

    tasks.pushTask(
      new Task("Installing dependencies...", async () => {
        await installDependencies(targetDir);
      })
    );

    tasks.runAll();
  });

program.parse();
