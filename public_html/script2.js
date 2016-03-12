var before;
var beforesym;
var ans="";
var symb;

function push(num) {
    //console.log("text:" + document.getElementById('texb').value);
    //console.log("ans"+ans);
    if (document.getElementById('texb').value === 0 || ans!=="") {
        document.getElementById('texb').value = "";
        ans="";
    }
    document.getElementById('texb').value += num;
    console.log("num関数 text:"+document.getElementById('texb').value);
}

function reset() {
    document.getElementById('texb').value = "";
    before = "";
    beforesym = null;
    ans = "";
    symb = "";
}

function symbol(sym) {
    //console.log(before);
    //console.log("length"+length);
    if (beforesym === undefined || beforesym === null) {
        //console.log("beforesym");
        before = document.getElementById('texb').value;//最初の数字代入
        document.getElementById('texb').value += sym;//記号追加
        beforesym = sym;//ひとつ前の記号に追加
        console.log("beforesym関数 before:"+before+" text:"+document.getElementById('texb').value+" beforesym:"+beforesym);
    }
    else {
        //console.log("else");
        var length = String(before.length + 1);//二つ目の数字までの文字列の長さ
        //console.log("before.length:"+before.length);
        //console.log("length:"+length);
        var str = String((document.getElementById('texb').value));//文字型に変換
        str = str.slice(length);//二つ目の数字から取得
        //console.log("before:" + before);
        //console.log("str:" + str);
        if (symb === "+") {
            ans = Number(before) + Number(str);
        }
        else if (symb === "-") {
            ans = before - Number(str);
        }
        else if (symb === "*") {
            if (str==="") {
                ans=before;
            }
            else{
                ans = before * Number(str);
            }
        }
        else if(symb === "/") {
            
            if (str==="") {
                ans=before;
            }
            else {
                ans = before / Number(str);
            }
        }
        console.log("else関数 length:"+length+" str:"+str+" text:"+document.getElementById('texb').value+" before:"+before);
        document.getElementById('texb').value = ans+sym;
        before = String(ans);
        //beforesym = null;
        console.log("else関数 length:"+length+" str:"+str+" text:"+document.getElementById('texb').value+" before:"+before);
    }
    ans="";
    //console.log("記号:"+sym);
    return symb = sym;
}

function answer() {
    //console.log("answer関数");
    //console.log("記号:"+symb);
    var length = before.length + 1;
    //console.log("length:"+length);
    var str = String((document.getElementById('texb').value));
    //console.log("文字列:"+str);
    str = str.slice(length);
    //console.log("str:"+str);
    //console.log(symb);
    if (symb === "+") {
        ans = Number(before) + Number(str);
    }
    if (symb === "-") {
        ans = before - Number(str);
    }
    if (symb === "*") {
        ans = before * Number(str);
    }
    if (symb === "/") {
        if (Number(str) === 0) {
            ans = 0;
        }
        else {
            ans = before / Number(str);
        }
    }
    document.getElementById('texb').value = ans;
    beforesym = null;
    //before ="";
    console.log("answer関数 length:"+length+" text:"+String((document.getElementById('texb').value))+" str:"+str+" ans:"+ans);
}