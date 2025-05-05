(function() {
    const field = document.querySelector('.football');
    const ball  = field.querySelector('.ball');

    field.addEventListener('click', e => {
      const F = field.getBoundingClientRect();
      const Bwidth  = ball.offsetWidth;
      const Bheight = ball.offsetHeight;
      const halfW = Bwidth  / 2;
      const halfH = Bheight / 2;

      let x = e.clientX - F.left;
      let y = e.clientY - F.top;

    
      x = Math.max(halfW, Math.min(x, F.width  - halfW));
      y = Math.max(halfH, Math.min(y, F.height - halfH));


      ball.style.left = `${x}px`;
      ball.style.top  = `${y}px`;
    });

    window.addEventListener('resize', () => {

    });
  })();