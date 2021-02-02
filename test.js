
(function () {
    console.log("IIFE Init");
    if (typeof window !== 'undefined') {
        console.log("Window not undefined");
        const url = window.location.href;
        if (url.includes('fifaplus')) {
            console.log("URL includes");
          body.classList.add("fifaplus");
        } else {
            console.log("URL does not include");
          body.classList.remove("fifaplus");
        }
    }
})();
