import jwt from 'jsonwebtoken';
import { secretAccessKey } from '../config.js';

const getToken = (headerValue) => {
  if (typeof headerValue !== 'string') {
    return false;
  }

  const matches = headerValue.match(/(bearer)\s+(\S+)/i);
  return matches && matches[2];
};

const verifyToken = (req, res, next) => {
  const token = getToken(req.headers.authorization);

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, secretAccessKey, (err, decoded) => {
    if (err) {
      console.log(err, '----err');
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.decoded = decoded;
    next();
  });
};

export default verifyToken;
