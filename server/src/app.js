const express = require('express');
const cors = require('cors');
// const { PrismaClient } = require('@prisma/client');
const app = express();
// const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'ChambeaFacil API is running 🚀' });
});

// Routes
app.use('/api/jobs', require('./routes/jobs.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/applications', require('./routes/applications.routes'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
