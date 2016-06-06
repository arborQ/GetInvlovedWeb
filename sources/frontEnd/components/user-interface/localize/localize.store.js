import { createStore } from 'redux';
import defaultTranslations from './defaultState';

class TranslationsService {
  constructor(){
      this.language = 'en-US';
      this.serverTranslations = defaultTranslations;
      this.localizedString = key => this.serverTranslations[key] || key;
  }
}
var defaultState = new TranslationsService();
var store = createStore((state = defaultState, action) => {
  if(!action.data){
    return state;
  }
  return Object.assign({}, state, action.data);
});

export var Dispatch = store.dispatch.bind(store);
export var Subscribe = store.subscribe.bind(store);
export var GetState = store.getState.bind(store);
