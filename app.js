import express from 'express';
import leadersRoutes from './src/routes/leader.routes.js';
import gendersRoutes from './src/routes/gender.routes.js';
import personsRoutes from './src/routes/person.routes.js';

const app = express();
app.use(express.json());
app.use(leadersRoutes);
app.use(gendersRoutes);
app.use(personsRoutes);

export default app