const router = require('express').Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /user/{userId}/settings:
 *   get:
 *     summary: Get user settings
 *     description: Retrieve the current settings for a specific user.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user whose settings are to be retrieved.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with user settings.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 preferredTheme:
 *                   type: string
 *                 resultsPerPage:
 *                   type: number
 *                 sendEmail:
 *                   type: boolean
 *       404:
 *         description: User not found.
 *
 *   post:
 *     summary: Update user settings
 *     description: Update the settings for a specific user.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user whose settings are to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               preferredTheme:
 *                 type: string
 *               resultsPerPage:
 *                 type: number
 *               sendEmail:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Settings updated successfully.
 *       404:
 *         description: User not found.
 */
router.route('/:userId/settings')
    .get(userController.getUserSettings)
    .post(userController.updateUserSettings)

/** uncomment this routes to activate put and patch 
    // .put(userController.updateUserSettings)
    // .patch(userController.updateUserSettings)
**/
module.exports = router;