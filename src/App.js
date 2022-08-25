import React from 'react';

const App = () =>  {

  // ---- URLSearchParams ----
  // Щоб достукатись до функцій потрібно: url + searchParams + functionName =>  {
  //      url = 'https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams';
  //      url.searchParams.append('myKey', 'myValue');
  // }
  // Функції зберігаються в силці і в самих параметрах силки
  // https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams
  // https://developer.mozilla.org/en-US/docs/Web/API/URL
  // URLSearchParams.append() - add a key & value in the end of url (like parameter)
  // URLSearchParams.delete() - deletes key & value from url
  // URLSearchParams.entries() - returns "iterator" for go throw all pairs
  // URLSearchParams.get() - returns value of chosen key in url
  // URLSearchParams.set() - sets value of key
  // URLSearchParams.getAll() - returns all keys & values
  // URLSearchParams.has() - returns true - if key & value (parameter) exists and false - if parameter not exists
  // URLSearchParams.toString() - parses url to string-value
  // URLSearchParams.keys() - returns all keys of query-url
  // URLSearchParams.values() - returns all values of query-url



  // const nuna = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL?q=123')
  // nuna
  // nuna.searchParams.append('myKey', 'myValue')


  // Розділить на загальну (базову) силку і на ендпоінти, і складе в одну урлу
  // const baseURL = new URL('https://developer.mozilla.org/')
  // const postUrl = new URL('posts', baseURL)
  // postUrl


  // custom-url:
  // https://jsonplaceholder.typicode.com/posts?q=ipsum&_sort=title&_order=desc&_limit=4&_page=2


  // Як опрацьовувати:
  // const rawUrl = 'https://jsonplaceholder.typicode.com/posts?q=ipsum&_sort=title&_order=desc&_limit=4&_page=2';

  // v1
  const query = 'ipsum';
  const softField = 'title';
  const sortOrder = 'desc';
  const pageNumber = '1';
  const itemPerPage = '10';
  const templateUrl = `https://jsonplaceholder.typicode.com/posts?q=${query}&_sort=${softField}&_order=${sortOrder}&_limit=${itemPerPage}&_page=${pageNumber}`;

  // v2
  const queries = {
    q: 'ipsum',
    _sort: 'title',
    _order: 'desc',
    _page: '1',
    _limit: '10'
  };

  const params = new URLSearchParams(queries);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const fullUrl = url + '?' + params.toString();


  // v3
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const postUrl = new URL('posts', baseUrl);
  // postUrl.searchParams.append('q', 'ipsum');
  // postUrl.searchParams.append('_sort', 'title');
  // postUrl.searchParams.append('_order', 'desc');
  // postUrl.searchParams.append('_page', '1');
  // postUrl.searchParams.append('_limit', '10');

  // v4
  postUrl.search = params.toString();


  return (
    <div>
      {templateUrl.toString()}<br/><br/>
      {params.toString()}<br/><br/>
      {fullUrl.toString()}<br/><br/>
      {postUrl.toString()}<br/><br/>

    </div>
  )
}

export default App ;