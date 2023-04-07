// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  info: { background: 'hsla(300, 76%, 72%, 0.70)' },
});
const inputDate = document.querySelector('input#datetime-picker');
const btnBeginCount = document.querySelector('button[data-start]');
let daysCount = document.querySelector('[data-days]');
let hoursCount = document.querySelector('[data-hours]');
let minutesCount = document.querySelector('[data-minutes]');
let secondsCount = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  weekNumbers: true,
  onClose(selectedDates) {

    if (selectedDates[0] > options.defaultDate) {
      btnBeginCount.removeAttribute('disabled');
    } else {
      btnBeginCount.setAttribute('disabled', '');
      Notiflix.Notify.info('Please choose a date in the future');
    }
  },
};

const datePicker = flatpickr(inputDate, options);

btnBeginCount.setAttribute('disabled', '');

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

btnBeginCount.addEventListener('click', () => {
  btnBeginCount.setAttribute('disabled', '');
  let interval = setInterval(() => {
    let currentTime = new Date().getTime();
    let msToCount = datePicker.selectedDates[0].getTime() - currentTime;
    // console.log(msToCount);
    let timer = convertMs(msToCount);

    daysCount.textContent = addLeadingZero(timer.days);
    hoursCount.textContent = addLeadingZero(timer.hours);
    minutesCount.textContent = addLeadingZero(timer.minutes);
    secondsCount.textContent = addLeadingZero(timer.seconds);

    if (msToCount < 1000) {
      clearInterval(interval);
    }
  }, 1000);
});