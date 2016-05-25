import { router, precache, cacheFirst } from 'sw-toolbox';
import pathToRegexp from 'path-to-regexp';

precache(['/stylesheets/bundle.css'])

router.get('/stylesheets/.*', cacheFirst);
