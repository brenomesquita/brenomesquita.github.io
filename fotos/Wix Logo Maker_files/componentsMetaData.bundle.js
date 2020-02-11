(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["componentsMetaData"] = factory(require("lodash"));
	else
		root["componentsMetaData"] = factory(root["_"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.1043.0/";
/******/
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1131);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1131:
/*!*******************************!*\
  !*** ./componentsMetaData.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metaData = __webpack_require__(/*! ./legacy/components/RichTextBox/metaData */ 889);

var _metaData2 = _interopRequireDefault(_metaData);

var _metaData3 = __webpack_require__(/*! ./legacy/components/ToggleSwitch/metaData */ 890);

var _metaData4 = _interopRequireDefault(_metaData3);

var _metaData5 = __webpack_require__(/*! ./components/Slider/metaData */ 891);

var _metaData6 = _interopRequireDefault(_metaData5);

var _metaData7 = __webpack_require__(/*! ./components/SearchBox/metaData */ 892);

var _metaData8 = _interopRequireDefault(_metaData7);

var _metaData9 = __webpack_require__(/*! ./components/BarChart/metaData */ 893);

var _metaData10 = _interopRequireDefault(_metaData9);

var _metaData11 = __webpack_require__(/*! ./components/TimePicker/metaData */ 894);

var _metaData12 = _interopRequireDefault(_metaData11);

var _metaData13 = __webpack_require__(/*! ./components/RatingsInput/metaData */ 895);

var _metaData14 = _interopRequireDefault(_metaData13);

var _metaData15 = __webpack_require__(/*! ./components/RatingsDisplay/metaData */ 896);

var _metaData16 = _interopRequireDefault(_metaData15);

var _metaData17 = __webpack_require__(/*! ./components/Tags/ds/metaData */ 897);

var _metaData18 = _interopRequireDefault(_metaData17);

var _metaData19 = __webpack_require__(/*! ./components/VideoPlayer/metaData */ 898);

var _metaData20 = _interopRequireDefault(_metaData19);

var _metaData21 = __webpack_require__(/*! ./components/AddressInput/metaData */ 899);

var _metaData22 = _interopRequireDefault(_metaData21);

var _metaData23 = __webpack_require__(/*! ./components/LineShareButton/ds/metaData */ 900);

var _metaData24 = _interopRequireDefault(_metaData23);

var _metaData25 = __webpack_require__(/*! ./components/Captcha/metaData */ 901);

var _metaData26 = _interopRequireDefault(_metaData25);

var _metaData27 = __webpack_require__(/*! ./components/MusicPlayer/metaData */ 902);

var _metaData28 = _interopRequireDefault(_metaData27);

var _metaData29 = __webpack_require__(/*! ./components/StylableButton/ds/metaData */ 903);

var _metaData30 = _interopRequireDefault(_metaData29);

var _metaData31 = __webpack_require__(/*! ./components/StylableLine/ds/metaData */ 904);

var _metaData32 = _interopRequireDefault(_metaData31);

var _metaData33 = __webpack_require__(/*! ./components/ProgressBar/metaData */ 905);

var _metaData34 = _interopRequireDefault(_metaData33);

var _metaData35 = __webpack_require__(/*! ./components/Dropdown/metaData */ 906);

var _metaData36 = _interopRequireDefault(_metaData35);

var _metaData37 = __webpack_require__(/*! ./components/CustomElement/ds/metaData */ 907);

var _metaData38 = _interopRequireDefault(_metaData37);

var _metaData39 = __webpack_require__(/*! ./components/SignatureInput/metaData */ 908);

var _metaData40 = _interopRequireDefault(_metaData39);

var _metaData41 = __webpack_require__(/*! ./components/FileUploaderNew/metaData */ 909);

var _metaData42 = _interopRequireDefault(_metaData41);

var _metaData43 = __webpack_require__(/*! ./components/SelectionTagsList/metaData */ 910);

var _metaData44 = _interopRequireDefault(_metaData43);

var _metaData45 = __webpack_require__(/*! ./components/StylableHorizontalMenu/metaData */ 911);

var _metaData46 = _interopRequireDefault(_metaData45);

var _documentServices = __webpack_require__(/*! ./components/ImageX/document-services */ 179);

var _documentServices2 = _interopRequireDefault(_documentServices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({
  'wixui.RichTextBox': _metaData2.default,
  'wixui.ToggleSwitch': _metaData4.default,
  'wixui.Slider': _metaData6.default,
  'wixui.SearchBox': _metaData8.default,
  'wixui.TimePicker': _metaData12.default,
  'wixui.RatingsInput': _metaData14.default,
  'wixui.RatingsDisplay': _metaData16.default,
  'wixui.VideoPlayer': _metaData20.default,
  'wixui.AddressInput': _metaData22.default,
  'wixui.LineShareButton': _metaData24.default,
  'wixui.Captcha': _metaData26.default,
  'wixui.Tags': _metaData18.default,
  'wixui.MusicPlayer': _metaData28.default,
  'wixui.StylableButton': _metaData30.default,
  'wixui.StylableLine': _metaData32.default,
  'wixui.ProgressBar': _metaData34.default,
  'wixui.Dropdown': _metaData36.default,
  'wixui.BarChart': _metaData10.default,
  'wixui.CustomElementComponent': _metaData38.default,
  'wixui.SignatureInput': _metaData40.default,
  'wixui.FileUploaderNew': _metaData42.default,
  'wixui.SelectionTagsList': _metaData44.default,
  'wixui.StylableHorizontalMenu': _metaData46.default
}, _documentServices2.default.componentType, _documentServices2.default.metaData);

/***/ }),

/***/ 148:
/*!*****************************************!*\
  !*** ./components/ImageX/dataSchema.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REPLACE-ME: Here you can state your components data to be saved in DB (and passed to the component/panels through props)
// Data usually relates to the component’s dynamic aspects and Javascript such as texts, values and placeholders
// Replace example data prop `text` with your own.
// See https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// After dataSchema and propertiesSchema shapes are finalized, a ticket to Editor backend team should be created
// in the jira to save those about in the DB. Example: https://jira.wixpress.com/browse/HTMLSRVR-3142
var dataSchema = {
  Crop: {
    type: 'object',
    properties: {
      x: {
        type: 'number',
        minimum: 0
      },
      y: {
        type: 'number',
        minimum: 0
      },
      width: {
        type: 'number',
        minimum: 0
      },
      height: {
        type: 'number',
        minimum: 0
      }
    },
    required: ['x', 'y', 'width', 'height']
  },
  FocalPoint: {
    type: 'object',
    properties: {
      x: {
        type: 'number',
        minimum: 0
      },
      y: {
        type: 'number',
        minimum: 0
      }
    },
    required: ['x', 'y']
  },
  ImageX: {
    type: 'object',
    properties: {
      image: {
        type: 'object',
        properties: {
          uri: {
            type: 'string',
            default: ''
          },
          alt: {
            type: 'string',
            default: ''
          },
          name: {
            type: 'string',
            maxLength: 100
          },
          height: {
            type: 'number',
            default: 200
          },
          width: {
            type: 'number',
            default: 200
          }
        }
      },
      link: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      },
      scopedData: {
        description: 'ImageX data per breakpoint',
        type: ['null', 'array'],
        items: {
          type: 'object',
          properties: {
            breakpoint: {
              type: ['string', 'null'],
              pseudoType: ['weakRef']
            },
            crop: {
              oneOf: [{
                type: 'null'
              }, {
                $ref: 'Crop'
              }]
            },
            focalPoint: {
              oneOf: [{
                type: 'null'
              }, {
                $ref: 'FocalPoint'
              }]
            },
            displayMode: {
              type: 'string',
              enum: ['fill'],
              default: 'fill'
            },
            scrollEffect: {
              type: 'string',
              enum: ['parallax', 'fixed', 'zoomIn', 'fadeIn', 'none']
            },
            clickAction: {
              type: 'string',
              enum: ['none', 'goToLink']
            }
          }
        }
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 149:
/*!***********************************************!*\
  !*** ./components/ImageX/propertiesSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REPLACE-ME: Here you can state properties to be saved in DB (and passed to the component/panels through props)
// Properties usually relate to the component’s static layout and CSS such as directions and spacing
// Replace example property `direction` with your own properties
// See https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// After dataSchema and propertiesSchema shapes are finalized, a ticket to Editor backend team should be created
// in the jira to save those about in the DB. Example: https://jira.wixpress.com/browse/HTMLSRVR-3142
var propertiesSchema = {
  ImageXProperties: {
    type: 'object',
    allOf: [{
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 179:
/*!******************************************************!*\
  !*** ./components/ImageX/document-services/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 368);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 149);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 148);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 369);

var _metaData2 = _interopRequireDefault(_metaData);

var _constants = __webpack_require__(/*! ../constants */ 39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  componentType: _constants.ComponentMetaData.componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 188:
/*!***********************************************************!*\
  !*** ./components/MusicPlayer/editor/layoutManagement.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPlaylistMaxHeight = exports.findLayoutWidthAndHeight = exports.findLayoutMinAndMax = undefined;

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

var _types = __webpack_require__(/*! ./types */ 51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SMALL_HEIGHT = 40;
var DEFAULT_HEIGHT = 70;
var COVER_SIZE = 70;
var DEFAULT_WIDTH = 320;

var PLAYLIST_TRACK_ITEM_HEIGHT = 52;
var PLAYLIST_FILLERS_HEIGHT = 12 * 2;
var PLAYLIST_FOOTER_HEIGHT = 59;

/*
Width and height values are taken from design.
Bit map are used to cover all show%layout_info% toggles.

weight = width x height

 0 = 70 x 70
 1 = 70 x 70

 2 = 114 x 40
 3 = 114 + 40 x 40
 4 = 250 x 40
 5 = 250 + 40 x 40
 6 = 250 x 40
 7 = 250 + 40 x 40
 8 = 250 x 40
 9 = 250 + 40 x 40
10 = 250 x 40
11 = 250 + 40 x 40
12 = 250 x 70
13 = 250 + 70 x 70
14 = 250 x 70
15 = 250 + 70 x 70
*/
var LAYOUT_WEIGHTS = {
  showCover: 1,
  showTimeStamp: 2,
  showTrackName: 4,
  showArtistName: 4,
  showProgressBar: 8
};

var NO_SELECT_WEIGHT = 1;
var COVER_WEIGHT = 2;

var LAYOUT_WIDTH_LEVELS = {
  1: 70,
  3: 114,
  15: 250
};
var LAYOUT_HEIGHT_LEVELS = {
  1: 70,
  11: 40,
  15: 70
};

function countLayoutWeights(compProps) {
  return _lodash2.default.chain(Object.keys(compProps)).filter(function (key) {
    return _lodash2.default.startsWith(key, 'show');
  }).map(function (key) {
    return compProps[key] ? LAYOUT_WEIGHTS[key] : 0;
  }).reduce(function (acc, i) {
    return acc | i;
  }, 0) // eslint-disable-line no-bitwise
  .value();
}

function pickLayoutLevel(weight, levels) {
  for (var value in levels) {
    if (weight <= value) {
      return levels[value];
    }
  }
}

function findLayoutMinAndMax(compData, compProps) {
  var layout = compProps.layout;


  if (layout === 'icon') {
    return {
      minWidth: SMALL_HEIGHT,
      maxWidth: 300,
      minHeight: SMALL_HEIGHT,
      maxHeight: 300
    };
  }

  var weight = countLayoutWeights(compProps);
  var minWidth = pickLayoutLevel(weight, LAYOUT_WIDTH_LEVELS);
  var minHeight = pickLayoutLevel(weight, LAYOUT_HEIGHT_LEVELS);

  // Every odd weight we have cover added to total width
  if (weight > COVER_WEIGHT && weight % 2) {
    minWidth += minHeight;
  }

  var max = weight <= NO_SELECT_WEIGHT ? COVER_SIZE : Number.MAX_SAFE_INTEGER;

  return {
    minWidth: minWidth,
    maxWidth: max,
    minHeight: minHeight,
    maxHeight: max
  };
}

function findLayoutWidthAndHeight(compData, compProps, compLayout, tracksToShow, setNumTracks) {
  var showArtistName = compProps.showArtistName,
      showTrackName = compProps.showTrackName,
      showProgressBar = compProps.showProgressBar,
      showTimeStamp = compProps.showTimeStamp,
      showPlaylist = compProps.showPlaylist,
      layout = compProps.layout,
      source = compProps.source,
      playlistTrackSpacing = compProps.playlistTrackSpacing;
  var width = compLayout.width,
      height = compLayout.height;
  var playlist = compData.playlist;

  var prevHeight = findLayoutWidthAndHeight.prevHeight || height;

  if (layout === 'icon') {
    return { height: SMALL_HEIGHT, width: SMALL_HEIGHT };
  }

  var weight = countLayoutWeights(compProps);
  var showTitle = showTrackName || showArtistName;
  var hasSingleRow = showTitle !== showProgressBar || !showTitle && !showProgressBar && showTimeStamp;
  var nextWidth = void 0;

  if (weight === 2) {
    nextWidth = width > 130 ? width : 130;
  } else if (weight === 8) {
    nextWidth = width > 154 ? width : 154;
  } else {
    nextWidth = width < DEFAULT_WIDTH && width <= 300 ? DEFAULT_WIDTH : width;
  }

  var nextHeight = height;

  if (hasSingleRow && source !== _types.SOURCE.WIX_MUSIC) {
    nextHeight = SMALL_HEIGHT;
  } else {
    nextHeight = DEFAULT_HEIGHT;

    if (hasSingleRow) {
      nextHeight = SMALL_HEIGHT;
    }

    var totalTracks = _lodash2.default.get(playlist, 'length');

    if (source === _types.SOURCE.WIX_MUSIC && showPlaylist && totalTracks > 0) {
      nextHeight += findPlaylistMaxHeight({
        parentHeight: height,
        totalTracks: totalTracks,
        tracksSpacing: playlistTrackSpacing,
        tracksMayChange: prevHeight !== height,
        prevNumTracksToShow: tracksToShow,
        setNumTracks: setNumTracks
      });
      nextHeight += PLAYLIST_FILLERS_HEIGHT;
      nextHeight += PLAYLIST_FOOTER_HEIGHT;
    }
  }

  if (!showTitle && !showProgressBar && !showTimeStamp) {
    nextWidth = COVER_SIZE;
  } else if (width === COVER_SIZE) {
    nextWidth = DEFAULT_WIDTH;
  }

  findLayoutWidthAndHeight.prevHeight = nextHeight;
  return { width: nextWidth, height: nextHeight };
}

function findPlaylistMaxHeight(_ref) {
  var parentHeight = _ref.parentHeight,
      totalTracks = _ref.totalTracks,
      tracksSpacing = _ref.tracksSpacing,
      tracksMayChange = _ref.tracksMayChange,
      prevNumTracksToShow = _ref.prevNumTracksToShow,
      setNumTracks = _ref.setNumTracks;

  var numTracksToShow = prevNumTracksToShow || (totalTracks > 3 ? 3 : totalTracks);

  if (tracksMayChange && numTracksToShow >= 3) {
    var onlyPlaylistBlockHeight = parentHeight - DEFAULT_HEIGHT - PLAYLIST_FOOTER_HEIGHT - PLAYLIST_FILLERS_HEIGHT;
    var tracksThatFit = Math.round((onlyPlaylistBlockHeight + tracksSpacing) / (PLAYLIST_TRACK_ITEM_HEIGHT + tracksSpacing));
    numTracksToShow = tracksThatFit < 3 ? 3 : tracksThatFit > totalTracks ? totalTracks : tracksThatFit;
    prevNumTracksToShow !== numTracksToShow ? setNumTracks(numTracksToShow) : null;
  }

  var height = numTracksToShow * PLAYLIST_TRACK_ITEM_HEIGHT;

  if (tracksSpacing) {
    height += (numTracksToShow - 1) * tracksSpacing;
  }
  return height;
}

exports.findLayoutMinAndMax = findLayoutMinAndMax;
exports.findLayoutWidthAndHeight = findLayoutWidthAndHeight;
exports.findPlaylistMaxHeight = findPlaylistMaxHeight;

/***/ }),

/***/ 2:
/*!*************************************************************************************!*\
  !*** external {"amd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 368:
/*!**************************************************!*\
  !*** ./components/ImageX/componentDefinition.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 39);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.ComponentMetaData.componentType, {
  skins: [_constants.ComponentMetaData.skinName],
  dataTypes: ['ImageX'],
  // propertyType: 'ImageXProperties',
  nickname: _constants.ComponentMetaData.nickName,
  styles: {
    ImageX_1: _constants.ComponentMetaData.skinName
  }
});

/***/ }),

/***/ 369:
/*!***************************************!*\
  !*** ./components/ImageX/metaData.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// REPLACE-ME: replace with correct document-services metadata!
// Document services metadata defines valid behaviors for the component
// For all available options see https://github.com/wix-private/santa-core/blob/master/document-services-implementation/src/componentsMetaData/externalComponentsMetaDataMap.js
exports.default = {
  rotatable: false,
  isRepeatable: true,
  canBeStretched: true
};

/***/ }),

/***/ 39:
/*!****************************************!*\
  !*** ./components/ImageX/constants.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// After all translation keys exist in the component, they should be added to a new file in santa-langs repo
// This is the path where the component translations should be created:
// https://github.com/wix-private/santa-langs/blob/master/src/main/resources/santa-editor/bundles/ImageX/ImageX_en.json
var TranslationKeys = exports.TranslationKeys = {
  settingsPanel: {
    header: 'ImageX-settings-panel-header'
  },
  gfpp: {
    mainAction: 'ImageX-settings-panel-main-action'
  }
};

var DataHooks = exports.DataHooks = {
  coreComponent: 'ImageX-core-component',
  settingsPanel: {
    container: 'ImageX-settings-panel-container',
    text: 'ImageX-settings-panel-text'
  }
};

var ComponentMetaData = exports.ComponentMetaData = {
  displayName: 'ImageX',
  componentType: 'wixui.ImageX',
  nickName: 'imageX',
  skinName: 'wixui.skins.ImageX'
};

/***/ }),

/***/ 51:
/*!************************************************!*\
  !*** ./components/MusicPlayer/editor/types.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SOURCE = {
  UPLOADS: 'uploads',
  URL: 'url',
  WIX_MUSIC: 'wixMusic'
};

var WIX_MUSIC_OPTIONS = {
  state: '',
  title: null,
  origin: 'gfpp',
  widgetless: true,
  shouldNotCloseOnBlur: true,
  isBareMode: true,
  leavePanelsOpen: true,
  options: {
    background: 'rgba(0,0,0,0)',
    overlay: 'rgba(0,0,0,0.5)',
    margin: true
  }
};

var DEFAULT_MUSIC_COVER = staticMediaUrl() + '/f9a47e_e7631916c7e4468091c47929b7acdf8a~mv2.png';
var DEFAULT_WIX_MUSIC_COVER = staticShapesUrl() + '/f9a47e_a45ee66e0d00442cbdbfcc323bb135d8.svg';
var WIX_MUSIC_DEMO_COVER = staticMediaUrl() + '/a6b72e_99cda2c157fe4c0a9ddb7484de2ab762~mv2_d_4000_4000_s_4_2.jpg';
var DEFAULT_PLAYLIST = [{
  albumName: 'Wix Demo Album',
  artistName: 'Wix',
  trackName: 'Good Vibes',
  url: 'https://static.wixstatic.com/preview/a6b72e_01aedb61a6c4429787697fe906f47222-128.mp3',
  cover: WIX_MUSIC_DEMO_COVER,
  durationFormatted: '02:50'
}, {
  albumName: 'Wix Demo Album',
  artistName: 'Wix',
  trackName: 'Into the Wild',
  url: 'https://static.wixstatic.com/preview/a6b72e_51313df4bfb24f9392b994a30ec17c6e-128.mp3',
  cover: WIX_MUSIC_DEMO_COVER,
  durationFormatted: '03:15'
}, {
  albumName: 'Wix Demo Album',
  artistName: 'Wix',
  trackName: 'Flying Low',
  url: 'https://static.wixstatic.com/preview/a6b72e_370a75a289bf4697a5a9f2daf2258b58-128.mp3',
  cover: WIX_MUSIC_DEMO_COVER,
  durationFormatted: '03:18'
}, {
  albumName: 'Wix Demo Album',
  artistName: 'Wix',
  trackName: 'Sixteen',
  url: 'https://static.wixstatic.com/preview/a6b72e_9553b5455a8d4778a91193d0dbb55109-128.mp3',
  cover: WIX_MUSIC_DEMO_COVER,
  durationFormatted: '02:43'
}];

function staticMediaUrl() {
  return typeof window !== 'undefined' && window.serviceTopology && window.serviceTopology.staticMediaUrl || 'https://static.wixstatic.com/media';
}

function staticAudioPreviewUrl() {
  var url = typeof window !== 'undefined' && window.serviceTopology && window.serviceTopology.mediaRootUrl || 'https://static.wixstatic.com/';
  return url + 'preview';
}

// Place where all vector images are stored
function staticShapesUrl() {
  var url = typeof window !== 'undefined' && window.serviceTopology && window.serviceTopology.mediaRootUrl || 'https://static.wixstatic.com/';
  return url + 'shapes';
}

exports.SOURCE = SOURCE;
exports.WIX_MUSIC_OPTIONS = WIX_MUSIC_OPTIONS;
exports.DEFAULT_MUSIC_COVER = DEFAULT_MUSIC_COVER;
exports.DEFAULT_WIX_MUSIC_COVER = DEFAULT_WIX_MUSIC_COVER;
exports.WIX_MUSIC_DEMO_COVER = WIX_MUSIC_DEMO_COVER;
exports.DEFAULT_PLAYLIST = DEFAULT_PLAYLIST;
exports.staticMediaUrl = staticMediaUrl;
exports.staticAudioPreviewUrl = staticAudioPreviewUrl;
exports.staticShapesUrl = staticShapesUrl;

/***/ }),

/***/ 889:
/*!***************************************************!*\
  !*** ./legacy/components/RichTextBox/metaData.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  disableable: true,
  isRepeatable: true,
  layoutLimits: {
    minHeight: 100,
    minWidth: 200
  }
};

/***/ }),

/***/ 890:
/*!****************************************************!*\
  !*** ./legacy/components/ToggleSwitch/metaData.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  resizableSides: [],
  layoutLimits: {
    minHeight: 24,
    maxHeight: 128,
    minWidth: 48,
    maxWidth: 256,
    aspectRatio: 2
  },
  disableable: true,
  isRepeatable: true
};

/***/ }),

/***/ 891:
/*!***************************************!*\
  !*** ./components/Slider/metaData.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 892:
/*!******************************************!*\
  !*** ./components/SearchBox/metaData.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 893:
/*!*****************************************!*\
  !*** ./components/BarChart/metaData.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 894:
/*!*******************************************!*\
  !*** ./components/TimePicker/metaData.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  layoutLimits: {
    minHeight: 42,
    minWidth: 150
  },
  disableable: true,
  isRepeatable: true
};

/***/ }),

/***/ 895:
/*!*********************************************!*\
  !*** ./components/RatingsInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 25,
    shapeSpacing: 5
  },
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 896:
/*!***********************************************!*\
  !*** ./components/RatingsDisplay/metaData.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 20,
    shapeSpacing: 5
  },
  isRepeatable: true
};

/***/ }),

/***/ 897:
/*!****************************************!*\
  !*** ./components/Tags/ds/metaData.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minWidth: 60
  }
};

/***/ }),

/***/ 898:
/*!********************************************!*\
  !*** ./components/VideoPlayer/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  layoutLimits: {
    minHeight: 180,
    minWidth: 200
  },
  isRepeatable: true
};

/***/ }),

/***/ 899:
/*!*********************************************!*\
  !*** ./components/AddressInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metaData = {
  layoutLimits: {
    minHeight: 25,
    minWidth: 200
  },
  isRepeatable: true,
  disableable: true
};

module.exports = metaData;

/***/ }),

/***/ 900:
/*!***************************************************!*\
  !*** ./components/LineShareButton/ds/metaData.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metaData = {
  rotatable: false,
  disableable: false,
  isRepeatable: true,
  resizableSides: []
};

module.exports = metaData;

/***/ }),

/***/ 901:
/*!****************************************!*\
  !*** ./components/Captcha/metaData.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: false,
  resizableSides: [],
  disableable: false,
  mobileConversionConfig: {
    fixedSize: {
      height: 57,
      width: 235
    }
  }
};

/***/ }),

/***/ 902:
/*!********************************************!*\
  !*** ./components/MusicPlayer/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layoutManagement = __webpack_require__(/*! ./editor/layoutManagement */ 188);

function layoutLimits(compDriver) {
  var compDriverProperties = compDriver.properties;
  var compDriverData = compDriver.data;

  if (!compDriverProperties || !compDriverData) {
    return null;
  }

  return (0, _layoutManagement.findLayoutMinAndMax)(compDriverData.get(), compDriverProperties.get());
}

function canBeStretched(_ref) {
  var properties = _ref.properties;

  return properties.get().layout === 'classic';
}

var metaData = {
  rotatable: false,
  isRepeatable: true,
  canBeStretched: canBeStretched,
  layoutLimits: layoutLimits
};

module.exports = metaData;

/***/ }),

/***/ 903:
/*!**************************************************!*\
  !*** ./components/StylableButton/ds/metaData.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minHeight: 10,
    minWidth: 10
  },
  isRepeatable: true,
  allowConnectToDB: true,
  a11yConfigurable: true,
  rotatable: true,
  disableable: true
};

/***/ }),

/***/ 904:
/*!************************************************!*\
  !*** ./components/StylableLine/ds/metaData.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // styleCanBeApplied: true,
  rotatable: true
};

/***/ }),

/***/ 905:
/*!********************************************!*\
  !*** ./components/ProgressBar/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true
};

/***/ }),

/***/ 906:
/*!*****************************************!*\
  !*** ./components/Dropdown/metaData.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true,
  allowConnectToDB: true
};

/***/ }),

/***/ 907:
/*!*************************************************!*\
  !*** ./components/CustomElement/ds/metaData.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 908:
/*!***********************************************!*\
  !*** ./components/SignatureInput/metaData.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minHeight: 85,
    minWidth: 160
  },
  rotatable: false,
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 909:
/*!************************************************!*\
  !*** ./components/FileUploaderNew/metaData.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true
};

/***/ }),

/***/ 910:
/*!**************************************************!*\
  !*** ./components/SelectionTagsList/metaData.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true,
  allowConnectToDB: true,
  verticallyResizable: false,
  layoutLimits: {
    minWidth: 50
  }
};

/***/ }),

/***/ 911:
/*!*******************************************************!*\
  !*** ./components/StylableHorizontalMenu/metaData.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// REPLACE-ME: replace with correct document-services metadata!
// Document services metadata defines valid behaviors for the component
// For all available options see https://github.com/wix-private/santa-core/blob/master/document-services-implementation/src/componentsMetaData/externalComponentsMetaDataMap.js
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true
};

/***/ })

/******/ });
});
//# sourceMappingURL=componentsMetaData.bundle.js.map