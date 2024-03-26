import { loggerMiddleware } from "./middlewares/logger.middleware";
import { ExpressLogger } from "./services/logger.service";
import { BaseRepository } from "./services/base.repository.mjs";

export const SharedModule = {
  BaseRepository,
  ExpressLogger,
  loggerMiddleware,
};
