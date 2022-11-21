/* eslint-disable no-undef */
const Bundler = require('parcel-bundler');
let electronStarted = false;

const entry = './public/index.html';
const options = {
  outDir: './build',
  publicUrl: './',
  sourceMaps: false,
  autoInstall: false,
  hmr: false,
  target: 'electron',
};

(() => {
  const bundler = new Bundler(entry, options);

  bundler.on('bundled', () => {
    if (!electronStarted) {
      electronStarted = true;

      require('child_process').spawn('npm', ['run', 'electron'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });
    }
  });

  bundler.bundle();
})();
