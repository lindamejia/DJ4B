import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Countdown.module.css";

/**
 * Note :
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead.
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className={style.countdown}>
        <span className={style.days}>
          <span className="days">
            <strong
              style={{
                background: "rgb(180,254,68)",
                background:
                  "linear-gradient(0deg, rgba(180,254,68,1) 0%, rgba(26,246,247,1) 100%)",
                color: "white",
                padding: "20px",
              }}
            >
              {this.addLeadingZeros(countDown.days)}
            </strong>
            <br />
            <span className={style.unit}>
              {" "}
              {countDown.days === 1 ? "Day" : "Days"}{" "}
            </span>
          </span>
        </span>

        <span className={style.hours}>
          <span className="hours">
            <strong
              style={{
                backgroundColor: "#2DBD58",
                background: "rgb(180,254,68)",
                background:
                  "linear-gradient(0deg, rgba(180,254,68,1) 0%, rgba(26,246,247,1) 100%)",
                color: "white",
                padding: "20px",
              }}
            >
              {this.addLeadingZeros(countDown.hours)}
            </strong>
            <br />
            <span className={style.unit}> Hours </span>
          </span>
        </span>

        <span className={style.minutes}>
          <span>
            <strong
              style={{
                backgroundColor: "#2DBD58",
                background: "rgb(180,254,68)",
                background:
                  "linear-gradient(0deg, rgba(180,254,68,1) 0%, rgba(26,246,247,1) 100%)",
                color: "white",
                padding: "20px",
              }}
            >
              {this.addLeadingZeros(countDown.min)}
            </strong>
            <br />
            <span className={style.unit}> Min </span>
          </span>
        </span>

        <span className={style.seconds}>
          <span className="seconds">
            <strong
              style={{
                backgroundColor: "#2DBD58",
                background: "rgb(180,254,68)",
                background:
                  "linear-gradient(0deg, rgba(180,254,68,1) 0%, rgba(26,246,247,1) 100%)",
                color: "white",
                padding: "20px",
              }}
            >
              {this.addLeadingZeros(countDown.sec)}
            </strong>
            <br />
            <span className={style.unit}> Sec </span>
          </span>
        </span>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
};

Countdown.defaultProps = {
  date: new Date(),
};

export default Countdown;
