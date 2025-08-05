const express = require('express');
const app = express();
const sequelize = require('./config/db');
const empresasRoutes = require('./routes/EmpresaRouter');
const campanhaRoutes = require('./routes/CampanhaRouter');
const tecnicoRoutes = require('./routes/TecnicoRouter');
const produtorRoutes = require('./routes/ProdutorRouter');

app.use(express.json());

// ROutas
app.use('/empresa', empresasRoutes);
app.use('/campanha', campanhaRoutes);
app.use('/tecnico', tecnicoRoutes);
app.use('/produtor', produtorRoutes);


sequelize.sync().then(() => {
  console.log('Base de dados conectada');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}).catch(err => {
  console.error('Erro ao conectar ao banco:', err);
});
