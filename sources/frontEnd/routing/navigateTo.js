import UrlPattern from 'url-pattern';
import { historyOption } from './settings';

export default function(pathPattern, inputData){
  var pattern = new UrlPattern(pathPattern);
  historyOption.push(pattern.stringify(inputData));
}
