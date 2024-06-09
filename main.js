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

setInterval(copy1, 30000);//30 сек

function copy2() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/2');
}

setInterval(copy2, 60000); //60 сек // 1 мин

function copy3() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
}

setInterval(copy3, 120000); //120 сек // 2 мин

function copy3() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/4');
}

setInterval(copy5, 180000); //180 сек // 3 мин
function copy5() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/5');
}

setInterval(copy6, 240000); // сек // 4 мин
function copy6() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/6');
}

setInterval(copy7, 300000);  // сек // 5 мин
function copy7() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/7');
}

setInterval(copy8, 360000); // сек // 6 мин
function copy8() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/8');
}

setInterval(copy9, 420000); // сек // 7 мин
function copy9() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/9');
}

setInterval(copy10, 480000); // сек // 8 мин
function copy10() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/10');
}

setInterval(copy11, 540000); // сек // 9 мин
function copy11() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/11');
}

setInterval(copy12, 600000); // сек // 10 мин
function copy12() {
    fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/12');
}

// setInterval(copy3, 120000);
// function copy3() {
//     fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
// }

// setInterval(copy3, 120000);
// function copy3() {
//     fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
// }

// setInterval(copy3, 120000);
// function copy3() {
//     fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
// }

// setInterval(copy3, 120000);
// function copy3() {
//     fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
// }

// setInterval(copy3, 120000);
// function copy3() {
//     fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
// }

// setInterval(copy3, 120000);
// function copy3() {
//     fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
// }

// setInterval(copy3, 120000);
// function copy3() {
//     fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
// }

// setInterval(copy3, 120000);
// function copy3() {
//     fs.copy(`${username}/AppData/Roaming/dekovir/crafttheworld`, 'C:/1/3');
// }

// setInterval(copy3, 120000);