document.addEventListener("DOMContentLoaded", () => {
   const popup = document.querySelector(".popup");
   const showLogin = document.querySelector("#show-login");
   const closeBtn = document.querySelector(".close-btn");

   // Tampilkan popup
   showLogin.addEventListener("click", () => {
      popup.classList.add("active");
   });

   // Tutup popup
   closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
   });

   // Tutup popup kalau klik di luar area popup
   window.addEventListener("click", (e) => {
      if (e.target === popup) {
         popup.classList.remove("active");
      }
   });
});
