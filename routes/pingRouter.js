const router = require('express').Router();
const pingController = require('../controllers/pingController');

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Ping endpoint
 *     description: Returns a JSON structure with a timestamp.
 *     responses:
 *       200:
 *         description: Successful response with timestamp.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get('/', pingController.ping);

module.exports = router;