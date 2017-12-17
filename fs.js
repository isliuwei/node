const fs = require('fs');
const result = fs.readFile('./info.txt', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});
