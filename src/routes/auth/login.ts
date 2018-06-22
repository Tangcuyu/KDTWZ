import * as keystone from 'keystone';

export = function (req, res, next) {

      const view = new keystone.View(req, res);
      const locals = res.locals;

      // locals.section is used to set the currently selected
      // item in the header navigation.
      locals.section = 'home';
      locals.data = {
            loginSatus: 'successed'
      };

      // Render the view
     // view.render('index');
     res.json(locals.data);
};
