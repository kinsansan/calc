var before;
var beforesym;
var ans = "";
var symb;

function push(num) {
    if (document.getElementById('texb').value === 0 || ans !== "") {
        document.getElementById('texb').value = "";
        ans = "";
    }
    document.getElementById('texb').value += num;
}

function reset() {
    document.getElementById('texb').value = "";
    before = "";
    beforesym = null;
    ans = "";
    symb = "";
}

function symbol(sym) {
    if (beforesym === undefined || beforesym === null) {
        before = document.getElementById('texb').value;//最初の数字代入
        document.getElementById('texb').value += sym;//記号追加
        beforesym = sym;//ひとつ前の記号に追加
    }
    else {
        var length = String(before.length + 1);//二つ目の数字までの文字列の長さ
        var str = String((document.getElementById('texb').value));//文字型に変換
        str = str.slice(length);//二つ目の数字から取得
        if (symb === "+") {
            ans = Number(before) + Number(str);
        }
        else if (symb === "-") {
            ans = before - Number(str);
        }
        else if (symb === "*") {
            if (str === "") {
                ans = before;
            }
            else {
                ans = before * Number(str);
            }
        }
        else if (symb === "/") {

            if (str === "") {
                ans = before;
            }
            else {
                ans = before / Number(str);
            }
        }
        document.getElementById('texb').value = ans + sym;
        before = String(ans);
    }
    ans = "";
    return symb = sym;
}

function answer() {
    var length = before.length + 1;
    var str = String((document.getElementById('texb').value));
    str = str.slice(length);
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
    before = String(ans);
    beforesym = null;
}