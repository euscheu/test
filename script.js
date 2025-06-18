// script.js
// Optional subtle interactivity for still-life objects

document.querySelectorAll('.object').forEach(obj => {
  obj.addEventListener('mouseover', () => {
    obj.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
  });
  obj.addEventListener('mouseout', () => {
    obj.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.7)';
  });
});
