import express from 'express';
import nconf from 'nconf';
import * as React from 'react';
import { renderToString } from 'react-dom/server'

nconf.env()
     .file({ file: 'config.json', search: true });

var router = express.Router();

/* GET home page. */
router.get('*', (req, res, next) => {
    let title = 'GetInvolved';
    let development = !nconf.get("NODE_ENV");
    let content = renderToString(<div className="loading"></div>);
    res.render('index', { title, development, content });
});

export default router;
