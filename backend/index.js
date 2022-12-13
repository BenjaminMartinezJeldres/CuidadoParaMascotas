const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


const serviceRoutes = require('./routes/serviceRoutes');
const vecinoRoutes = require('./routes/petRoutes');
const petRoutes = require('./routes/vecinoRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const mailerRoutes = require('./routes/mailerRoutes')

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', serviceRoutes);
app.use('/api', vecinoRoutes);
app.use('/api', petRoutes);
app.use('/api', categoryRoutes);
app.use('/api', mailerRoutes);
app.listen(process.env.PORT, () => {
    console.log('El proyecto esta corriendo en el puerto -> ', process.env.PORT);
})

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (err) => {
    if (err) {
        return console.log('Error al conectar con la base de datos -> ', err)
    }
    return console.log('Conectado a la base de datos')
});