const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

const text = 'Hello RSA!';
const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);

const sign = key.sign(text,'base64');
console.log('signed:', sign);
const verify = key.verify(text,sign,'utf8','base64');
console.log('verify:', verify);