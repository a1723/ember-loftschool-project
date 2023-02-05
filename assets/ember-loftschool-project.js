'use strict';



;define("ember-loftschool-project/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-loftschool-project/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "ember-loftschool-project/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-loftschool-project/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("ember-loftschool-project/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("ember-loftschool-project/controllers/author", ["exports", "@ember/controller", "@ember/service", "@glimmer/tracking"], function (_exports, _controller, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AuthorController = (_class = class AuthorController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "dataService", _descriptor, this);
      _defineProperty(this, "queryParams", ['search']);
      _initializerDefineProperty(this, "isLoading", _descriptor2, this);
      _initializerDefineProperty(this, "search", _descriptor3, this);
    }
    async loadData() {
      this.isLoading = true;
      const authors = await this.dataService.readAuthors(this.search);
      this.model = authors;
      this.isLoading = false;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isLoading", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "search", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  })), _class);
  _exports.default = AuthorController;
});
;define("ember-loftschool-project/controllers/author/create", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AuthorCreateController = (_class = class AuthorCreateController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "dataService", _descriptor, this);
    }
    async saveAuthor(e) {
      e.preventDefault();
      await this.dataService.createAuthor(this.model);
      this.transitionToRoute('author');
    }
    changeFirstName(firstName) {
      this.model.firstName = firstName;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "saveAuthor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveAuthor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeFirstName", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeFirstName"), _class.prototype)), _class);
  _exports.default = AuthorCreateController;
});
;define("ember-loftschool-project/controllers/author/detail", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AuthorDetailController = (_class = class AuthorDetailController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "dataService", _descriptor, this);
    }
    async deleteAuthor() {
      await this.dataService.deleteAuthor(this.model.id);
      this.transitionToRoute('author');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "deleteAuthor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteAuthor"), _class.prototype)), _class);
  _exports.default = AuthorDetailController;
});
;define("ember-loftschool-project/controllers/author/edit", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AuthorEditController = (_class = class AuthorEditController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "dataService", _descriptor, this);
    }
    async saveAuthor(e) {
      e.preventDefault();
      await this.dataService.changeAuthor(this.model);
      this.transitionToRoute('author');
    }
    changeFirstName(firstName) {
      this.model.firstName = firstName;
    }
    changeLastName(lastName) {
      this.model.lastName = lastName;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "saveAuthor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveAuthor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeFirstName", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeFirstName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeLastName", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeLastName"), _class.prototype)), _class);
  _exports.default = AuthorEditController;
});
;define("ember-loftschool-project/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("ember-loftschool-project/helpers/app-version", ["exports", "@ember/component/helper", "ember-loftschool-project/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("ember-loftschool-project/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("ember-loftschool-project/helpers/env", ["exports", "@ember/component/helper", "@ember/object", "ember-loftschool-project/config/environment"], function (_exports, _helper, _object, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _helper.helper)(function env(_ref) {
    let [propertyName] = _ref;
    return (0, _object.get)(_environment.default, propertyName);
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("ember-loftschool-project/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-loftschool-project/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-loftschool-project/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-loftschool-project/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-loftschool-project/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("ember-loftschool-project/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("ember-loftschool-project/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-loftschool-project/initializers/export-application-global", ["exports", "ember", "ember-loftschool-project/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-loftschool-project/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* exists only for things that historically used "after" or "before" */var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("ember-loftschool-project/router", ["exports", "@ember/routing/router", "ember-loftschool-project/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('author', {
      path: '/authors'
    }, function () {
      this.route('detail', {
        path: '/:id'
      }); // работает для url /authors/1, /authors/2 /authors/3 и т.д.
      this.route('edit', {
        path: '/:id/edit'
      });
      this.route('create');
    });
    this.route('not-found', {
      path: '*path'
    });
  });
});
;define("ember-loftschool-project/routes/author", ["exports", "@ember/routing/route", "@ember/object", "@ember/service"], function (_exports, _route, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AuthorRoute = (_class = class AuthorRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "dataService", _descriptor, this);
      _defineProperty(this, "queryParams", {
        search: {
          refreshModel: true
        }
      });
    }
    async model() {
      return {
        isLoading: true
      };
    }
    loading() {
      return false;
    }
    setupController(controller, model) {
      super.setupController(...arguments);
      controller.loadData();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "loading", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "loading"), _class.prototype)), _class);
  _exports.default = AuthorRoute;
});
;define("ember-loftschool-project/routes/author/create", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class AuthorCreateRoute extends _route.default {
    model() {
      return {
        firstName: '',
        lastName: ''
      };
    }
    setupController(controller, model) {
      super.setupController(...arguments);
      controller.set('firstName', '');
      controller.set('lastName', '');
    }
  }
  _exports.default = AuthorCreateRoute;
});
;define("ember-loftschool-project/routes/author/detail", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AuthorDetailRoute = (_class = class AuthorDetailRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "dataService", _descriptor, this);
    }
    model(params) {
      return this.dataService.readAuthor(params.id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = AuthorDetailRoute;
});
;define("ember-loftschool-project/routes/author/edit", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AuthorEditRoute = (_class = class AuthorEditRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "dataService", _descriptor, this);
    }
    model(params) {
      return this.dataService.readAuthor(params.id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = AuthorEditRoute;
});
;define("ember-loftschool-project/routes/author/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class AuthorIndexRoute extends _route.default {}
  _exports.default = AuthorIndexRoute;
});
;define("ember-loftschool-project/routes/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class IndexRoute extends _route.default {}
  _exports.default = IndexRoute;
});
;define("ember-loftschool-project/routes/not-found", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class NotFoundRoute extends _route.default {}
  _exports.default = NotFoundRoute;
});
;define("ember-loftschool-project/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("ember-loftschool-project/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-loftschool-project/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("ember-loftschool-project/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("ember-loftschool-project/services/data-service", ["exports", "@ember/service", "ember-loftschool-project/config/environment"], function (_exports, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class DataServiceService extends _service.default {
    async readAuthors(searchValue) {
      let searchSegm = searchValue ? `?q=${searchValue}` : '';
      let response = await fetch(`${_environment.default.APP.backEndURL}/authors${searchSegm}`);
      return response.json();
    }
    async readAuthor(id) {
      let response = await fetch(`${_environment.default.APP.backEndURL}/authors/${id}`);
      return response.json();
    }
    createAuthor(author) {
      return fetch(`${_environment.default.APP.backEndURL}/authors`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json' // header нужен т.к. работает с json-server
        },

        body: JSON.stringify(author)
      });
    }
    deleteAuthor(id) {
      return fetch(`${_environment.default.APP.backEndURL}/authors/${id}`, {
        method: 'DELETE'
      });
    }
    changeAuthor(author) {
      return fetch(`${_environment.default.APP.backEndURL}/authors/${author.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json' // header нужен т.к. работает с json-server
        },

        body: JSON.stringify(author)
      });
    }
  }
  _exports.default = DataServiceService;
});
;define("ember-loftschool-project/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("ember-loftschool-project/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("ember-loftschool-project/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("ember-loftschool-project/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "TkJLXGe2",
    "block": "[[[10,0],[14,0,\"app\"],[12],[1,\"\\n  \"],[10,\"nav\"],[14,0,\"main-nav\"],[12],[1,\"\\n    \"],[10,\"h1\"],[14,0,\"logo\"],[12],[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"/logo.svg\"],[14,\"alt\",\"Ember Library\"],[12],[13],[1,\"\\n        \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"Ember Library\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"\\n        \"],[8,[39,0],null,[[\"@route\"],[\"author\"]],[[\"default\"],[[[[1,\"\\n          Authors\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"\\n\"],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"main\"],[14,0,\"app-content\"],[12],[46,[28,[37,2],null,null],null,null,null],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-loftschool-project/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/author", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "ffgwAdGO",
    "block": "[[[10,0],[14,0,\"panel-heading\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"search\"],[12],[1,\"\\n    \"],[1,[28,[35,0],null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Search by Author Name\",[30,0,[\"search\"]]]]]],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[8,[39,1],[[24,0,\"btn-new\"]],[[\"@route\"],[\"author.create\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"sr-only\"],[12],[1,\"Add new Author\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"panel-content\"],[12],[1,\"\\n  \"],[10,\"h3\"],[14,0,\"panel-title\"],[12],[1,\"Authors\"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"isLoading\"]],[[[1,\"    \"],[10,2],[12],[1,\"Authors is loading\"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,\"ul\"],[14,0,\"collection\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[1,\"\\n          \"],[8,[39,1],null,[[\"@route\",\"@model\"],[\"author.detail\",[29,[[30,1,[\"id\"]]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,\"strong\"],[12],[1,[30,1,[\"firstName\"]]],[13],[1,\", \"],[1,[30,1,[\"lastName\"]]],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]]],[13],[1,\"\\n\\n\"],[46,[28,[37,6],null,null],null,null,null],[1,\"\\n\"]],[\"author\"],false,[\"input\",\"link-to\",\"if\",\"each\",\"-track-array\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-loftschool-project/templates/author.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/author/create", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "bPmofbW7",
    "block": "[[[1,[28,[35,0],[\"Create\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out-bg\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\"],[\"author\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"Back\"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"\"],[12],[1,\"Add new Author\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"slide-out-content\"],[12],[1,\"\\n\\t\\t\\t\"],[11,\"form\"],[4,[38,2],[\"submit\",[30,0,[\"saveAuthor\"]]],null],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"field\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"label\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\tFirst Name:\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,\"placeholder\",\"First Name\"],[15,2,[29,[[30,0,[\"model\",\"firstName\"]]]]],[15,\"oninput\",[28,[37,3],[[30,0],\"changeFirstName\"],[[\"value\"],[\"target.value\"]]]],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"field\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"label\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\tLast Name:\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[1,[28,[35,4],null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Last Name\",[30,0,[\"model\",\"lastName\"]]]]]],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"form-footer\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"btn-submit\"],[14,4,\"submit\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\tsave\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\",\"on\",\"action\",\"input\"]]",
    "moduleName": "ember-loftschool-project/templates/author/create.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/author/detail", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "HsbGC2fV",
    "block": "[[[1,[28,[35,0],[\"Detail\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\"],[\"author\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"Back\"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"\\n          \"],[1,[30,0,[\"model\",\"firstName\"]]],[1,\"\\n          \"],[1,[30,0,[\"model\",\"lastName\"]]],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"actions\"],[12],[1,\"\\n          \"],[8,[39,1],[[24,0,\"btn-pop\"]],[[\"@route\",\"@model\"],[\"author.edit\",[29,[[30,0,[\"model\",\"id\"]]]]]],[[\"default\"],[[[[1,\"\\n            edit\\n          \"]],[]]]]],[1,\"\\n          \"],[11,\"button\"],[24,0,\"btn-recesses\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"deleteAuthor\"]]],null],[12],[1,\"\\n            delete\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"slide-out-content\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\",\"on\"]]",
    "moduleName": "ember-loftschool-project/templates/author/detail.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/author/edit", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "ILM/MOGO",
    "block": "[[[1,[28,[35,0],[\"Edit\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out-bg\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\",\"@model\"],[\"author.detail\",[29,[[30,0,[\"model\",\"id\"]]]]]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"Back\"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"\\n\\t\\t\\t\"],[1,[30,0,[\"model\",\"firstName\"]]],[1,\"\\n\\t\\t\\t\"],[1,[30,0,[\"model\",\"lastName\"]]],[1,\"\\n\\t\\t\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"slide-out-content\"],[12],[1,\"\\n\\t\\t\\t\"],[11,\"form\"],[4,[38,2],[\"submit\",[30,0,[\"saveAuthor\"]]],null],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"field\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"label\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\tFirst Name:\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,\"placeholder\",\"First Name\"],[15,2,[29,[[30,0,[\"model\",\"firstName\"]]]]],[15,\"oninput\",[28,[37,3],[[30,0],\"changeFirstName\"],[[\"value\"],[\"target.value\"]]]],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"field\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"label\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\tLast Name:\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,\"placeholder\",\"Last Name\"],[15,2,[29,[[30,0,[\"model\",\"lastName\"]]]]],[15,\"oninput\",[28,[37,3],[[30,0],\"changeLastName\"],[[\"value\"],[\"target.value\"]]]],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"form-footer\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"btn-submit\"],[14,4,\"submit\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\tsave\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\",\"on\",\"action\"]]",
    "moduleName": "ember-loftschool-project/templates/author/edit.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/author/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "d8Y36RH4",
    "block": "[[],[],false,[]]",
    "moduleName": "ember-loftschool-project/templates/author/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/error", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "lSHsPqNT",
    "block": "[[[10,0],[14,0,\"welcome-page\"],[12],[1,\"\\n    Error...\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "ember-loftschool-project/templates/error.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "/CMBBYwn",
    "block": "[[[10,0],[14,0,\"welcome-page\"],[12],[1,\"\\n  \"],[10,\"img\"],[14,\"src\",\"/welcome.svg\"],[14,\"alt\",\"Welcome\"],[12],[13],[1,\"\\n\\n  \"],[10,\"h2\"],[12],[1,\"Welcome to Ember Library\"],[13],[1,\"\\n  \"],[10,\"hr\"],[12],[13],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"Where anyone can review their favorite books and authors!\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "ember-loftschool-project/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/loading", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "zLcRixT2",
    "block": "[[[10,0],[14,0,\"welcome-page\"],[12],[1,\"\\n    Data is loading...\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "ember-loftschool-project/templates/loading.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/templates/not-found", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "0JQtHpBm",
    "block": "[[[1,[28,[35,0],[\"NotFound\"],null]],[1,\"\\n\"],[10,0],[14,0,\"welcome-page\"],[12],[1,\"\\n    Not found...\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\"]]",
    "moduleName": "ember-loftschool-project/templates/not-found.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-loftschool-project/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("ember-loftschool-project/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("ember-loftschool-project/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("ember-loftschool-project/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('ember-loftschool-project/config/environment', [], function() {
  var prefix = 'ember-loftschool-project';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-loftschool-project/app")["default"].create({"backEndURL":"http://localhost:3000","name":"ember-loftschool-project","version":"0.0.0+718b6899"});
          }
        
//# sourceMappingURL=ember-loftschool-project.map
