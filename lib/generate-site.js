const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject promise and execute .catch()
            if(err) {
                reject(err);
                // return out of function
                return;
            }

            // if there's no error, resolve the promise
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;