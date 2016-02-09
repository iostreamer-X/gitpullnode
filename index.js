var deasync = require('deasync')
var exec = deasync(require('child_process').exec)
function gitcheck() {
  exec('git fetch')
  console.log(exec('git status'))
}
module.exports=gitcheck
