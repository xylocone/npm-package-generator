import chalk from "chalk";
const { bgGreen, bgYellow, bgRed, magenta } = chalk;

/**
 * Present information to the user
 * @param {String} msg Information
 */
export function info(msg) {
  console.log(msg);
}

/**
 * Present a warning to the user
 * @param {String} msg Warning message
 */
export function warning(msg) {
  console.log(`${bgYellow("WARNING")} ${msg}`);
}

/**
 * Present an error to the user
 * @param {String} msg Error message
 */
export function error(msg) {
  console.error(`${bgRed("ERROR")} ${msg}`);
}

/**
 * Present a success message to the user
 * @param {String} msg Success message
 */
export function success(msg) {
  console.log(`${bgGreen("SUCCESS")} ${msg}`);
}

/**
 * Highlight a message with an ANSI color. It does NOT print the message.
 * @param {String} msg Message to highlight
 * @returns {String} Message highlighted with an ANSI color
 */
export function highlight(msg) {
  return magenta(msg);
}
