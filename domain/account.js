const {User} = require('../src/db/models');

module.exports = {
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
    }
}
