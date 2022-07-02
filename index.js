const search = document.getElementById("search");

search.addEventListener("keyup", function (e) {
  let searchQuery = e.target.value.toLowerCase();
  let listItems = document.getElementsByClassName("list-items");

  for (let counter = 0; counter < listItems.length; counter++) {
    const currentName = listItems[counter].textContent.toLowerCase();

    if (currentName.includes(searchQuery)) {
      listItems[counter].style.display = "block";
    } else {
      listItems[counter].style.display = "none";
    }
  }
});
