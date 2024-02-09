const pingController = {
  ping: (req, res) => {
    res.json({ timestamp: new Date() });
  },
};

module.exports = pingController;
