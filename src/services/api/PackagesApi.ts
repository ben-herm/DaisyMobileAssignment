import {Package} from '../../common/interfaces';
import {apiConfig} from './config';
import api from './index';

export const fetchPackages = async (): Promise<Package[]> => {
  const response = await api.get(apiConfig.endpoints.getPackages);
  return response.data.result.packages;
};
