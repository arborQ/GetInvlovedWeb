import express from 'express';
import nconf from 'nconf';
import * as React from 'react';

nconf.env()
     .file({ file: 'config.json', search: true });

var router = express.Router();

/* GET home page. */
router.get('*', (req, res, next) => {
    let title = 'GetInvolved';
    let development = !nconf.get("NODE_ENV");
    let content = React.renderToString(<div>from server</div>);
    res.render('index', { title, development, content });
});

export default router;
