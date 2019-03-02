const Web3=require('web3')
const Tx=require('ethereumjs-tx')
const web3= new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/f7778f45fb3c410bba5124725a804988"))

//bugs  //constant vs stateChange

const account="0xC93A00de4B875fEDa0D44Ba11EC8337269A6b4Ea"
const account2="0x100FE5a6e5409F650E0D495453955f22c01e493b"

const privateKey=Buffer.from('2d307110bab412689f8efa3a22466fac5aafc0e299449c685f6750450b26101f','hex')
const privateKey2=Buffer.from('9e7041b5b068464b6c308a49df40c2eec49cdfdeea2ccc78eaff71ced32d1ae8','hex')

var contractABI=[{"constant":true,"inputs":[],"name":"totalDiploma","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onwer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idDiploma","type":"string"},{"name":"_owner","type":"address"}],"name":"verifyDiploma","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"diplomas","outputs":[{"name":"idDiploma","type":"string"},{"name":"graduatedYear","type":"string"},{"name":"ownerName","type":"string"},{"name":"major","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getDiploma","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_graduatedYear","type":"string"},{"name":"_ownerName","type":"string"},{"name":"_major","type":"string"},{"name":"_idDiploma","type":"string"}],"name":"setDiploma","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nameSchool","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getSchoolInformation","outputs":[{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
var contractAddress='0x7abcc69a496a7885a6fCFE58bC8b2020B4dc2C11'

var contract = new web3.eth.Contract(contractABI,contractAddress);


contract.methods.getDiploma().call({from: account2}, function(error, result){
    console.log(result)
});


//call function
//create TxObjectS
// web3.eth.getTransactionCount(account,(err,txNonce)=>{

// 	var txObject={

// 		nonce: web3.utils.toHex(txNonce),
// 		gasLimit:web3.utils.toHex(4600000),
// 		gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei')),

// 		to:contractAddress,
// 		data:dataContract
// 	}

// 	//Step 2: signed tx
// 	var tx=new Tx(txObject);
// 	tx.sign(privateKey);

// 	const serializedTx=tx.serialize();
// 	const rawTransaction="0x"+serializedTx.toString('hex');

// 	//Step 3: sendRawTransaction
// 	web3.eth.sendSignedTransaction(rawTransaction,(err,result)=>{
// 		if(!err)
// 			console.log('transaction hash: ',result);
// 		console.log(err)
// 	})
// })


//ContractInstance.setDiploma.sendTransaction(account2,"2018","anh vũ","it","hash1",transactionObject,(error, result) => { console.log('tx hash',result) })

//call này chỉ gọi "tên biến public" thui => tốn 30p mới tìm ra lỗi
// var result= ContractInstance.nameSchool()
// console.log(result)

// //call promise: tuần tự
// ContractInstance.totalDiploma.call((error, result) => {
//   if (!error) {
//     console.log(result);
//   }
// })