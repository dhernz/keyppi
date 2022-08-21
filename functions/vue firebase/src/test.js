// const privateKey= `-----BEGIN PUBLIC KEY-----\nMIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQB2QYU6A5MLkUF7KO1vqr4L\n7l64NYidaRfJXbdl0W9cEI07uLTDu2c0Ymx6bTfvfoitWi5PWFvlG9WIwrMUD0xh\n91rGiRYHh35buP8zzrcOEgVlUALIvWbLoeGBXQbxRZBCLCPKdUBrXjfaU1BDI2yo\nn41tHhkyxC+EtuTdbY26HfkHDbv1JEJlqBdNtUYNr07/Ylb6gM9BRIFU3dcY7jcC\nH3CrDCn5/+KLjwYqva9hWk8cxipzufZD3rSuDFTiKYJmxaQf4mQpLw/BwSPoKxad\nJwUNchknyInQTDKgs5CfV+4LXH/ecsM/zLM54wPJiH90VYTkRrUO2IaKcHwpmyZx\nAgMBAAE=\n-----END PUBLIC KEY-----`
// const buff = Buffer.from(privateKey).toString('base64');
// console.log(buff);
// const key = Buffer.from(buff, 'base64').toString('ascii');
// console.log(key);

// const JSEncrypt = require("jsencrypt");
// const encrypt = new JSEncrypt();
// const user = "SAF";
// const password = "SAF5$";

// console.log("encrypt:", encrypt);
// console.log(user, password);

const priKey = `-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQB2QYU6A5MLkUF7KO1vqr4L7l64NYidaRfJXbdl0W9cEI07uLTD\nu2c0Ymx6bTfvfoitWi5PWFvlG9WIwrMUD0xh91rGiRYHh35buP8zzrcOEgVlUALI\nvWbLoeGBXQbxRZBCLCPKdUBrXjfaU1BDI2yon41tHhkyxC+EtuTdbY26HfkHDbv1\nJEJlqBdNtUYNr07/Ylb6gM9BRIFU3dcY7jcCH3CrDCn5/+KLjwYqva9hWk8cxipz\nufZD3rSuDFTiKYJmxaQf4mQpLw/BwSPoKxadJwUNchknyInQTDKgs5CfV+4LXH/e\ncsM/zLM54wPJiH90VYTkRrUO2IaKcHwpmyZxAgMBAAECggEAN8Gkwzm0NxwBt8QQ\nTzo96Po3BruW8kD+yh65vfQFgW78aFAqSq8tdfGCHCcq3GzYnIOMmjSa/2ckQxsp\nvCeKaBZsYnd4P4yO80hCa3bnsGamzKHw7hz/PrvQy2HFSDT4U3rkVSz7dqQxyWrG\nySEGtmqkD/LFBr6heP2S4yQoUrvwtjPP4Ogc3fgKv5NO/4oLBvlVv60p+mCU1kz3\n5DNIS1LloC3ada4g3FNEaIp3qk063dVGxgVDQqu2x9CgLJQW21XFE2wkglJWvS5K\nIosAfd8ryKbJ+a22H2IbslHoD9UEU+h4HpIeIOir2l7snT3Ni8hho3Z6uVid4GKU\ng0DFAQKBgQDNkJwHXzq0NgTpRz2AUqbtqhe9QSjFALd79Z4wtPBspYkab6+6m5yw\npZhjYQ5VqOoJXdj4tTMNhsOscqx9ymatHpmOjpurw8lqTot+euDpxYLXK2YUDmLT\nwqpozpdTs45UhexUa3Yh5iPcInDX8UrFsmhupfE5U8ZiKoJFp0RyOQKBgQCTRRh6\nQTVt7KfYsfIqyAw8eVgEDyZzPaWEb9Yd4XaLpAq/MPWuiSpOnA/hwPqKoKMhocNN\nJ/m5x/NaQVgm6kJCBCpbjCmoZxBFYjNdgg7/It6477ZM3+/FQUtFB1GKBX6avV7W\ndIadrgqxnn+I5ehWB1YxSU1QHv2rJLUB3nR1+QKBgQCPZAcisU/Oszu7ycDhyUW9\n1P9YOaKJwRU8d7mP+jcXYmT/ttaa0b98DRb+g44vPHN8cyVNX4AsOEw394nQ+SWk\nLwsoQNvf9eOCryVo5agMCYVaOGCtLtfLJSgfkbRHY6Gt3flbbdZqkRGEldWnHB5v\nRyLHxCM/POvOQB69HY+GKQKBgHsr9h4CPgqzPWrq4a1QZZOKtcenWDRYYgATfZS+\nRuTiDa785u7UgBMBSfM58RJS6j2tyufUQHRWvL1HG9Boa4RFcZvh7dGQabZuPKG/\nroVLh9ZLf0Bqp2JmiuqwBU2X7NzE9/YLva9RqlYGR4qbJ6gUOM2+DjCtyuICMHXg\nta0ZAoGAD2Ig405xY1dq2qkgpN4OGx50cKIG1cvbaIdHM8RjTPlkhlDnMnqSGsxu\nXQCL4drTCa5UYBEBIYTFuNldWz1ksqUZx9jWv2ieXkzIzsOGvGh8IyAoYhQ0jy6a\nrpH5WDHdrvCJFa9DLAcBC3n1T+acHHSEqq827azglSF329fqy6U=\n-----END RSA PRIVATE KEY-----`;
const buff = Buffer.from(priKey).toString('base64');
console.log(buff);

// Encrypt with the public key...
// // var encrypt = new JSEncrypt();
// encrypt.setPublicKey(key);
// var encryptedUser = encrypt.encrypt(user);
// const encryptedPass = encrypt.encrypt(password);
// console.log("encrypted usr: ", encryptedUser,);
// console.log("encrypted pass: ", encryptedPass,);

// Use key anywhere in your code.
// const forge = require("node-forge");
// var md = forge.md.sha256.create();
// md.update('The quick brown fox jumps over the lazy dog');
// console.log(md.digest().toHex());
// Object.keys()

// import CryptoJS from "crypto-js";
// let secret_key = "q2mnSgHWxUPiNW8yyslsnEzUgTEAY86Aq4eWmKV8d7Xshd4qiIpiU53T94x0h1Xv1XyAyHwGlpTYwXWj"
// let password = "mi contrasena"
// let salt = "abcdefg123456789" // se genera aleatoriamente para cada request

// almacenarEnBD(salt, pas)

// const almacenarEnBD = (salt, password) => {
//     // almacena en la bd
//     // let saltedPassword = salt + password;
//     // abcdefg123456789mi contrasena
//     let timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString();
//     // 1234567890
//     getSignature(salt, timestamp, password);
// }


// async function getSignature(salt, timestamp, password) {
//     const to_sign =
//       salt + timestamp + password;
//     console.log("to_sign:", to_sign);
//     let signature = CryptoJS.enc.Hex.stringify(
//       CryptoJS.HmacSHA256(to_sign, secret_key)
//     );
  
//     signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));
//     console.log("signature: ", signature);
//     return signature;
//   };