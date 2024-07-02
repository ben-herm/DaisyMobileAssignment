// src/services/userApi.ts
import {Package} from '../../common/interfaces';
import api from './index';

export const fetchPackages = async (): Promise<Package[]> => {
  const response = await api.get('/icu4lrltnqy8avbhx1iydcmz8x32roya');
  return response.data.result.packages;
};
