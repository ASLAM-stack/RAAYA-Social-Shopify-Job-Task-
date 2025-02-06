let lastScroll = window.scrollY;
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    document.querySelector(".header").classList.toggle("hidden", currentScroll > lastScroll);
    lastScroll = currentScroll;
});

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
});

document.querySelector(".service").addEventListener("click", function() {
    this.classList.toggle("open");
});

function selectBox(selectedBox) {
    document.querySelectorAll(".pricing-box").forEach(box => {
        box.classList.remove("selected");
    });
    selectedBox.classList.add("selected");
}
// according
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('span');
        const allContents = document.querySelectorAll('.accordion-content');
        const allIcons = document.querySelectorAll('.accordion-header span');

        allContents.forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
            }
        });

        allIcons.forEach(i => {
            i.textContent = '+';
        });

        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '+';
        } else {
            content.style.display = 'block';
            icon.textContent = '-';
        }
    });
});
// slider

 
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });