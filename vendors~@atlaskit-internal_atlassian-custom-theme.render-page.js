exports.ids = ["vendors~@atlaskit-internal_atlassian-custom-theme"];
exports.modules = {

/***/ "./node_modules/@atlaskit/tokens/dist/esm/artifacts/atlassian-dark-token-value-for-contrast-check.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/artifacts/atlassian-dark-token-value-for-contrast-check.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * THIS FILE WAS CREATED VIA CODEGEN DO NOT MODIFY {@see http://go/af-codegen}
 *
 * Token names mapped to their values, used for contrast checking when generating custom themes
 *
 * @codegen <<SignedSource::023110f136ad929098f2d5a341b7ad7c>>
 * @codegenCommand yarn build tokens
 */
var tokenValues = {
  'color.text.brand': '#579DFF',
  'elevation.surface.overlay': '#282E33',
  'color.background.selected': '#1C2B41',
  'color.text.selected': '#579DFF',
  'color.border.brand': '#579DFF',
  'color.chart.brand': '#388BFF',
  'color.text.inverse': '#1D2125'
};
/* harmony default export */ __webpack_exports__["default"] = (tokenValues);

/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/artifacts/atlassian-light-token-value-for-contrast-check.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/artifacts/atlassian-light-token-value-for-contrast-check.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * THIS FILE WAS CREATED VIA CODEGEN DO NOT MODIFY {@see http://go/af-codegen}
 *
 * Token names mapped to their values, used for contrast checking when generating custom themes
 *
 * @codegen <<SignedSource::9975d8c2d3b07e5b405782c2d24fab5f>>
 * @codegenCommand yarn build tokens
 */
var tokenValues = {
  'color.text.brand': '#0C66E4',
  'elevation.surface.sunken': '#F7F8F9',
  'color.background.selected': '#E9F2FF',
  'color.text.selected': '#0C66E4',
  'color.border.brand': '#0C66E4',
  'color.chart.brand': '#1D7AFC',
  'color.text.inverse': '#FFFFFF'
};
/* harmony default export */ __webpack_exports__["default"] = (tokenValues);

/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/custom-theme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/custom-theme.js ***!
  \****************************************************************/
/*! exports provided: CUSTOM_STYLE_ELEMENTS_SIZE_THRESHOLD, getCustomThemeStyles, loadAndAppendCustomThemeCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_STYLE_ELEMENTS_SIZE_THRESHOLD", function() { return CUSTOM_STYLE_ELEMENTS_SIZE_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomThemeStyles", function() { return getCustomThemeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAndAppendCustomThemeCss", function() { return loadAndAppendCustomThemeCss; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@atlaskit/tokens/dist/esm/constants.js");
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-config */ "./node_modules/@atlaskit/tokens/dist/esm/theme-config.js");
/* harmony import */ var _utils_custom_theme_loading_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/custom-theme-loading-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/custom-theme-loading-utils.js");
/* harmony import */ var _utils_generate_custom_color_ramp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generate-custom-color-ramp */ "./node_modules/@atlaskit/tokens/dist/esm/utils/generate-custom-color-ramp.js");
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/hash */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hash.js");





var CUSTOM_STYLE_ELEMENTS_SIZE_THRESHOLD = 10;

/**
 *
 * @param themeSchema The schema of available themes
 * @returns a string with the CSS for the custom theme
 */
/**
 * Takes a color mode and custom branding options, and returns an array of objects for use in applying custom styles to the document head.
 * Only supplies the color themes necessary for initial render, based on the current themeState. I.e. if in light mode, dark mode themes are not returned.
 *
 * @param {Object<string, string>} themeState The themes and color mode that should be applied.
 * @param {string} themeState.colorMode Determines which color theme is applied
 * @param {Object} themeState.UNSAFE_themeOptions The custom branding options to be used for custom theme generation
 *
 * @returns An object array, containing theme IDs, data-attributes to attach to the theme, and the theme CSS.
 * If an error is encountered while loading themes, the themes array will be empty.
 */
function getCustomThemeStyles(themeState) {
  var _themeState$UNSAFE_th;
  var brandColor = themeState === null || themeState === void 0 || (_themeState$UNSAFE_th = themeState.UNSAFE_themeOptions) === null || _themeState$UNSAFE_th === void 0 ? void 0 : _themeState$UNSAFE_th.brandColor;
  var mode = (themeState === null || themeState === void 0 ? void 0 : themeState.colorMode) || _theme_config__WEBPACK_IMPORTED_MODULE_1__["themeStateDefaults"]['colorMode'];
  var optionString = JSON.stringify(themeState === null || themeState === void 0 ? void 0 : themeState.UNSAFE_themeOptions);
  var uniqueId = Object(_utils_hash__WEBPACK_IMPORTED_MODULE_4__["hash"])(optionString);
  var themeRamp = Object(_utils_generate_custom_color_ramp__WEBPACK_IMPORTED_MODULE_3__["generateColors"])(brandColor).ramp;

  // outputs object to generate to CSS from
  var themes = [];
  var tokenMaps = Object(_utils_generate_custom_color_ramp__WEBPACK_IMPORTED_MODULE_3__["generateTokenMapWithContrastCheck"])(brandColor, mode, themeRamp);
  if ((mode === 'light' || mode === 'auto') && tokenMaps.light) {
    // Light mode theming
    themes.push({
      id: 'light',
      attrs: {
        'data-theme': 'light',
        'data-custom-theme': uniqueId
      },
      css: "\nhtml[".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_THEME_ATTRIBUTE"], "=\"").concat(uniqueId, "\"][").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_MODE_ATTRIBUTE"], "=\"light\"][data-theme~=\"light:light\"] {\n  /* Branded tokens */\n    ").concat(Object(_utils_custom_theme_loading_utils__WEBPACK_IMPORTED_MODULE_2__["reduceTokenMap"])(tokenMaps.light, themeRamp), "\n}")
    });
  }
  if ((mode === 'dark' || mode === 'auto') && tokenMaps.dark) {
    // Dark mode theming
    themes.push({
      id: 'dark',
      attrs: {
        'data-theme': 'dark',
        'data-custom-theme': uniqueId
      },
      css: "\nhtml[".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_THEME_ATTRIBUTE"], "=\"").concat(uniqueId, "\"][").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_MODE_ATTRIBUTE"], "=\"dark\"][data-theme~=\"dark:dark\"] {\n  /* Branded tokens */\n    ").concat(Object(_utils_custom_theme_loading_utils__WEBPACK_IMPORTED_MODULE_2__["reduceTokenMap"])(tokenMaps.dark, themeRamp), "\n}")
    });
  }
  return themes;
}
function loadAndAppendCustomThemeCss(themeState) {
  var themes = getCustomThemeStyles(themeState);
  Object(_utils_custom_theme_loading_utils__WEBPACK_IMPORTED_MODULE_2__["limitSizeOfCustomStyleElements"])(CUSTOM_STYLE_ELEMENTS_SIZE_THRESHOLD);
  themes.map(function (theme) {
    var styleTag = document.createElement('style');
    document.head.appendChild(styleTag);
    styleTag.dataset.theme = theme.attrs['data-theme'];
    styleTag.dataset.customTheme = theme.attrs['data-custom-theme'];
    styleTag.textContent = theme.css;
  });
}

/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/utils/custom-theme-token-contrast-check.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/utils/custom-theme-token-contrast-check.js ***!
  \*******************************************************************************************/
/*! exports provided: additionalChecks, additionalContrastChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalChecks", function() { return additionalChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalContrastChecker", function() { return additionalContrastChecker; });
/* harmony import */ var _artifacts_atlassian_dark_token_value_for_contrast_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../artifacts/atlassian-dark-token-value-for-contrast-check */ "./node_modules/@atlaskit/tokens/dist/esm/artifacts/atlassian-dark-token-value-for-contrast-check.js");
/* harmony import */ var _artifacts_atlassian_light_token_value_for_contrast_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artifacts/atlassian-light-token-value-for-contrast-check */ "./node_modules/@atlaskit/tokens/dist/esm/artifacts/atlassian-light-token-value-for-contrast-check.js");
/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/color-utils.js");



var additionalChecks = [{
  foreground: 'color.text.brand',
  backgroundLight: 'elevation.surface.sunken',
  backgroundDark: 'elevation.surface.overlay',
  desiredContrast: 4.5,
  updatedTokens: [
  // In light mode: darken the following tokens by one base token
  // In dark mode: lighten the following tokens by one base token
  'color.text.brand', 'color.text.selected', 'color.link', 'color.link.pressed', 'color.icon.brand', 'color.icon.selected']
}, {
  foreground: 'color.text.brand',
  backgroundLight: 'color.background.selected',
  backgroundDark: 'color.background.selected',
  desiredContrast: 4.5,
  // In light mode: darken the following tokens by one base token
  // In dark mode: lighten the following tokens by one base toke
  updatedTokens: ['color.text.brand', 'color.link', 'color.link.pressed']
}, {
  foreground: 'color.text.selected',
  backgroundLight: 'color.background.selected',
  backgroundDark: 'color.background.selected',
  desiredContrast: 4.5,
  // In light mode: darken the following tokens by one base token
  // In dark mode: lighten the following tokens by one base token
  updatedTokens: ['color.text.selected', 'color.icon.selected']
}, {
  foreground: 'color.border.brand',
  backgroundLight: 'elevation.surface.sunken',
  backgroundDark: 'elevation.surface.overlay',
  desiredContrast: 3,
  // In light mode: darken the following tokens by one base token
  // In dark mode: lighten the following tokens by one base toke
  updatedTokens: ['color.border.brand', 'color.border.selected']
}, {
  foreground: 'color.chart.brand',
  backgroundLight: 'elevation.surface.sunken',
  backgroundDark: 'elevation.surface.overlay',
  desiredContrast: 3,
  // In light mode: darken the following tokens by one base token
  // In dark mode: lighten the following tokens by one base token
  updatedTokens: ['color.chart.brand', 'color.chart.brand.hovered']
}];
var getColorFromTokenRaw = function getColorFromTokenRaw(tokenName, mode) {
  return mode === 'light' ? _artifacts_atlassian_light_token_value_for_contrast_check__WEBPACK_IMPORTED_MODULE_1__["default"][tokenName] : _artifacts_atlassian_dark_token_value_for_contrast_check__WEBPACK_IMPORTED_MODULE_0__["default"][tokenName];
};
var additionalContrastChecker = function additionalContrastChecker(_ref) {
  var customThemeTokenMap = _ref.customThemeTokenMap,
    mode = _ref.mode,
    themeRamp = _ref.themeRamp;
  var updatedCustomThemeTokenMap = {};
  var brandTokens = Object.keys(customThemeTokenMap);
  additionalChecks.forEach(function (pairing) {
    var backgroundLight = pairing.backgroundLight,
      backgroundDark = pairing.backgroundDark,
      foreground = pairing.foreground,
      desiredContrast = pairing.desiredContrast,
      updatedTokens = pairing.updatedTokens;
    var background = mode === 'light' ? backgroundLight : backgroundDark;
    var foregroundTokenValue = customThemeTokenMap[foreground];
    var backgroundTokenValue = customThemeTokenMap[background];
    var foregroundColor = brandTokens.includes(foreground) ? typeof foregroundTokenValue === 'string' ? foregroundTokenValue : themeRamp[foregroundTokenValue] : getColorFromTokenRaw(foreground, mode);
    var backgroundColor = brandTokens.includes(background) ? typeof backgroundTokenValue === 'string' ? backgroundTokenValue : themeRamp[backgroundTokenValue] : getColorFromTokenRaw(background, mode);
    var contrast = Object(_color_utils__WEBPACK_IMPORTED_MODULE_2__["getContrastRatio"])(foregroundColor, backgroundColor);
    if (contrast <= desiredContrast) {
      updatedTokens.forEach(function (token) {
        var rampValue = customThemeTokenMap[token];
        if (typeof rampValue === 'number') {
          updatedCustomThemeTokenMap[token] = mode === 'light' ? rampValue + 1 : rampValue - 1;
        }
      });
    }
  });
  return updatedCustomThemeTokenMap;
};

/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/utils/generate-custom-color-ramp.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/utils/generate-custom-color-ramp.js ***!
  \************************************************************************************/
/*! exports provided: getClosestColorIndex, generateColors, generateTokenMap, generateTokenMapWithContrastCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestColorIndex", function() { return getClosestColorIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateColors", function() { return generateColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTokenMap", function() { return generateTokenMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTokenMapWithContrastCheck", function() { return generateTokenMapWithContrastCheck; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _artifacts_atlassian_dark_token_value_for_contrast_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/atlassian-dark-token-value-for-contrast-check */ "./node_modules/@atlaskit/tokens/dist/esm/artifacts/atlassian-dark-token-value-for-contrast-check.js");
/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/color-utils.js");
/* harmony import */ var _custom_theme_token_contrast_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-theme-token-contrast-check */ "./node_modules/@atlaskit/tokens/dist/esm/utils/custom-theme-token-contrast-check.js");
/* harmony import */ var _hct_color_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hct-color-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/index.js");



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var lowLuminanceContrastRatios = [1.12, 1.33, 2.03, 2.73, 3.33, 4.27, 5.2, 6.62, 12.46, 14.25];
var highLuminanceContrastRatios = [1.08, 1.24, 1.55, 1.99, 2.45, 3.34, 4.64, 6.1, 10.19, 12.6];
var getClosestColorIndex = function getClosestColorIndex(themeRamp, brandColor) {
  // Iterate over themeRamp and find whichever color is closest to brandColor
  var closestColorIndex = 0;
  var closestColorDistance = null;
  themeRamp.forEach(function (value, index) {
    var distance = Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["deltaE"])(Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["hexToRgb"])(value), Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["hexToRgb"])(brandColor));
    if (closestColorDistance === null || distance < closestColorDistance) {
      closestColorIndex = index;
      closestColorDistance = distance;
    }
  });
  return closestColorIndex;
};
var generateColors = function generateColors(brandColor) {
  // Determine luminance
  var HSLBrandColorHue = Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["hexToHSL"])(brandColor)[0];
  var baseRgb = Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["HSLToRGB"])(HSLBrandColorHue, 100, 60);
  var isLowLuminance = Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["relativeLuminanceW3C"])(baseRgb[0], baseRgb[1], baseRgb[2]) < 0.4;
  // Choose right palette
  var themeRatios = isLowLuminance ? lowLuminanceContrastRatios : highLuminanceContrastRatios;
  var brandRgba = Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["hexToRgbA"])(brandColor);
  var hctColor = _hct_color_utils__WEBPACK_IMPORTED_MODULE_6__["Hct"].fromInt(Object(_hct_color_utils__WEBPACK_IMPORTED_MODULE_6__["argbFromRgba"])({
    r: brandRgba[0],
    g: brandRgba[1],
    b: brandRgba[2],
    a: brandRgba[3]
  }));
  var themeRamp = themeRatios.map(function (contrast) {
    var rgbaColor = Object(_hct_color_utils__WEBPACK_IMPORTED_MODULE_6__["rgbaFromArgb"])(_hct_color_utils__WEBPACK_IMPORTED_MODULE_6__["Hct"].from(hctColor.hue, hctColor.chroma, _hct_color_utils__WEBPACK_IMPORTED_MODULE_6__["Contrast"].darker(100, contrast) + 0.25 // Material's utils provide an offset
    ).toInt());
    return Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["rgbToHex"])(rgbaColor.r, rgbaColor.g, rgbaColor.b);
  });
  var closestColorIndex = getClosestColorIndex(themeRamp, brandColor);

  // Replace closet color with brandColor
  var updatedThemeRamp = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(themeRamp);
  updatedThemeRamp[closestColorIndex] = brandColor;
  return {
    ramp: updatedThemeRamp,
    // add the replaced color into the result
    replacedColor: themeRamp[closestColorIndex]
  };
};

/**
 * Return the interaction tokens for a color, given its ramp position and the number of
 * needed interaction states. Use higher-indexed colors (i.e. darker colors) if possible;
 * if there's not enough room to shift up for the required number of interaction tokens,
 * it goes as far as it can, then returns lighter colors lower down the ramp instead.
 *
 * Returns an array of the resulting colors
 */
function getInteractionStates(rampPosition, number, colors) {
  var result = [];
  for (var i = 1; i <= number; i++) {
    if (rampPosition + i < colors.length) {
      result.push(rampPosition + i);
    } else {
      result.push(rampPosition - (i - (colors.length - 1 - rampPosition)));
    }
  }
  return result;
}
var generateTokenMap = function generateTokenMap(brandColor, mode, themeRamp) {
  var _generateColors = generateColors(brandColor),
    ramp = _generateColors.ramp,
    replacedColor = _generateColors.replacedColor;
  var colors = themeRamp || ramp;
  var closestColorIndex = getClosestColorIndex(colors, brandColor);
  var customThemeTokenMapLight = {};
  var customThemeTokenMapDark = {};
  var inputContrast = Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["getContrastRatio"])(brandColor, '#FFFFFF');
  // Branch based on brandColor's contrast against white
  if (inputContrast >= 4.5) {
    /**
     * Generate interaction tokens for
     * - color.background.brand.bold
     * - color.background.selected.bold
     */
    var _getInteractionStates = getInteractionStates(closestColorIndex, 2, colors),
      _getInteractionStates2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_getInteractionStates, 2),
      brandBoldSelectedHoveredIndex = _getInteractionStates2[0],
      brandBoldSelectedPressedIndex = _getInteractionStates2[1];
    var brandTextIndex = closestColorIndex;
    if (inputContrast < 5.4 && inputContrast >= 4.8 && closestColorIndex === 6) {
      // Use the one-level darker closest color (X800) for color.text.brand
      // and color.link to avoid contrast breaches
      brandTextIndex = closestColorIndex + 1;
    }

    /**
     * Generate interaction token for color.link:
     * If inputted color replaces X1000
     * - Pressed = X900
     *
     * If inputted color replaces X700-X900
     * - Shift one 1 step darker
     */
    var _getInteractionStates3 = getInteractionStates(brandTextIndex, 1, colors),
      _getInteractionStates4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_getInteractionStates3, 1),
      linkPressed = _getInteractionStates4[0];
    customThemeTokenMapLight = {
      'color.text.brand': brandTextIndex,
      'color.icon.brand': closestColorIndex,
      'color.background.brand.subtlest': 0,
      'color.background.brand.subtlest.hovered': 1,
      'color.background.brand.subtlest.pressed': 2,
      'color.background.brand.bold': closestColorIndex,
      'color.background.brand.bold.hovered': brandBoldSelectedHoveredIndex,
      'color.background.brand.bold.pressed': brandBoldSelectedPressedIndex,
      'color.background.brand.boldest': 9,
      'color.background.brand.boldest.hovered': 8,
      'color.background.brand.boldest.pressed': 7,
      'color.border.brand': closestColorIndex,
      'color.text.selected': brandTextIndex,
      'color.icon.selected': closestColorIndex,
      'color.background.selected.bold': closestColorIndex,
      'color.background.selected.bold.hovered': brandBoldSelectedHoveredIndex,
      'color.background.selected.bold.pressed': brandBoldSelectedPressedIndex,
      'color.border.selected': closestColorIndex,
      'color.link': brandTextIndex,
      'color.link.pressed': linkPressed,
      'color.chart.brand': 5,
      'color.chart.brand.hovered': 6,
      'color.background.selected': 0,
      'color.background.selected.hovered': 1,
      'color.background.selected.pressed': 2
    };
  } else {
    var brandBackgroundIndex = 6;
    if (inputContrast < 4.5 && inputContrast >= 4 && closestColorIndex === 6) {
      // Use the generated closest color instead of the input brand color for
      // color.background.selected.bold and color.background.brand.bold
      // to avoid contrast breaches
      brandBackgroundIndex = replacedColor;
    }
    customThemeTokenMapLight = {
      'color.background.brand.subtlest': 0,
      'color.background.brand.subtlest.hovered': 1,
      'color.background.brand.subtlest.pressed': 2,
      'color.background.brand.bold': brandBackgroundIndex,
      'color.background.brand.bold.hovered': 7,
      'color.background.brand.bold.pressed': 8,
      'color.background.brand.boldest': 9,
      'color.background.brand.boldest.hovered': 8,
      'color.background.brand.boldest.pressed': 7,
      'color.border.brand': 6,
      'color.background.selected.bold': brandBackgroundIndex,
      'color.background.selected.bold.hovered': 7,
      'color.background.selected.bold.pressed': 8,
      'color.text.brand': 6,
      'color.icon.brand': 6,
      'color.chart.brand': 5,
      'color.chart.brand.hovered': 6,
      'color.text.selected': 6,
      'color.icon.selected': 6,
      'color.border.selected': 6,
      'color.background.selected': 0,
      'color.background.selected.hovered': 1,
      'color.background.selected.pressed': 2,
      'color.link': 6,
      'color.link.pressed': 7
    };
  }
  if (mode === 'light') {
    return {
      light: customThemeTokenMapLight
    };
  }

  /**
   * Generate dark mode values using rule of symmetry
   */
  Object.entries(customThemeTokenMapLight).forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    customThemeTokenMapDark[key] = 9 - (typeof value === 'string' ? closestColorIndex : value);
  });

  /**
   * If the input brand color < 4.5, and it meets 4.5 contrast again inverse text color
   * in dark mode, shift color.background.brand.bold to the brand color
   */
  if (inputContrast < 4.5) {
    var inverseTextColor = _artifacts_atlassian_dark_token_value_for_contrast_check__WEBPACK_IMPORTED_MODULE_3__["default"]['color.text.inverse'];
    if (Object(_color_utils__WEBPACK_IMPORTED_MODULE_4__["getContrastRatio"])(inverseTextColor, brandColor) >= 4.5 && closestColorIndex >= 2) {
      customThemeTokenMapDark['color.background.brand.bold'] = closestColorIndex;
      customThemeTokenMapDark['color.background.brand.bold.hovered'] = closestColorIndex - 1;
      customThemeTokenMapDark['color.background.brand.bold.pressed'] = closestColorIndex - 2;
    }
  }
  if (mode === 'dark') {
    return {
      dark: customThemeTokenMapDark
    };
  }
  return {
    light: customThemeTokenMapLight,
    dark: customThemeTokenMapDark
  };
};
var generateTokenMapWithContrastCheck = function generateTokenMapWithContrastCheck(brandColor, mode, themeRamp) {
  var colors = themeRamp || generateColors(brandColor).ramp;
  var tokenMaps = generateTokenMap(brandColor, mode, colors);
  var result = {};
  Object.entries(tokenMaps).forEach(function (_ref3) {
    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
      mode = _ref4[0],
      map = _ref4[1];
    if (mode === 'light' || mode === 'dark') {
      result[mode] = _objectSpread(_objectSpread({}, map), Object(_custom_theme_token_contrast_check__WEBPACK_IMPORTED_MODULE_5__["additionalContrastChecker"])({
        customThemeTokenMap: map,
        mode: mode,
        themeRamp: colors
      }));
    }
  });
  return result;
};

/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/color-utils.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/color-utils.js ***!
  \*************************************************************************************/
/*! exports provided: argbFromRgb, argbFromLinrgb, alphaFromArgb, redFromArgb, greenFromArgb, blueFromArgb, isOpaque, argbFromXyz, xyzFromArgb, argbFromLstar, lstarFromArgb, yFromLstar, lstarFromY, linearized, delinearized, whitePointD65, rgbaFromArgb, argbFromRgba */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromRgb", function() { return argbFromRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromLinrgb", function() { return argbFromLinrgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaFromArgb", function() { return alphaFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redFromArgb", function() { return redFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenFromArgb", function() { return greenFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueFromArgb", function() { return blueFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpaque", function() { return isOpaque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromXyz", function() { return argbFromXyz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xyzFromArgb", function() { return xyzFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromLstar", function() { return argbFromLstar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lstarFromArgb", function() { return lstarFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yFromLstar", function() { return yFromLstar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lstarFromY", function() { return lstarFromY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearized", function() { return linearized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delinearized", function() { return delinearized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitePointD65", function() { return whitePointD65; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaFromArgb", function() { return rgbaFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromRgba", function() { return argbFromRgba; });
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/math-utils.js");
/**
 * Below lines are copied from @material/material-color-utilities.
 * Do not modify it.
 */

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This file is automatically generated. Do not modify it.



/**
 * Color science utilities.
 *
 * Utility methods for color science constants and color space
 * conversions that aren't HCT or CAM16.
 */

var SRGB_TO_XYZ = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]];
var XYZ_TO_SRGB = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]];
var WHITE_POINT_D65 = [95.047, 100.0, 108.883];

/**
 * Converts a color from RGB components to ARGB format.
 */
function argbFromRgb(red, green, blue) {
  return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
}

/**
 * Converts a color from linear RGB components to ARGB format.
 */
function argbFromLinrgb(linrgb) {
  var r = delinearized(linrgb[0]);
  var g = delinearized(linrgb[1]);
  var b = delinearized(linrgb[2]);
  return argbFromRgb(r, g, b);
}

/**
 * Returns the alpha component of a color in ARGB format.
 */
function alphaFromArgb(argb) {
  return argb >> 24 & 255;
}

/**
 * Returns the red component of a color in ARGB format.
 */
function redFromArgb(argb) {
  return argb >> 16 & 255;
}

/**
 * Returns the green component of a color in ARGB format.
 */
function greenFromArgb(argb) {
  return argb >> 8 & 255;
}

/**
 * Returns the blue component of a color in ARGB format.
 */
function blueFromArgb(argb) {
  return argb & 255;
}

/**
 * Returns whether a color in ARGB format is opaque.
 */
function isOpaque(argb) {
  return alphaFromArgb(argb) >= 255;
}

/**
 * Converts a color from ARGB to XYZ.
 */
function argbFromXyz(x, y, z) {
  var matrix = XYZ_TO_SRGB;
  var linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
  var linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
  var linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
  var r = delinearized(linearR);
  var g = delinearized(linearG);
  var b = delinearized(linearB);
  return argbFromRgb(r, g, b);
}

/**
 * Converts a color from XYZ to ARGB.
 */
function xyzFromArgb(argb) {
  var r = linearized(redFromArgb(argb));
  var g = linearized(greenFromArgb(argb));
  var b = linearized(blueFromArgb(argb));
  return _math_utils__WEBPACK_IMPORTED_MODULE_0__["matrixMultiply"]([r, g, b], SRGB_TO_XYZ);
}

/**
 * Converts an L* value to an ARGB representation.
 *
 * @param lstar L* in L*a*b*
 * @return ARGB representation of grayscale color with lightness
 * matching L*
 */
function argbFromLstar(lstar) {
  var y = yFromLstar(lstar);
  var component = delinearized(y);
  return argbFromRgb(component, component, component);
}

/**
 * Computes the L* value of a color in ARGB representation.
 *
 * @param argb ARGB representation of a color
 * @return L*, from L*a*b*, coordinate of the color
 */
function lstarFromArgb(argb) {
  var y = xyzFromArgb(argb)[1];
  return 116.0 * labF(y / 100.0) - 16.0;
}

/**
 * Converts an L* value to a Y value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param lstar L* in L*a*b*
 * @return Y in XYZ
 */
function yFromLstar(lstar) {
  return 100.0 * labInvf((lstar + 16.0) / 116.0);
}

/**
 * Converts a Y value to an L* value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param y Y in XYZ
 * @return L* in L*a*b*
 */
function lstarFromY(y) {
  return labF(y / 100.0) * 116.0 - 16.0;
}

/**
 * Linearizes an RGB component.
 *
 * @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
 * channel
 * @return 0.0 <= output <= 100.0, color channel converted to
 * linear RGB space
 */
function linearized(rgbComponent) {
  var normalized = rgbComponent / 255.0;
  if (normalized <= 0.040449936) {
    return normalized / 12.92 * 100.0;
  } else {
    return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100.0;
  }
}

/**
 * Delinearizes an RGB component.
 *
 * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
 * linear R/G/B channel
 * @return 0 <= output <= 255, color channel converted to regular
 * RGB space
 */
function delinearized(rgbComponent) {
  var normalized = rgbComponent / 100.0;
  var delinearized = 0.0;
  if (normalized <= 0.0031308) {
    delinearized = normalized * 12.92;
  } else {
    delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
  }
  return _math_utils__WEBPACK_IMPORTED_MODULE_0__["clampInt"](0, 255, Math.round(delinearized * 255.0));
}

/**
 * Returns the standard white point; white on a sunny day.
 *
 * @return The white point
 */
function whitePointD65() {
  return WHITE_POINT_D65;
}

/**
 * RGBA component
 *
 * @param r Red value should be between 0-255
 * @param g Green value should be between 0-255
 * @param b Blue value should be between 0-255
 * @param a Alpha value should be between 0-255
 */

/**
 * Return RGBA from a given int32 color
 *
 * @param argb ARGB representation of a int32 color.
 * @return RGBA representation of a int32 color.
 */
function rgbaFromArgb(argb) {
  var r = redFromArgb(argb);
  var g = greenFromArgb(argb);
  var b = blueFromArgb(argb);
  var a = alphaFromArgb(argb);
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}

/**
 * Return int32 color from a given RGBA component
 *
 * @param rgba RGBA representation of a int32 color.
 * @returns ARGB representation of a int32 color.
 */
function argbFromRgba(_ref) {
  var r = _ref.r,
    g = _ref.g,
    b = _ref.b,
    a = _ref.a;
  var rValue = clampComponent(r);
  var gValue = clampComponent(g);
  var bValue = clampComponent(b);
  var aValue = clampComponent(a);
  return aValue << 24 | rValue << 16 | gValue << 8 | bValue;
}
function clampComponent(value) {
  if (value < 0) {
    return 0;
  }
  if (value > 255) {
    return 255;
  }
  return value;
}
function labF(t) {
  var e = 216.0 / 24389.0;
  var kappa = 24389.0 / 27.0;
  if (t > e) {
    return Math.pow(t, 1.0 / 3.0);
  } else {
    return (kappa * t + 16) / 116;
  }
}
function labInvf(ft) {
  var e = 216.0 / 24389.0;
  var kappa = 24389.0 / 27.0;
  var ft3 = ft * ft * ft;
  if (ft3 > e) {
    return ft3;
  } else {
    return (116 * ft - 16) / kappa;
  }
}

/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/contrast.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/contrast.js ***!
  \**********************************************************************************/
/*! exports provided: Contrast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contrast", function() { return Contrast; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/color-utils.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/math-utils.js");


/**
 * Below lines are copied from @material/material-color-utilities.
 * Do not modify it.
 */

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace




/**
 * Utility methods for calculating contrast given two colors, or calculating a
 * color given one color and a contrast ratio.
 *
 * Contrast ratio is calculated using XYZ's Y. When linearized to match human
 * perception, Y becomes HCT's tone and L*a*b*'s' L*. Informally, this is the
 * lightness of a color.
 *
 * Methods refer to tone, T in the the HCT color space.
 * Tone is equivalent to L* in the L*a*b* color space, or L in the LCH color
 * space.
 */
var Contrast = /*#__PURE__*/function () {
  function Contrast() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Contrast);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Contrast, null, [{
    key: "ratioOfTones",
    value:
    /**
     * Returns a contrast ratio, which ranges from 1 to 21.
     *
     * @param toneA Tone between 0 and 100. Values outside will be clamped.
     * @param toneB Tone between 0 and 100. Values outside will be clamped.
     */
    function ratioOfTones(toneA, toneB) {
      toneA = _math_utils__WEBPACK_IMPORTED_MODULE_3__["clampDouble"](0.0, 100.0, toneA);
      toneB = _math_utils__WEBPACK_IMPORTED_MODULE_3__["clampDouble"](0.0, 100.0, toneB);
      return Contrast.ratioOfYs(_color_utils__WEBPACK_IMPORTED_MODULE_2__["yFromLstar"](toneA), _color_utils__WEBPACK_IMPORTED_MODULE_2__["yFromLstar"](toneB));
    }
  }, {
    key: "ratioOfYs",
    value: function ratioOfYs(y1, y2) {
      var lighter = y1 > y2 ? y1 : y2;
      var darker = lighter === y2 ? y1 : y2;
      return (lighter + 5.0) / (darker + 5.0);
    }

    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns -1 if ratio cannot be achieved with tone parameter.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in -1 being returned.
     * @param ratio Contrast ratio of return value and tone.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
  }, {
    key: "lighter",
    value: function lighter(tone, ratio) {
      if (tone < 0.0 || tone > 100.0) {
        return -1.0;
      }
      var darkY = _color_utils__WEBPACK_IMPORTED_MODULE_2__["yFromLstar"](tone);
      var lightY = ratio * (darkY + 5.0) - 5.0;
      var realContrast = Contrast.ratioOfYs(lightY, darkY);
      var delta = Math.abs(realContrast - ratio);
      if (realContrast < ratio && delta > 0.04) {
        return -1;
      }

      // Ensure gamut mapping, which requires a 'range' on tone, will still result
      // the correct ratio by darkening slightly.
      var returnValue = _color_utils__WEBPACK_IMPORTED_MODULE_2__["lstarFromY"](lightY) + 0.4;
      if (returnValue < 0 || returnValue > 100) {
        return -1;
      }
      return returnValue;
    }

    /**
     * Returns a tone <= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns -1 if ratio cannot be achieved with tone parameter.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in -1 being returned.
     * @param ratio Contrast ratio of return value and tone.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
  }, {
    key: "darker",
    value: function darker(tone, ratio) {
      if (tone < 0.0 || tone > 100.0) {
        return -1.0;
      }
      var lightY = _color_utils__WEBPACK_IMPORTED_MODULE_2__["yFromLstar"](tone);
      var darkY = (lightY + 5.0) / ratio - 5.0;
      var realContrast = Contrast.ratioOfYs(lightY, darkY);
      var delta = Math.abs(realContrast - ratio);
      if (realContrast < ratio && delta > 0.04) {
        return -1;
      }

      // Ensure gamut mapping, which requires a 'range' on tone, will still result
      // the correct ratio by darkening slightly.
      var returnValue = _color_utils__WEBPACK_IMPORTED_MODULE_2__["lstarFromY"](darkY) - 0.4;
      if (returnValue < 0 || returnValue > 100) {
        return -1;
      }
      return returnValue;
    }

    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns 100 if ratio cannot be achieved with tone parameter.
     *
     * This method is unsafe because the returned value is guaranteed to be in
     * bounds for tone, i.e. between 0 and 100. However, that value may not reach
     * the ratio with tone. For example, there is no color lighter than T100.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in 100 being returned.
     * @param ratio Desired contrast ratio of return value and tone parameter.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
  }, {
    key: "lighterUnsafe",
    value: function lighterUnsafe(tone, ratio) {
      var lighterSafe = Contrast.lighter(tone, ratio);
      return lighterSafe < 0.0 ? 100.0 : lighterSafe;
    }

    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns 100 if ratio cannot be achieved with tone parameter.
     *
     * This method is unsafe because the returned value is guaranteed to be in
     * bounds for tone, i.e. between 0 and 100. However, that value may not reach
     * the [ratio with [tone]. For example, there is no color darker than T0.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in 0 being returned.
     * @param ratio Desired contrast ratio of return value and tone parameter.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
  }, {
    key: "darkerUnsafe",
    value: function darkerUnsafe(tone, ratio) {
      var darkerSafe = Contrast.darker(tone, ratio);
      return darkerSafe < 0.0 ? 0.0 : darkerSafe;
    }
  }]);
  return Contrast;
}();

/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/hct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/hct.js ***!
  \*****************************************************************************/
/*! exports provided: Hct, ViewingConditions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hct", function() { return Hct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewingConditions", function() { return ViewingConditions; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/color-utils.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/math-utils.js");



var _class2;
/**
 * Below lines are copied from @material/material-color-utilities.
 * Do not modify it.
 */

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * A color system built using CAM16 hue and chroma, and L* from
 * L*a*b*.
 *
 * Using L* creates a link between the color system, contrast, and thus
 * accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
 * color space. L*, or perceptual luminance can be calculated from Y.
 *
 * Unlike Y, L* is linear to human perception, allowing trivial creation of
 * accurate color tones.
 *
 * Unlike contrast ratio, measuring contrast in L* is linear, and simple to
 * calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
 * and a difference of 50 guarantees a contrast ratio >= 4.5.
 */

/**
 * HCT, hue, chroma, and tone. A color system that provides a perceptually
 * accurate color measurement system that can also accurately render what colors
 * will appear as in different lighting environments.
 */
var Hct = /*#__PURE__*/function () {
  function Hct(argb) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Hct);
    this.argb = argb;
    var cam = Cam16.fromInt(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = _color_utils__WEBPACK_IMPORTED_MODULE_3__["lstarFromArgb"](argb);
    this.argb = argb;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Hct, [{
    key: "toInt",
    value: function toInt() {
      return this.argb;
    }

    /**
     * A number, in degrees, representing ex. red, orange, yellow, etc.
     * Ranges from 0 <= hue < 360.
     */
  }, {
    key: "hue",
    get: function get() {
      return this.internalHue;
    }

    /**
     * @param newHue 0 <= newHue < 360; invalid values are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */,
    set: function set(newHue) {
      this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
    }
  }, {
    key: "chroma",
    get: function get() {
      return this.internalChroma;
    }

    /**
     * @param newChroma 0 <= newChroma < ?
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */,
    set: function set(newChroma) {
      this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
    }

    /**
     * Lightness. Ranges from 0 to 100.
     */
  }, {
    key: "tone",
    get: function get() {
      return this.internalTone;
    }

    /**
     * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */,
    set: function set(newTone) {
      this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
    }
  }, {
    key: "setInternalState",
    value: function setInternalState(argb) {
      var cam = Cam16.fromInt(argb);
      this.internalHue = cam.hue;
      this.internalChroma = cam.chroma;
      this.internalTone = _color_utils__WEBPACK_IMPORTED_MODULE_3__["lstarFromArgb"](argb);
      this.argb = argb;
    }

    /**
     * Translates a color into different [ViewingConditions].
     *
     * Colors change appearance. They look different with lights on versus off,
     * the same color, as in hex code, on white looks different when on black.
     * This is called color relativity, most famously explicated by Josef Albers
     * in Interaction of Color.
     *
     * In color science, color appearance models can account for this and
     * calculate the appearance of a color in different settings. HCT is based on
     * CAM16, a color appearance model, and uses it to make these calculations.
     *
     * See [ViewingConditions.make] for parameters affecting color appearance.
     */
  }, {
    key: "inViewingConditions",
    value: function inViewingConditions(vc) {
      // 1. Use CAM16 to find XYZ coordinates of color in specified VC.
      var cam = Cam16.fromInt(this.toInt());
      var viewedInVc = cam.xyzInViewingConditions(vc);

      // 2. Create CAM16 of those XYZ coordinates in default VC.
      var recastInVc = Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], ViewingConditions.make());

      // 3. Create HCT from:
      // - CAM16 using default VC with XYZ coordinates in specified VC.
      // - L* converted from Y in XYZ coordinates in specified VC.
      var recastHct = Hct.from(recastInVc.hue, recastInVc.chroma, _color_utils__WEBPACK_IMPORTED_MODULE_3__["lstarFromY"](viewedInVc[1]));
      return recastHct;
    }
  }], [{
    key: "from",
    value:
    /**
     * @param hue 0 <= hue < 360; invalid values are corrected.
     * @param chroma 0 <= chroma < ?; Informally, colorfulness. The color
     *     returned may be lower than the requested chroma. Chroma has a different
     *     maximum for any given hue and tone.
     * @param tone 0 <= tone <= 100; invalid values are corrected.
     * @return HCT representation of a color in default viewing conditions.
     */

    function from(hue, chroma, tone) {
      return new Hct(HctSolver.solveToInt(hue, chroma, tone));
    }

    /**
     * @param argb ARGB representation of a color.
     * @return HCT representation of a color in default viewing conditions
     */
  }, {
    key: "fromInt",
    value: function fromInt(argb) {
      return new Hct(argb);
    }
  }]);
  return Hct;
}();

/**
 * CAM16, a color appearance model. Colors are not just defined by their hex
 * code, but rather, a hex code and viewing conditions.
 *
 * CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
 * b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
 * specification, and should be used when measuring distances between colors.
 *
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 */
var Cam16 = /*#__PURE__*/function () {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  function Cam16(hue, chroma, j, q, m, s, jstar, astar, bstar) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Cam16);
    this.hue = hue;
    this.chroma = chroma;
    this.j = j;
    this.q = q;
    this.m = m;
    this.s = s;
    this.jstar = jstar;
    this.astar = astar;
    this.bstar = bstar;
  }

  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Cam16, [{
    key: "distance",
    value: function distance(other) {
      var dJ = this.jstar - other.jstar;
      var dA = this.astar - other.astar;
      var dB = this.bstar - other.bstar;
      var dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
      var dE = 1.41 * Math.pow(dEPrime, 0.63);
      return dE;
    }

    /**
     * @param argb ARGB representation of a color.
     * @return CAM16 color, assuming the color was viewed in default viewing
     *     conditions.
     */
  }, {
    key: "toInt",
    value:
    /**
     *  @return ARGB representation of color, assuming the color was viewed in
     *     default viewing conditions, which are near-identical to the default
     *     viewing conditions for sRGB.
     */
    function toInt() {
      return this.viewed(ViewingConditions.DEFAULT);
    }

    /**
     * @param viewingConditions Information about the environment where the color
     *     will be viewed.
     * @return ARGB representation of color
     */
  }, {
    key: "viewed",
    value: function viewed(viewingConditions) {
      var alpha = this.chroma === 0.0 || this.j === 0.0 ? 0.0 : this.chroma / Math.sqrt(this.j / 100.0);
      var t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
      var hRad = this.hue * Math.PI / 180.0;
      var eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
      var ac = viewingConditions.aw * Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
      var p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
      var p2 = ac / viewingConditions.nbb;
      var hSin = Math.sin(hRad);
      var hCos = Math.cos(hRad);
      var gamma = 23.0 * (p2 + 0.305) * t / (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);
      var a = gamma * hCos;
      var b = gamma * hSin;
      var rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
      var gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
      var bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
      var rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400.0 - Math.abs(rA)));
      var rC = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](rA) * (100.0 / viewingConditions.fl) * Math.pow(rCBase, 1.0 / 0.42);
      var gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400.0 - Math.abs(gA)));
      var gC = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](gA) * (100.0 / viewingConditions.fl) * Math.pow(gCBase, 1.0 / 0.42);
      var bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400.0 - Math.abs(bA)));
      var bC = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](bA) * (100.0 / viewingConditions.fl) * Math.pow(bCBase, 1.0 / 0.42);
      var rF = rC / viewingConditions.rgbD[0];
      var gF = gC / viewingConditions.rgbD[1];
      var bF = bC / viewingConditions.rgbD[2];
      var x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
      var y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
      var z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
      var argb = _color_utils__WEBPACK_IMPORTED_MODULE_3__["argbFromXyz"](x, y, z);
      return argb;
    }

    /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
    /// CAM16.
  }, {
    key: "xyzInViewingConditions",
    value:
    /// XYZ representation of CAM16 seen in [viewingConditions].
    function xyzInViewingConditions(viewingConditions) {
      var alpha = this.chroma === 0.0 || this.j === 0.0 ? 0.0 : this.chroma / Math.sqrt(this.j / 100.0);
      var t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
      var hRad = this.hue * Math.PI / 180.0;
      var eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
      var ac = viewingConditions.aw * Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
      var p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
      var p2 = ac / viewingConditions.nbb;
      var hSin = Math.sin(hRad);
      var hCos = Math.cos(hRad);
      var gamma = 23.0 * (p2 + 0.305) * t / (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
      var a = gamma * hCos;
      var b = gamma * hSin;
      var rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
      var gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
      var bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
      var rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400.0 - Math.abs(rA)));
      var rC = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](rA) * (100.0 / viewingConditions.fl) * Math.pow(rCBase, 1.0 / 0.42);
      var gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400.0 - Math.abs(gA)));
      var gC = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](gA) * (100.0 / viewingConditions.fl) * Math.pow(gCBase, 1.0 / 0.42);
      var bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400.0 - Math.abs(bA)));
      var bC = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](bA) * (100.0 / viewingConditions.fl) * Math.pow(bCBase, 1.0 / 0.42);
      var rF = rC / viewingConditions.rgbD[0];
      var gF = gC / viewingConditions.rgbD[1];
      var bF = bC / viewingConditions.rgbD[2];
      var x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
      var y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
      var z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
      return [x, y, z];
    }
  }], [{
    key: "fromInt",
    value: function fromInt(argb) {
      return Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT);
    }

    /**
     * @param argb ARGB representation of a color.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     * @return CAM16 color.
     */
  }, {
    key: "fromIntInViewingConditions",
    value: function fromIntInViewingConditions(argb, viewingConditions) {
      var red = (argb & 0x00ff0000) >> 16;
      var green = (argb & 0x0000ff00) >> 8;
      var blue = argb & 0x000000ff;
      var redL = _color_utils__WEBPACK_IMPORTED_MODULE_3__["linearized"](red);
      var greenL = _color_utils__WEBPACK_IMPORTED_MODULE_3__["linearized"](green);
      var blueL = _color_utils__WEBPACK_IMPORTED_MODULE_3__["linearized"](blue);
      var x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
      var y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
      var z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
      var rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
      var gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
      var bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
      var rD = viewingConditions.rgbD[0] * rC;
      var gD = viewingConditions.rgbD[1] * gC;
      var bD = viewingConditions.rgbD[2] * bC;
      var rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100.0, 0.42);
      var gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100.0, 0.42);
      var bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100.0, 0.42);
      var rA = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](rD) * 400.0 * rAF / (rAF + 27.13);
      var gA = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](gD) * 400.0 * gAF / (gAF + 27.13);
      var bA = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](bD) * 400.0 * bAF / (bAF + 27.13);
      var a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
      var b = (rA + gA - 2.0 * bA) / 9.0;
      var u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
      var p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
      var atan2 = Math.atan2(b, a);
      var atanDegrees = atan2 * 180.0 / Math.PI;
      var hue = atanDegrees < 0 ? atanDegrees + 360.0 : atanDegrees >= 360 ? atanDegrees - 360.0 : atanDegrees;
      var hueRadians = hue * Math.PI / 180.0;
      var ac = p2 * viewingConditions.nbb;
      var j = 100.0 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
      var q = 4.0 / viewingConditions.c * Math.sqrt(j / 100.0) * (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
      var huePrime = hue < 20.14 ? hue + 360 : hue;
      var eHue = 0.25 * (Math.cos(huePrime * Math.PI / 180.0 + 2.0) + 3.8);
      var p1 = 50000.0 / 13.0 * eHue * viewingConditions.nc * viewingConditions.ncb;
      var t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
      var alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
      var c = alpha * Math.sqrt(j / 100.0);
      var m = c * viewingConditions.fLRoot;
      var s = 50.0 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4.0));
      var jstar = (1.0 + 100.0 * 0.007) * j / (1.0 + 0.007 * j);
      var mstar = 1.0 / 0.0228 * Math.log(1.0 + 0.0228 * m);
      var astar = mstar * Math.cos(hueRadians);
      var bstar = mstar * Math.sin(hueRadians);
      return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
    }

    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     */
  }, {
    key: "fromJch",
    value: function fromJch(j, c, h) {
      return Cam16.fromJchInViewingConditions(j, c, h, ViewingConditions.DEFAULT);
    }

    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
  }, {
    key: "fromJchInViewingConditions",
    value: function fromJchInViewingConditions(j, c, h, viewingConditions) {
      var q = 4.0 / viewingConditions.c * Math.sqrt(j / 100.0) * (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
      var m = c * viewingConditions.fLRoot;
      var alpha = c / Math.sqrt(j / 100.0);
      var s = 50.0 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4.0));
      var hueRadians = h * Math.PI / 180.0;
      var jstar = (1.0 + 100.0 * 0.007) * j / (1.0 + 0.007 * j);
      var mstar = 1.0 / 0.0228 * Math.log(1.0 + 0.0228 * m);
      var astar = mstar * Math.cos(hueRadians);
      var bstar = mstar * Math.sin(hueRadians);
      return new Cam16(h, c, j, q, m, s, jstar, astar, bstar);
    }

    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     */
  }, {
    key: "fromUcs",
    value: function fromUcs(jstar, astar, bstar) {
      return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
    }

    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
  }, {
    key: "fromUcsInViewingConditions",
    value: function fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
      var a = astar;
      var b = bstar;
      var m = Math.sqrt(a * a + b * b);
      var M = (Math.exp(m * 0.0228) - 1.0) / 0.0228;
      var c = M / viewingConditions.fLRoot;
      var h = Math.atan2(b, a) * (180.0 / Math.PI);
      if (h < 0.0) {
        h += 360.0;
      }
      var j = jstar / (1 - (jstar - 100) * 0.007);
      return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
    }
  }, {
    key: "fromXyzInViewingConditions",
    value: function fromXyzInViewingConditions(x, y, z, viewingConditions) {
      // Transform XYZ to 'cone'/'rgb' responses

      var rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
      var gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
      var bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;

      // Discount illuminant
      var rD = viewingConditions.rgbD[0] * rC;
      var gD = viewingConditions.rgbD[1] * gC;
      var bD = viewingConditions.rgbD[2] * bC;

      // chromatic adaptation
      var rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100.0, 0.42);
      var gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100.0, 0.42);
      var bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100.0, 0.42);
      var rA = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](rD) * 400.0 * rAF / (rAF + 27.13);
      var gA = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](gD) * 400.0 * gAF / (gAF + 27.13);
      var bA = _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](bD) * 400.0 * bAF / (bAF + 27.13);

      // redness-greenness
      var a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
      // yellowness-blueness
      var b = (rA + gA - 2.0 * bA) / 9.0;

      // auxiliary components
      var u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
      var p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;

      // hue
      var atan2 = Math.atan2(b, a);
      var atanDegrees = atan2 * 180.0 / Math.PI;
      var hue = atanDegrees < 0 ? atanDegrees + 360.0 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
      var hueRadians = hue * Math.PI / 180.0;

      // achromatic response to color
      var ac = p2 * viewingConditions.nbb;

      // CAM16 lightness and brightness
      var J = 100.0 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
      var Q = 4.0 / viewingConditions.c * Math.sqrt(J / 100.0) * (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
      var huePrime = hue < 20.14 ? hue + 360 : hue;
      var eHue = 1.0 / 4.0 * (Math.cos(huePrime * Math.PI / 180.0 + 2.0) + 3.8);
      var p1 = 50000.0 / 13.0 * eHue * viewingConditions.nc * viewingConditions.ncb;
      var t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
      var alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
      // CAM16 chroma, colorfulness, chroma
      var C = alpha * Math.sqrt(J / 100.0);
      var M = C * viewingConditions.fLRoot;
      var s = 50.0 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4.0));

      // CAM16-UCS components
      var jstar = (1.0 + 100.0 * 0.007) * J / (1.0 + 0.007 * J);
      var mstar = Math.log(1.0 + 0.0228 * M) / 0.0228;
      var astar = mstar * Math.cos(hueRadians);
      var bstar = mstar * Math.sin(hueRadians);
      return new Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
    }
  }]);
  return Cam16;
}(); // This file is automatically generated. Do not modify it.
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * A class that solves the HCT equation.
 */
var HctSolver = /*#__PURE__*/function () {
  function HctSolver() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HctSolver);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HctSolver, null, [{
    key: "sanitizeRadians",
    value:
    /**
     * Sanitizes a small enough angle in radians.
     *
     * @param angle An angle in radians; must not deviate too much
     * from 0.
     * @return A coterminal angle between 0 and 2pi.
     */
    function sanitizeRadians(angle) {
      return (angle + Math.PI * 8) % (Math.PI * 2);
    }

    /**
     * Delinearizes an RGB component, returning a floating-point
     * number.
     *
     * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
     * linear R/G/B channel
     * @return 0.0 <= output <= 255.0, color channel converted to
     * regular RGB space
     */
  }, {
    key: "trueDelinearized",
    value: function trueDelinearized(rgbComponent) {
      var normalized = rgbComponent / 100.0;
      var delinearized = 0.0;
      if (normalized <= 0.0031308) {
        delinearized = normalized * 12.92;
      } else {
        delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
      }
      return delinearized * 255.0;
    }
  }, {
    key: "chromaticAdaptation",
    value: function chromaticAdaptation(component) {
      var af = Math.pow(Math.abs(component), 0.42);
      return _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](component) * 400.0 * af / (af + 27.13);
    }

    /**
     * Returns the hue of a linear RGB color in CAM16.
     *
     * @param linrgb The linear RGB coordinates of a color.
     * @return The hue of the color in CAM16, in radians.
     */
  }, {
    key: "hueOf",
    value: function hueOf(linrgb) {
      var scaledDiscount = _math_utils__WEBPACK_IMPORTED_MODULE_4__["matrixMultiply"](linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
      var rA = HctSolver.chromaticAdaptation(scaledDiscount[0]);
      var gA = HctSolver.chromaticAdaptation(scaledDiscount[1]);
      var bA = HctSolver.chromaticAdaptation(scaledDiscount[2]);
      // redness-greenness
      var a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
      // yellowness-blueness
      var b = (rA + gA - 2.0 * bA) / 9.0;
      return Math.atan2(b, a);
    }
  }, {
    key: "areInCyclicOrder",
    value: function areInCyclicOrder(a, b, c) {
      var deltaAB = HctSolver.sanitizeRadians(b - a);
      var deltaAC = HctSolver.sanitizeRadians(c - a);
      return deltaAB < deltaAC;
    }

    /**
     * Solves the lerp equation.
     *
     * @param source The starting number.
     * @param mid The number in the middle.
     * @param target The ending number.
     * @return A number t such that lerp(source, target, t) = mid.
     */
  }, {
    key: "intercept",
    value: function intercept(source, mid, target) {
      return (mid - source) / (target - source);
    }
  }, {
    key: "lerpPoint",
    value: function lerpPoint(source, t, target) {
      return [source[0] + (target[0] - source[0]) * t, source[1] + (target[1] - source[1]) * t, source[2] + (target[2] - source[2]) * t];
    }

    /**
     * Intersects a segment with a plane.
     *
     * @param source The coordinates of point A.
     * @param coordinate The R-, G-, or B-coordinate of the plane.
     * @param target The coordinates of point B.
     * @param axis The axis the plane is perpendicular with. (0: R, 1:
     * G, 2: B)
     * @return The intersection point of the segment AB with the plane
     * R=coordinate, G=coordinate, or B=coordinate
     */
  }, {
    key: "setCoordinate",
    value: function setCoordinate(source, coordinate, target, axis) {
      var t = HctSolver.intercept(source[axis], coordinate, target[axis]);
      return HctSolver.lerpPoint(source, t, target);
    }
  }, {
    key: "isBounded",
    value: function isBounded(x) {
      return 0.0 <= x && x <= 100.0;
    }

    /**
     * Returns the nth possible vertex of the polygonal intersection.
     *
     * @param y The Y value of the plane.
     * @param n The zero-based index of the point. 0 <= n <= 11.
     * @return The nth possible vertex of the polygonal intersection
     * of the y plane and the RGB cube, in linear RGB coordinates, if
     * it exists. If this possible vertex lies outside of the cube,
     * [-1.0, -1.0, -1.0] is returned.
     */
  }, {
    key: "nthVertex",
    value: function nthVertex(y, n) {
      var kR = HctSolver.Y_FROM_LINRGB[0];
      var kG = HctSolver.Y_FROM_LINRGB[1];
      var kB = HctSolver.Y_FROM_LINRGB[2];
      var coordA = n % 4 <= 1 ? 0.0 : 100.0;
      var coordB = n % 2 === 0 ? 0.0 : 100.0;
      if (n < 4) {
        var g = coordA;
        var b = coordB;
        var r = (y - g * kG - b * kB) / kR;
        if (HctSolver.isBounded(r)) {
          return [r, g, b];
        } else {
          return [-1.0, -1.0, -1.0];
        }
      } else if (n < 8) {
        var _b = coordA;
        var _r = coordB;
        var _g = (y - _r * kR - _b * kB) / kG;
        if (HctSolver.isBounded(_g)) {
          return [_r, _g, _b];
        } else {
          return [-1.0, -1.0, -1.0];
        }
      } else {
        var _r2 = coordA;
        var _g2 = coordB;
        var _b2 = (y - _r2 * kR - _g2 * kG) / kB;
        if (HctSolver.isBounded(_b2)) {
          return [_r2, _g2, _b2];
        } else {
          return [-1.0, -1.0, -1.0];
        }
      }
    }

    /**
     * Finds the segment containing the desired color.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return A list of two sets of linear RGB coordinates, each
     * corresponding to an endpoint of the segment containing the
     * desired color.
     */
  }, {
    key: "bisectToSegment",
    value: function bisectToSegment(y, targetHue) {
      var left = [-1.0, -1.0, -1.0];
      var right = left;
      var leftHue = 0.0;
      var rightHue = 0.0;
      var initialized = false;
      var uncut = true;
      for (var _n = 0; _n < 12; _n++) {
        var mid = HctSolver.nthVertex(y, _n);
        if (mid[0] < 0) {
          continue;
        }
        var midHue = HctSolver.hueOf(mid);
        if (!initialized) {
          left = mid;
          right = mid;
          leftHue = midHue;
          rightHue = midHue;
          initialized = true;
          continue;
        }
        if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
          uncut = false;
          if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
            right = mid;
            rightHue = midHue;
          } else {
            left = mid;
            leftHue = midHue;
          }
        }
      }
      return [left, right];
    }
  }, {
    key: "midpoint",
    value: function midpoint(a, b) {
      return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];
    }
  }, {
    key: "criticalPlaneBelow",
    value: function criticalPlaneBelow(x) {
      return Math.floor(x - 0.5);
    }
  }, {
    key: "criticalPlaneAbove",
    value: function criticalPlaneAbove(x) {
      return Math.ceil(x - 0.5);
    }

    /**
     * Finds a color with the given Y and hue on the boundary of the
     * cube.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return The desired color, in linear RGB coordinates.
     */
  }, {
    key: "bisectToLimit",
    value: function bisectToLimit(y, targetHue) {
      var segment = HctSolver.bisectToSegment(y, targetHue);
      var left = segment[0];
      var leftHue = HctSolver.hueOf(left);
      var right = segment[1];
      for (var axis = 0; axis < 3; axis++) {
        if (left[axis] !== right[axis]) {
          var lPlane = -1;
          var rPlane = 255;
          if (left[axis] < right[axis]) {
            lPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(left[axis]));
            rPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(right[axis]));
          } else {
            lPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(left[axis]));
            rPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(right[axis]));
          }
          for (var i = 0; i < 8; i++) {
            if (Math.abs(rPlane - lPlane) <= 1) {
              break;
            } else {
              var mPlane = Math.floor((lPlane + rPlane) / 2.0);
              var midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
              var mid = HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
              var midHue = HctSolver.hueOf(mid);
              if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                right = mid;
                rPlane = mPlane;
              } else {
                left = mid;
                leftHue = midHue;
                lPlane = mPlane;
              }
            }
          }
        }
      }
      return HctSolver.midpoint(left, right);
    }
  }, {
    key: "inverseChromaticAdaptation",
    value: function inverseChromaticAdaptation(adapted) {
      var adaptedAbs = Math.abs(adapted);
      var base = Math.max(0, 27.13 * adaptedAbs / (400.0 - adaptedAbs));
      return _math_utils__WEBPACK_IMPORTED_MODULE_4__["signum"](adapted) * Math.pow(base, 1.0 / 0.42);
    }

    /**
     * Finds a color with the given hue, chroma, and Y.
     *
     * @param hueRadians The desired hue in radians.
     * @param chroma The desired chroma.
     * @param y The desired Y.
     * @return The desired color as a hexadecimal integer, if found; 0
     * otherwise.
     */
  }, {
    key: "findResultByJ",
    value: function findResultByJ(hueRadians, chroma, y) {
      // Initial estimate of j.
      var j = Math.sqrt(y) * 11.0;
      // ===========================================================
      // Operations inlined from Cam16 to avoid repeated calculation
      // ===========================================================
      var viewingConditions = ViewingConditions.DEFAULT;
      var tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
      var eHue = 0.25 * (Math.cos(hueRadians + 2.0) + 3.8);
      var p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
      var hSin = Math.sin(hueRadians);
      var hCos = Math.cos(hueRadians);
      for (var iterationRound = 0; iterationRound < 5; iterationRound++) {
        // ===========================================================
        // Operations inlined from Cam16 to avoid repeated calculation
        // ===========================================================
        var jNormalized = j / 100.0;
        var alpha = chroma === 0.0 || j === 0.0 ? 0.0 : chroma / Math.sqrt(jNormalized);
        var t = Math.pow(alpha * tInnerCoeff, 1.0 / 0.9);
        var ac = viewingConditions.aw * Math.pow(jNormalized, 1.0 / viewingConditions.c / viewingConditions.z);
        var p2 = ac / viewingConditions.nbb;
        var gamma = 23.0 * (p2 + 0.305) * t / (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
        var a = gamma * hCos;
        var b = gamma * hSin;
        var rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
        var gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
        var bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
        var rCScaled = HctSolver.inverseChromaticAdaptation(rA);
        var gCScaled = HctSolver.inverseChromaticAdaptation(gA);
        var bCScaled = HctSolver.inverseChromaticAdaptation(bA);
        var linrgb = _math_utils__WEBPACK_IMPORTED_MODULE_4__["matrixMultiply"]([rCScaled, gCScaled, bCScaled], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
        // ===========================================================
        // Operations inlined from Cam16 to avoid repeated calculation
        // ===========================================================
        if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
          return 0;
        }
        var kR = HctSolver.Y_FROM_LINRGB[0];
        var kG = HctSolver.Y_FROM_LINRGB[1];
        var kB = HctSolver.Y_FROM_LINRGB[2];
        var fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
        if (fnj <= 0) {
          return 0;
        }
        if (iterationRound === 4 || Math.abs(fnj - y) < 0.002) {
          if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
            return 0;
          }
          return _color_utils__WEBPACK_IMPORTED_MODULE_3__["argbFromLinrgb"](linrgb);
        }
        // Iterates with Newton method,
        // Using 2 * fn(j) / j as the approximation of fn'(j)
        j = j - (fnj - y) * j / (2 * fnj);
      }
      return 0;
    }

    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return A hexadecimal representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
  }, {
    key: "solveToInt",
    value: function solveToInt(hueDegrees, chroma, lstar) {
      if (chroma < 0.0001 || lstar < 0.0001 || lstar > 99.9999) {
        return _color_utils__WEBPACK_IMPORTED_MODULE_3__["argbFromLstar"](lstar);
      }
      hueDegrees = _math_utils__WEBPACK_IMPORTED_MODULE_4__["sanitizeDegreesDouble"](hueDegrees);
      var hueRadians = hueDegrees / 180 * Math.PI;
      var y = _color_utils__WEBPACK_IMPORTED_MODULE_3__["yFromLstar"](lstar);
      var exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y);
      if (exactAnswer !== 0) {
        return exactAnswer;
      }
      var linrgb = HctSolver.bisectToLimit(y, hueRadians);
      return _color_utils__WEBPACK_IMPORTED_MODULE_3__["argbFromLinrgb"](linrgb);
    }

    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return An CAM16 object representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
  }, {
    key: "solveToCam",
    value: function solveToCam(hueDegrees, chroma, lstar) {
      return Cam16.fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar));
    }
  }]);
  return HctSolver;
}();
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(HctSolver, "SCALED_DISCOUNT_FROM_LINRGB", [[0.001200833568784504, 0.002389694492170889, 0.0002795742885861124], [0.0005891086651375999, 0.0029785502573438758, 0.0003270666104008398], [0.00010146692491640572, 0.0005364214359186694, 0.0032979401770712076]]);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(HctSolver, "LINRGB_FROM_SCALED_DISCOUNT", [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]]);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(HctSolver, "Y_FROM_LINRGB", [0.2126, 0.7152, 0.0722]);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(HctSolver, "CRITICAL_PLANES", [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776]);
var ViewingConditions = /*#__PURE__*/function () {
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  function ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ViewingConditions);
    this.n = n;
    this.aw = aw;
    this.nbb = nbb;
    this.ncb = ncb;
    this.c = c;
    this.nc = nc;
    this.rgbD = rgbD;
    this.fl = fl;
    this.fLRoot = fLRoot;
    this.z = z;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ViewingConditions, null, [{
    key: "make",
    value:
    /**
     * Create ViewingConditions from a simple, physically relevant, set of
     * parameters.
     *
     * @param whitePoint White point, measured in the XYZ color space.
     *     default = D65, or sunny day afternoon
     * @param adaptingLuminance The luminance of the adapting field. Informally,
     *     how bright it is in the room where the color is viewed. Can be
     *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
     *     or 200 lux.
     * @param backgroundLstar The lightness of the area surrounding the color.
     *     measured by L* in L*a*b*. default = 50.0
     * @param surround A general description of the lighting surrounding the
     *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
     *     dimly light room, like watching TV at home at night. 2.0 means there
     *     is no difference between the lighting on the color and around it.
     *     default = 2.0
     * @param discountingIlluminant Whether the eye accounts for the tint of the
     *     ambient lighting, such as knowing an apple is still red in green light.
     *     default = false, the eye does not perform this process on
     *       self-luminous objects like displays.
     */
    function make() {
      var whitePoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _color_utils__WEBPACK_IMPORTED_MODULE_3__["whitePointD65"]();
      var adaptingLuminance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200.0 / Math.PI * _color_utils__WEBPACK_IMPORTED_MODULE_3__["yFromLstar"](50.0) / 100.0;
      var backgroundLstar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50.0;
      var surround = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2.0;
      var discountingIlluminant = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var xyz = whitePoint;
      var rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
      var gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
      var bW = xyz[0] * -0.002079 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
      var f = 0.8 + surround / 10.0;
      var c = f >= 0.9 ? _math_utils__WEBPACK_IMPORTED_MODULE_4__["lerp"](0.59, 0.69, (f - 0.9) * 10.0) : _math_utils__WEBPACK_IMPORTED_MODULE_4__["lerp"](0.525, 0.59, (f - 0.8) * 10.0);
      var d = discountingIlluminant ? 1.0 : f * (1.0 - 1.0 / 3.6 * Math.exp((-adaptingLuminance - 42.0) / 92.0));
      d = d > 1.0 ? 1.0 : d < 0.0 ? 0.0 : d;
      var nc = f;
      var rgbD = [d * (100.0 / rW) + 1.0 - d, d * (100.0 / gW) + 1.0 - d, d * (100.0 / bW) + 1.0 - d];
      var k = 1.0 / (5.0 * adaptingLuminance + 1.0);
      var k4 = k * k * k * k;
      var k4F = 1.0 - k4;
      var fl = k4 * adaptingLuminance + 0.1 * k4F * k4F * Math.cbrt(5.0 * adaptingLuminance);
      var n = _color_utils__WEBPACK_IMPORTED_MODULE_3__["yFromLstar"](backgroundLstar) / whitePoint[1];
      var z = 1.48 + Math.sqrt(n);
      var nbb = 0.725 / Math.pow(n, 0.2);
      var ncb = nbb;
      var rgbAFactors = [Math.pow(fl * rgbD[0] * rW / 100.0, 0.42), Math.pow(fl * rgbD[1] * gW / 100.0, 0.42), Math.pow(fl * rgbD[2] * bW / 100.0, 0.42)];
      var rgbA = [400.0 * rgbAFactors[0] / (rgbAFactors[0] + 27.13), 400.0 * rgbAFactors[1] / (rgbAFactors[1] + 27.13), 400.0 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)];
      var aw = (2.0 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
      return new ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, 0.25), z);
    }
  }]);
  return ViewingConditions;
}();
_class2 = ViewingConditions;
/**
 * sRGB-like viewing conditions.
 */
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(ViewingConditions, "DEFAULT", _class2.make());

/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/index.js ***!
  \*******************************************************************************/
/*! exports provided: Hct, Contrast, argbFromRgba, rgbaFromArgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hct */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/hct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hct", function() { return _hct__WEBPACK_IMPORTED_MODULE_0__["Hct"]; });

/* harmony import */ var _contrast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contrast */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/contrast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contrast", function() { return _contrast__WEBPACK_IMPORTED_MODULE_1__["Contrast"]; });

/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-utils */ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/color-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argbFromRgba", function() { return _color_utils__WEBPACK_IMPORTED_MODULE_2__["argbFromRgba"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbaFromArgb", function() { return _color_utils__WEBPACK_IMPORTED_MODULE_2__["rgbaFromArgb"]; });





/***/ }),

/***/ "./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/math-utils.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@atlaskit/tokens/dist/esm/utils/hct-color-utils/math-utils.js ***!
  \************************************************************************************/
/*! exports provided: signum, lerp, clampInt, clampDouble, sanitizeDegreesInt, sanitizeDegreesDouble, rotationDirection, differenceDegrees, matrixMultiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signum", function() { return signum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampInt", function() { return clampInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampDouble", function() { return clampDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeDegreesInt", function() { return sanitizeDegreesInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeDegreesDouble", function() { return sanitizeDegreesDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationDirection", function() { return rotationDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differenceDegrees", function() { return differenceDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrixMultiply", function() { return matrixMultiply; });
/**
 * Below lines are copied from @material/material-color-utilities.
 * Do not modify it.
 */

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This file is automatically generated. Do not modify it.

/**
 * Utility methods for mathematical operations.
 */

/**
 * The signum function.
 *
 * @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
 */
function signum(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 0;
  } else {
    return 1;
  }
}

/**
 * The linear interpolation function.
 *
 * @return start if amount = 0 and stop if amount = 1
 */
function lerp(start, stop, amount) {
  return (1.0 - amount) * start + amount * stop;
}

/**
 * Clamps an integer between two integers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampInt(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}

/**
 * Clamps an integer between two floating-point numbers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampDouble(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}

/**
 * Sanitizes a degree measure as an integer.
 *
 * @return a degree measure between 0 (inclusive) and 360
 * (exclusive).
 */
function sanitizeDegreesInt(degrees) {
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees = degrees + 360;
  }
  return degrees;
}

/**
 * Sanitizes a degree measure as a floating-point number.
 *
 * @return a degree measure between 0.0 (inclusive) and 360.0
 * (exclusive).
 */
function sanitizeDegreesDouble(degrees) {
  degrees = degrees % 360.0;
  if (degrees < 0) {
    degrees = degrees + 360.0;
  }
  return degrees;
}

/**
 * Sign of direction change needed to travel from one angle to
 * another.
 *
 * For angles that are 180 degrees apart from each other, both
 * directions have the same travel distance, so either direction is
 * shortest. The value 1.0 is returned in this case.
 *
 * @param from The angle travel starts from, in degrees.
 * @param to The angle travel ends at, in degrees.
 * @return -1 if decreasing from leads to the shortest travel
 * distance, 1 if increasing from leads to the shortest travel
 * distance.
 */
function rotationDirection(from, to) {
  var increasingDifference = sanitizeDegreesDouble(to - from);
  return increasingDifference <= 180.0 ? 1.0 : -1.0;
}

/**
 * Distance of two points on a circle, represented using degrees.
 */
function differenceDegrees(a, b) {
  return 180.0 - Math.abs(Math.abs(a - b) - 180.0);
}

/**
 * Multiplies a 1x3 row vector with a 3x3 matrix.
 */
function matrixMultiply(row, matrix) {
  var a = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
  var b = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
  var c = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
  return [a, b, c];
}

/***/ })

};;
//# sourceMappingURL=vendors~@atlaskit-internal_atlassian-custom-theme.render-page.js.map