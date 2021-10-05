const fs = require('fs');

fs.readFile('moduleFuel.txt', function (err, data) {
    if (err) throw err;

    const arr = data.toString().split('\n');
    
    let count = 0;
    for (let i of arr) {
        let int = parseInt(i);
        int = Math.floor(int / 3);
        int -= 2
        count += int
    }

    console.log('count:', count)
});