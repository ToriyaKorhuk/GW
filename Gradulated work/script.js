function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
        var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
        initializeClock('countdown', deadline);
      }
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 80343 * 1000);
  initializeClock("countdown", deadline);

  function check(){
    var fLogin = document.getElementById('login');
    var fPass = document.getElementById('pass');
    if (fLogin.value.length<3){
        alert('Логин не может быть меньше 3-х символов!');
        return false;
    }
    if (fPass.value.length<5){
        alert('Пароль не может быть меньше 5-ти символов!');
        return false;
    }
    alert('Регистрация завершена!');
    return true;
}