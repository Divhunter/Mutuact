import pino from 'pino';
import pinopretty from 'pino-pretty';

const logger = pino({
  level: 'info',
  prettifier: pinopretty
});

// Middleware pour journaliser les requêtes
const logRequests = (req, res, next) => {
  logger.info(`Requête reçue: ${req.method} ${req.originalUrl}`);
  next();
};

export { logger, logRequests };

