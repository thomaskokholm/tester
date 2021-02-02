if (typeof window !== 'undefined') {
    const url = window.location.href;
    if (url.includes('fifaplus')) {
      body.classList.add("fifaplus");
    } else {
      body.classList.remove("fifaplus");
    }
}
