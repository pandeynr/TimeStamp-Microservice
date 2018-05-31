// str value is June%2009,%201995

function poop(param){
    let regNorm = /\w+[%]\d+[,][%]\d+/gi;
    let regUnix = /^\d+$/;
    if (param.match(regNorm) != null){
        return param.match(regNorm);
    }
    else if (param.match(regUnix) != null){
        return param.match(regUnix);
    }
    else {
        return false;
    }
}

let a = poop("June%2009,%201995");
console.log(a);