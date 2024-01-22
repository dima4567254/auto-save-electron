const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
const fs = require('fs-extra')
    // const del = require('del');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 700,
        height: 500,
        icon: __dirname + "/img/icon.png"
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});


function copy1() {
    const username = process.env.USERPROFILE;
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1');
}

setInterval(copy1, 30000);