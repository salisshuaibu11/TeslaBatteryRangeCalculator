import { elements } from './base';

const renderWheel = wheel => {
    let markup = '';
    markup = `
        <div class="tesla-wheel tesla-wheel--front tesla-wheel--${wheel}"></div>
        <div class="tesla-wheel tesla-wheel--rear tesla-wheel--${wheel}"></div>
    `;
    elements.carWheels.insertAdjacentHTML("beforeend", markup);
}

export const renderWheels = wheels => {
    wheels.forEach(wheel => renderWheel(wheel));
};
