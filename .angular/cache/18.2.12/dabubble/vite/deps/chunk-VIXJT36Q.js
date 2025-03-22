import {
  applyActionCode,
  beforeAuthStateChanged,
  checkActionCode,
  confirmPasswordReset,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  deleteUser,
  fetchSignInMethodsForEmail,
  getAdditionalUserInfo,
  getAuth,
  getIdToken,
  getIdTokenResult,
  getMultiFactorResolver,
  getRedirectResult,
  index_esm_exports,
  initializeAuth,
  initializeRecaptchaConfig,
  isSignInWithEmailLink,
  linkWithCredential,
  linkWithPhoneNumber,
  linkWithPopup,
  linkWithRedirect,
  multiFactor,
  onAuthStateChanged,
  onIdTokenChanged,
  parseActionCodeURL,
  reauthenticateWithCredential,
  reauthenticateWithPhoneNumber,
  reauthenticateWithPopup,
  reauthenticateWithRedirect,
  reload,
  revokeAccessToken,
  sendEmailVerification,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  setPersistence,
  signInAnonymously,
  signInWithCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  unlink,
  updateCurrentUser,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateProfile,
  useDeviceLanguage,
  validatePassword,
  verifyBeforeUpdateEmail,
  verifyPasswordResetCode
} from "./chunk-LU5SGSTP.js";
import {
  FirebaseApp,
  FirebaseApps,
  VERSION,
  ɵAngularFireSchedulers,
  ɵAppCheckInstances,
  ɵgetAllInstancesOf,
  ɵgetDefaultInstanceOf,
  ɵzoneWrap
} from "./chunk-PO4KBICO.js";
import {
  registerVersion
} from "./chunk-24NTIFM2.js";
import {
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Observable,
  Optional,
  concatMap,
  distinct,
  from,
  makeEnvironmentProviders,
  of,
  setClassMetadata,
  switchMap,
  timer,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-SQENZIVA.js";

// node_modules/rxfire/auth/index.esm.js
function authState(auth) {
  return new Observable(function(subscriber) {
    var unsubscribe = onAuthStateChanged(auth, subscriber.next.bind(subscriber), subscriber.error.bind(subscriber), subscriber.complete.bind(subscriber));
    return {
      unsubscribe
    };
  });
}
function user(auth) {
  return new Observable(function(subscriber) {
    var unsubscribe = onIdTokenChanged(auth, subscriber.next.bind(subscriber), subscriber.error.bind(subscriber), subscriber.complete.bind(subscriber));
    return {
      unsubscribe
    };
  });
}
function idToken(auth) {
  return user(auth).pipe(switchMap(function(user3) {
    return user3 ? from(getIdToken(user3)) : of(null);
  }));
}

// node_modules/@angular/fire/fesm2022/angular-fire-auth.mjs
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from2[key],
      enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable
    });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var angular_fire_auth_exports = {};
__export(angular_fire_auth_exports, {
  Auth: () => Auth,
  AuthInstances: () => AuthInstances,
  AuthModule: () => AuthModule,
  applyActionCode: () => applyActionCode2,
  authInstance$: () => authInstance$,
  authState: () => authState2,
  beforeAuthStateChanged: () => beforeAuthStateChanged2,
  checkActionCode: () => checkActionCode2,
  confirmPasswordReset: () => confirmPasswordReset2,
  connectAuthEmulator: () => connectAuthEmulator2,
  createUserWithEmailAndPassword: () => createUserWithEmailAndPassword2,
  deleteUser: () => deleteUser2,
  fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail2,
  getAdditionalUserInfo: () => getAdditionalUserInfo2,
  getAuth: () => getAuth2,
  getIdToken: () => getIdToken2,
  getIdTokenResult: () => getIdTokenResult2,
  getMultiFactorResolver: () => getMultiFactorResolver2,
  getRedirectResult: () => getRedirectResult2,
  idToken: () => idToken2,
  initializeAuth: () => initializeAuth2,
  initializeRecaptchaConfig: () => initializeRecaptchaConfig2,
  isSignInWithEmailLink: () => isSignInWithEmailLink2,
  linkWithCredential: () => linkWithCredential2,
  linkWithPhoneNumber: () => linkWithPhoneNumber2,
  linkWithPopup: () => linkWithPopup2,
  linkWithRedirect: () => linkWithRedirect2,
  multiFactor: () => multiFactor2,
  onAuthStateChanged: () => onAuthStateChanged2,
  onIdTokenChanged: () => onIdTokenChanged2,
  parseActionCodeURL: () => parseActionCodeURL2,
  provideAuth: () => provideAuth,
  reauthenticateWithCredential: () => reauthenticateWithCredential2,
  reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber2,
  reauthenticateWithPopup: () => reauthenticateWithPopup2,
  reauthenticateWithRedirect: () => reauthenticateWithRedirect2,
  reload: () => reload2,
  revokeAccessToken: () => revokeAccessToken2,
  sendEmailVerification: () => sendEmailVerification2,
  sendPasswordResetEmail: () => sendPasswordResetEmail2,
  sendSignInLinkToEmail: () => sendSignInLinkToEmail2,
  setPersistence: () => setPersistence2,
  signInAnonymously: () => signInAnonymously2,
  signInWithCredential: () => signInWithCredential2,
  signInWithCustomToken: () => signInWithCustomToken2,
  signInWithEmailAndPassword: () => signInWithEmailAndPassword2,
  signInWithEmailLink: () => signInWithEmailLink2,
  signInWithPhoneNumber: () => signInWithPhoneNumber2,
  signInWithPopup: () => signInWithPopup2,
  signInWithRedirect: () => signInWithRedirect2,
  signOut: () => signOut2,
  unlink: () => unlink2,
  updateCurrentUser: () => updateCurrentUser2,
  updateEmail: () => updateEmail2,
  updatePassword: () => updatePassword2,
  updatePhoneNumber: () => updatePhoneNumber2,
  updateProfile: () => updateProfile2,
  useDeviceLanguage: () => useDeviceLanguage2,
  user: () => user2,
  validatePassword: () => validatePassword2,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail2,
  verifyPasswordResetCode: () => verifyPasswordResetCode2
});
var public_api_exports = {};
__export(public_api_exports, {
  Auth: () => Auth,
  AuthInstances: () => AuthInstances,
  AuthModule: () => AuthModule,
  applyActionCode: () => applyActionCode2,
  authInstance$: () => authInstance$,
  authState: () => authState2,
  beforeAuthStateChanged: () => beforeAuthStateChanged2,
  checkActionCode: () => checkActionCode2,
  confirmPasswordReset: () => confirmPasswordReset2,
  connectAuthEmulator: () => connectAuthEmulator2,
  createUserWithEmailAndPassword: () => createUserWithEmailAndPassword2,
  deleteUser: () => deleteUser2,
  fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail2,
  getAdditionalUserInfo: () => getAdditionalUserInfo2,
  getAuth: () => getAuth2,
  getIdToken: () => getIdToken2,
  getIdTokenResult: () => getIdTokenResult2,
  getMultiFactorResolver: () => getMultiFactorResolver2,
  getRedirectResult: () => getRedirectResult2,
  idToken: () => idToken2,
  initializeAuth: () => initializeAuth2,
  initializeRecaptchaConfig: () => initializeRecaptchaConfig2,
  isSignInWithEmailLink: () => isSignInWithEmailLink2,
  linkWithCredential: () => linkWithCredential2,
  linkWithPhoneNumber: () => linkWithPhoneNumber2,
  linkWithPopup: () => linkWithPopup2,
  linkWithRedirect: () => linkWithRedirect2,
  multiFactor: () => multiFactor2,
  onAuthStateChanged: () => onAuthStateChanged2,
  onIdTokenChanged: () => onIdTokenChanged2,
  parseActionCodeURL: () => parseActionCodeURL2,
  provideAuth: () => provideAuth,
  reauthenticateWithCredential: () => reauthenticateWithCredential2,
  reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber2,
  reauthenticateWithPopup: () => reauthenticateWithPopup2,
  reauthenticateWithRedirect: () => reauthenticateWithRedirect2,
  reload: () => reload2,
  revokeAccessToken: () => revokeAccessToken2,
  sendEmailVerification: () => sendEmailVerification2,
  sendPasswordResetEmail: () => sendPasswordResetEmail2,
  sendSignInLinkToEmail: () => sendSignInLinkToEmail2,
  setPersistence: () => setPersistence2,
  signInAnonymously: () => signInAnonymously2,
  signInWithCredential: () => signInWithCredential2,
  signInWithCustomToken: () => signInWithCustomToken2,
  signInWithEmailAndPassword: () => signInWithEmailAndPassword2,
  signInWithEmailLink: () => signInWithEmailLink2,
  signInWithPhoneNumber: () => signInWithPhoneNumber2,
  signInWithPopup: () => signInWithPopup2,
  signInWithRedirect: () => signInWithRedirect2,
  signOut: () => signOut2,
  unlink: () => unlink2,
  updateCurrentUser: () => updateCurrentUser2,
  updateEmail: () => updateEmail2,
  updatePassword: () => updatePassword2,
  updatePhoneNumber: () => updatePhoneNumber2,
  updateProfile: () => updateProfile2,
  useDeviceLanguage: () => useDeviceLanguage2,
  user: () => user2,
  validatePassword: () => validatePassword2,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail2,
  verifyPasswordResetCode: () => verifyPasswordResetCode2
});
var AUTH_PROVIDER_NAME = "auth";
var Auth = class {
  constructor(auth) {
    return auth;
  }
};
var AuthInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(AUTH_PROVIDER_NAME);
  }
};
var authInstance$ = timer(0, 300).pipe(concatMap(() => from(ɵgetAllInstancesOf(AUTH_PROVIDER_NAME))), distinct());
var PROVIDED_AUTH_INSTANCES = new InjectionToken("angularfire2.auth-instances");
function defaultAuthInstanceFactory(provided, defaultApp) {
  const defaultAuth = ɵgetDefaultInstanceOf(AUTH_PROVIDER_NAME, provided, defaultApp);
  return defaultAuth && new Auth(defaultAuth);
}
function authInstanceFactory(fn) {
  return (zone, injector) => {
    const auth = zone.runOutsideAngular(() => fn(injector));
    return new Auth(auth);
  };
}
var AUTH_INSTANCES_PROVIDER = {
  provide: AuthInstances,
  deps: [[new Optional(), PROVIDED_AUTH_INSTANCES]]
};
var DEFAULT_AUTH_INSTANCE_PROVIDER = {
  provide: Auth,
  useFactory: defaultAuthInstanceFactory,
  deps: [[new Optional(), PROVIDED_AUTH_INSTANCES], FirebaseApp]
};
var AuthModule = class _AuthModule {
  constructor() {
    registerVersion("angularfire", VERSION.full, "auth");
  }
  static ɵfac = function _AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AuthModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER]
    }]
  }], () => [], null);
})();
function provideAuth(fn, ...deps) {
  registerVersion("angularfire", VERSION.full, "auth");
  return makeEnvironmentProviders([DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER, {
    provide: PROVIDED_AUTH_INSTANCES,
    useFactory: authInstanceFactory(fn),
    multi: true,
    deps: [NgZone, Injector, ɵAngularFireSchedulers, FirebaseApps, [new Optional(), ɵAppCheckInstances], ...deps]
  }]);
}
var authState2 = ɵzoneWrap(authState, true);
var user2 = ɵzoneWrap(user, true);
var idToken2 = ɵzoneWrap(idToken, true);
var firebase_exports = {};
__export(firebase_exports, {
  applyActionCode: () => applyActionCode2,
  beforeAuthStateChanged: () => beforeAuthStateChanged2,
  checkActionCode: () => checkActionCode2,
  confirmPasswordReset: () => confirmPasswordReset2,
  connectAuthEmulator: () => connectAuthEmulator2,
  createUserWithEmailAndPassword: () => createUserWithEmailAndPassword2,
  deleteUser: () => deleteUser2,
  fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail2,
  getAdditionalUserInfo: () => getAdditionalUserInfo2,
  getAuth: () => getAuth2,
  getIdToken: () => getIdToken2,
  getIdTokenResult: () => getIdTokenResult2,
  getMultiFactorResolver: () => getMultiFactorResolver2,
  getRedirectResult: () => getRedirectResult2,
  initializeAuth: () => initializeAuth2,
  initializeRecaptchaConfig: () => initializeRecaptchaConfig2,
  isSignInWithEmailLink: () => isSignInWithEmailLink2,
  linkWithCredential: () => linkWithCredential2,
  linkWithPhoneNumber: () => linkWithPhoneNumber2,
  linkWithPopup: () => linkWithPopup2,
  linkWithRedirect: () => linkWithRedirect2,
  multiFactor: () => multiFactor2,
  onAuthStateChanged: () => onAuthStateChanged2,
  onIdTokenChanged: () => onIdTokenChanged2,
  parseActionCodeURL: () => parseActionCodeURL2,
  reauthenticateWithCredential: () => reauthenticateWithCredential2,
  reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber2,
  reauthenticateWithPopup: () => reauthenticateWithPopup2,
  reauthenticateWithRedirect: () => reauthenticateWithRedirect2,
  reload: () => reload2,
  revokeAccessToken: () => revokeAccessToken2,
  sendEmailVerification: () => sendEmailVerification2,
  sendPasswordResetEmail: () => sendPasswordResetEmail2,
  sendSignInLinkToEmail: () => sendSignInLinkToEmail2,
  setPersistence: () => setPersistence2,
  signInAnonymously: () => signInAnonymously2,
  signInWithCredential: () => signInWithCredential2,
  signInWithCustomToken: () => signInWithCustomToken2,
  signInWithEmailAndPassword: () => signInWithEmailAndPassword2,
  signInWithEmailLink: () => signInWithEmailLink2,
  signInWithPhoneNumber: () => signInWithPhoneNumber2,
  signInWithPopup: () => signInWithPopup2,
  signInWithRedirect: () => signInWithRedirect2,
  signOut: () => signOut2,
  unlink: () => unlink2,
  updateCurrentUser: () => updateCurrentUser2,
  updateEmail: () => updateEmail2,
  updatePassword: () => updatePassword2,
  updatePhoneNumber: () => updatePhoneNumber2,
  updateProfile: () => updateProfile2,
  useDeviceLanguage: () => useDeviceLanguage2,
  validatePassword: () => validatePassword2,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail2,
  verifyPasswordResetCode: () => verifyPasswordResetCode2
});
__reExport(firebase_exports, index_esm_exports);
var applyActionCode2 = ɵzoneWrap(applyActionCode, true);
var beforeAuthStateChanged2 = ɵzoneWrap(beforeAuthStateChanged, true);
var checkActionCode2 = ɵzoneWrap(checkActionCode, true);
var confirmPasswordReset2 = ɵzoneWrap(confirmPasswordReset, true);
var connectAuthEmulator2 = ɵzoneWrap(connectAuthEmulator, true);
var createUserWithEmailAndPassword2 = ɵzoneWrap(createUserWithEmailAndPassword, true);
var deleteUser2 = ɵzoneWrap(deleteUser, true);
var fetchSignInMethodsForEmail2 = ɵzoneWrap(fetchSignInMethodsForEmail, true);
var getAdditionalUserInfo2 = ɵzoneWrap(getAdditionalUserInfo, true);
var getAuth2 = ɵzoneWrap(getAuth, true);
var getIdToken2 = ɵzoneWrap(getIdToken, true);
var getIdTokenResult2 = ɵzoneWrap(getIdTokenResult, true);
var getMultiFactorResolver2 = ɵzoneWrap(getMultiFactorResolver, true);
var getRedirectResult2 = ɵzoneWrap(getRedirectResult, true);
var initializeAuth2 = ɵzoneWrap(initializeAuth, true);
var initializeRecaptchaConfig2 = ɵzoneWrap(initializeRecaptchaConfig, true);
var isSignInWithEmailLink2 = ɵzoneWrap(isSignInWithEmailLink, true);
var linkWithCredential2 = ɵzoneWrap(linkWithCredential, true);
var linkWithPhoneNumber2 = ɵzoneWrap(linkWithPhoneNumber, true);
var linkWithPopup2 = ɵzoneWrap(linkWithPopup, true);
var linkWithRedirect2 = ɵzoneWrap(linkWithRedirect, true);
var multiFactor2 = ɵzoneWrap(multiFactor, true);
var onAuthStateChanged2 = ɵzoneWrap(onAuthStateChanged, true);
var onIdTokenChanged2 = ɵzoneWrap(onIdTokenChanged, true);
var parseActionCodeURL2 = ɵzoneWrap(parseActionCodeURL, true);
var reauthenticateWithCredential2 = ɵzoneWrap(reauthenticateWithCredential, true);
var reauthenticateWithPhoneNumber2 = ɵzoneWrap(reauthenticateWithPhoneNumber, true);
var reauthenticateWithPopup2 = ɵzoneWrap(reauthenticateWithPopup, true);
var reauthenticateWithRedirect2 = ɵzoneWrap(reauthenticateWithRedirect, true);
var reload2 = ɵzoneWrap(reload, true);
var revokeAccessToken2 = ɵzoneWrap(revokeAccessToken, true);
var sendEmailVerification2 = ɵzoneWrap(sendEmailVerification, true);
var sendPasswordResetEmail2 = ɵzoneWrap(sendPasswordResetEmail, true);
var sendSignInLinkToEmail2 = ɵzoneWrap(sendSignInLinkToEmail, true);
var setPersistence2 = ɵzoneWrap(setPersistence, true);
var signInAnonymously2 = ɵzoneWrap(signInAnonymously, true);
var signInWithCredential2 = ɵzoneWrap(signInWithCredential, true);
var signInWithCustomToken2 = ɵzoneWrap(signInWithCustomToken, true);
var signInWithEmailAndPassword2 = ɵzoneWrap(signInWithEmailAndPassword, true);
var signInWithEmailLink2 = ɵzoneWrap(signInWithEmailLink, true);
var signInWithPhoneNumber2 = ɵzoneWrap(signInWithPhoneNumber, true);
var signInWithPopup2 = ɵzoneWrap(signInWithPopup, true);
var signInWithRedirect2 = ɵzoneWrap(signInWithRedirect, true);
var signOut2 = ɵzoneWrap(signOut, true);
var unlink2 = ɵzoneWrap(unlink, true);
var updateCurrentUser2 = ɵzoneWrap(updateCurrentUser, true);
var updateEmail2 = ɵzoneWrap(updateEmail, true);
var updatePassword2 = ɵzoneWrap(updatePassword, true);
var updatePhoneNumber2 = ɵzoneWrap(updatePhoneNumber, true);
var updateProfile2 = ɵzoneWrap(updateProfile, true);
var useDeviceLanguage2 = ɵzoneWrap(useDeviceLanguage, true);
var validatePassword2 = ɵzoneWrap(validatePassword, true);
var verifyBeforeUpdateEmail2 = ɵzoneWrap(verifyBeforeUpdateEmail, true);
var verifyPasswordResetCode2 = ɵzoneWrap(verifyPasswordResetCode, true);
__reExport(public_api_exports, firebase_exports);
__reExport(angular_fire_auth_exports, public_api_exports);

export {
  Auth,
  AuthInstances,
  authInstance$,
  AuthModule,
  provideAuth,
  authState2 as authState,
  user2 as user,
  idToken2 as idToken,
  applyActionCode2 as applyActionCode,
  beforeAuthStateChanged2 as beforeAuthStateChanged,
  checkActionCode2 as checkActionCode,
  confirmPasswordReset2 as confirmPasswordReset,
  connectAuthEmulator2 as connectAuthEmulator,
  createUserWithEmailAndPassword2 as createUserWithEmailAndPassword,
  deleteUser2 as deleteUser,
  fetchSignInMethodsForEmail2 as fetchSignInMethodsForEmail,
  getAdditionalUserInfo2 as getAdditionalUserInfo,
  getAuth2 as getAuth,
  getIdToken2 as getIdToken,
  getIdTokenResult2 as getIdTokenResult,
  getMultiFactorResolver2 as getMultiFactorResolver,
  getRedirectResult2 as getRedirectResult,
  initializeAuth2 as initializeAuth,
  initializeRecaptchaConfig2 as initializeRecaptchaConfig,
  isSignInWithEmailLink2 as isSignInWithEmailLink,
  linkWithCredential2 as linkWithCredential,
  linkWithPhoneNumber2 as linkWithPhoneNumber,
  linkWithPopup2 as linkWithPopup,
  linkWithRedirect2 as linkWithRedirect,
  multiFactor2 as multiFactor,
  onAuthStateChanged2 as onAuthStateChanged,
  onIdTokenChanged2 as onIdTokenChanged,
  parseActionCodeURL2 as parseActionCodeURL,
  reauthenticateWithCredential2 as reauthenticateWithCredential,
  reauthenticateWithPhoneNumber2 as reauthenticateWithPhoneNumber,
  reauthenticateWithPopup2 as reauthenticateWithPopup,
  reauthenticateWithRedirect2 as reauthenticateWithRedirect,
  reload2 as reload,
  revokeAccessToken2 as revokeAccessToken,
  sendEmailVerification2 as sendEmailVerification,
  sendPasswordResetEmail2 as sendPasswordResetEmail,
  sendSignInLinkToEmail2 as sendSignInLinkToEmail,
  setPersistence2 as setPersistence,
  signInAnonymously2 as signInAnonymously,
  signInWithCredential2 as signInWithCredential,
  signInWithCustomToken2 as signInWithCustomToken,
  signInWithEmailAndPassword2 as signInWithEmailAndPassword,
  signInWithEmailLink2 as signInWithEmailLink,
  signInWithPhoneNumber2 as signInWithPhoneNumber,
  signInWithPopup2 as signInWithPopup,
  signInWithRedirect2 as signInWithRedirect,
  signOut2 as signOut,
  unlink2 as unlink,
  updateCurrentUser2 as updateCurrentUser,
  updateEmail2 as updateEmail,
  updatePassword2 as updatePassword,
  updatePhoneNumber2 as updatePhoneNumber,
  updateProfile2 as updateProfile,
  useDeviceLanguage2 as useDeviceLanguage,
  validatePassword2 as validatePassword,
  verifyBeforeUpdateEmail2 as verifyBeforeUpdateEmail,
  verifyPasswordResetCode2 as verifyPasswordResetCode
};
/*! Bundled license information:

rxfire/auth/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=chunk-VIXJT36Q.js.map
