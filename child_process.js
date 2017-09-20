const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`错误：${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});

const bat = spawn('cmd.exe',['/c', 'my.bat']);
bat.stdout.on('data', (data) => {
  console.log(data.toString());
});
bat.stderr.on('data', (data) => {
  console.log(data.toString());
});
bat.on('exit', (code) => {
  console.log(`子进程退出码：${code}`);
});

// const { execFile } = require('child_process');
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//   if(error) {
//     throw error;
//   }
//   //console.log(stdout);
// })

//promisify()异步
const util = require('util');
const exeFile = util.promisify(require('child_process').execFile);
async function getVersion() {
  const { stdout } = await exeFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
