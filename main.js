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
// === YENİ ===: Şəkil elementini əldə edirik
const finalImage = document.getElementById("finalImage");

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
      // === YENİ ===: Sonuncu mesajdırsa...
      clearInterval(messageInterval);
      
      // Mətnin görünməsini gözləyib (1s) şəkli göstəririk
      setTimeout(() => {
        if (finalImage) { // Elementin mövcudluğunu yoxlayaq
          finalImage.classList.add("show");
        }
      }, 1000); // 1000ms = 1s (mətnin 'opacity' transition müddəti)
    }
  }, 1000); // Mətnin yox olma müddəti
}

changeMessage();
const messageInterval = setInterval(changeMessage, 4000);
