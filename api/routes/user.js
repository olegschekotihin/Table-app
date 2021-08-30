const {Router} = require('express')
const router = Router()
const User = require('../models/user')

/**
 * @swagger
 * /user/getAll:
 *   get:
 *     description: Get all Users
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get('/getAll', async (req, res) => {
    try{
        const users = await User.find({}).select('-_id -__v')
        res.send(users)
    } catch (e) {
        throw new Error(e)
    }
})

/**
 * @swagger
 * /user/add:
 *   post:
 *     summary: Create an User
 *     tags: [Table]
 *     requestBody:
 *         required: true
 *         content:
 *             application/json:
 *     responses:
 *       201:
 *         description: Created user
 *         content:
 *             application/json:
 *
 *
 */
router.post('/add', async (req, res) => {
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
})

module.exports = router