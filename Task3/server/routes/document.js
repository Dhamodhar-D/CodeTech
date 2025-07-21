const express = require('express');
const Document = require('../models/Document');
const router = express.Router();

// Create new document
router.post('/', async (req, res) => {
  const { title } = req.body;
  const doc = new Document({ title });
  await doc.save();
  res.json(doc);
});

// Get document by id
router.get('/:id', async (req, res) => {
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).send('Document not found');
  res.json(doc);
});

// Save/update document content
router.put('/:id', async (req, res) => {
  const { content } = req.body;
  const doc = await Document.findByIdAndUpdate(req.params.id, { content, updatedAt: Date.now() }, { new: true });
  res.json(doc);
});

module.exports = router;
