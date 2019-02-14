import {InjectionToken} from '@angular/core';

export const URL_TOKEN = new InjectionToken('app.configUrl');
export const ALIAS_TOKEN = new InjectionToken('app.aliasUrl');
export const FACTORY_TOKEN = new InjectionToken('app.factory');

export const CONFIG_URL = 'www.example.com/api';

export const myFactory = () => {
  return 'hello';
};
