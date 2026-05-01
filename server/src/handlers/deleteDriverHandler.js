const deleteDriver = require("../controllers/deleteDriverController");

const deleteDriverHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteDriver(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteDriverHandler;