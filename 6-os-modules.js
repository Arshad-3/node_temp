const os= require('os')

//info abt current user
const user=os.userInfo()
console.log(user)

//method returns system uptime in seconds
console.log("uptime is "+ os.uptime())

const currentOS={
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)