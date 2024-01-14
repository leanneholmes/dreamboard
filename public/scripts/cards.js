var currentCards = {}; // This object tracks current cards to appear on the left menu

var cardmodal = document.getElementById("card-modal");
var cardSpan = document.getElementsByClassName("card-close")[0]; // Span element that closes the modal

function openCardModal() {
  cardmodal.style.display = "block";
  resetCardModal();
}

function resetCardModal() {
  document.getElementById("card-error-message").style.display = "none";
  document.getElementById("uploaded-image").value = "";
  document.getElementById("uploaded-image-preview").src = "";
  document.getElementById("card-caption").value = "";
  document.getElementById("card-error-message").style.display = "none";
  var selectedCard = document.querySelector('input[name="cardToAdd"]:checked');
  if (selectedCard) {
    selectedCard.checked = false;
  }
}

cardSpan.onclick = function () {
  cardmodal.style.display = "none";
};

function showImagePreview() {
  var fileInput = document.getElementById("uploaded-image"); // Pointer to file location
  const image = document.getElementById("uploaded-image-preview"); // Pointer to file image
  fileInput.addEventListener("change", function (e) {
    var file = e.target.files[0];
    var previewImage = URL.createObjectURL(file);
    image.src = previewImage;
  });
}
showImagePreview();

function addCardToBoard() {
  var fileInput = document.getElementById("uploaded-image");
  var file = fileInput.files[0];
  var imageURL = "";
  var selectedImage = document.querySelector('input[name="cardToAdd"]:checked');
  var cardCaption = document.getElementById("card-caption").value;
  if (file) {
    imageURL = URL.createObjectURL(file);
    updateCurrentCards(imageURL);
    updateCardList();
  } else if (selectedImage) {
    imageURL = "./assets/cards/" + selectedImage.value + ".png";
    updateCurrentCards(imageURL);
    updateCardList();
  } else {
    document.getElementById("card-error-message").style.display = "block";
    return;
  }
  const uid = parseInt(getHighestCardIndex() - 1);
  addCardToCanvas(uid, imageURL, cardCaption);
  makeCardDraggable();
  cardmodal.style.display = "none"; // Close modal
}

function addCardToCanvas(uid, imageURL, cardCaption) {
  document.getElementById("canvas-3").insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="card-${uid}">
        <div class="card-img-container">
          <img src="${imageURL}" class="card-img" />
        </div>
        <div class="card-text">${cardCaption}</div>
      </div>`
  );
}

function makeCardDraggable() {
  gsap.registerPlugin(Draggable);
  Draggable.create(".card", {
    type: "xy",
    bounds: ".canvas-3",
    throwProps: true,
    zIndexBoost: true,
  });
}

function updateCurrentCards(card) {
  currentCards[getHighestCardIndex()] = card;
}

const getHighestCardIndex = () => {
  if (Object.keys(currentCards).length > 0) {
    return (
      parseInt(
        Object.keys(currentCards)[Object.keys(currentCards).length - 1]
      ) + 1
    );
  } else {
    return 1;
  }
};

function updateCardList() {
  if (Object.keys(currentCards).length >= 1) {
    document.getElementById("add-card-hidden").innerHTML = "";
  }
  var cardHTMLString = "";
  let cardArr = Object.entries(currentCards);
  for ([key, value] of cardArr) {
    cardHTMLString += `<div class="current-cards-input-wrapper"><input
          type="radio"
          name="active-card"
          id="currentCard-${key}"
          value="${key}"
          class="input-hidden"
        />
        <label for="currentCard-${key}">
          <img src="${value}" class="active-card-img" />
        </label></div>`;
  }
  cardHTMLString += `<div class="add-button-wrapper">
      <button onclick="openCardModal()" class="button-add">
        <div class="button-text">Add New</div>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-photo-plus"
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
          d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"
        />
        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
        <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
      </svg>
      </button>
    </div>`;
  document.getElementById("current-cards-go-here").innerHTML = cardHTMLString;
}

function deleteCard() {
  if (!document.querySelector('input[name="active-card"]:checked')) {
    // noCardSelected(); TODO alert for user
    return;
  }
  var toDelete =
    "card-" + document.querySelector('input[name="active-card"]:checked').value;
  var toDeleteKey = parseInt(
    document.querySelector('input[name="active-card"]:checked').value
  );
  document.getElementById(toDelete).remove();
  delete currentCards[toDeleteKey];
  updateCardList();
}
