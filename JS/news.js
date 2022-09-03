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
      <button onclick="loadFullNews('${news_category.category_id}')" id="btn-news" class="nav-link border-0 bg-light" aria-current="page" href="#">${news_category.category_name}</button>
      `;
    topBarContainer.appendChild(topBarUi);
  });
}

const loadFullNews = async (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
  const res = await fetch(url);
  const data = await res.json();
  displayNews(data.data);
}

const displayNews = (data) => {
  const displayNewsField = document.getElementById('news-field');
  displayNewsField.innerHTML = ``;

  data.forEach(data => {
    const newsDev = document.createElement('div')
    newsDev.classList.add('row','g-0','mb-4','p-3','bg-white','shadow-sm');
    newsDev.innerHTML = `
                    <div class="col-md-4">
                        <img src="${data.image_url}" class="img-fluid rounded-start " alt="...">
                    </div>
                    <div class="col-md-8 px-4 py-2">
                        <div class="card-body">
                            <h5 class="card-title text-info">${data.title}</h5>
                            <p class="card-text py-2 text-truncate">${data.details}</p>
                        </div>
                        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between mt-3 mt-lg-5">
                          <div class = "d-flex w-25 align-items-center ">
                             <img src="${data.author.img}" class="w-25 rounded-circle" alt="...">
                             <div>
                               <h6 class="ps-3">${data.author.name}</h6>
                             </div>
                          </div>
                           <div class = "d-flex align-items-center">
                           <img src="images/eye.svg" class="img-fluid rounded-start " alt="...">
                             <h6 class="p-3"> View: ${data.total_view} </h6>
                           </div>
                           <div>
                           <button onclick="loadPhoneDetails()" href="#" class="btn btn-info text-white " data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                        </div>
    `;
    displayNewsField.appendChild(newsDev);
  });

}



loadFullNews();
loadTopBars();