import { IWeather } from '../store/modules/weather/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: { weather: IWeather };
    }
  }
}
