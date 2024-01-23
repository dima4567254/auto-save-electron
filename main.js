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

const username = process.env.USERPROFILE;

function copy1() {

    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/1');
}

setInterval(copy1, 30000);

function copy2() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/2');
}

setInterval(copy2, 60000);

function copy3() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
}

setInterval(copy3, 120000);