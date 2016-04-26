import express from 'express';
var router = express.Router();

router.get('authorize', (req, res, next) => {
  return { success : true };
});

export default router;
