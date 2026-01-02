const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || 'chambea_secret_key_123';

const register = async (req, res) => {
  try {
    const { 
      email, 
      password, 
      name, 
      role, 
      district, 
      // Worker fields
      title,
      // Company fields
      companyName,
      address,
      latitude,
      longitude
    } = req.body;

    // Validation
    if (!email || !password || !name || !role) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Role Validation (Strict Huaraz Logic could go here or in frontend)
    if (role !== 'WORKER' && role !== 'COMPANY') {
       return res.status(400).json({ error: 'Rol inválido' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
        district,
        title: role === 'WORKER' ? title : undefined,
        companyName: role === 'COMPANY' ? companyName : undefined,
        address: role === 'COMPANY' ? address : undefined,
        latitude: role === 'COMPANY' ? latitude : undefined,
        longitude: role === 'COMPANY' ? longitude : undefined,
        verified: false 
      }
    });

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '24h' });

    res.status(201).json({ 
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        district: user.district
      },
      token 
    });

  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '24h' });

    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        district: user.district
      },
      token
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

module.exports = { register, login };
