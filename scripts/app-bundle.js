define('app',['exports', 'aurelia-framework', './web-api'], function (exports, _aureliaFramework, _webApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_webApi.WebAPI), _dec(_class = function () {
    function App(api) {
      _classCallCheck(this, App);

      this.api = api;
      this.categories = [];
      this.newsItems = [];
      this.siteName = 'Just News';
    }

    App.prototype.created = function created() {
      var _this = this;

      this.api.getCategories().then(function (response) {
        return _this.setCategories(response);
      });

      this.api.getNewsItems().then(function (response) {
        return _this.setNewsItems(response);
      });
    };

    App.prototype.setCategories = function setCategories(response) {
      this.categories = response;
    };

    App.prototype.setNewsItems = function setNewsItems(response) {
      this.newsItems = response;
    };

    return App;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('news-item',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NewsItemCustomElement = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

  var NewsItemCustomElement = exports.NewsItemCustomElement = (_class = function () {
    function NewsItemCustomElement() {
      _classCallCheck(this, NewsItemCustomElement);

      _initDefineProp(this, 'text', _descriptor, this);

      _initDefineProp(this, 'link', _descriptor2, this);

      _initDefineProp(this, 'blurb', _descriptor3, this);
    }

    NewsItemCustomElement.prototype.attached = function attached() {};

    return NewsItemCustomElement;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'text', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'link', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'blurb', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('utility',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.areEqual = areEqual;
	function areEqual(obj1, obj2) {
		return Object.keys(obj1).every(function (key) {
			return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
		});
	};
});
define('web-api',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var latency = 200;
  var id = 0;

  function getId() {
    return ++id;
  }

  var contacts = [{
    id: getId(),
    firstName: 'John',
    lastName: 'Tolkien',
    email: 'tolkien@inklings.com',
    phoneNumber: '867-5309'
  }, {
    id: getId(),
    firstName: 'Clive',
    lastName: 'Lewis',
    email: 'lewis@inklings.com',
    phoneNumber: '867-5309'
  }, {
    id: getId(),
    firstName: 'Owen',
    lastName: 'Barfield',
    email: 'barfield@inklings.com',
    phoneNumber: '867-5309'
  }, {
    id: getId(),
    firstName: 'Charles',
    lastName: 'Williams',
    email: 'williams@inklings.com',
    phoneNumber: '867-5309'
  }, {
    id: getId(),
    firstName: 'Roger',
    lastName: 'Green',
    email: 'green@inklings.com',
    phoneNumber: '867-5309'
  }];

  var newsItems = [{ id: 1, text: "US says China will return underwater drone", link: "http://www.cnn.com/2016/12/17/politics/china-drone-donald-trump/index.html", blurb: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?" }, { id: 2, text: "Minnesota football team ends boycott", link: "http://www.cnn.com/2016/12/17/us/minnesota-gophers-end-football-boycott/index.html", blurb: "" }, { id: 3, text: "Tsunami alerts canceled following 7.9 earthquake", link: "http://www.cnn.com/2016/12/17/asia/earthquake-papua-new-guinea/index.html", blurb: "" }, { id: 4, text: "Obama's year-end message: I did it right", link: "http://www.cnn.com/2016/12/16/politics/obama-news-conference-i-did-it-right/index.html", blurb: "" }, { id: 5, text: "Trump says his supporters were 'violent'", link: "http://www.cnn.com/2016/12/16/politics/donald-trump-supporters-vicious-violent/index.html", blurb: "" }, { id: 6, text: "If the Electoral College goes rogue", link: "http://www.cnn.com/2016/12/16/politics/clinton-trump-electoral-college/index.html", blurb: "" }, { id: 7, text: "Trump chooses South Carolina congressman as budget director", link: "http://www.cnn.com/2016/12/16/politics/trump-chooses-south-carolina-congressman-as-budget-director/index.html", blurb: "" }, { id: 8, text: "Obama calls for doctor after woman falls ill", link: "http://www.cnn.com/videos/politics/2016/12/16/barack-obama-press-conference-medical-issue-sot-nr.cnn", blurb: "" }, { id: 9, text: "Turkish army: 13 soldiers killed, 55 wounded in bombing", link: "http://www.cnn.com/2016/12/17/europe/turkey-explosion/index.html", blurb: "" }, { id: 10, text: "State Department ups reward for ISIS leader to $25 million", link: "http://www.cnn.com/2016/12/17/politics/state-department-isis-al-baghdadi-reward/index.html", blurb: "" }];

  var categories = [{ id: 1, name: "Latest", parentId: null }, { id: 2, name: "World", parentId: null }, { id: 3, name: "National", parentId: null }, { id: 4, name: "Satire", parentId: null }, { id: 5, name: "Bilinqual", parentId: null }, { id: 6, name: "Political", parentId: null }, { id: 7, name: "Lifestyle", parentId: null }, { id: 8, name: "Gadget", parentId: null }, { id: 9, name: "Sports", parentId: null }, { id: 10, name: "Fashion", parentId: null }];

  var WebAPI = exports.WebAPI = function () {
    function WebAPI() {
      _classCallCheck(this, WebAPI);

      this.isRequesting = false;
    }

    WebAPI.prototype.getContactList = function getContactList() {
      var _this = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var results = contacts.map(function (x) {
            return {
              id: x.id,
              firstName: x.firstName,
              lastName: x.lastName,
              email: x.email
            };
          });
          resolve(results);
          _this.isRequesting = false;
        }, latency);
      });
    };

    WebAPI.prototype.getContactDetails = function getContactDetails(id) {
      var _this2 = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var found = contacts.filter(function (x) {
            return x.id == id;
          })[0];
          resolve(JSON.parse(JSON.stringify(found)));
          _this2.isRequesting = false;
        }, latency);
      });
    };

    WebAPI.prototype.saveContact = function saveContact(contact) {
      var _this3 = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var instance = JSON.parse(JSON.stringify(contact));
          var found = contacts.filter(function (x) {
            return x.id == contact.id;
          })[0];

          if (found) {
            var index = contacts.indexOf(found);
            contacts[index] = instance;
          } else {
            instance.id = getId();
            contacts.push(instance);
          }

          _this3.isRequesting = false;
          resolve(instance);
        }, latency);
      });
    };

    WebAPI.prototype.getNewsItem = function getNewsItem(id) {
      var _this4 = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var found = newItems.filter(function (x) {
            return x.id == id;
          })[0];
          resolve(JSON.parse(JSON.stringify(found)));
          _this4.isRequesting = false;
        }, latency);
      });
    };

    WebAPI.prototype.getNewsItems = function getNewsItems() {
      var _this5 = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var results = newsItems.map(function (x) {
            return {
              id: x.id,
              text: x.text,
              link: x.link,
              blurb: x.blurb
            };
          });
          resolve(results);
          _this5.isRequesting = false;
        }, latency);
      });
    };

    WebAPI.prototype.getCategory = function getCategory(id) {
      var _this6 = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var found = categories.filter(function (x) {
            return x.id == id;
          })[0];
          resolve(JSON.parse(JSON.stringify(found)));
          _this6.isRequesting = false;
        }, latency);
      });
    };

    WebAPI.prototype.getCategories = function getCategories() {
      var _this7 = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var results = categories.map(function (x) {
            return {
              id: x.id,
              name: x.name,
              parentId: x.parentId
            };
          });
          resolve(results);
          _this7.isRequesting = false;
        }, latency);
      });
    };

    return WebAPI;
  }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('categories',[], function () {
  "use strict";
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./styles.css\"></require>\n  <require from=\"./news-item\"></require>\n\n  <nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container\">\n      <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <h1>${siteName}</h1>\n\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li repeat.for=\"category of categories\"><a href=\"/category?itemId=${category.id}\">${category.name}<a></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n   <div class=\"container\">\n     <div class=\"row\">\n      <news-item repeat.for=\"item of newsItems\" text.bind=\"item.text\" link.bind=\"item.link\" blurb.bind=\"item.blurb\"></news-item>\n     </div>\n  </div>\n</template>\n"; });
define('text!styles.css', ['module'], function(module) { module.exports = "section {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n\n.navbar-header h1 {\n  margin-right: 10px;\n}\n"; });
define('text!news-item.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"news-item col-md-4\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <a href=\"${link}\"><span class=\"glyphicon glyphicon-link\"></span> ${text}</a>\r\n            </div>\r\n            <div class=\"panel-body\" if.bind=\"blurb\">\r\n                <p>${blurb}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!categories.html', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map