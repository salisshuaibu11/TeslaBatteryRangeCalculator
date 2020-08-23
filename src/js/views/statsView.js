import { elements } from './base';

export const clearRenderStats = () => {
  elements.statsList.innerHTML = '';
};

const renderStat = stat => {
    let markup = '';
    markup = `
    <li>
        <div class="tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}"></div>
        <p>${stat.miles}</p>
    </li>`;
    elements.statsList.insertAdjacentHTML('beforeend', markup);
}

export const renderStats = carstats => {
    carstats.map(stat => renderStat(stat));
}
