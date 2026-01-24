class CountDownTimer extends HTMLElement {
  constructor() {
    super();

    //Grab required elements
    this.daysElement = this.querySelector('.days');
    this.hoursElement = this.querySelector('.hours');
    this.minutesElement = this.querySelector('.minutes');
    this.secondsElement = this.querySelector('.seconds');

    // Set Date
    const timerContainer = this.querySelector('.countdown-timer');
    this.endDateString = timerContainer.dataset.endDate ?? "May 25, 2026 16:37:52 EST";
    this.endDate = new Date(this.endDateString).getTime();

    // Start timer
    this.timer = setInterval(this.handleTick.bind(this), 1000);
    // if we use arrow function we don't need to bind this
    // this.timer = setInterval(() => this.handleTick(), 1000);
  }

  handleTick() {
    const now = new Date().getTime();
    const endDate = this.endDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(endDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (endDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((endDate % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((endDate % (1000 * 60)) / 1000);

    // Inject data into elements
    if (this.daysElement) this.daysElement.textContent = `${days} days`;
    if (this.hoursElement) this.hoursElement.textContent = `${hours} hours`;
    if (this.minutesElement) this.minutesElement.textContent = `${minutes} minutes`;
    if (this.secondsElement) this.secondsElement.textContent = `${seconds} seconds`;

    // If the countdown is over, write some text
    if (endDate < 0) {
      clearInterval(this.timer);
      this.innerHTML = "<div class='countdown-timer'>EXPIRED</div>";
    }
  }
}

customElements.define("countdown-timer", CountDownTimer);
