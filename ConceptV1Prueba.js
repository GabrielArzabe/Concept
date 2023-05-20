document.addEventListener("DOMContentLoaded", () => {
  const centerMiddleButton1 = document.querySelector('.center-middle-button-1');
  const centerMiddleButton2 = document.querySelector('.center-middle-button-2');
  const centerMiddleButton3 = document.querySelector('.center-middle-button-3');
  const centerMiddleButton4 = document.querySelector('.center-middle-button-4');
  const centerMiddleButton5 = document.querySelector('.center-middle-button-5');
  const centerMiddleButton6 = document.querySelector('.center-middle-button-6');
  const centerMiddleButton7 = document.querySelector('.center-middle-button-7');
  const centerMiddleButton8 = document.querySelector('.center-middle-button-8');
  const centerMiddleButton9 = document.querySelector('.center-middle-button-9');
  const centerMiddleButton10 = document.querySelector('.center-middle-button-10');
  const centerMiddleButton11 = document.querySelector('.center-middle-button-11');
  const centerMiddleButton12 = document.querySelector('.center-middle-button-12');
  const centerMiddleButton13 = document.querySelector('.center-middle-button-13');
  const centerMiddleButton14 = document.querySelector('.center-middle-button-14');

  const mainImage = document.querySelector('.content img');

  function updateButtonPositions() {
    const imageRect = mainImage.getBoundingClientRect();

    centerMiddleButton1.style.left = `${imageRect.left + imageRect.width / 4}px`;
    centerMiddleButton1.style.top = `${imageRect.top + imageRect.height / 5}px`;

    centerMiddleButton2.style.left = `${imageRect.left + imageRect.width / 4}px`;
    centerMiddleButton2.style.top = `${imageRect.top + imageRect.height / 2.5}px`;

    centerMiddleButton3.style.left = `${imageRect.left + imageRect.width / 4}px`;
    centerMiddleButton3.style.top = `${imageRect.top + imageRect.height / 1.63}px`;

    centerMiddleButton4.style.left = `${imageRect.left + imageRect.width / 4}px`;
    centerMiddleButton4.style.top = `${imageRect.top + imageRect.height / 1.19}px`;

    centerMiddleButton5.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton5.style.top = `${imageRect.top + imageRect.height / 9}px`;

    centerMiddleButton6.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton6.style.top = `${imageRect.top + imageRect.height / 5}px`;

    centerMiddleButton7.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton7.style.top = `${imageRect.top + imageRect.height / 3.5}px`;

    centerMiddleButton8.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton8.style.top = `${imageRect.top + imageRect.height / 2.8}px`;

    centerMiddleButton9.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton9.style.top = `${imageRect.top + imageRect.height / 2.3}px`;

    centerMiddleButton10.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton10.style.top = `${imageRect.top + imageRect.height / 1.9}px`;

    centerMiddleButton11.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton11.style.top = `${imageRect.top + imageRect.height / 1.6}px`;

    centerMiddleButton12.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton12.style.top = `${imageRect.top + imageRect.height / 1.4}px`;

    centerMiddleButton13.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton13.style.top = `${imageRect.top + imageRect.height / 1.23}px`;

    centerMiddleButton14.style.left = `${imageRect.left + imageRect.width / 1.63}px`;
    centerMiddleButton14.style.top = `${imageRect.top + imageRect.height / 1.1}px`;

  }

  // Actualizar la posición de los botones cuando se carga o cambia el tamaño de la imagen
  window.addEventListener('resize', updateButtonPositions);
  mainImage.addEventListener('load', updateButtonPositions);

  // Cargar la imagen inicial
  mainImage.src = 'foto1.jpg';
});