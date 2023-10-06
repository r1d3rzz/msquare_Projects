const inputTag = document.getElementById("inputTag");
const ulTag = document.querySelector(".list-group");

let i = 0;

inputTag.addEventListener("change", function (e) {
  i += 1;
  let inputValue = e.target.value;
  const liTag = document.createElement("li");
  const divTag = document.createElement("div");
  const liDivTag = document.createElement("div");
  liDivTag.append(`${i}. ${inputValue}`);
  liDivTag.classList.add("list-div-item");
  divTag.classList.add("fa-solid", "fa-trash");
  divTag.addEventListener("click", function () {
    liTag.remove();
  });
  liTag.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  liTag.setAttribute("id", i);
  liTag.append(liDivTag, divTag);
  liDivTag.addEventListener("click", function () {
    let doneClass = liDivTag.classList.contains("done");
    doneClass
      ? liDivTag.classList.remove("done")
      : liDivTag.classList.add("done");
  });
  ulTag.append(liTag);
  e.target.value = "";
});
