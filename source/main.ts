import {app, BrowserWindow} from 'electron'
import * as url from 'url'
import * as path from 'path'

let win


function createWindow() {
    var mainWindow = new BrowserWindow({
        darkTheme:true
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'html/main.html'),
        protocol:'file',
        slashes: true
    }))
}
app.on('ready', createWindow)