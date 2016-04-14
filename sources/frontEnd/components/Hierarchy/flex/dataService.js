import fetch from 'isomorphic-fetch'
import store from './store';
import { startFetching, endFetching, reciveData } from './actions'
export function loadHierarchyData(data){
  store.dispatch(startFetching());
  fetch('/api/loadHierarchy', data)
  .then((response) => {
    console.log(response);
    setTimeout(() => {
      store.dispatch(endFetching());
    }, 3000);
  });
};
