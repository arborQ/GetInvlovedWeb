var fetchingState = {
  Idle : 0,
  InProgress : 1,
  Compleated : 2,
  Failed : -1
};

var actionKeys = {
  toggleCollapse : 'TOGGLE_COLLAPSE',
  dataRecived : 'DATA_RECIVED',
  fetching : 'FETCHING'
};

export var FetchingState = fetchingState;
export var ActionKeys = actionKeys;

export function toggleCollapse(treeCode){
  return { type : actionKeys.toggleCollapse, treeCode };
};

export function startFetching(){
  return { type : actionKeys.fetching, state : fetchingState.InProgress };
}

export function endFetching(){
  return { type : actionKeys.fetching, state : fetchingState.Compleated };
}

export function reciveData(data){
  return { type : actionKeys.dataRecived, data };
}

export function loadHierarchy(data){
  return startFetching('/api/hierarchy', data);
}
