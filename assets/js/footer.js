document.addEventListener('DOMContentLoaded', () => {
    const footerEl = document.querySelector('footer');
    if (!footerEl) return;

    const scriptTag = document.querySelector('script[src*="footer.js"]');
    const prefix = scriptTag?.dataset.pathPrefix ?? '';

    const footerHTML = `
        <div class="container">
            <p class="footer-links">
                <a href="${prefix}top.html">トップ</a> | 
                <a href="${prefix}schedule.html">活動予定</a> | 
                <a href="${prefix}recommend.html">おすすめ</a> | 
                <a href="${prefix}column.html">コラム</a> | 
                <a href="${prefix}diagnosis.html">下北16診断</a> | 
                <a href="${prefix}contact.html">お問い合わせ</a>
            </p>
            <p class="copyright">&copy; 2026 下北コミュニティ. All Rights Reserved. | <a href="${prefix}admin.html" style="color: #999; text-decoration: none;">管理</a></p>
        </div>
    `;
    footerEl.innerHTML = footerHTML;

    // ページトップへ戻るボタンのHTMLをbodyの最後に追加
    const backToTopButtonHTML = `<a href="#" class="back-to-top">↑</a>`;
    document.body.insertAdjacentHTML('beforeend', backToTopButtonHTML);

    // ページトップへ戻るボタンの処理
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('visible', window.scrollY > 400);
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});