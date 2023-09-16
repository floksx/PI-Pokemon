const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Import necessary dependencies or middleware if needed
// const express = require('express');

// Define a route using the router instance
router.get('/example', (req, res) => {
    // Handle the GET request for /example
    res.send('This is an example route.');
  });
  
  // Export the router at the end of the file
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
