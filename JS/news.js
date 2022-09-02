const loadTopBars = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayBars(data.data.news_category);
}

const displayBars = (news_category) => {
    const topBarContainer = document.getElementById('top-bar-container');
    news_category.forEach(news_category => {
      const topBarUi = document.createElement('ui');
      topBarUi.classList.add('nav-item');
      topBarUi.innerHTML = `
      <button class="nav-link border-0 bg-light" aria-current="page" href="#">${news_category.category_name}</button>
      `;
      topBarContainer.appendChild(topBarUi);
    });
}
loadTopBars();