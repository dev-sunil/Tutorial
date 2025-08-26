const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);


// method returns the system uptime in seconds
const uptime = os.uptime();
console.log(`The system uptime is: ${uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    platform: os.platform(),
    arch: os.arch(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    uptime: os.uptime()
};

console.log(currentOS);
