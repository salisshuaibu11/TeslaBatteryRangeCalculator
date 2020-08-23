import { elements } from './base';

export const renderSpeedCounter = config => {
  elements.teslaNumSpeed.innerHTML = `${config.speed} <span>mph</span>`;
}

export const renderTempCounter = config => {
  elements.teslaNumTemp.innerHTML = `${config.temperature} <span>°</span>`;

  if (config.temperature <= 10) {
    elements.teslaClimate.classList.add('tesla-heat');
    elements.teslaClimatePara.innerHTML = '<p>AC OFF</p>';
  } else {
    elements.teslaClimate.classList.remove('tesla-heat');
    elements.teslaClimatePara.innerHTML = '<p>AC ON</p>';
  }
}

elements.climateCheckbox.addEventListener('click', e => {
  const checked = e.srcElement.checked;
  if (checked) {
    elements.teslaClimate.classList.add('tesla-heat');
    elements.teslaClimatePara.innerHTML = '<p>AC OFF</p>';
  } else {
    elements.teslaClimate.classList.remove('tesla-heat');
    elements.teslaClimatePara.innerHTML = '<p>AC ON</p>';
  }
});
