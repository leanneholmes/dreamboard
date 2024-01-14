/* List of current stickers on the board */
var currentStickers = {};

var stickermodal = document.getElementById("sticker-modal");
var stickerSpan = document.getElementsByClassName("sticker-close")[0]; // Span element that closes the modal

/* Open card modal */
function openStickerModal() {
  stickermodal.style.display = "block";
  resetStickerModal();
}

/* Reset modal fields */
function resetStickerModal() {
  var selectedSticker = document.querySelector(
    'input[name="stickerToAdd"]:checked'
  );
  if (selectedSticker) {
    selectedSticker.checked = false;
  }
  document.getElementById("sticker-error-message").style.display = "none";
}

/* When the user clicks on (x), close the modal */
stickerSpan.onclick = function () {
  stickermodal.style.display = "none";
};

/* Add sticker to board */
function addStickerToBoard() {
  var stickerURL = "";
  var selectedSticker = document.querySelector(
    'input[name="stickerToAdd"]:checked'
  );
  if (!selectedSticker) {
    document.getElementById("sticker-error-message").style.display = "block";
    return;
  }
  const stickerUid = parseInt(getHighestStickerIndex());
  stickerURL = "./assets/stickers/" + selectedSticker.value + ".png";
  updateCurrentStickers(stickerURL);
  addStickerToCanvas(stickerUid, stickerURL);
  makeStickerDraggable();
  updateStickerList(stickerURL);
  stickermodal.style.display = "none"; // Close modal
}

/* Places sticker div on canvas */
function addStickerToCanvas(stickerUid, stickerURL) {
  document.getElementById("canvas-3").insertAdjacentHTML(
    "beforeend",
    `<div class="sticker" id="sticker-${stickerUid}">
      <img src="${stickerURL}" class="sticker-img" />
    </div>`
  );
}

/* Makes sticker Draggable */
function makeStickerDraggable() {
  gsap.registerPlugin(Draggable);
  Draggable.create(".sticker", {
    type: "xy",
    bounds: ".canvas-3",
    throwProps: true,
    zIndexBoost: true,
  });
}

/* Update current stickers object */
function updateCurrentStickers(sticker) {
  currentStickers[getHighestStickerIndex()] = sticker;
}

const getHighestStickerIndex = () => {
  if (Object.keys(currentStickers).length > 0) {
    return (
      parseInt(
        Object.keys(currentStickers)[Object.keys(currentStickers).length - 1]
      ) + 1
    );
  } else {
    return 1;
  }
};

/* Update stickers shown on menu */
function updateStickerList() {
  if (Object.keys(currentStickers).length >= 1) {
    document.getElementById("add-sticker-hidden").innerHTML = "";
  }
  var stickerHTMLString = "";
  let stickerArr = Object.entries(currentStickers);
  for ([key, value] of stickerArr) {
    stickerHTMLString += `<div class="current-stickers-input-wrapper"><input
            type="radio"
            name="active-sticker"
            id="currentSticker-${key}"
            value="${key}"
            class="input-hidden"
          />
          <label for="currentSticker-${key}">
            <img src="${value}" class="active-sticker-img" />
          </label></div>`;
  }
  stickerHTMLString += `<div class="add-button-wrapper">
        <button onclick="openStickerModal()" class="button-add">
          <div class="button-text">Add New</div>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-photo-circle-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 8h.01" />
          <path
            d="M20.964 12.806a9 9 0 0 0 -8.964 -9.806a9 9 0 0 0 -9 9a9 9 0 0 0 9.397 8.991"
          />
          <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" />
          <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
          <path d="M16 19.33h6" />
          <path d="M19 16.33v6" />
        </svg>
        </button>
      </div>`;
  document.getElementById("current-stickers-go-here").innerHTML =
    stickerHTMLString;
}

/* Delete a sticker */
function deleteSticker() {
  if (!document.querySelector('input[name="active-sticker"]:checked')) {
    noStickerSelected();
    return;
  }
  var toDelete =
    "sticker-" +
    document.querySelector('input[name="active-sticker"]:checked').value;
  var toDeleteKey = parseInt(
    document.querySelector('input[name="active-sticker"]:checked').value
  );
  document.getElementById(toDelete).remove();
  delete currentStickers[toDeleteKey];
  updateStickerList();
}
