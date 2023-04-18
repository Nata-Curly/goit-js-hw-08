import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const formEmail = document.querySelector('input');
const formMessage = document.querySelector('textarea');
const STORAGE_KEY = "feedback-form-state";
const formInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (formInput) {
    formEmail.value = formInput.email;
    formMessage.value = formInput.message;
};
 
// savedItems();

feedbackForm.addEventListener('input', throttle(onInput), 500);
feedbackForm.addEventListener('submit', onSubmit);

function onInput(event) { 
    event.preventDefault();
    const inputData = {
      email: formEmail.value,
      message: formMessage.value,
  };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
};

function onSubmit(event) { 
    event.preventDefault();
    
    const reloadedSave = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (feedbackForm.email.value && feedbackForm.message.value) {
        const { email, message } = reloadedSave;
        formEmail.value = email;
        formMessage.value = message;
        console.log(reloadedSave);
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    } else {
        alert('Please, fill in all the forms!');
    };
}


// function savedItems() {
//     const reloadedSave = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     if (reloadedSave) {
//         const { email, message } = reloadedSave;
//         feedbackForm.email.value = email;
//         feedbackForm.message.value = message;
//         console.log(reloadedSave);
//     };
// }



// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.