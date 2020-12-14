// const withPlugins = require('next-compose-plugins');
// const withTM = require('next-transpile-modules');

// module.exports = withPlugins([
//   [
//     withTM,
//     {
//       transpileModules: ['three'],
//       unstable_webpack5: true,
//     },
//   ],
// ]);
const withTM = require('next-transpile-modules')([
  'drei',
  'three',
  'react-spring',
  'react-three-fiber',
  // 'postprocessing',
]);

module.exports = withTM();
