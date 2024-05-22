const crypto = require('crypto');

const generateReqSig = (params, apiToken) => {
  const sortedParams = Object.keys(params).sort().map(key => `${key}=${params[key]}`).join('');
  const urlEncodedParams = encodeURIComponent(sortedParams);
  const stringToSign = `${urlEncodedParams}${apiToken}`;
  return crypto.createHash('md5').update(stringToSign).digest('hex');
};

module.exports = { generateReqSig };
