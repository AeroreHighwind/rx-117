import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { ExpressLogger } from "./services/logger.service.js";
import { BaseRepository } from "./services/base.repository.js";

export const SharedModule = {
  BaseRepository,
  ExpressLogger,
  loggerMiddleware,
};
