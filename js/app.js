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

    inPage.style.display = 'none';
    resPage.style.display = 'block';
  }

  function actionHandlerReset() {
    inField.value = '';

    inPage.style.display   = 'block';
    resPage.style.display  = 'none';
    inField.focus();

    outBin.innerHTML = '';
    outHex.innerHTML = '';
  }

  function publicInitialize() {
    inPage  = document.querySelector('#pageInput');
    resPage = document.querySelector('#pageResult');
    inField = document.querySelector('#in > textarea');
    outBin  = document.querySelector('#outBin');
    outHex  = document.querySelector('#outHex');
    actBtnT = document.querySelector('#fireinthehole');
    actBtnR = document.querySelector('#elohehtnierif');

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