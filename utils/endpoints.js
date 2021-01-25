const unknownEndpoint = (req, res) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

exports.unknownEndpoint = unknownEndpoint;