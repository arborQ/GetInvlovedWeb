import request from 'ajax-request';
import * as storage from 'local-storage';

export var post = (url, data) => {
  return new Promise((resolve, reject) =>{
    request({
      url,
      data,
      method : 'POST',
      headers : { 'auth-token' : storage.get('account-data') }
    }, (err, res, body) => {
      resolve(JSON.parse(body));
    });
  });

};

export var get = (url, data) => {

  return new Promise((resolve, reject) =>{
    request({
      url,
      data,
      method : 'GET',
      headers : { 'auth-token' : storage.get('account-data') }
    }, (err, res, body) => {
      resolve(JSON.parse(body));
    });
  });

};
