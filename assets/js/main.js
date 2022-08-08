const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const overlay = $(".overlay");
const openSidebarBtn = $(".main__header-icon");
const closeSidebarBtn = $(".menu__sidebar-close");
const menuSidebar = $(".menu__sidebar");
const sidebarItems = $$(".menu__sidebar-item");
const subcription = $(".subcription");
const premiumBtn = $(".premium-item");
let showingIndex;

const headerNavbarItems = $$(".header__navBar li");
console.log(headerNavbarItems);

var swiper = new Swiper(".trendingList", {
    slidesPerView: 2,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        740: {
            slidesPerView: 4,
            slidesPerGroup: 2,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// xử lí main-sidebar khi có sự kiện nhấn phím
openSidebarBtn.addEventListener("click", () => {
    openSidebar();
});

closeSidebarBtn.addEventListener("click", () => {
    closeSidebar();
});

overlay.addEventListener("click", () => {
    closeSidebar();
});

function openSidebar() {
    menuSidebar.style.display = "block";
    overlay.style.display = "block";
}

function closeSidebar() {
    menuSidebar.style.display = "none";
    overlay.style.display = "none";
    $(".menu__sidebar-item.active") &&
        $(".menu__sidebar-item.active").classList.remove("active");
}

// open subsidebar
sidebarItems.forEach((sidebarItem, index) => {
    sidebarItem.addEventListener("click", (e) => {
        if (index !== showingIndex) {
            $(".menu__sidebar-item.active") &&
                $(".menu__sidebar-item.active").classList.remove("active");
            sidebarItem.classList.add("active");
            showingIndex = index;
        } else {
            sidebarItem.classList.remove("active");
            showingIndex = undefined;
        }
    });
});

// Xử lí active navbar
headerNavbarItems.forEach((headerNavbarItem) => {
    headerNavbarItem.addEventListener("click", () => {
        $(".header__navBar li.active").classList.remove("active");
        headerNavbarItem.classList.add("active");
    });
});

// Xử lí nút premium
premiumBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSubcription();
});

overlay.addEventListener("click", () => {
    hideSubcription();
});

function showSubcription() {
    subcription.style.display = "flex";
    overlay.style.display = "block";
}

function hideSubcription() {
    subcription.style.display = "none";
    overlay.style.display = "none";
}
