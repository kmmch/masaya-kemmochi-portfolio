window.onload = () => {
    
    // ハンバーガーボタンの要素を取得
    var headerHamburgerBtn = document.getElementById('humburger-btn');

    // ハンバーガーボタンがクリックされたときのイベントを設定
    headerHamburgerBtn.addEventListener('click',(event) => {

        // ハンバーガーボタンを横3本と×で切り替え
        headerHamburgerBtn.classList.toggle('active');

        // ハンバーガーメニューの表示を切り替え
        document.getElementById('humburger-menu').classList.toggle('active');

        // ハンバーガーカバーの表示を切り替え
        document.getElementById('humburger-cover').classList.toggle('active');

        // スクロール固定を切り替え
        document.body.classList.toggle('noScroll')

    });
}



(function() {

    // 固定化ヘッダー
    const fixedHeader = document.getElementById('header--fixed');

    // ハンバーガーボタン
    const humburgerBtn = document.getElementById('humburger-btn');

    // メインビジュアル
    const mainvisual = document.getElementById('mainvisual');
    // メインビジュアルの高さ
    const mainvisualHeight = mainvisual.clientHeight;

    // 画面位置（Y軸方向）が変化したかをチェックする関数
    const isUp = (function() {
        const scrollElement = document.scrollingElement;
        let flag, prePoint, scrollPoint;
        
        return function() {
    
            scrollPoint = scrollElement.scrollTop;
            flag = prePoint > scrollPoint ? true : false;
            prePoint = scrollPoint;
            return flag;
    
        }
    }());


    // 固定要素を表示する関数
    const showFixedElements = () => {

        // 画面位置（Y軸方向）がメインビジュアルより下かどうかを判定する
        if (window.pageYOffset > (mainvisualHeight*0.8)) {
                
            if (isUp()) {
                fixedHeader.classList.remove('is-show');
                humburgerBtn.classList.remove('is-show');
            } else {
                fixedHeader.classList.add('is-show');
                humburgerBtn.classList.add('is-show');
            }
    
        } else {
            fixedHeader.classList.remove('is-show');
            humburgerBtn.classList.remove('is-show');
        }
    }
    
    
    // スクロールイベント発生時に処理する内容
    window.addEventListener('scroll', () => {

        showFixedElements();

    });

}());



(function($) {	
	//モーダル表示
	$(".modal-open").modaal({
    	start_open:false, // ページロード時に表示するか
        overlay_close:true,//モーダル背景クリック時に閉じるか
        before_open:function(){// モーダルが開く前に行う動作
            $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
        },
        after_close:function(){// モーダルが閉じた後に行う動作
            $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
        }
	});
}(jQuery));