import { getModelData } from '../../services/BatteryService';

export const calculateStats = (models, value) => {
    const dataModels = getModelData();
    return models.map(model => {
        const { speed, temperature, climate, wheels} = value;
        const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
        return {
            model,
            miles
        };
    });
};
