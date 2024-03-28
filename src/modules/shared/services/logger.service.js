export class ExpressLogger {
  static log = {
    red: (text) => console.log("\x1b[31m" + getPrefix() + text + reset()),
    green: (text) =>
      console.log(
        "\x1b[32m" + getPrefix() + reset() + getDate() + "\x1b[32m" + text
      ),
    yellow: (text) =>
      console.log(
        "\x1b[33m" + getPrefix() + reset() + getDate() + "\x1b[33m" + text
      ),
    blue: (text) =>
      console.log(
        "\x1b[34m" + getPrefix() + reset() + getDate() + "\x1b[34m" + text
      ),
    cyan: (text) =>
      console.log(
        "\x1b[36m" + getPrefix() + reset() + getDate() + "\x1b[36m" + text
      ),
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
