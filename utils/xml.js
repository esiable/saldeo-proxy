const js2xmlparser = require('js2xmlparser');

const createXmlBody = (rootElement, data) => {
  return js2xmlparser.parse(rootElement, data);
};

module.exports = { createXmlBody };
