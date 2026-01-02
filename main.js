sendHello()
showAlert()
showConfirm()

function sendHello() {
    console.log("Hello!")
}

function showAlert() {
    alert("アラートを出せました!")
}

function showConfirm() {
    result = window.confirm("ダイアログを出せました!")
    tag = document.getElementById("ConfirmTag")
    if (result == true) {
        tag.textContent = "OKを押しました"
    }
    else {
        tag.textContent = "キャンセルを押しました"
    }
}