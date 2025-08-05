const express = require('express');
const app = express();
const sequelize = require('./config/db');
const { swaggerUi, swaggerSpec } = require('./config/swagger');
const empresasRoutes = require('./routes/EmpresaRouter');
const campanhaRoutes = require('./routes/CampanhaRouter');
const tecnicoRoutes = require('./routes/TecnicoRouter');
const produtorRoutes = require('./routes/ProdutorRouter');
const produtorCampanharouters = require('./routes/ProdutoresCampanhaRouter');

app.use(express.json());

// ROutas
app.use('/empresa', empresasRoutes);
app.use('/campanha', campanhaRoutes);
app.use('/tecnico', tecnicoRoutes);
app.use('/produtor', produtorRoutes);
app.use('/produtor-campanha', produtorCampanharouters);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync().then(() => {
  console.log('Base de dados conectada');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}).catch(err => {
  console.error('Erro ao conectar ao banco:', err);
});
