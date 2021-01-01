const crypto = require('crypto-js')

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};


const generateHash = (d) => {
   return crypto.SHA256(d).toString()
}

module.exports = generateHash

// console.log(generateHash(data1))
// console.log(generateHash(JSON.stringify(dataObject)))