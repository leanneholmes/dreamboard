document.querySelector("#bg-pattern").addEventListener("change", (event) => {
  if (event.target.value === "pattern-none") {
    document.getElementById("canvas-2").innerHTML = "";
  }
  if (event.target.value === "pattern-dots") {
    document.getElementById(
      "canvas-2"
    ).innerHTML = `<svg width="100%" height="100%">
        <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
           <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#979797"></circle>
        </pattern>
        <rect  id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>`;
  }
  if (event.target.value === "pattern-fancy") {
    document.getElementById(
      "canvas-2"
    ).innerHTML = `<svg class="w-full h-full" viewBox="0 0 400 400"><defs><pattern id="bg_pattern" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="0" r="5" stroke="#e0dedf" stroke-width="0.5" fill="none"></circle> <circle cx="0" cy="5" r="5" stroke="#e0dedf" stroke-width="0.5" fill="none"></circle> <circle cx="10" cy="5" r="5" stroke="#e0dedf" stroke-width="0.5" fill="none"></circle> <circle cx="5" cy="10" r="5" stroke="#e0dedf" stroke-width="0.5" fill="none"></circle></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="none"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)"></rect></svg>`;
  }
  if (event.target.value === "pattern-flower") {
    document.getElementById(
      "canvas-2"
    ).innerHTML = `<svg class="w-full h-full" viewBox="0 0 400 400">
        <defs>
           <pattern id="bg_pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="3.5" cy="5" r="1" fill="#e8e8e8"></circle>
              <circle cx="6.5" cy="5" r="1" fill="#e8e8e8"></circle>
              <circle cx="5" cy="3.5" r="1" fill="#e8e8e8"></circle>
              <circle cx="5" cy="6.5" r="1" fill="#e8e8e8"></circle>
              <circle cx="0" cy="0" r="1" fill="#e8e8e8"></circle>
              <circle cx="10" cy="0" r="1" fill="#e8e8e8"></circle>
              <circle cx="0" cy="10" r="1" fill="#e8e8e8"></circle>
              <circle cx="10" cy="10" r="1" fill="#e8e8e8"></circle>
           </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)"></rect>
     </svg>`;
  }
  if (event.target.value === "pattern-chevron") {
    document.getElementById(
      "canvas-2"
    ).innerHTML = `<svg class="w-full h-full" viewBox="0 0 400 400">
        <defs>
           <pattern id="bg_pattern" width="7" height="7" patternUnits="userSpaceOnUse">
              <line x1="1" y1="1" x2="2" y2="2" stroke="#e8e8e8" stroke-width="1" stroke-linecap="round"></line>
              <line x1="3" y1="1" x2="2" y2="2" stroke="#e8e8e8" stroke-width="1" stroke-linecap="round"></line>
           </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)"></rect>
     </svg>`;
  }
});

function getPatternCode(value) {
  if (value === "pattern-none") {
    return "";
  }
  if (value === "pattern-dots") {
    return `<div id="temp-canvas"><svg width="100%" height="100%">
      <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
         <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#979797"></circle>
      </pattern>
      <rect  id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
      </svg></div>`;
  }
  if (value === "pattern-fancy") {
    return `<div id="temp-canvas"><svg class="w-full h-full" viewBox="0 0 400 400"><defs><pattern id="bg_pattern" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="0" r="5" stroke="#e0dedf" stroke-width="0.5" fill="none"></circle> <circle cx="0" cy="5" r="5" stroke="#e0dedf" stroke-width="0.5" fill="none"></circle> <circle cx="10" cy="5" r="5" stroke="#e0dedf" stroke-width="0.5" fill="none"></circle> <circle cx="5" cy="10" r="5" stroke="#e0dedf" stroke-width="0.5" fill="none"></circle></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="none"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)"></rect></svg></div>`;
  }
  if (value === "pattern-flower") {
    return `<div id="temp-canvas"><svg class="w-full h-full" viewBox="0 0 400 400">
      <defs>
         <pattern id="bg_pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="3.5" cy="5" r="1" fill="#e8e8e8"></circle>
            <circle cx="6.5" cy="5" r="1" fill="#e8e8e8"></circle>
            <circle cx="5" cy="3.5" r="1" fill="#e8e8e8"></circle>
            <circle cx="5" cy="6.5" r="1" fill="#e8e8e8"></circle>
            <circle cx="0" cy="0" r="1" fill="#e8e8e8"></circle>
            <circle cx="10" cy="0" r="1" fill="#e8e8e8"></circle>
            <circle cx="0" cy="10" r="1" fill="#e8e8e8"></circle>
            <circle cx="10" cy="10" r="1" fill="#e8e8e8"></circle>
         </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)"></rect>
   </svg></div>`;
  }
  if (value === "pattern-chevron") {
    return `<div id="temp-canvas"><svg class="w-full h-full" viewBox="0 0 400 400"><svg class="w-full h-full" viewBox="0 0 400 400">
      <defs>
         <pattern id="bg_pattern" width="7" height="7" patternUnits="userSpaceOnUse">
            <line x1="1" y1="1" x2="2" y2="2" stroke="#e8e8e8" stroke-width="1" stroke-linecap="round"></line>
            <line x1="3" y1="1" x2="2" y2="2" stroke="#e8e8e8" stroke-width="1" stroke-linecap="round"></line>
         </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)"></rect>
   </svg></div>`;
  }
}
