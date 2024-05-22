import { addDocument } from '../../services/saldeo';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    const documentData = req.body;
    const response = await addDocument(documentData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
