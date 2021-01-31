$(function () {});
const $gifArea = $("#gif-area");

function addGif(res) {
  let randomIdx = Math.floor(Math.random() * 25);
  let $newDiv = $("<div>", { class: "col-md-4 col-12 mb-8" });
  let $newGif = $("<img>", {
    src: res.data[randomIdx].images.original.url,
    class: "w-100",
  });

  $newDiv.append($newGif);
  $gifArea.append($newDiv);
}

async function getGif(query) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "Ze5c8J2Qso2XktH0EvZ60N3J1l0OnBqt",
      q: query,
    },
  });

  addGif(res.data);
}

$("form").on("submit", function (evt) {
  evt.preventDefault();
  getGif($("#search-bar").val());
});

$("#remove-btn").on("click", function (evt) {
  evt.preventDefault();
  $gifArea.empty();
});
//set up remove button event functionality, probably with setAttribute.innerHtml
