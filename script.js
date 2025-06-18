// 미술품과 식물에 호버 시 효과 추가

document.querySelectorAll('.art-piece, .plant').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
    el.style.transform = 'scale(1.05)';
  });
  el.addEventListener('mouseout', () => {
    el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.4)';
    el.style.transform = 'scale(1.0)';
  });
});
