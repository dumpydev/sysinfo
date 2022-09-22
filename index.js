const os = require('os');
const { spawn } = require('node:child_process');
require('colors')
const main = async () => {
    console.log("System Specs:".rainbow);
    console.log("CPU: ".red + os.cpus()[0].model.blue);
    console.log("CPU Speed: ".red + (os.cpus()[0].speed + " MHz").blue);
    console.log("RAM: ".red + (Math.round(os.totalmem() / 1024 / 1024 / 1024) + " GB").blue);
    console.log("OS: ".red + os.platform().blue);
    console.log("OS Version: ".red + os.release().blue);
    console.log("OS Arch: ".red + os.arch().blue);
    console.log("Hostname: ".red + os.hostname().blue);
    console.log("Uptime: ".red + (Math.round(os.uptime()) + " seconds").blue);
    console.log("User: ".red + os.userInfo().username.blue);
    console.log("Home Directory: ".red + os.userInfo().homedir.blue);
    console.log("Shell: ".red + os.userInfo().shell.blue);
    console.log("End of System Specs".rainbow);
}
main()