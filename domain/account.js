const {User} = require('../src/db/models');

module.exports = {
    getAccountInfo: async(req, res, next) => {
        let {address} = req.body;

        if(address){
            let user = await User.findAll({
                where:{ address: req.body.address }});
            
            if(user.length > 0){
                let {address, balance} = user[0];
    
                res.status(200).send({
                    address: address,
                    balance: balance
                });
            }
            else{
                res.status(500).send({
                    message: "There is no account"
                });
            }
        }
        else{
            res.status(200).send({
                message: "Login Please"
            });
        }
    },
    makeAccount: async(req, res, next) => {
        const password = req.body.password;
        const newAccAddr = await web3.eth.personal.newAccount(password);

        await User.create({
            address: newAccAddr,
            password: password,
            balance:"0"
        });

        res.status(201).send({
            message: "Account Created",
            data: {
                address: newAccAddr
            }
        });
    },
    transferEth: async(req, res, next) => {
        const { from_address, to_address, value } = req.body;

        web3.eth.sendTransaction({
            from: from_address,
            to: to_address,
            value: web3.utils.toWei(value, 'ether')
        }).on('receipt', (receipt)=>{
            res.status(200).send({
                message:'Sucess',
                data:{receipt}
            });
        });
    }
}
