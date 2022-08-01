export default class Task {
  /**
   * @param {String} label Label for the task
   * @param {Function} work The task function
   */
  constructor(label, work) {
    this.label = label;
    this.work = work;
  }

  async run() {
    await this.work();
  }

  getLabel() {
    return this.label;
  }
}
