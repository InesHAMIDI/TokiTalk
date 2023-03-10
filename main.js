//on crée la fenêtre electron
const { app, BrowserWindow } = require('electron')
const path = require('path');

// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 500,
    icon: './favicon.svg',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });
  win.loadFile('index.html')
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})