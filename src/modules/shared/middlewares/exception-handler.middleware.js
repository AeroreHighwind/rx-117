import { ExpressLogger } from "../shared.module.js";

export class ExceptionHandler {
  static handle(error) {
    switch (error.errno) {
      case 1062:
        ExpressLogger.log.red("Duplicate entry");
        break;
      case 1364:
        ExpressLogger.log.red(error);
        break;
      default:
        console.log("EXCEPTION HANDLER:", error);
        break;
    }

    // if (error.errno === 1062) {
    //   ExpressLogger.log.red("Duplicated DB entry");
    //   return 1062;
    // }
    // console.log(error);
  }
}
