export default (req, res) => {
  console.log(req.body);

  res.status(200).send('success');

  // if error send a server error suggestion to contact me throug other means
};
