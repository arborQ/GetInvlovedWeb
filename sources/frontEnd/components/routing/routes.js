export function routeItem(path){
  return function(target){
    target.PageCode = `/${path}`;
    target.NavigatePath = (data) => {
      return target.PageCode;
    }
  };
};
