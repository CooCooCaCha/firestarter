import glob from 'glob';

export default (app) => {
  let files = glob.sync( "api/**")
    .filter(file => file !== 'api' && file !== 'api/index.js') // Ignore base dir and index.js
    .filter(file => file.slice(-2) === 'js')                   // Filter out folders.
    .map(file => file.slice(3, -3));                           // Remove 'api' from the front and '.js' from the back.

  // Api now matches folder structure!
  files.map(file => app.use('/api' + file, require('.' + file))); 
};
