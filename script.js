window.onload = function (e) {
    // init で初期化。基本情報を取得。
    // https://developers.line.me/ja/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        getProfile();
        initializeApp(data);
    });

    // ウィンドウを開く
    // https://developers.line.me/ja/reference/liff/#liffopenwindow()
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    document.getElementById('openwindowexternalbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me',
            external: true
        });
    });

    // メッセージの送信
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        // https://developers.line.me/ja/reference/liff/#liffsendmessages()
        liff.sendMessages([{
            type: 'text',
            text: "テキストメッセージの送信"
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("送信完了");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
};

// プロファイルの取得と表示
function getProfile(){
    // https://developers.line.me/ja/reference/liff/#liffgetprofile()
    liff.getProfile().then(function (profile) {
        document.getElementById('lineid').textContent = profile.userId;

        var profilePictureDiv = document.getElementById('profilepicturediv');
        if (profilePictureDiv.firstElementChild) {
            profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
        }
        var img = document.createElement('img');
        img.src = profile.pictureUrl;
        img.alt = "Profile Picture";
        img.width = 200;
        profilePictureDiv.appendChild(img);

        document.getElementById('statusmessagefield').textContent = profile.statusMessage;
    }).catch(function (error) {
        window.alert("Error getting profile: " + error);
    });
}

  /*
    今日の日付データを変数todayに格納
   */
 
    var optionLoop, this_day, this_month, this_year, today;
    today = new Date();
    this_year = today.getFullYear();
    this_month = today.getMonth() + 1;
    this_day = today.getDate();
  
    /*
      ループ処理（スタート数字、終了数字、表示id名、デフォルト数字）
     */
    optionLoop = function(start, end, id, this_day) {
      var i, opt;
  
      opt = null;
      for (i = start; i <= end ; i++) {
        if (i === this_day) {
          opt += "<option value='" + i + "' selected>" + i + "</option>";
        } else {
          opt += "<option value='" + i + "'>" + i + "</option>";
        }
      }
      return document.getElementById(id).innerHTML = opt;
    };
  
  
    /*
      関数設定（スタート数字[必須]、終了数字[必須]、表示id名[必須]、デフォルト数字[省略可能]）
     */
    optionLoop(1900, this_year, 'id_year', 1950);
    optionLoop(1, 12, 'id_month', this_month);
    optionLoop(1, 31, 'id_day', this_day);
  
  
    /*
    最近の体重と腹囲について教えてくださいの「測定した」にチェックが入ったら体重と腹囲を入力できるようにする。
    */
  
   function chktaiju(){
      var element, element2;
  
      if(document.getElementById("taiju-d").checked) {
          element = document.getElementById("weight");
          element2 = document.getElementById("hukui");
          element.disabled = false;
          element2.disabled = false;
      }else if(document.getElementById("taiju-d").checked == false){
          element = document.getElementById("weight");
          element2 = document.getElementById("hukui");
          element.disabled = true;
          element2.disabled = true;
      }
    }
  
    //チェックボックスを押したときの挙動について
    function changeCheckbox(){
      let change1, change2,change3,change4,gutaiteki
      change1 = document.getElementById("genryo-a");
      change2 = document.getElementById("genryo-b");
      change3 = document.getElementById("genryo-c");
      change4 = document.getElementById("genryo-d");
      gutaiteki = document.getElementById("gutaiteki");
      if(change1.checked){
        gutaiteki.disabled = false
        change4.checked = false
      }else if(change2.checked){
        gutaiteki.disabled = false
        change4.checked = false
      }else if(change3.checked){
        gutaiteki.disabled = false
        change4.checked = false
      }
    }
    function changeCheckbox2(){
      let change1, change2,change3,change4,gutaiteki
      change1 = document.getElementById("genryo-a");
      change2 = document.getElementById("genryo-b");
      change3 = document.getElementById("genryo-c");
      change4 = document.getElementById("genryo-d");
      gutaiteki = document.getElementById("gutaiteki");
      if(change4.checked){
        gutaiteki.disabled = true
        change1.checked = false
        change2.checked = false
        change3.checked = false
      }
    }
  
    