export class ExpressLogger {
  static log = {
    green: (text) => console.log("\x1b[32m" + text + reset()),
    red: (text) => console.log("\x1b[31m" + text + reset()),
    blue: (text) => console.log("\x1b[34m" + text + reset()),
    yellow: (text) => console.log("\x1b[33m" + text + reset()),
  };

  static logRouterEndpoints(router) {
    router.stack.forEach((stack) =>
      ExpressLogger.log.green(
        `[EXPRESS LOG] Mapped Route: ${stack.route.path} ${Object.keys(
          stack.route.methods
        ).map((method) => method.toUpperCase())}`
      )
    );
  }
}
// Private function to provide the reset value
function reset() {
  return "\x1b[0m";
}
