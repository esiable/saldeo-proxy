import { getContractors } from '../../services/saldeo';

export default async function handler(req, res) {
  try {
    const response = await getContractors();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
