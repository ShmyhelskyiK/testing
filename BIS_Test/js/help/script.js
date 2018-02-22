function openExplorer(dir) {
    var ws = new ActiveXObject("WScript.Shell");
    ws.Run("explorer " + dir);
}

// var myDefault = new Folder ("U:/xxx/zzz");

// window.open("https://google.com.ua");
// window.open("file:///L:/Справочник продавца/Кредит Ту Ю");




// function goToPage()
// {
//     var url = document.getElementById('id_Элемента');
//     document.location.href = url.value;
// }