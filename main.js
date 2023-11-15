// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
for (let num = 10; num <= 20; num++) {
  if (num < 20) {
    console.log(num + ", ");
  } else {
    console.log(num);
  }
}

// 2. Вивести квадрати чисел від 10 до 20.
for (let num = 10; num <= 20; num++) {
  console.log(num * num);
}

//3. Вивести таблицю множення на 7.
for (let num = 1; num <= 9; num++) {
  console.log(`7 x ${num} = ${num * 7}`);
}

//4. Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let num = 1; num <= 15; num++) {
  sum += num;
}
console.log(sum);

//5. Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let num = 15; num <= 35; num++) {
  product = product * num;
}
console.log(product);

//6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum6 = 0;
for (let num = 1; num <= 500; num++) {
  sum6 += num;
}
console.log(sum6 / 500);

//7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumEven = 0;
for (let i = 30; i <= 80; i += 2) {
  sumEven += i;
}
console.log(sumEven);

//8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

//9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let num = prompt("9. Введіть ваше число: ");
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}

//10. Визначити кількість його парних дільників.
let num10 = prompt("10. Введіть ваше число: ");
let count = 0;
for (let i = 1; i <= num10; i++) {
  if (num10 % i == 0) {
    if (i % 2 == 0) {
      count++;
    }
  }
}
console.log(count);

//11. Знайти суму його парних дільників.
let num11 = prompt("11. Введіть ваше число: ");
let sum11 = 0;
for (let i = 1; i <= num11; i++) {
  if (num11 % i == 0) {
    if (i % 2 == 0) {
      sum11 = sum11 + i;
    }
  }
}
console.log(sum11);

// 12. Надрукувати повну таблицю множення від 1 до 10.
for (let num1 = 1; num1 <= 9; num1++) {
  for (let num2 = 1; num2 <= 9; num2++) {
    console.log(`${num1} x ${num2} = ${num2 * num1}`);
  }
}
