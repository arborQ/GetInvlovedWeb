export function routeItem(path){
  return function(target){
    target.PageCode = `/${path}`;
  };
};
