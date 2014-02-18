var t2g = (function () {

  var input;
  var inField, outHex, outBin, inSec, outSec, trnSlde;
  var actBtn;
  
  function toBin(inStr) {
    var retVal = '';

    function padding(inp) {
      var l = inp.length;
      
      if(l < 8) {
        return '0'.times(8-l) + inp;
      }
    }
    for (var i = 0; i < inStr.length; i++) {
      retVal += padding(inStr.charCodeAt(i).toString(2)) + ' ';
    }

    return retVal;
  }

  function toHex(inStr) {
    var retVal = '';

    for (var i = 0; i < inStr.length; i++) {
      retVal += inStr.charCodeAt(i).toString(16) + ' ';
    }

    return retVal;
  }

  function actionHandlerTranslate() {
    input = inField.value;

    outBin.innerHTML = toBin(input);
    outHex.innerHTML = toHex(input);

    pre.style.display = 'none';
    fn.style.display = 'none';
    inSec.style.display   = 'none';
    outSec.style.display  = 'block';
  }

  function actionHandlerReset() {
    inField.value = '';

    inSec.style.display   = 'block';
    outSec.style.display  = 'none';
    pre.style.display = 'block';
    fn.style.display = 'block';
    inField.focus();

    outBin.innerHTML = '';
    outHex.innerHTML = '';
  }

  function publicInitialize() {
    inSec   = document.querySelector('#in');
    outSec  = document.querySelector('#out');
    // trnSlde = document.querySelector('#trns');
    inField = document.querySelector('#in > textarea');
    outBin  = document.querySelector('#outBin');
    outHex  = document.querySelector('#outHex');
    actBtnT = document.querySelector('#fireinthehole');
    actBtnR = document.querySelector('#elohehtnierif');
    pre     = document.querySelector('.pre');
    fn      = document.querySelector('.fn');

    actBtnT.addEventListener('click', function(e) {
      actionHandlerTranslate();
    }, false);

    actBtnR.addEventListener('click', function(e) {
      actionHandlerReset();
    }, false);

    String.prototype.times = function (num){
      return new Array(num+1).join(this);
    };
  }

  return {
    init: publicInitialize
  };
})();

window.addEventListener('load', t2g.init, false);