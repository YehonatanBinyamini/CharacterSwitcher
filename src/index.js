const { app, Menu, MenuItem, globalShortcut, BrowserWindow } = require("electron");
const path = require("path");

const logoSrc = path.join(__dirname, "assets/images/logo.png")


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    // icon: path.resolve(__dirname, "src/assets/images/logo.png"),
    width: 600,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  });


  mainWindow.setIcon(logoSrc)

  const contextMenu = new Menu();
  contextMenu.append(new MenuItem({
    label: 'הדבק',
    role: 'paste',
  }));

  // Register the context menu to the main window
  mainWindow.webContents.on('context-menu', (e, params) => {
    contextMenu.popup(mainWindow, params.x, params.y);
  });

  globalShortcut.register('F1', () => {
    mainWindow.webContents.paste();
  });

  
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
  
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
};

app.on('will-quit', () => {
  globalShortcut.unregister('F1');
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
