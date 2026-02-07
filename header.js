document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    if (header) {
        header.innerHTML = `
        <a href="index.html" class="logo">下北コミュニティ</a>
        <div id="location-info" class="location-info" style="display: none;"></div>
        <nav class="main-nav">
            <ul>
                <li><a href="index.html">トップ</a></li>
                <li><a href="schedule.html">活動予定</a></li>
                <li><a href="recommend.html">おすすめ</a></li>
                <li><a href="column.html">コラム</a></li>
                <li><a href="diagnosis.html">下北16診断</a></li>
                <li><a href="mystery.html">謎解き</a></li>
                <li><a href="staff.html">運営募集</a></li>
                <li><a href="contact.html">お問い合わせ</a></li>
                <li><a href="login.html" id="header-login-link" style="color: var(--accent-color); font-weight: bold;">ログイン</a></li>
            </ul>
        </nav>
        <button class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        `;

        // アクティブなリンクにクラスを付与
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = header.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || (href === 'index.html' && currentPath === '')) {
                link.classList.add('active');
            }
            // コラム詳細ページの場合、コラムをアクティブに
            if (currentPath.includes('column-detail') && href === 'column.html') {
                link.classList.add('active');
            }
        });

        // ハンバーガーメニューの動作
        const hamburger = header.querySelector('.hamburger');
        const nav = header.querySelector('.main-nav');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });

        // リンククリック時にメニューを閉じる
        header.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-active');
                nav.classList.remove('is-active');
            });
        });
    }
});