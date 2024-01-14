function noStickerSelected() {
  Toastify({
    text: "Please select a sticker from the side menu to delete",
    duration: 3000,
    close: true,
    destination: null,
    newWindow: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      backgroundImage: "linear-gradient(to right, #8360c3, #2ebf91)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function noCardSelected() {
  Toastify({
    text: "Please select a card from the side menu to delete",
    duration: 3000,
    close: true,
    destination: null,
    newWindow: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      backgroundImage: "linear-gradient(to right, #8360c3, #2ebf91)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
