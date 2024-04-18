import express from 'express';
import cors from 'cors';
import routes from './src/routes';

const port = process.env.PORT || 44377;
const app = express();

// const corsOptions = {
//     origin: 'http://localhost:600', // Permitir solicitudes solo desde este dominio
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
//     allowedHeaders: 'Content-Type,Authorization',
// };

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

app.listen(port, () => console.log('🚀 Express is running...'));
