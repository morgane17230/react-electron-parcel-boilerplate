const packager = require("electron-packager");

async function build(options) {
  const appPaths = await packager(options);

  console.log(
    `✅ App build for linux ready in: ${appPaths.join(
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
  platform: "linux",
  icon: "./public/logo192.png",
  arch: "x64",
});
