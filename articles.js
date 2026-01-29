const articles = [
    { 
        id: 1,
        title: "【体験談】人見知りでも大丈夫？下北沢の社会人サークルに潜入してみた", 
        category: "deai", 
        excerpt: "「友達がほしいけど、人見知りだし…」そんな不安を抱えながら、勇気を出して下北沢の社会人サークルに参加。実際の雰囲気や参加者の様子を正直にレポートします。",
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-1.html",
        date: "2024.07.15"
    },
    { 
        id: 2,
        title: "下北沢カレーフェスティバル完全攻略！初心者が行くべき名店5選", 
        category: "gourmet", 
        excerpt: "毎年大盛況のカレーフェス。無数にあるお店の中から、絶対に外さない王道の名店から、知る人ぞ知る隠れた名店まで、カレー好き運営が厳選してご紹介！",
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-2.html",
        date: "2024.07.20"
    },
    { 
        id: 3,
        title: "なぜ下北沢の古着屋は面白いのか？現役アパレル店員と巡ってみた", 
        category: "culture", 
        excerpt: "ただ安いだけじゃない、下北沢の古着の魅力とは？アパレル業界で働くメンバーと一緒に、初心者でも楽しめる古着屋の巡り方や、掘り出し物を見つけるコツを伝授します。",
        imageUrl: "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-3.html",
        date: "2024.07.25"
    },
    { 
        id: 4,
        title: "「本多劇場」だけじゃない！下北沢の小劇場で演劇デビューのすすめ", 
        category: "culture", 
        excerpt: "「演劇って難しそう…」そんなイメージを覆す、笑いあり涙ありの小劇場演劇の魅力をご紹介。チケットの取り方から観劇後の楽しみ方まで、完全ガイドします。",
        imageUrl: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-4.html",
        date: "2024.08.01"
    },
    { 
        id: 5,
        title: "サウナ好き必見！下北沢の銭湯・サウナで「ととのう」休日", 
        category: "active", 
        excerpt: "実はサウナ施設も充実している下北沢。昔ながらの銭湯から最新の個室サウナまで、サウナ好きメンバーが徹底比較。サウナ後の「サ飯」情報も満載です。",
        imageUrl: "https://images.unsplash.com/photo-1563804951-7eb9a2916886?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-5.html",
        date: "2024.08.05"
    },
    {
        id: 6,
        title: "下北沢で出会いはある？「バーで婚活」の実態を調査してみた",
        category: "deai",
        excerpt: "「下北沢のバーで素敵な出会いがあった」なんて噂、聞いたことありませんか？カジュアルな立ち飲みから落ち着いたバーまで、自然な出会いが期待できるスポットをご紹介。",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-6.html",
        date: "2025.02.14"
    },
    {
        id: 7,
        title: "社会人サークルって実際どうなの？参加者の本音を聞いてみた",
        category: "deai",
        excerpt: "「内輪ノリが凄そう」「馴染めるか不安」…そんなイメージを持っている方へ。実際にサークルに参加して友達ができたメンバーに、リアルな体験談をインタビューしました。",
        imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-7.html",
        date: "2025.03.10"
    },
    {
        id: 8,
        title: "街コンvsアプリvsサークル！下北沢で友達を作るならどれ？",
        category: "deai",
        excerpt: "出会いの手段はたくさんあるけれど、自分に合っているのはどれ？それぞれのメリット・デメリットを比較し、あなたにぴったりの方法を提案します。",
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-8.html",
        date: "2025.03.25"
    },
    {
        id: 9,
        title: "ノマドワーカー必見！下北沢の「作業できるカフェ」特集",
        category: "cafe",
        excerpt: "Wi-Fi・電源完備は当たり前。美味しいコーヒーを飲みながら集中して作業ができる、下北沢の優秀なカフェを厳選してご紹介します。",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-9.html",
        date: "2025.04.01"
    },
    {
        id: 10,
        title: "タイムスリップした気分。レトロで落ち着く純喫茶巡り",
        category: "cafe",
        excerpt: "昭和の面影を残す純喫茶で、クリームソーダやナポリタンを味わう休日。喧騒を忘れてゆっくり過ごせる、おすすめの名店をご案内。",
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-10.html",
        date: "2025.04.15"
    },
    {
        id: 11,
        title: "インスタ映え間違いなし！下北沢の最新おしゃれカフェ3選",
        category: "cafe",
        excerpt: "見た目も味も楽しめる、話題の最新カフェをピックアップ。思わず写真を撮りたくなるスイーツや内装は必見です。",
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-11.html",
        date: "2025.05.01"
    },
    {
        id: 12,
        title: "お一人様でも入りやすい！下北沢の絶品定食屋さん",
        category: "gourmet",
        excerpt: "「今日は自炊したくない…でも栄養のあるものが食べたい」そんな時に重宝する、一人でもふらっと入れる美味しい定食屋さんをご紹介。",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-12.html",
        date: "2025.05.20"
    },
    {
        id: 13,
        title: "実はラーメン激戦区！下北沢で絶対に食べるべき一杯",
        category: "gourmet",
        excerpt: "カレーだけじゃない！実はレベルの高いラーメン店がひしめく下北沢。こってり系から淡麗系まで、ラーメン好きが唸る名店をまとめました。",
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-13.html",
        date: "2025.06.10"
    },
    {
        id: 14,
        title: "飲んだ後の〆に！夜パフェで楽しむ大人の休日",
        category: "gourmet",
        excerpt: "お酒を飲んだ後に甘いものが食べたくなる…そんな願いを叶えてくれる「夜パフェ」のお店が急増中。見た目も美しいパフェで一日を締めくくりましょう。",
        imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-14.html",
        date: "2025.07.01"
    },
    {
        id: 15,
        title: "ライブハウス初心者ガイド！服装やマナーを徹底解説",
        category: "culture",
        excerpt: "「ライブハウスに行ってみたいけど、ルールがわからなくて怖い」という方へ。チケットの買い方から当日の楽しみ方まで、優しく解説します。",
        imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-15.html",
        date: "2025.07.20"
    },
    {
        id: 16,
        title: "サブカル好きの聖地！下北沢の個性派雑貨屋巡り",
        category: "culture",
        excerpt: "ヴィレヴァンだけじゃない！路地裏に潜むマニアックな雑貨屋さんや、クリエイターの作品が買えるお店など、下北沢ならではのショップをご紹介。",
        imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-16.html",
        date: "2025.08.10"
    },
    {
        id: 17,
        title: "レコードショップの歩き方。アナログ音源の魅力を再発見",
        category: "culture",
        excerpt: "サブスク全盛の今だからこそ、レコードで音楽を聴く贅沢を。初心者でも入りやすいお店や、ジャケ買いの楽しみ方をお伝えします。",
        imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-17.html",
        date: "2025.09.01"
    },
    {
        id: 18,
        title: "ダーツバーで盛り上がろう！初心者でも楽しめるお店",
        category: "active",
        excerpt: "お酒を飲みながら気軽に遊べるダーツバー。ルールがわからなくても大丈夫！スタッフさんが優しく教えてくれる、アットホームなお店を紹介します。",
        imageUrl: "https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-18.html",
        date: "2025.09.20"
    },
    {
        id: 19,
        title: "ストレス発散！一人でもグループでも楽しめるカラオケ店",
        category: "active",
        excerpt: "最新機種が揃ったお店から、コンセプチュアルなカラオケバーまで。歌って踊って、日頃のストレスを吹き飛ばしましょう！",
        imageUrl: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-19.html",
        date: "2025.10.10"
    },
    {
        id: 20,
        title: "カメラ片手にお散歩フォトウォークのススメ",
        category: "active",
        excerpt: "フォトジェニックな壁画やレトロな街並みなど、下北沢は被写体の宝庫。カメラを持って街を歩けば、いつもと違う景色が見えてくるはず。",
        imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        detailUrl: "column-detail-20.html",
        date: "2025.11.01"
    }
];

const categoryNames = {
    deai: "出会い・サークル",
    gourmet: "グルメ",
    culture: "カルチャー",
    active: "アクティブ",
    cafe: "カフェ"
};