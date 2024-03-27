export class ExpressLogger {
  static log = {
    green: (text) => console.log("\x1b[32m" + getPrefix() + text + reset()),
    red: (text) => console.log("\x1b[31m" + getPrefix() + text + reset()),
    blue: (text) => console.log("\x1b[34m" + getPrefix() + text + reset()),
    yellow: (text) => console.log("\x1b[33m" + getPrefix() + text + reset()),
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
  return `[EXPRESS] [${
    process.env.SYSTEMD_EXEC_PID
  }] - ${new Date().toLocaleString("es-AR")} - LOG `;
}
