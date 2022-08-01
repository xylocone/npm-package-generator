import { info, error, success, highlight } from "./inform.js";

export default class TaskRunner {
  /**
   * @param {Array<Task>} tasks List of tasks to run
   */
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  /**
   * Add a task to the TaskRunner
   * @param {Task} newTask New Task
   */
  pushTask(newTask) {
    this.tasks.push(newTask);
  }

  /**
   * Run all the Tasks in series
   */
  async runAll() {
    let tasksSuccessful = true;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      const taskLabel = task.getLabel();

      try {
        info(
          `Running task ${highlight(i + 1)} of ${highlight(this.tasks.length)}`
        );
        info(taskLabel);
        await task.run();
        success(
          `Completed task ${highlight(i + 1)} of ${highlight(
            this.tasks.length
          )}.`
        );
      } catch (e) {
        console.trace(e);
        error(
          `Task ${highlight(i + 1)} of ${highlight(this.tasks.length)} failed.`
        );
        tasksSuccessful = false;
        break;
      }
    }

    if (!tasksSuccessful) error("Could not complete all tasks.");
    else success("Completed all tasks.");
  }
}
