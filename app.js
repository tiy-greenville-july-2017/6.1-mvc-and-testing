const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./router');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

routes(app);

if(require.main === 'module'){
  app.listen(3000);
}

module.exports = app;
