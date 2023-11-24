// Import des modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import hpp from 'hpp';
import mongoSanitize from 'express-mongo-sanitize';
import 'dotenv/config';
import { connectToDatabase } from './config/db.js';
import routerProjet from './routes/projetRoutes.js';
import routeUser from './routes/userRoutes.js';
import { logRequests, logger } from './logger/index.js';

// import { Server } from 'socket.io'

const app = express()
app.use(cors())
// const server = http.createServer(app)

// const io = new Server(server, {
//   cors: {
//     origin: process.env.ORIGIN_URL,
//     methods: ["GET", "POST"],
//     credentials: true,
//     transports: ['websocket', 'polling'],
//   },
//   allowEIO3: true
// })

// io.on('connection', (socket) => {
//   logger.info('New client connected');

//   socket.on('disconnect', () => {
//     logger.info('Client disconnected');
//   });

// });

const PORT = process.env.PORT;

// Connexion à la base de données
connectToDatabase();

// Configuration des middlewares

app.use(cors({
  origin: process.env.ORIGIN_URL,
  methods: 'GET,POST,DELETE,PATCH', // Méthodes HTTP autorisées
  allowedHeaders: 'Content-Type, Authorization', // En-têtes autorisés
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(hpp());
app.use(mongoSanitize());
app.set('trust proxy', true);

// Déclaration des routes
app.get('/', (req, res) => {
  res.send("Bonjour Tout le monde, vous êtes sur l'API de 2BR");
});
app.use('/api/projets', routerProjet);
app.use('/api/auth', routeUser);

app.use(logRequests)

// Middleware d'erreur (doit être le dernier middleware)
app.use((err, req, res, next) => {
  // Gérez et enregistrez l'erreur ici
  logger.error('Erreur détectee : ', err);
  res.status(500).send('Erreur détectée');
});

// Gestionnaire d'erreurs globaux
process.on('uncaughtException', (err) => {
  logger.error('Erreur non capturee : ', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Rejet de promesse non capture : ', reason);
});

app.listen(PORT || 5000, () => {
  logger.info(`Le serveur a demarre au port ${PORT}`);
});

// export { io };
