const packager = require("electron-packager");
// const electronInstaller = require('electron-winstaller');

async function build(options) {
  const appPaths = await packager(options);

  console.log(
    `✅ App build for windows ready in: ${appPaths.join(
      "\n"
    )}, creating installer...`
  );
}

build({
  name: "app",
  dir: "./",
  out: "dist",
  overwrite: true,
  asar: true,
  icon: "./public/logo192.png",
  platform: "win32",
  arch: "ia32",
});
