


window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  const menuItems = document.querySelectorAll(".m-item");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
      currentSection = section.getAttribute("id");
    }
  });

  menuItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === "#" + currentSection) {
      item.classList.add("active");
    }
  });
});
