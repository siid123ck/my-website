const cards = document.querySelectorAll(".trek-card");

cards.forEach((card) => {
  const button = card.querySelector(".card-btn");
  button.addEventListener("click", () => toggleCard(card));
});

function toggleCard(card) {
  const button = card.querySelector(".card-btn");
  const isOpen = card.classList.toggle("open");
  button.textContent = isOpen ? "Close" : "Read more";
  button.setAttribute("aria-expanded", isOpen);
}

const seasonPicker = document.querySelector(".season-picker");
seasonPicker.addEventListener("change", filterBySeason);

function filterBySeason() {
  const selected = seasonPicker.value;
  document.querySelectorAll(".route-item").forEach((item) => {
    const seasons = item.dataset.seasons.split(" ");
    const matches = selected === "all" || seasons.includes(selected);
    item.classList.toggle("faded", !matches);
  });
}

const packBoxes = document.querySelectorAll(".pack-list input[type='checkbox']");
packBoxes.forEach((box) => box.addEventListener("change", updatePackCount));

function updatePackCount() {
  let packed = 0;
  packBoxes.forEach((box) => {
    box.closest("li").classList.toggle("packed", box.checked);
    if (box.checked) packed++;
  });
  document.querySelector(".pack-count").textContent = `${packed} of ${packBoxes.length} packed`;
}

const trekDays = document.querySelector(".trek-days");
const comfortLevel = document.querySelector(".comfort-level");
const dailyRates = { budget: 30, mid: 50, comfortable: 80 };

[trekDays, comfortLevel].forEach((field) => {
  field.addEventListener("input", calculateBudget);
  field.addEventListener("change", calculateBudget);
});

function calculateBudget() {
  const days = Math.max(0, Number(trekDays.value) || 0);
  const total = days * dailyRates[comfortLevel.value];
  document.querySelector(".budget-total").textContent = `Estimated total: $${total} USD`;
}

const backToTop = document.querySelector(".back-to-top");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", toggleBackToTop);
backToTop.addEventListener("click", scrollToTop);

function toggleBackToTop() {
  backToTop.classList.toggle("visible", window.scrollY > hero.offsetHeight);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

calculateBudget();
updatePackCount();
