export async function fetcher(url: string | URL | Request, options: any = {}) {
    let response;
  
    const requestOptions = options || {};
  
    requestOptions.headers = requestOptions.headers || {};
  
    requestOptions.headers = {
        ...requestOptions.headers,
        Authorization: `Bearer ${process.env.API_TOKEN}`
      };
  
    response = await fetch(url, requestOptions);
  
    const data = await response.json();
    return data;
  }
  