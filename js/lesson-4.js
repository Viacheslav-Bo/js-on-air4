// ====================================================================================================
// Завдання 1:
// =====================================================================================================
// // 1 - отримай body елемент і виведи його в консоль;
// const bodyElem = document.body;
// console.log(`TASK 1:`, bodyElem);
// // 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.getElementById('title');
// console.log(`TASK 2:`, title);
// // 3 - отримай елемент class="list" і виведи його в консоль;
// const list = document.querySelector('.list');
// console.log(`TASK 3:`, list);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const topics = document.querySelectorAll('[data-topic]');
// console.log(`TASK 4. всі елементи:`, topics);
// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const topicElem = document.querySelector('[data-topic]');
// console.log(`TASK 5. перший елемент:`, topicElem);
// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastTopic = topics[topics.length - 1];
// console.log(`TASK 6. останній елемент:`, lastTopic);
// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const next = title.nextElementSibling;
// console.log(`TASK 7. сусідній елемент:`, next);
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3 = document.querySelectorAll('h3');
// console.log(`TASK 8:`, h3);
// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// h3.forEach(elem => {
//   elem.classList.add('active');
// });
// console.log(`TASK 9:`, h3);
// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const navElem = document.querySelector('li[data-topic="navigation"]');
// console.log(`TASK 10:`, navElem);
// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor
// // жовтим
// navElem.style.backgroundColor = 'yellow';
// console.log(`TASK 11:`, navElem);
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const p = navElem.querySelector('p');
// p.textContent = 'Я змінив тут текст!';
// console.log(`TASK 12:`, p);
// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут
// // data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const manipul = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(`TASK 13:`, manipul);
// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// manipul.style.backgroundColor = 'lightblue';
// console.log(`TASK 14:`, manipul);
// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completed = document.querySelector('.completed');
// console.log(`TASK 15:`, completed);
// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const li = completed.closest('li');
// li.remove();
// console.logc;
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст:
// // "Об'єктна модель документа (Document Object Model)"
// const newP = document.createElement('p');
// newP.textContent = "Об'єктна модель документа (Document Object Model)";
// title.insertAdjacentElement('afterend', newP);
// console.log(`TASK 17:`, newP);
// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
// // а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево -
// // це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// // тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newLi = document.createElement('li');
// const newTitle = document.createElement('h3');
// const newText = document.createElement('p');
// newText.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// newTitle.textContent = 'Властивість innerHTML';
// newLi.append(newTitle, newText);
// list.append(newLi);
// console.log(`TASK 18:`, newLi);
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// list.insertAdjacentHTML(
//   'beforeend',
//   `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево —
//     це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.</p>
//   </li>
//   `
// );
// console.log(`TASK 19:`, list);
// // 20 - очисти список
// list.innerHTML = '';
// console.log(`TASK 20:`, list);
// =====================================================================================================

// ====================================================================================================
// Завдання 2:
// =====================================================================================================
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).
// створюємо контейнер

// const list = document.querySelector('.list');
// list.insertAdjacentElement('afterend', numberContainer);

// for (let i = 0; i < 100; i++) {
//   const randomNum = Math.floor(Math.random() * 100) + 1;

//   const numberDiv = document.createElement('div');
//   numberDiv.classList.add('number');
//   numberDiv.textContent = randomNum;

//   if (randomNum % 2 === 0) {
//     numberDiv.classList.add('even');
//   } else {
//     numberDiv.classList.add('odd');
//   }

//   numberContainer.append(numberDiv);
// }

// ====================================================================================================

// ====================================================================================================
// Завдання 3:
// =====================================================================================================
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.
const form = document.querySelector('.js-contact-form');
const input = form.querySelector('input');

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// form.addEventListener('input', hundleInputForm);

// function hundleInputForm(evt) {
//   const input = evt.target;
//   const length = 6;

//   if (input.value.length < length) {
//     input.classList.add('error');
//     input.classList.remove('success');
//   } else {
//     input.classList.remove('error');
//     input.classList.add('success');
//   }
// }

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener('focus', evt => {
//   if (evt.target.value === '') {
//     evt.target.style.outline = '3px solid red';
//   } else {
//     evt.target.style.outline = '3px solid green';
//   }
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener('blur', evt => {
  if (evt.target.value === '') {
    evt.target.style.outline = '3px solid red';
  } else {
    evt.target.style.outline = '3px solid green';
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
form.addEventListener('submit', hundleSubmitForm);

function hundleSubmitForm(evt) {
    evt.preventDefault();
    
    const input = 
}

// ====================================================================================================

// ====================================================================================================
// Завдання 4:
// =====================================================================================================
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
// =====================================================================================================
// =====================================================================================================
