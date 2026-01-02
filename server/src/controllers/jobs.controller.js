const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getJobs = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      include: {
        employer: { // Include company/employer details
          select: {
            name: true,
            companyName: true,
            logo: true,
            district: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc' // Newest first
      }
    });

    // Map response to match frontend expectation (employer -> company)
    const formattedJobs = jobs.map(job => ({
      ...job,
      company: {
        name: job.employer.companyName || job.employer.name,
        logo: job.employer.logo
      }
    }));

    res.json(formattedJobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Error al obtener empleos' });
  }
};

const createJob = async (req, res) => {
  try {
    // Ensure user is authenticated (middleware should have set req.userId)
    if (!req.userId) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    const { title, description, district, type, salary } = req.body;

    // Validate required fields
    if (!title || !description || !district || !salary) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const newJob = await prisma.job.create({
      data: {
        title,
        description,
        district,
        type: type || 'FULL_TIME',
        salary: parseFloat(salary),
        employerId: req.userId 
      }
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Error al crear empleo' });
  }
};

const getMyJobs = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    const jobs = await prisma.job.findMany({
      where: { employerId: req.userId },
      include: {
        _count: {
          select: { applications: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(jobs);
  } catch (error) {
    console.error('Error fetching company jobs:', error);
    res.status(500).json({ error: 'Error al obtener tus empleos' });
  }
};

module.exports = { getJobs, createJob, getMyJobs };
