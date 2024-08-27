const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');



// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',       // Cambia esto si el servidor MySQL está en otra dirección
  user: 'root',      // Tu usuario de MySQL
  password: '3106790293aA', // Tu contraseña de MySQL
  database: 'sena'      // El nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos.');
  

  // Realizar una consulta
  connection.query('SELECT * FROM perfil', (error, results, fields) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      connection.end(); // Cerrar la conexión en caso de error
      return;
    }
    console.log('Resultados de la consulta:', results);

    // Cerrar la conexión
    connection.end((err) => {
      if (err) {
        console.error('Error al cerrar la conexión:', err);
        return;
      }
      console.log('Conexión cerrada.');
    });
  });
});


//ADICIONALES
//para registro, locura
