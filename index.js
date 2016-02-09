var exec = require('child_process').exec
function gitcheck() {
  exec('git fetch > /dev/null',function (e,so,se) {
      exec('git status',function (ie,iso,ise) {
        status=iso
        if(status.indexOf('Your branch is behind')!=-1){
          exec('notify-send "An update of this app is available."')
        }
      })
  })
}
module.exports=gitcheck
