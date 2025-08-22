// require "/pagefind/pagefind-ui.js";
function include(file) {
  let script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;

  document.getElementsByTagName("head").item(0).appendChild(script);
}

function addPagefind() {
  const searchEl = document.querySelector("#search");
  // console.log("searchEl:", searchEl);
  const pf = new PagefindUI({
    element: "#search",
    excerptLength: 64,
    pageSize: 10,
    resetStyles: true,
    showImages: false,
    showSubResults: true,
  });
  // console.log("PageFindUI:", pf);
}

addPagefind();

function fixWarning() {
  const inputEl = document.getElementsByClassName("pagefind-ui__search-input");
  // console.log("inputEl:", inputEl);
  if (inputEl !== undefined && inputEl.length > 0) {
    inputEl[0].setAttribute("name", "pagefind-ui__search");
  }
}

fixWarning();
// console.log("INFO: pagefind-extra loaded.");
