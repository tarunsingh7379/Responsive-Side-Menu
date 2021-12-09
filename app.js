const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");
const listItem = document.querySelectorAll(".list-item");

dark.addEventListener("click", () => {
  sidebar.className = "sidebar";

  listItem.forEach((item) => {
    item.className = "list-item";
  });

  activeListItem.className = "list-item active";
});

night.addEventListener("click", () => {
  sidebar.className = "sidebar night";
  listItem.forEach((item) => {
    item.className = "list-item night";
  });

  activeListItem.className = "list-item night active";
});

light.addEventListener("click", () => {
  sidebar.className = "sidebar light";
  listItem.forEach((item) => {
    item.className = "list-item light";
  });
  activeListItem.className = "list-item active light";
});

listItem.forEach((item) => {
  item.addEventListener("click", () => {
    listItem.forEach((item) => {
      if (item.classList.contains("active")) {
        if (item.classList.contains("night")) {
          item.className = "list-item night";
        } else if (item.classList.contains("light")) {
          item.className = "list-item light";
        } else {
          item.className = "list-item";
        }
      }
    });

    if (item.classList.contains("night")) {
      item.className = "list-item active night";
    } else if (item.classList.contains("light")) {
      item.className = "list-item active light";
    } else {
      item.className = "list-item active";
    }
  });
});
