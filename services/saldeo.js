const axios = require('axios');
const { generateReqSig } = require('../utils/auth');
const { createXmlBody } = require('../utils/xml');

const saldeoApiUrl = process.env.SALDEO_API_URL;
const username = process.env.USERNAME;
const apiToken = process.env.API_TOKEN;

const sendRequest = async (command, data) => {
  const reqId = new Date().toISOString();
  const params = { username, req_id: reqId };
  const reqSig = generateReqSig(params, apiToken);

  const xmlBody = createXmlBody(command, data);

  const response = await axios.post(`${saldeoApiUrl}/${command}`, xmlBody, {
    headers: {
      'Content-Type': 'application/xml',
      username,
      req_id: reqId,
      req_sig: reqSig,
    },
  });

  return response.data;
};

const addDocument = (documentData) => sendRequest('document/add', documentData);
const getCompanies = () => sendRequest('company/list', {});
const getContractors = () => sendRequest('contractor/list', {});

module.exports = {
  addDocument,
  getCompanies,
  getContractors,
  // dodaj inne metody tutaj
};
