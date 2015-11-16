import bodyParser           from "body-parser";
import api                  from "./api";
import webpack              from "webpack";
import webpackConfig        from "./webpack.config.js";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

var app  = new (require("express"))();
var port = 8080;

// Setup webpack server
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// Express plugins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup API routes
api(app);

// Base route
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

process.on('SIGTERM', function () {
  app.close();
});

// Start server
app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://<docker-machine ip>:%s/ in your browser.", port, port);
  }
});
