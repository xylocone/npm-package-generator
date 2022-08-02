#!/usr/bin/env node

import { join } from "path";
import { Command } from "commander";

// Internal dependencies
import { getCurrentVersion } from "./utils/getCurrentVersion.js";
import { installDependencies } from "./installDependencies.js";
import { generatePackageFiles } from "./generatePackageFiles.js";
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
