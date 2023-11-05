class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#secure = url.startsWith('https');
  }

  isSecure() {
    return this.#secure;
  }

  updateURL(newUrl) {
    this.url = newUrl;
    this.#secure = newUrl.startsWith('https');
  }
}


//Do not remove this code
module.exports = { API }
