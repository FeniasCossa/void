const express = require('express');
const app = express();
const sequelize = require('./config/db');

app.use(express.json());

// ROutas
app.use('/empresa', require('./routes/EmpresaRouter'));

const campanhaRoutes = require('./routes/CampanhaRouter');
app.use('/campanha', campanhaRoutes);

const tecnicoRoutes = require('./routes/TecnicoRouter');
app.use('/tecnico', tecnicoRoutes);


sequelize.sync().then(() => {
  console.log('Base de dados conectada');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}).catch(err => {
  console.error('Erro ao conectar ao banco:', err);
});
