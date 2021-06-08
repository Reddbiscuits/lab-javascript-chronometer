class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId =0;
  }
  startClick(callback) {
    let ourFunction = () => {
      // increment this.currentTime by 1
      this.currentTime += 1
    }
    this.intervalId = setInterval(ourFunction, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)

  }
    
  
  getSeconds() {
    let seconds = this.currentTime - (this.getMinutes() * 60)
    console.log("seconds",this.currentTime )
    return seconds
  }  
  
  twoDigitsNumber(num) {
    if (num < 10) {
      return "0" + num
    }else {
      return num.toString()
    }
  }
  stopClick() {
    clearInterval (this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let splitTime = `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
    return splitTime
  }
}
