import { app, BrowserWindow, screen } from "electron";
let mainWindow;
const siteUrl = "https://photopea.com";

// If the user wants to start windowed instead of maximized.
const startWindowed = process.argv.includes("--windowed");
const screenWidthPercentage = 0.9;
const screenHeightPercentage = 0.9;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "Photopea",
    show: false,
    width: Math.floor(screen.getPrimaryDisplay().width * screenWidthPercentage),
    height: Math.floor(screen.getPrimaryDisplay().height * screenHeightPercentage)
  });

  mainWindow.loadURL(siteUrl);

  // Once ready, maximize if we didn't specify windowed, then show.
  mainWindow.on("ready-to-show", () => {
    if (!startWindowed) {
      mainWindow.maximize();
    }

    mainWindow.show();
  });

  // Close the app when the main window is closed.
  mainWindow.on("closed", () => {
    app.quit();
  });
}

app.whenReady().then(() => {
  createWindow();
});