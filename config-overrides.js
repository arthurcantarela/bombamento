// Adding configs to webpack.config without ejecting it
module.exports = function override(config, env) {
  const sassconf = Object.assign({}, config.module.rules[1].oneOf[2]);
  sassconf.test = /\.scss$/;
  sassconf.use.splice(3, 0, {
    loader: require.resolve("sass-loader")
  });
  config.module.rules[1].oneOf.unshift(sassconf);
  return config;
};
