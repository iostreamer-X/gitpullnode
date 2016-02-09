var deasync = require('deasync')
var exec = deasync(require('child_process').exec)
function gitcheck() {
  exec('git fetch > /dev/null')
  var status=exec('git status')
  if(status.indexOf('up-to-date')==-1){
    console.log(status);
    exec('notify-send "An update of this app is available."')
  }
}
module.exports=gitcheck
