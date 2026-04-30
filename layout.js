// iFoods — shared nav & footer injection
// Include this script on every page BEFORE main.js

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  // Resolve relative root path based on depth
  const isSubPage = window.location.pathname.includes('/pages/');
  const root = isSubPage ? '../' : '';

  // ── Inject Nav ──
  const navHTML = `
    <nav class="nav">
      <a href="${root}index.html" class="nav-logo">i<span>Foods</span></a>
      <ul class="nav-links">
        <li><a href="${root}index.html">Home</a></li>
        <li><a href="${root}pages/menu.html">Menu</a></li>
        <li><a href="${root}pages/about.html">About Us</a></li>
        <li><a href="${root}pages/contact.html">Contact</a></li>
      </ul>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu">
      <a href="${root}index.html">Home</a>
      <a href="${root}pages/menu.html">Menu</a>
      <a href="${root}pages/about.html">About Us</a>
      <a href="${root}pages/contact.html">Contact</a>
    </div>
  `;

  // ── Inject Footer ──
  const footerHTML = `
    <footer>
      <div class="footer-top">
        <div class="footer-brand">
          <a href="${root}index.html" class="nav-logo">i<span>Foods</span></a>
          <p>An unforgettable dining experience rooted in seasonal ingredients and timeless technique.</p>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="${root}index.html">Home</a></li>
            <li><a href="${root}pages/menu.html">Our Menu</a></li>
            <li><a href="${root}pages/about.html">About Us</a></li>
            <li><a href="${root}pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Menu</h4>
          <ul>
            <li><a href="${root}pages/menu.html#appetizers">Appetizers</a></li>
            <li><a href="${root}pages/menu.html#mains">Main Dishes</a></li>
            <li><a href="${root}pages/menu.html#desserts">Desserts</a></li>
            <li><a href="${root}pages/menu.html#drinks">Drinks</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Find Us</h4>
          <ul>
            <li><a href="#">123 Gourmet Lane</a></li>
            <li><a href="#">Gaborone, BW</a></li>
            <li><a href="#">+267 123 4567</a></li>
            <li><a href="#">hello@ifoods.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} iFoods Restaurant. All rights reserved.</p>
        <div class="footer-socials">
          <a href="#" title="Instagram">IG</a>
          <a href="#" title="Facebook">FB</a>
          <a href="#" title="TikTok">TK</a>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
