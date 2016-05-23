import { router, precache } from 'sw-toolbox';

router.get(':foo/index.html', function(request, values) {
  return new Response('Handled a request for ' + request.url +
      ', where foo is "' + values.foo + '"');
});

precache(['/stylesheets/bundle.css']);
