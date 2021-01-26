const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
require('dotenv').config()


let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ webPreferences:{
    nodeIntegration: false,
    preload: __dirname + '/preload.js'
    } });
  mainWindow.setFullScreen(true);
  const startUrl = process.env.ELECTRON_START_URL || `file://${__dirname}/build/index.html`;
  mainWindow.loadURL(startUrl);
});
