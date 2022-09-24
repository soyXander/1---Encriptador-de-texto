const btnEncrypt = document.getElementsByClassName('encrypt');
const btnDecrypt = document.getElementsByClassName('decrypt');
const btnCopy = document.getElementsByClassName('copy');

const text = document.getElementById('input');
const specialChars = /[áéíóú`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const resultIntro = '<textarea id="result" disabled>';
const resultOutro = '</textarea>\n'+
                    '<div class="tooltip">'+
                    '<div id="tooltip" class="top">'+
                    '<h5>¡Copiado!</h5><i></i></div></div>'+
                    '<a id="copy" class="boton copy" onclick="copy()">Copiar</a>'

function encrypt() {
    const encButton = document.getElementById('encrypt').classList
    if(text.value == text.value.toLowerCase() && !specialChars.test(text.value) && !text.value == ''){
        let result = text.value.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
        document.getElementById('results').innerHTML = resultIntro + result + resultOutro;
        encButton.add('enc-ok');
        setTimeout(function(){encButton.remove('enc-ok');}, 1000*2);
    }
    else {
        const hintMsg = document.getElementById('hint-message').classList
        hintMsg.add('error');
        encButton.add('enc-error');
        setTimeout(function(){hintMsg.remove('error');}, 1000*2);
        setTimeout(function(){encButton.remove('enc-error');}, 1000*2);
    }
}

function decrypt() {
    const decButton = document.getElementById('decrypt').classList
    if(text.value == text.value.toLowerCase() && !specialChars.test(text.value) && !text.value == ''){
        let result = text.value.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');
        document.getElementById('results').innerHTML = resultIntro + result + resultOutro;
        decButton.add('dec-ok');
        setTimeout(function(){decButton.remove('dec-ok');}, 1000*2);
    }
    else {
        const hintMsg = document.getElementById('hint-message').classList
        hintMsg.add('error');
        decButton.add('dec-error');
        setTimeout(function(){hintMsg.remove('error');}, 1000*2);
        setTimeout(function(){decButton.remove('dec-error');}, 1000*2);
}
}

let tooltip = document.getElementById('tooltip');

function copy() {
    let result = document.getElementById('result').value;
    navigator.clipboard.writeText(result);
    const tooltip = document.getElementById('tooltip').classList;
    const button = document.getElementById('copy').classList;
    button.add('copy-ok')
    tooltip.add("copied");
    setTimeout(function(){button.remove("copy-ok");}, 1000*2);
    setTimeout(function(){tooltip.remove("copied");}, 1000*2);
}