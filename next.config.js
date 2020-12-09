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
  // 'postprocessing',
])

module.exports = withTM()