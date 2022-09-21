import app from './app.js'
import { sequelize } from './src/database/database.js'


// import './src/models/gender.js'
// import './src/models/leader.js'
// import './src/models/person.js'

async function main() {
  try {
    await sequelize.sync({force: false})
    app.listen (4000)
    console.log('servidor corriendo puerto 4000')
    // ---- Probar la conexion ----
    // await sequelize.authenticate();
    // console.log('Connection has been established successfully.');
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main ()
