const uuidv4 = require('uuid')

const sessionCookie = (req, res, next) => {
  const htmlPage =
    !req.path.match(/^\/(_next|static)/) &&
    !req.path.match(/\.(js|map)$/) &&
    req.accepts('text/html', 'text/css', 'image/png') === 'text/html'

  if (!htmlPage) {
    next()
    return
  }

  if (!req.cookies.sid || req.cookies.sid.length === 0) {
    req.cookies.sid = uuidv4()
    res.cookie('sid', req.cookies.sid, { sameSite: true })
  }

  next()
}

module.exports = sessionCookie
