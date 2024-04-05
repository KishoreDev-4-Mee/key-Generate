this.totalKeyLength;

function setValue(e) {
    this.totalKeyLength = e.target.value
}
function generateKey() {
    var passAt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  var passArray = Array.from({length: 29})

  return passArray.map(function(_, index) { 
    return  index % 6 == 5 ? '-' : passAt.charAt(Math.random() * passAt.length).charAt('-')
  }).join('')
}
function clickGenerateBtn() {
    let keys = []
    for (let index = 0; index < this.totalKeyLength; index++) {
        const element = this.totalKeyLength[index];
        let key = generateKey()
        keys.push(key)
    }
    document.getElementById('keyList').innerHTML = keys.join('\n')
}

function copyKey() {
        let key = document.getElementById('keyList');
        key.select();
        document.execCommand("copy");
    }
