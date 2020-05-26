const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');


let mainWindow;

app.on('ready',()=>{
  mainWindow = new BrowserWindow({
    frame: false,
    width:1230,
    height: 700,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(url.format({
    // pathname : path.join(__dirname, 'mainWindow.html'),
    pathname : process.env.NODE_ENV==='production'?path.join(__dirname, '..','build','index.html'):'localhost:3000',
    protocol : process.env.NODE_ENV==='production'?'file:':'http:',
    slashes : true
  }));

  // Quit app when closed
  mainWindow.on('closed',()=>{
    app.quit();
  })

  ipcMain.on('window:close',()=>{
    app.quit();
  })
  ipcMain.on('window:minimize',()=>{
    mainWindow.minimize();
  })

  ipcMain.on('window:maximize',()=>{
    mainWindow.maximize();
  })

  ipcMain.on('window:unmaximize',()=>{
    mainWindow.unmaximize();
  })
})

