import { elements } from './views/base';

import { renderWheels } from './views/wheelView';
import * as wheelModel from './models/wheelModel';

import { calculateStats } from './models/statsModel';
import { renderStats, clearRenderStats } from './views/statsView';

import * as counterModel from './models/counterModel';
import * as counterView from './views/counterView';

const counterDefaultValue = {
    speed: {
        title: 'Speed',
        unit: 'mph',
        step: 5,
        min: 45,
        max: 70
    },
    temperature: {
        title: 'Outside Temperature',
        unit: "°",
        step: 10,
        min: -10,
        max: 40
    }
}

const state = {};

state.carstats = [];
state.config = {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
};

const wheelController = () => {
    // Save Wheel Sizes to State;
    state.wheels = wheelModel.sizes;

    // Render wheels
    renderWheels(state.wheels);
}

// Update the state with models and miles
const statsUpdate = () => {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    state.carstats = calculateStats(carModels, state.config);
}

const statsController = () => {
    statsUpdate();
    renderStats(state.carstats);
}

document.addEventListener('DOMContentLoaded', () => {
    wheelController();
    statsController();
});

// Tesla Counter Buttons Controller
elements.counterBtns.forEach((btn) => {
  btn.addEventListener('click', e => {
    if (e.target.classList == "speed__arrow-up") {
      counterModel.increment(e, 'Speed', counterDefaultValue, state);
      counterView.renderSpeedCounter(state.config);

      clearRenderStats();
      statsController();

      console.log(state.carstats);
    }
    if (e.target.classList == "speed__arrow-down") {
      counterModel.decrement(e, 'Speed', counterDefaultValue, state);
      counterView.renderSpeedCounter(state.config);

      clearRenderStats();
      statsController();
    }
    if (e.target.classList == "temp__arrow-up") {
      counterModel.increment(e, 'Outside Temperature', counterDefaultValue, state);
      counterView.renderTempCounter(state.config);
    }
    if (e.target.classList == "temp__arrow-down") {
      counterModel.decrement(e, 'Outside Temperature', counterDefaultValue, state);
      counterView.renderTempCounter(state.config);
    }

    // disabled and enabled buttons for Speed
    if (state.config.speed === 70) e.target.classList.add('disabled');
    if (state.config.speed === 45) e.target.classList.add('disabled');
    if (state.config.speed < 70) e.path[1].children[0].classList.remove('disabled');
    if (state.config.speed > 45) e.path[1].children[1].classList.remove('disabled');

    // disabled and enabled buttons for Temperature
    if (state.config.temperature === 40) e.target.classList.add('disabled');
    if (state.config.temperature === -10) e.target.classList.add('disabled');
    if (state.config.temperature < 40) e.path[1].children[0].classList.remove('disabled');
    if (state.config.temperature > -10) e.path[1].children[1].classList.remove('disabled');

  });
});


// Tesla Wheels Button Controller
elements.teslaWheels.forEach((wheel) => {
  wheel.addEventListener('click', e => {
    if (e.target.classList[1] == 'tesla-wheels__item--19') {
      const id = parseInt(e.srcElement.dataset.id);
      state.wheels.forEach((wheel) => {
        wheel = [id, id];
        renderWheels(wheel);
      });
    }
    if (e.target.classList[1] == 'tesla-wheels__item--21') {
      const id = parseInt(e.srcElement.dataset.id);
      state.wheels.forEach((wheel) => {
        wheel = [id, id];
        renderWheels(wheel);
      });
    }
  })
});
