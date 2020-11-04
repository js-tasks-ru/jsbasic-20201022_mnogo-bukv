let calculator = {
    read(a, b) {
      this.numbOne = a;
      this.numbTwo = b;
    },
    sum() {
      return this.numbOne + this.numbTwo;
    },
    mul() {
      return this.numbOne * this.numbTwo;
    },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
