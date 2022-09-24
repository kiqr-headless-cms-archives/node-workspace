"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KiqrProvider = void 0;
var axios_1 = __importDefault(require("axios"));
var react_1 = __importStar(require("react"));
var oauth2_config_1 = require("./oauth2-config");
var kiqr_context_1 = require("./kiqr-context");
var LoadingScreen = function () {
    return react_1.default.createElement(react_1.default.Fragment, null, "Loading");
};
var clearUrlParams = function () {
    history.replaceState(null, '', location.protocol +
        '//' +
        location.host +
        location.pathname +
        location.search.replace(/[?&]code=[^&]+/, '').replace(/^&/, '?'));
};
function setCookie(name, value) {
    var expires = '';
    var date = new Date();
    date.setTime(date.getTime() + 5 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}
var KiqrProvider = function (_a) {
    var _b;
    var children = _a.children, appRootUrl = _a.appRootUrl, handleRedirectBack = _a.handleRedirectBack;
    var _c = (0, react_1.useState)(null), accessToken = _c[0], setAccessToken = _c[1];
    var _d = (0, react_1.useState)(kiqr_context_1.defaultContextValue), config = _d[0], setConfig = _d[1];
    var _e = (0, react_1.useState)(true), isLoading = _e[0], setIsLoading = _e[1];
    var oauth = new oauth2_config_1.Oauth2Config(appRootUrl);
    var loginWithRedirect = function () {
        window.location.href = oauth.authorizationUrl;
    };
    var exchangeCodeForToken = function (authorizationCode) { return __awaiter(void 0, void 0, void 0, function () {
        var payload;
        return __generator(this, function (_a) {
            payload = {
                code: authorizationCode,
                client_id: oauth.clientId,
                redirect_uri: oauth.redirectUri,
                grant_type: 'authorization_code'
            };
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    axios_1.default
                        .post(oauth.tokenUrl, payload)
                        .then(function (response) { return resolve(response.data); })
                        .catch(function (error) { return reject(error); });
                })];
        });
    }); };
    (0, react_1.useEffect)(function () {
        var queryParams = new URLSearchParams(window.location.search);
        var authCode = queryParams.get('code');
        if (!accessToken && !authCode) {
            setCookie('returnUrl', window.location.href);
            loginWithRedirect();
        }
        else if (authCode) {
            exchangeCodeForToken(authCode)
                .then(function (oauthToken) {
                setAccessToken(oauthToken.access_token);
                setConfig(function (prevState) { return (__assign(__assign({}, prevState), { token: oauthToken })); });
                clearUrlParams();
                var returnUrl = getCookie('returnUrl');
                if (handleRedirectBack && returnUrl) {
                    handleRedirectBack(returnUrl);
                }
            })
                .catch(function (error) { return console.log(error); })
                .then(function () {
                setIsLoading(false);
            });
        }
    }, []);
    if (isLoading) {
        return (_b = react_1.default.createElement(LoadingScreen, null)) !== null && _b !== void 0 ? _b : react_1.default.createElement(react_1.default.Fragment, null);
    }
    return react_1.default.createElement(kiqr_context_1.KiqrContext.Provider, { value: config }, children);
};
exports.KiqrProvider = KiqrProvider;
