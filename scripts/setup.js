const os = require("os");
const fs = require('node:fs');

const userHomeDir = os.homedir();

let content;

switch(process.platform) {
	case('darwin'):
		content = 'sdk.dir = ' + userHomeDir + '/Library/Android/sdk'
		break;
	case('win32'):
		content = 'sdk.dir = ' + userHomeDir + '\AppData\Local\Android\sdk'
		break;
	case('linux'):
		content = 'sdk.dir = ' + userHomeDir + '/Android/Sdk'
		break;
	default:
		console.log('Currently not supported OS.');
		process.exit(1)
}

console.log('try writing a file under: ' + __dirname + '/../android/local.properties');

fs.writeFile(__dirname + '/../android/local.properties', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('file written with content: ' + content);
  }
});