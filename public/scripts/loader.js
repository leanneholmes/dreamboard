/* Page loader with a delay of 1 second */
(function (loader) {
  window.addEventListener("beforeunload", function (e) {
    activateLoader();
  });

  window.addEventListener("load", function (e) {
    deactivateLoader();
  });

  function activateLoader() {
    loader.style.display = "block";
    loader.style.opacity = 1;
  }

  function deactivateLoader() {
    setTimeout(function () {
      deactivate();
    }, 1000);

    function deactivate() {
      loader.style.opacity = 0;
      loader.addEventListener(
        "transitionend",
        function () {
          loader.style.display = "none";
        },
        false
      );
    }
  }
})(document.querySelector(".page-loader"));
