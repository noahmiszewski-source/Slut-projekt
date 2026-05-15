const k = "vinylCart";
function g() {
  return JSON.parse(localStorage.getItem(k) || "[]");
}
function u(c) {
  const e = document.getElementById("cart-count");
  if (e) {
    e.textContent = c.length;
    e.classList.toggle("hidden", c.length === 0);
  }
}
function a(e) {
  const card = e.target.closest(".album-card");
  const title = card.querySelector("h4").textContent;
  const artist = card.querySelector("p").textContent;
  const price = card.querySelector(".price").textContent;
  const item = { title, artist, price };
  const c = g();
  c.push(item);
  localStorage.setItem(k, JSON.stringify(c));
  u(c);
}
function s() {
  document
    .querySelectorAll(".add-to-cart")
    .forEach((b) => b.addEventListener("click", a));
}
function i() {
  u(g());
  s();
}
document.addEventListener("DOMContentLoaded", i);
