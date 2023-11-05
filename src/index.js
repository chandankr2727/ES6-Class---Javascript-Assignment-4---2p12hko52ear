class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this._secure = url.startsWith('https');
  }

  isSecure() {
    return this._secure;
  }

  updateUrl(newUrl) {
    this.url = newUrl;
  }
}



//Do not remove this code
module.exports = { API }
