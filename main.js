const { BrowserWindow, app, ipcMain, Menu, nativeImage, Notification, Tray } = require('electron');
const path = require('path');
const appIcon = nativeImage.createFromPath("./src/assets/backdrop.png")
const isDev = !app.isPackaged;

app.name = "SquarePay";

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

ipcMain.on('notify', (_, message) => {
  new Notification({
    // title: 'SquarePay,
    body: message,
    icon: __dirname + '/src/assets/backdrop.png',
    hasReply: true
  }).show();
})
function createWindow() {
  const mainWindow = new BrowserWindow({
    title: "SquarePay",
    maxwidth: 1280,
    maxheight: 720,
    minWidth: 720,
    minHeight: 360,
    icon: appIcon,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      // worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('./public/index.html')
  // mainWindow.webContents.openDevTools();
  mainWindow.on("closed", function(){app.quit()})
}

app.whenReady().then( () => {
  const contextMenu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(contextMenu)
  const tray = new Tray(appIcon)
  tray.setToolTip('Square application.')
  tray.setContextMenu(contextMenu)
  // Menu.setApplicationMenu(null)
  createWindow();

  app.setAppUserModelId(app.name)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0){
      createWindow()
    }
  })
});

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Open file",
        click(){
          console.log(app.name)
        }
      },
      {
        label: "Exit",
        click(){
          app.quit()
        }
      }
    ]
  },
  {
    label: "Items",
    submenu: [
      {
        label: "Available Items"
      },
      {
        type: "separator"
      },
      {
        label: "Unavailable Items"
      }
    ]
  },
  {
    label: "Users"
  },
  {
    label: "Settings"
  }
]