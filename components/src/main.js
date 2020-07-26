if (window.matchMedia) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.add("light");
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    document.querySelector("body").classList.add(newColorScheme);
  });
} else {
  document.querySelector("body").classList.add("light");
}
