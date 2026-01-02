const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createApplication = async (req, res) => {
  try {
    const { jobId } = req.body;
    const workerId = req.userId; // From authMiddleware

    if (!jobId) {
      return res.status(400).json({ error: 'Falta el ID del empleo' });
    }

    // Check if already applied
    const existing = await prisma.application.findFirst({
      where: {
        jobId: parseInt(jobId),
        workerId: workerId
      }
    });

    if (existing) {
      return res.status(400).json({ error: 'Ya has postulado a este empleo' });
    }

    const application = await prisma.application.create({
      data: {
        jobId: parseInt(jobId),
        workerId: workerId,
        status: 'PENDING'
      }
    });

    res.status(201).json(application);

  } catch (error) {
    console.error('Application Error:', error);
    res.status(500).json({ error: 'Error al postular' });
  }
};

const getMyApplications = async (req, res) => {
    // Helper to get applications for the logged in worker
    try {
        const apps = await prisma.application.findMany({
            where: { workerId: req.userId },
            include: { job: { include: { employer: true } } },
            orderBy: { createdAt: 'desc' }
        });
        res.json(apps);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching applications' });
    }
};

module.exports = { createApplication, getMyApplications };
