onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const messages = [
  "Gülü hər kəs ala bilər.",
  "Mən isə sənin üçün yaratdım 🫠",
  "Səni çox istəyirəm, yaxşı ki varsan 🫠"
];

const loveText = document.getElementById("loveText");
let index = 0;

function changeMessage() {
  loveText.style.opacity = 0;

  setTimeout(() => {
    loveText.innerHTML = messages[index];
    loveText.style.opacity = 1;

    // Sonuncu mesaja çatanda artıq dəyişməsin
    if (index < messages.length - 1) {
      index++;
    } else {
      clearInterval(messageInterval);
    }
  }, 1000);
}

changeMessage();
const messageInterval = setInterval(changeMessage, 4000);
