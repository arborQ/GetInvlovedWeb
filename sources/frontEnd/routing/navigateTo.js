import UrlPattern from 'url-pattern';
import { HistoryOption } from './settings';

export default function(pathPattern, inputData){
  var pattern = new UrlPattern(pathPattern);
  HistoryOption.push(pattern.stringify(inputData));
}
