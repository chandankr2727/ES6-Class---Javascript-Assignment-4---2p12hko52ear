class API {
  constructor(url) {
    this.url = url;
    this._secure = url.startsWith('https');
  }

  isSecure() {
    return this._secure;
  }

  updateUrl(newUrl) {
    this.url = newUrl;
    this._secure = newUrl.startsWith('https');
  }
}




//Do not remove this code
module.exports = { API }
