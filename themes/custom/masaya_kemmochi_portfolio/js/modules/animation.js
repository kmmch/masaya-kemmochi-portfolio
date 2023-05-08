/*========= タイピング風 ===============*/
// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
const TextTypingAnime = () => {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}



const prepareTextTypingAnime = () => {
    /*========= タイピング風アニメーションの準備 ===============*/
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
}



/*========= ふわっと現れる ===============*/
// 動きのきっかけとなるアニメーションの名前を定義
const fadeAnime = () => {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
            // 画面内に入ったらfadeInというクラス名を追記
        }else{
            $(this).removeClass('fadeUp');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });
    
    //関数でまとめることでこの後に違う動きを追加することが出来ます
    $('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeDown');
            // 画面内に入ったらfadeDownというクラス名を追記
        }else{
            $(this).removeClass('fadeDown');
            // 画面外に出たらfadeDownというクラス名を外す
        }
    });
    
    // にゅーんと動くきっかけのクラス名と動きのクラス名の設定
    $('.smoothTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('smooth');
            // 画面内に入ったらfadeInというクラス名を追記
        }else{
            $(this).removeClass('smooth');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });

}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定


const delayScrollAnimeFadeUp = () => {
	var time = 0.3;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScrollFadeUp').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {

    fadeAnime();
    delayScrollAnimeFadeUp();

});// ここまで画面をスクロールをしたら動かしたい場合の記述



// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {

    prepareTextTypingAnime();
	TextTypingAnime();

});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述