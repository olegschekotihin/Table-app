const User = require('../models/user')

exports.getAllUsers = async function(req, res) {
    try{
        const users = await User.find({}).select('-_id -__v')
        res.send(users)
    } catch (e) {
        throw new Error(e)
    }
}

exports.createUser = async function(req, res) {
    const user = await new User({
        userId: req.body.id,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        age: req.body.age,
        sex: req.body.sex,
        organization: req.body.organization
    })
    try{
        await user.save()
        res.redirect('/')
    } catch (e) {
        throw new Error(e)
    }
}