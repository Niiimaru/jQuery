$(function() {
    const updateText = () => {
        $("#updateTarget").text("アメリカの主要IT企業GAFA");

        let allList = $(".update_targets");
        $.each($(allList), function(key) {
            $(allList[key]).text(key + "番のliタグです");
        });
    }
    setTimeout(updateText, 1000);

    const updateColor = () => {
        $("#google").parent().css("background", "pink");

        let allList = $(".update_targets");
        $.each($(allList), function(key) {
            $(allList[key]).css("color", "red");
        });
    }
    setTimeout(updateColor, 2000);

    /*練習問題
    1. htmlにpタグを用意して、その文字を取得して、console.logで
    出力してください。
        <p id="text1">練習1</p>

    2. htmlにpタグを用意して,その文字を好きな文字列に変更してください。
        <p id="text2>練習2/p>

    3. htmlにpタグを用意して,その文字を好きな色に変更してください。
        <p id="text3">練習3</p>

    4. htmlにpタグを用意して,その文字の背景を好きな色に変更してください。
        <p id="text4">練習4</p>

    5. htmlにpタグを用意して,その文字の大きさを好きな大きさに変更してください。
        <p id="text5">練習5</p>
    */

    //1
    let text1 = $("#text1").text();
    console.log(text1);

    //2
    let text2 = $("#text2");
    $(text2).text("変更しました。");

    //3
    let text3 = $("#text3");
    $(text3).css("color", "blue");

    //4
    let text4 = $("#text4");
    $(text4).css("background", "skyblue");

    //5
    let text5 = $("#text5");
    $(text5).css("font-size", "30px");

    
    //イベント登録・実行
    $("#updateTarget1").on("mouseover", function() {
        $(this).text("マウスオーバーしました。");
    });
    $("#updateTarget1").on("click", function() {
        $(this).text("クリックしました。");
    });
    $("#updateTarget1").on("dblclick", function() {
        $(this).text("ダブルクリックしました。");
    });

    //Node追加・削除
    let ol = $("#ol");
    let addNode1 = $("<li>").text("追加された文字列");
    ol.prepend(addNode1);

    let addNode2 = $("<li>").text("さらに追加された文字列");
    ol.append(addNode2);

    $("#facebook").remove();

    /*
        練習問題
        以下のulタグを用意して
        <ul id="sports">
            <li>野球</li>
            <li>サッカー</li>
        </ul>
        
        1.「バスケ」をリストの最後に追加
        2.「テニス」をリストの最初に追加
        3.「サッカー」をリストから削除
    */

    let ul = $("#sports")

    //1
    let add = $("<li>").text("バスケ");
    ul.prepend(add);

    //2
    let add1 = $("<li>").text("テニス");
    ul.append(add1);

    //3
    $("#soccer").remove();
});