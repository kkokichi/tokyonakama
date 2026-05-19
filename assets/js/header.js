document.addEventListener('DOMContentLoaded', () => {
    const headerEl = document.querySelector('header.header');
    if (!headerEl) return;
    
    const scriptTag = document.querySelector('script[src*="header.js"]');
    const prefix = scriptTag?.dataset.pathPrefix ?? '';

    const headerHTML = `
        <a href="${prefix}index.html" class="logo">下北コミュニティ</a>
        <nav class="main-nav">
            <ul>
                <li><a href="${prefix}index.html">トップ</a></li>
                <li><a href="${prefix}top.html">サークル</a></li>
                <li><a href="${prefix}schedule.html">活動予定</a></li>
                <li><a href="${prefix}recommend.html">おすすめ</a></li>
                <li><a href="${prefix}column.html">コラム</a></li>
                <li><a href="${prefix}diagnosis.html">下北16診断</a></li>
                <li><a href="${prefix}contact.html">お問い合わせ</a></li>
                <li><a href="${prefix}login.html" class="login-link">ログイン</a></li>
            </ul>
        </nav>
        <button class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
    `;

    headerEl.innerHTML = headerHTML;

    // --- 以下、元のスクリプトから変更なし ---

    // 現在のページのファイル名を取得してアクティブなナビゲーションリンクを判定
    const currentPage = window.location.pathname.split('/').pop();
    const isColumnDetailPage = window.location.pathname.includes('/columns/');

    const navLinks = headerEl.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        // トップページ (index.html またはルート)
        if ((currentPage === 'index.html' || currentPage === '') && linkPage === 'index.html') {
            link.classList.add('active');
        }
        // その他のページ
        else if (currentPage !== '' && currentPage !== 'index.html' && currentPage === linkPage) {
            link.classList.add('active');
        }
    });
    
    // コラム詳細ページでは「コラム」をアクティブにする
    if (isColumnDetailPage) {
        const columnLink = Array.from(navLinks).find(a => a.getAttribute('href').endsWith('column.html'));
        if (columnLink) {
            navLinks.forEach(l => l.classList.remove('active')); // 他のアクティブを解除
            columnLink.classList.add('active');
        }
    }

    // ハンバーガーメニューの処理
    const hamburger = headerEl.querySelector('.hamburger');
    const nav = headerEl.querySelector('.main-nav');
    const allNavLinks = nav.querySelectorAll('a');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });

        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('is-active')) {
                    hamburger.classList.remove('is-active');
                    nav.classList.remove('is-active');
                }
            });
        });
    }
});