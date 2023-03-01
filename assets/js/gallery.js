function newOnClick(event) {
    if (event.target.classList.contains("all_new")) {
        let news = document.getElementsByClassName("all_new");
        for (let i = 0; i < news.length; i++) {
            news[i].classList.remove("active");
        }
        event.target.classList.add("active")
    }
}
var allNews = document.getElementsByClassName("all_new");
for (let i = 0; i < allNews.length; i++) {
    allNews[i].addEventListener("click", newOnClick);
}