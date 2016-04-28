import navigateTo from './navigateTo';

export default function routeItem(path){
  return function(target){
    target.PageCode = `/${path}`;
    target.NavigatePath = () => {
      return target.PageCode;
    };
    target.navigateTo = (data) => {
      navigateTo(target.PageCode, data);
    };
  };
};
