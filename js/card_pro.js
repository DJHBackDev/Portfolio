document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card_pro');
    const cardBefore = window.getComputedStyle(card, '::before');
    let rotation = 0;
    let startTime;
    let animationFrame;
  
    const rotate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      rotation = (rotation + (elapsed / 1000) * 120) % 360; // 120 deg per second
      card.style.setProperty('--rotation', `${rotation}deg`);
      startTime = timestamp;
      animationFrame = requestAnimationFrame(rotate);
    };
  
    card.addEventListener('mouseenter', () => {
      startTime = null;
      animationFrame = requestAnimationFrame(rotate);
    });
  
    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(animationFrame);
      const computedStyle = window.getComputedStyle(card, '::before');
      const matrix = new DOMMatrixReadOnly(computedStyle.transform);
      rotation = Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI);
      if (rotation < 0) rotation += 360;
    });
  });
  