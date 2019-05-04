const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

const text = 'Hello RSA!';
console.log('*****************encrypt*******************');
const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);
console.log('*****************encrypt*******************');

console.log('*******************************************');
console.log('*****************decrypt*******************');
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);
console.log('*****************decrypt*******************');

console.log('*******************************************');
console.log('*****************sign**********************');
const sign = key.sign(text,'base64');
console.log('signed:', sign);
console.log('*****************sign**********************');

console.log('*******************************************');
console.log('*****************verify**********************');
const verify = key.verify(text,sign,'utf8','base64');
console.log('verify:', verify);
console.log('*****************verify**********************');