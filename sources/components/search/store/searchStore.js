import { createStore } from 'redux';
export default createStore((action = { count : 0 }, context) => {
  console.log({ action });
  return { count : action.count + 1 };
});
