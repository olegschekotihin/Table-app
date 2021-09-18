const {Router} = require('express')
const router = Router()
const UserController = require('../controllers/user')

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
router.get('/getAll', UserController.getAllUsers)

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
router.post('/add', UserController.createUser)

module.exports = router