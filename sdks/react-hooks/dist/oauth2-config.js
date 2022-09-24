"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oauth2Config = void 0;
var Oauth2Config = /** @class */ (function () {
    function Oauth2Config(redirectUri) {
        this.authServerHost = 'https://kiqr.cloud';
        this.clientId = 'Xz_UctYAmDMGq6uLJ053sj6wkdC0oRwRS5HOj8Gvbnc';
        this.redirectUri = redirectUri;
        this.scope = 'profile+projects';
        this.tokenUrl = "".concat(this.authServerHost, "/oauth/token");
        this.authorizationUrl = "".concat(this.authServerHost, "/oauth/authorize?client_id=").concat(this.clientId, "&redirect_uri=").concat(this.redirectUri, "&response_type=code&scope=").concat(this.scope);
    }
    return Oauth2Config;
}());
exports.Oauth2Config = Oauth2Config;
