(function() {
    const calc = document.querySelector('section.calculator');
    const num1  = calc.querySelector('#num1');
    const num2  = calc.querySelector('#num2');
    const result= calc.querySelector('#result');
    const ops   = calc.querySelector('.ops');

    ops.addEventListener('click', e => {
      if (e.target.tagName !== 'BUTTON') return;
      const op = e.target.dataset.op;

      const a = parseFloat(num1.value.trim());
      const b = parseFloat(num2.value.trim());
      if (isNaN(a) || isNaN(b)) {
        result.value = 'Помилка вводу';
        return;
      }

      let res;
      switch (op) {
        case '+': res = a + b; break;
        case '−': res = a - b; break;
        case '×': res = a * b; break;
        case '÷':
          if (b === 0) {
            result.value = 'На 0 не ділити';
            return;
          }
          res = a / b;
          break;
      }

      const names = { '+':'Сума', '−':'Різниця', '×':'Добуток','÷':'Частка' };
      result.value = `${names[op]} чисел ${a} і ${b} = ${res}`;
    });
  })();