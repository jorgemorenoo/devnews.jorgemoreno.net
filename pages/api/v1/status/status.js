function statusHandler(req, res) {
  res.status(200).json({ message: "API está trabalhando corretamente" });
}

export default statusHandler;
