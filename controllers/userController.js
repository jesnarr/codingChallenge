const User = require("../models/userModel");

const userController = {
  getUserSettings: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findOne({ userId });
      if(!user)
        return res.status(404).json({msg:"User not found"})

      res.json(user.settings);

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUserSettings: async (req, res) => {
    const { userId } = req.params;
    const settings = req.body;
    try {
      let user = await User.findOne({ userId });

      if (!user) user = new User({ userId, settings });
      else user.settings = settings;

      await user.save();
      res.json({ message: "Settings updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
