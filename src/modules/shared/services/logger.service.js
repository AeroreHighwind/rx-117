export class ExpressLogger {
  static log = {
    red: (text) => console.log("\x1b[31m" + getConcat() + "\x1b[31m" + text),
    green: (text) => console.log("\x1b[32m" + getConcat() + "\x1b[32m" + text),
    yellow: (text) => console.log("\x1b[33m" + getConcat() + "\x1b[33m" + text),
    blue: (text) => console.log("\x1b[34m" + getConcat() + "\x1b[34m" + text),
    cyan: (text) => console.log("\x1b[36m" + getConcat() + "\x1b[36m" + text),
  };

  static logRouterEndpoints(router) {
    router.stack.forEach((stack) =>
      ExpressLogger.log.green(
        `Mapped Route: ${stack.route.path} { ${Object.keys(
          stack.route.methods
        ).map((method) => method.toUpperCase())} }`
      )
    );
  }
}
// Private function to provide the reset value
function reset() {
  return "\x1b[0m";
}

function getPrefix() {
  return `[EXPRESS] [${process.pid}] - `;
}
function getSufix() {
  return ` - LOG `;
}
function getDate() {
  return `${new Date().toLocaleString("es-AR")} `;
}

function getConcat() {
  return getPrefix() + reset() + getDate();
}
