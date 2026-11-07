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
const packCountDisplay = document.querySelector(".pack-count");
packBoxes.forEach((box) => box.addEventListener("change", updatePackCount));

function updatePackCount() {
  let packed = 0;
  packBoxes.forEach((box) => {
    box.closest("li").classList.toggle("packed", box.checked);
    if (box.checked) packed++;
  });
  packCountDisplay.textContent = `${packed} of ${packBoxes.length} packed`;
}

const trekDaysInput = document.querySelector(".trek-days");
const comfortLevelSelect = document.querySelector(".comfort-level");
const budgetTotalDisplay = document.querySelector(".budget-total");
const dailyRateByComfortLevel = { budget: 30, mid: 50, comfortable: 80 };

trekDaysInput.addEventListener("input", calculateBudget);
comfortLevelSelect.addEventListener("change", calculateBudget);

// Multiplies the trekking days by the daily rate for the chosen comfort level and shows the estimated total.
function calculateBudget() {
  const numberOfDays = Math.max(0, Number(trekDaysInput.value) || 0);
  const estimatedTotal = numberOfDays * dailyRateByComfortLevel[comfortLevelSelect.value];
  budgetTotalDisplay.textContent = `Estimated total: $${estimatedTotal} USD`;
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
