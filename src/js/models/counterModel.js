import { renderSpeedCounter } from '../views/counterView';

const updateCounterState = (title, newValue, state) => {
    const config = state.config;

    // Update config state with new Value
    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
}

export const arr = [];

export const increment = (e, title, defaultVal, state) => {
  e.preventDefault();
  let currentValue, maxValue, step;

  const { speed, temperature } = defaultVal;

  if (title === "Speed") {
    currentValue = state.config.speed;
    maxValue = speed.max;
    step = speed.step;
  } else {
    currentValue = state.config.temperature;
    maxValue = temperature.max;
    step = temperature.step;
  }
  if(currentValue < maxValue) {
    const newValue = currentValue + step;
    updateCounterState(title, newValue, state);
  }
}


export const decrement = (e, title, defaultVal, state) => {
  e.preventDefault();
  let currentValue, minValue, step;
  const { speed, temperature } = defaultVal;

  if (title === "Speed") {
    currentValue = state.config.speed;
    minValue = speed.min;
    step = speed.step;
  } else {
    currentValue = state.config.temperature;
    minValue = temperature.min;
    step = temperature.step;
  }
  if (currentValue > minValue) {
    const newValue = currentValue - step;
    updateCounterState(title, newValue, state);
  }
};
