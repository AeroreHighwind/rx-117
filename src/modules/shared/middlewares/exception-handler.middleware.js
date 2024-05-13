import { ExpressLogger } from "../shared.module.js";

export class ExceptionHandler {
  static handle(error) {
    // Handling HTTP errors
    if (error.status) {
      switch (error.status) {
        case 400:
          return this.#logError("Bad Request");

        case 401:
          return this.#logError("Unauthorized");

        case 403:
          return this.#logError("Forbidden");

        case 404:
          return this.#logError("Not Found");

        default:
          return this.#logError("Internal Server Error: " + error);
      }
    }

    // Handling database or other errors
    if (error.errno) {
      switch (error.errno) {
        case 1062:
          return this.#logError("Duplicate entry");

        case 1364:
          return this.#logError(error);

        default:
          return this.#logError("EXCEPTION HANDLER" + error);
      }
    }
  }

  static #logError(error) {
    return ExpressLogger.log.red(error);
  }
}
