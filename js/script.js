// ---------- SEARCH BAR ----------
const searchForm = document.querySelector("form");
const searchInput = document.querySelector('input[type="text"]');

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchValue = searchInput.value.trim();

    if (searchValue === "") {
        alert("Please enter a restaurant or food item to search.");
    } else {
        alert("Searching for: " + searchValue);
        searchInput.value = "";
    }
});


// ---------- DINING / DELIVERY / NIGHT LIFE TABS ----------
const tabs = document.querySelectorAll(".tablist li");

tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        tabs.forEach(function (item) {
            item.classList.remove("active-tab");
        });

        tab.classList.add("active-tab");

        const tabName = tab.querySelector("h2").innerText;
        alert(tabName + " selected");
    });
});


// ---------- COLLECTION CARDS ----------
const collectionCards = document.querySelectorAll(".collection-card");

collectionCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const collectionName = card.querySelector("h2").innerText;
        alert("Opening " + collectionName);
    });
});


// ---------- NAVBAR ACTIVE LINK ----------
const navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active-link");
        });

        link.classList.add("active-link");
    });
});