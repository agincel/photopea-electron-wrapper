# Photopea Electron Wrapper
Run the best PS alternative in a local Electron window - in case its built-in "install Photopea" menu option isn't available on your OS!

## Running
Run `npm install` and then `npm start` inside the repo folder!
(I didn't build a distribution of it using Electron Forge, sorry.)

## Command-line Arguments
You can run `npm start -- --windowed` or `npm run windowed` to make the Electron window not maximize itself on launch.

## Premium
This app works exactly as you'd expect in the default, free, ad-supported experience. Once you've signed into your Photopea account once it should stay cached like the normal website (thanks Electron), and Premium will apply to the app just like it would on the site. Honestly Photopea is absolutely worth the money to go ad-free. Go Photopea!

---

## Other
You could very easily adapt this wrapper to wrap any other site you wanted by changing `siteUrl` in `main.js`. I'm sure something like this already existed online, but it was a fun learning exercise for me regardless. If anyone else finds this useful, that's rad.

### About that Bash Script
I'm running this via KDE Plasma 44, and it was easiest for me to set up a new "application" that just runs that script via the Terminal so that I could run Photopea from my App Launcher. All it does is run `electron .`, same as `npm start` does.