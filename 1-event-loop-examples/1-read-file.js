const { readFile } = require('fs')

console.log('started a first task');

readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log('completed first task');
});

console.log('Starting next task');