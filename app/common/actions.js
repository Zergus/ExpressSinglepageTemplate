import model from './model.js';

let actions = {};

actions.getData = function () {
    return new Promise(function (res, rej) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/request');
        xhr.send(null);
        xhr.onreadystatechange = function () { //eslint-disable-line
            if (xhr.readyState === 4 && xhr.status === 200) {
                Object.assign(model, { data: JSON.parse(xhr.responseText).data });
                return res(model);
            }
        };
    });
};

actions.updateAnother = function () {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            Object.assign(model, { another: 'sosi' });
            res(model);
        }, 3000);
    });
};

onmessage = function (e) {
    if (actions[e.data.cmd]) {
        actions[e.data.cmd].call(null).then(function (result) {
            postMessage({ model, cmd: e.data.cmd });
        }).catch(function (error) {
            postMessage({ error, cmd: e.data.cmd });
        });
    }
};
