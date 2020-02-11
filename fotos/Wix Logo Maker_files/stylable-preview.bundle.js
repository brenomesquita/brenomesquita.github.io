
(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof module === 'object' && module.exports) { module.exports = factory(); } else { root.returnExports = factory(); } }(typeof self !== 'undefined' ? self : this, function () { return ".LinearProgressBar1910915127--root {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.LinearProgressBar1910915127--progressIndicationSection {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.LinearProgressBar1910915127--barContainer {\n  width: 100%;\n  position: relative;\n  height: 100%;\n}\n\n.LinearProgressBar1910915127--barBackground,.LinearProgressBar1910915127--barForeground{\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n}\n\n.LinearProgressBar1910915127--barBackground {\n  width: 100%;\n}\n\n.LinearProgressBar1910915127--indicationContainer {}\n\n.LinearProgressBar1910915127--progressPercentage {}\n.StylableButton3172224474--root {\n    -archetype: box;\n    cursor: pointer;\n    border: none;\n    display: block;\n    min-width: 10px;\n    min-height: 10px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    padding: 0px;\n}\n\n.StylableButton3172224474--root[data-stylablebutton3172224474-disabled] {\n  pointer-events: none;\n}\n\n.StylableButton3172224474--link {\n    -archetype: box;\n    text-decoration: none;\n    box-sizing: border-box;\n    color: black;\n}\n\n.StylableButton3172224474--container {\n    display: flex;\n    flex-basis: auto;\n    justify-content: center;\n    flex-direction: row;\n    flex-grow: 1;\n    align-items: center;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    transition: all 0.2s ease, visibility 0s;\n}\n\n.StylableButton3172224474--label {\n    -archetype: text;\n    -controller-part-type: LayoutChildDisplayDropdown, LayoutFlexChildSpacing(first);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    min-width: 1.8em;\n    max-width: 100%;\n    transition: inherit;\n}\n\n.StylableButton3172224474--icon {\n    -archetype: icon;\n    -controller-part-type: LayoutChildDisplayDropdown, LayoutFlexChildSpacing(last);\n    min-width: 1px;\n    height: 50px;\n    transition: inherit;\n    flex-shrink: 0;\n}\n\n.StylableButton3172224474--icon > div,.StylableButton3172224474--icon svg {\n    width: inherit;\n    height: inherit;\n}\n\n.Video2012629831--root {\n    position: relative;\n}\n\n.Video2012629831--playerContainer {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    background-color: #000;\n}\n\n.Video2012629831--playerContainer_facebook {\n    display: block !important;\n}\n\n.Video2012629831--playerContainer iframe {\n    height: 100%;\n    width: 100%;\n    visibility: visible;\n}\n\n.Video2012629831--cover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: #000 50% 50% no-repeat;\n    background-size: cover;\n    cursor: pointer;\n}\n\n.Video2012629831--cover.Video2012629831--transparentOverlay {\n    background: transparent;\n}\n\n.Video2012629831--overlay {\n    display: flex;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.Video2012629831--title {\n    margin: 0 15px 15px;\n    text-align: center;\n}\n\n.Video2012629831--poster {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n.Popover2934488694--root {\n  /*popper sets tooltip in absolute position according to this container*/\n  position: relative;\n  /*popper adds an extra div that needs to be measured without stretching*/\n  display: inline-block;\n}\n\n.Popover2934488694--popoverAnimation {}\n\n.Popover2934488694--popoverAnimation-enter {}\n\n.Popover2934488694--popoverAnimation-enter.Popover2934488694--popoverAnimation-enter-active {}\n\n.Popover2934488694--popoverAnimation-exit {}\n\n.Popover2934488694--popoverAnimation-exit.Popover2934488694--popoverAnimation-exit-active {}\n\n.Popover2934488694--popoverContent {\n  background-color: /*SANTA_VALUE([contentBackgroundColor])*/white/*SANTA_VALUE_END*/;\n  border-width: /*SANTA_VALUE([contentBorderWidth])*/1px/*SANTA_VALUE_END*/;\n  border-style: /*SANTA_VALUE([contentBorderStyle])*/solid/*SANTA_VALUE_END*/;\n  border-color: /*SANTA_VALUE([contentBorderColor])*/black/*SANTA_VALUE_END*/;\n  border-radius: /*SANTA_VALUE([contentBorderRadius])*/initial/*SANTA_VALUE_END*/;\n  padding: /*SANTA_VALUE([contentPadding])*/initial/*SANTA_VALUE_END*/;\n}\n\n.Popover2934488694--arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n}\n\n.Popover2934488694--popover {\n}\n\n.Popover2934488694--withArrow {\n}\n\n/* TODO: use a stylable state for this. Notice it would break consumers styles */\n.Popover2934488694--popover[data-placement*=\"right\"].Popover2934488694--withArrow {\n  padding-left: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n}\n\n.Popover2934488694--popover[data-placement*=\"right\"].Popover2934488694--withArrow .Popover2934488694--arrow {\n  border-width: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ 0;\n  left: calc(-1 * /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/);\n  margin-left: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n  margin-right: 0;\n  border-color: transparent /*SANTA_VALUE([contentBorderColor])*/black/*SANTA_VALUE_END*/ transparent transparent;\n}\n\n.Popover2934488694--popover[data-placement*=\"left\"].Popover2934488694--withArrow {\n  padding-right: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n}\n\n.Popover2934488694--popover[data-placement*=\"left\"].Popover2934488694--withArrow .Popover2934488694--arrow {\n  border-width: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ 0 /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n  right: calc(-1 * /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/);\n  margin-left: 0;\n  margin-right: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n  border-color: transparent transparent transparent /*SANTA_VALUE([contentBorderColor])*/black/*SANTA_VALUE_END*/;\n}\n\n.Popover2934488694--popover[data-placement*=\"bottom\"].Popover2934488694--withArrow {\n  padding-top: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n}\n\n.Popover2934488694--popover[data-placement*=\"bottom\"].Popover2934488694--withArrow .Popover2934488694--arrow {\n  border-width: 0 /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n  top: calc(-1 * /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/);\n  margin-top: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n  margin-bottom: 0;\n  border-color: transparent transparent /*SANTA_VALUE([contentBorderColor])*/black/*SANTA_VALUE_END*/ transparent;\n}\n\n.Popover2934488694--popover[data-placement*=\"top\"].Popover2934488694--withArrow {\n  padding-bottom: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n}\n\n.Popover2934488694--popover[data-placement*=\"top\"].Popover2934488694--withArrow .Popover2934488694--arrow {\n  border-width: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/ 0 /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n  bottom: calc(-1 * /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/);\n  margin-top: 0;\n  margin-bottom: /*SANTA_VALUE([contentArrowSize])*/5px/*SANTA_VALUE_END*/;\n  border-color: /*SANTA_VALUE([contentBorderColor])*/black/*SANTA_VALUE_END*/ transparent transparent transparent;\n}\n\n.Popover2934488694--popoverElement {}\n\n.Tickers1377525900--root {\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n}\n\n.Tickers1377525900--ticker {\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n}\n\n.Input2801700919--root {\n  position: relative;\n}\n\n.Input2801700919--nativeInput {}\n\n.Focusable1050953490--root {\n}\n\n.Focusable1050953490--root[data-focusable1050953490-focus] {\n /* need to be extended and implemented by consumers of focusableHoc */\n}\n\n.Focusable1050953490--root[data-focusable1050953490-focus-visible] {\n  /* need to be extended and implemented by consumers of focusableHoc */\n}\n\n.Focusable1050953490--focus-box {\n\toutline: none;\n}\n\n.Focusable1050953490--focus-box-error {\n\toutline: none;\n}\n\n.Tag1788552385--tag {\n  cursor: pointer;\n  width: auto;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n\n.Tag1788552385--tag * {\n  cursor: pointer;\n}\n\n.Tag1788552385--tagInput {\n  display: none;\n}\n\n.TagsList1452938096--root {\n  display: flex;\n  flex-flow: wrap;\n}\n\n.Slider3316863532--root {\n  position: relative;\n  box-sizing: border-box;\n  outline: none !important;\n}\n\n.Slider3316863532--root * {\n  box-sizing: border-box;\n}\n\n.Slider3316863532--tooltip {\n  position: absolute;\n  background: #363636;\n  color: #fff;\n  padding: 4px 12px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n\n.Slider3316863532--tooltip::after,.Slider3316863532--tooltip::before {\n  content: ' ';\n  position: absolute;\n  margin-left: -8px;\n  border-width: 8px;\n  border-style: solid;\n}\n\n.Slider3316863532--track {\n  z-index: 0;\n  width: 100%;\n  height: 25%;\n  position: relative;\n  cursor: pointer;\n  background: #dadada;\n  opacity: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  min-height: 1px;\n}\n\n.Slider3316863532--inner {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.Slider3316863532--trackFill {\n  position: absolute;\n  background: linear-gradient(to right, #4992e3, #70bff3);\n  height: 100%;\n  width: 100%;\n}\n\n.Slider3316863532--root[data-slider3316863532-dir=\"rtl\"] .Slider3316863532--trackFill {\n  right: 0;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--track {\n  width: 25%;\n  height: 100%;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--trackFill {\n  background: linear-gradient(to top, #4992e3, #70bff3);\n}\n\n.Slider3316863532--thumb {\n  z-index: 2;\n  position: absolute;\n  cursor: pointer;\n}\n\n.Slider3316863532--thumbShape {\n  width: 100%;\n  height: 100%;\n  background: green;\n  border: 2px solid blue;\n}\n\n.Slider3316863532--thumbShape[data-slider3316863532-shapetype=\"circle\"] {\n  border-radius: 50%;\n}\n\n.Slider3316863532--thumbShape[data-slider3316863532-shapetype=\"square\"] {\n  border-radius: 7px;\n}\n\n.Slider3316863532--thumbShape[data-slider3316863532-shapetype=\"rectangle\"] {\n  border-radius: 37px;\n}\n\n.Slider3316863532--thumbShape[data-slider3316863532-shapetype=\"bar\"] {\n  border-radius: 7px;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"] .Slider3316863532--tooltip[data-slider3316863532-normalposition] {\n  left: 50%;\n  top: calc(-7px - /*SANTA_VALUE([tooltipGap])*/10px/*SANTA_VALUE_END*/);\n  transform: translate(-50%, -100%);\n}\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"] .Slider3316863532--tooltip[data-slider3316863532-acrossposition] {\n  left: 50%;\n  bottom: calc(-7px - /*SANTA_VALUE([tooltipGap])*/10px/*SANTA_VALUE_END*/);\n  transform: translate(-50%, 100%);\n}\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip[data-slider3316863532-normalposition] {\n  left: 50%;\n  left: calc(-7px - /*SANTA_VALUE([tooltipGap])*/10px/*SANTA_VALUE_END*/);\n  transform: translate(-100%, -50%);\n}\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip[data-slider3316863532-acrossposition] {\n  right: calc(-7px - /*SANTA_VALUE([tooltipGap])*/10px/*SANTA_VALUE_END*/);\n  transform: translate(100%, -50%);\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"] .Slider3316863532--tooltip[data-slider3316863532-normalposition]::after,.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"] .Slider3316863532--tooltip[data-slider3316863532-normalposition]::before {\n  border-color: #363636 transparent transparent transparent;\n  top: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"] .Slider3316863532--tooltip[data-slider3316863532-acrossposition]::after,.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"] .Slider3316863532--tooltip[data-slider3316863532-acrossposition]::before {\n  border-color: transparent transparent #363636 transparent;\n  bottom: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip {\n  top: 50%;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip::after,.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip::before {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip[data-slider3316863532-normalposition]::after,.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip[data-slider3316863532-normalposition]::before {\n  left: 100%;\n  margin-left: 0;\n  border-color: transparent transparent transparent #363636;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip[data-slider3316863532-acrossposition]::after,.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"] .Slider3316863532--tooltip[data-slider3316863532-acrossposition]::before {\n  right: 100%;\n  border-color: transparent #363636 transparent transparent;\n}\n\n.Slider3316863532--tick {\n  display: inline-block;\n  position: absolute;\n  background: #000;\n  cursor: pointer;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"][data-slider3316863532-tickmarksshape=\"line\"] .Slider3316863532--tick {\n  width: /*SANTA_VALUE([tickLineWidth])*/1px/*SANTA_VALUE_END*/;\n  height: /*SANTA_VALUE([tickLineHeight])*/10px/*SANTA_VALUE_END*/;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"][data-slider3316863532-tickmarksshape=\"line\"] .Slider3316863532--tick {\n  height: /*SANTA_VALUE([tickLineWidth])*/1px/*SANTA_VALUE_END*/;\n  width: /*SANTA_VALUE([tickLineHeight])*/10px/*SANTA_VALUE_END*/;\n}\n\n.Slider3316863532--root[data-slider3316863532-tickmarksshape=\"dot\"] .Slider3316863532--tick {\n  width: /*SANTA_VALUE([tickDotSize])*/3px/*SANTA_VALUE_END*/;\n  height: /*SANTA_VALUE([tickDotSize])*/3px/*SANTA_VALUE_END*/;\n  border-radius: 50%;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"][data-slider3316863532-tickmarksshape=\"dot\"] .Slider3316863532--tick {\n  transform: translateX(calc(- /*SANTA_VALUE([tickDotSize])*/3px/*SANTA_VALUE_END*/ / 2));\n}\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"][data-slider3316863532-tickmarksshape=\"dot\"] .Slider3316863532--tick {\n  transform: translateY(calc(/*SANTA_VALUE([tickDotSize])*/3px/*SANTA_VALUE_END*/ / 2));\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"][data-slider3316863532-tickmarksposition=\"normal\"] .Slider3316863532--tick {\n  bottom: 0;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"][data-slider3316863532-tickmarksposition=\"normal\"] .Slider3316863532--tick {\n  right: 0;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"][data-slider3316863532-tickmarksposition=\"middle\"] .Slider3316863532--tick {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"][data-slider3316863532-tickmarksposition=\"middle\"] .Slider3316863532--tick {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"horizontal\"][data-slider3316863532-tickmarksposition=\"across\"] .Slider3316863532--tick {\n  top: 0;\n}\n\n.Slider3316863532--root[data-slider3316863532-orientation=\"vertical\"][data-slider3316863532-tickmarksposition=\"across\"] .Slider3316863532--tick {\n  left: 0;\n}\n\n.Title3029297726--root {\n  word-break: break-all;\n}\n\n.SigningPad3313152039--visuallyHidden {\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n}\n\n.ClearButton1591095529--root {\n  word-break: break-all;\n}\n\n.RadioButton3258061513--root {\n  display: inline-block;\n}\n\n.RadioButton3258061513--icon {\n  cursor: pointer;\n  height: auto;\n}\n\n.RadioButton3258061513--label {}\n\n.RadioButton3258061513--root[data-radiobutton3258061513-checked] .RadioButton3258061513--icon,.RadioButton3258061513--root:hover .RadioButton3258061513--icon {}\n\n.RadioButton3258061513--root[data-radiobutton3258061513-disabled] {\n  filter: grayscale(75%);\n  opacity: 0.7;\n}\n\n.RadioButton3258061513--hiddenRadio {\n  position: absolute;\n  overflow: hidden;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  opacity: 0;\n}\n\n.Pagination3735454524--button-common-mixin {\n    display: inline-flex;\n    flex-shrink: 0;\n}\n\n.Pagination3735454524--root {\n    display: inline-flex;\n    user-select: none;\n}\n\n.Pagination3735454524--navButton {\n    display: inline-flex;\n    flex-shrink: 0;\n}\n\n.Pagination3735454524--navButton:not(.Pagination3735454524--disabled) {\n    cursor: pointer;\n}\n\n.Pagination3735454524--navButtonFirst {  order: 1;  }\n.Pagination3735454524--navButtonPrevious {  order: 2;  }\n.Pagination3735454524--navButtonNext {  order: 4;  }\n.Pagination3735454524--navButtonLast {  order: 5;  }\n\n.Pagination3735454524--pageStrip {\n    order: 3;\n    overflow-x: hidden;\n}\n\n.Pagination3735454524--pageStripInner {\n    display: flex;\n}\n\n.Pagination3735454524--pageStripTemplate {\n    height: 0;\n    overflow: hidden;\n}\n\n.Pagination3735454524--pageButton {\n    display: inline-flex;\n    flex-shrink: 0;\n    cursor: pointer;\n}\n\n.Pagination3735454524--currentPage {\n    display: inline-flex;\n    flex-shrink: 0;\n}\n\n.Pagination3735454524--gap {\n    display: inline-flex;\n    flex-shrink: 0;\n}\n\n.Pagination3735454524--pageForm {\n    display: flex;\n    order: 3;\n}\n\n.Pagination3735454524--compact {\n}\n\n.Pagination3735454524--pageInput {}\n.Pagination3735454524--totalPages {}\n.Pagination3735454524--slash {}\n\n.StylableLine1578375768--root {\n    -archetype: box;\n    box-sizing: border-box;\n}\n.StylableLine1578375768--text {\n    -archetype: text;\n}\n\n.DropdownOption1421288222--root {\n  cursor: pointer;\n}\n\n.DropdownOption1421288222--root[data-dropdownoption1421288222-hovered] {\n  background-color: /*SANTA_VALUE([hoverBackgroundColor])*/lightgrey/*SANTA_VALUE_END*/;\n}\n\n.DropdownOption1421288222--root[data-dropdownoption1421288222-disabled] {\n  cursor: default;\n  background-color: /*SANTA_VALUE([disabledBackgroundColor])*/white/*SANTA_VALUE_END*/;\n}\n\n.DropdownOption1421288222--root[data-dropdownoption1421288222-selected] {\n  background-color: /*SANTA_VALUE([selectedBackgroundColor])*/grey/*SANTA_VALUE_END*/;\n}\n\n.DropdownOption1421288222--root[data-dropdownoption1421288222-selected][data-dropdownoption1421288222-hovered] {\n  background-color: /*SANTA_VALUE([selectedHoverBackgroundColor])*/dimgrey/*SANTA_VALUE_END*/;\n}\n\n.DropdownOption1421288222--root:not([data-dropdownoption1421288222-selectable]) {\n  cursor: default;\n}\n\n.DropdownOption1421288222--highlight {\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.DropdownOption1421288222--nonHighlight {\n\n}\n\n.Divider1001341594--root {\n}\n\n.Divider1001341594--root[data-divider1001341594-customdivider] {\n  reset: all;\n}\n\n.Divider1001341594--root:not([data-divider1001341594-customdivider]) {\n  height: /*SANTA_VALUE([dividerHeight])*/1px/*SANTA_VALUE_END*/;\n  background-color: /*SANTA_VALUE([dividerBackgroundColor])*/black/*SANTA_VALUE_END*/;\n  opacity: /*SANTA_VALUE([dividerOpacity])*/initial/*SANTA_VALUE_END*/;\n  margin-top: /*SANTA_VALUE([dividerMarginTop])*/initial/*SANTA_VALUE_END*/;\n  margin-bottom: /*SANTA_VALUE([dividerMarginBottom])*/initial/*SANTA_VALUE_END*/;\n}\n\n.Divider1001341594--root[data-divider1001341594-vertical] {\n  height: auto;\n  width: /*SANTA_VALUE([dividerHeight])*/1px/*SANTA_VALUE_END*/;\n}\n\n.Captcha4001160267--root {\n    /* we set this to relevant so we can position the hidden checkbox(root .checkbox) relatie to the captcha */\n    position: relative;\n}\n\n.Captcha4001160267--loaderWrapper {\n\n}\n\n.Captcha4001160267--captcha {\n\n}\n\n.Captcha4001160267--root[data-captcha4001160267-loaded] .Captcha4001160267--captcha {\n    display: block;\n}\n\n.Captcha4001160267--root[data-captcha4001160267-loaded] .Captcha4001160267--loaderWrapper {\n    display: none;\n}\n\n.Captcha4001160267--root .Captcha4001160267--captcha {\n    display: none;\n}\n/* a hidden check box that will give the captcha a required input element capabilities */\n.Captcha4001160267--root .Captcha4001160267--requiredField {\n    position: absolute;\n    opacity : 0.0;\n    bottom: 0;\n    left: 0;\n    /*avoid user clicking on this hidden checkbox*/\n    -webkit-user-select: none; /* Safari 3.1+ */\n    -moz-user-select: none; /* Firefox 2+ */\n    -ms-user-select: none; /* IE 10+ */\n    user-select: none; /* Standard syntax */\n}\n\n.HorizontalMenuGridLayout492290708--root {\n\n  box-sizing: border-box;\n\n  z-index: 1;\n\n  display: none;\n  min-width: 100%;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n\n  flex: 1;\n\n  transition: inherit;\n}\n\n.HorizontalMenuGridLayout492290708--root[data-horizontalmenugridlayout492290708-expandsize=\"column\"] {\n  box-sizing: content-box;\n  width: max-content;\n}\n\n.HorizontalMenuGridLayout492290708--root[data-opened=\"true\"] {\n  display: flex;\n}\n\n.HorizontalMenuGridLayout492290708--listWrapper {\n  display: flex;\n\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n.HorizontalMenuGridLayout492290708--menuItem {\n  flex: 1;\n}\n\n.HorizontalMenuColumnsLayout4186806640--root {\n\n  box-sizing: border-box;\n\n  z-index: 1;\n\n  display: none;\n  min-width: 100%;\n\n  flex: 1;\n\n  transition: inherit;\n}\n\n.HorizontalMenuColumnsLayout4186806640--root[data-horizontalmenucolumnslayout4186806640-expandsize=\"column\"] .HorizontalMenuColumnsLayout4186806640--listWrapper {\n  box-sizing: content-box;\n  width: max-content;\n}\n\n.HorizontalMenuColumnsLayout4186806640--root[data-horizontalmenucolumnslayout4186806640-columnsalignment=\"left\"] {\n  justify-content: flex-start;\n}\n\n.HorizontalMenuColumnsLayout4186806640--root[data-horizontalmenucolumnslayout4186806640-columnsalignment=\"center\"] {\n  justify-content: center;\n}\n\n.HorizontalMenuColumnsLayout4186806640--root[data-horizontalmenucolumnslayout4186806640-columnsalignment=\"right\"] {\n  justify-content: flex-end;\n}\n\n.HorizontalMenuColumnsLayout4186806640--root[data-horizontalmenucolumnslayout4186806640-columnsalignment=\"justify\"] > .HorizontalMenuColumnsLayout4186806640--listWrapper {\n  width: 100%;\n}\n\n.HorizontalMenuColumnsLayout4186806640--root[data-opened=\"true\"] {\n  display: flex;\n}\n\n.HorizontalMenuColumnsLayout4186806640--listWrapper {\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n.HorizontalMenuColumnsLayout4186806640--menuItem {\n}\n\n.HorizontalMenuItem2572109274--root {\n\n  transition: inherit;\n  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */\n  page-break-inside: avoid; /* Firefox */\n  break-inside: avoid; /* IE 10+ */\n}\n\n.HorizontalMenuItem2572109274--root[data-horizontalmenuitem2572109274-expandsize=\"column\"] {\n  position: relative;\n}\n\n.HorizontalMenuItem2572109274--menuItemLink {\n  cursor: pointer;\n}\n\n.HorizontalMenuItem2572109274--expandIcon {\n  display: inline-block;\n}\n\n.HorizontalMenuItem2572109274--divider {\n  display: none;\n}\n\n.HorizontalMenuItem2572109274--linkContainer {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.HorizontalMenuItem2572109274--root:hover > .HorizontalMenuColumnsLayout4186806640--root,.HorizontalMenuItem2572109274--root:focus > .HorizontalMenuColumnsLayout4186806640--root,.HorizontalMenuItem2572109274--root:focus-within > .HorizontalMenuColumnsLayout4186806640--root,.HorizontalMenuItem2572109274--root:hover > .HorizontalMenuGridLayout492290708--root,.HorizontalMenuItem2572109274--root:focus > .HorizontalMenuGridLayout492290708--root,.HorizontalMenuItem2572109274--root:focus-within > .HorizontalMenuGridLayout492290708--root {\n  display: flex;\n}\n\n.DropdownContent1220560825--root {\n  outline: 0;\n}\n\n.DropdownContent1220560825--optionsContainer {\n  outline: 0;\n  overflow: auto;\n  max-height: 260px;\n  position: relative;\n}\n\n.DropdownContent1220560825--dropdownOption {\n}\n\n.TimePicker2822475193--root {\n}\n\n.TimePicker2822475193--tickers {\n}\n\n.buttonnext2711726821--root {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.buttonnext2711726821--content {}\n\n.buttonnext2711726821--prefix {\n  flex-shrink: 0;\n}\n\n.buttonnext2711726821--suffix {\n  flex-shrink: 0;\n}\n\n.buttonnext2711726821--root[data-buttonnext2711726821-disabled] {\n  cursor: default;\n}\n\n/*\n  NOTE: This fixes issues when disabled button is used with a Tooltip. The root issue\n  is that browsers do not fire a mouseleave event for a disabled button. More details:\n  https://github.com/facebook/react/issues/4251\n*/\n.buttonnext2711726821--root[disabled] {\n  pointer-events: none;\n}\n\n.Dropdown4071356518--root {\n}\n\n.Dropdown4071356518--root .Popover2934488694--popover {\n  min-width: 100%;\n}\n\n.Dropdown4071356518--dropdownContent {\n}\n\n.HorizontalMenu639929688--root {\n  box-sizing: border-box;\n  position: relative;\n  transition: inherit;\n}\n\n.HorizontalMenu639929688--menu {\n  box-sizing: border-box;\n\n  display: flex;\n  flex-wrap: wrap;\n\n  height: 100%;\n\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n/* menu item */\n.HorizontalMenu639929688--menuItem {\n}\n\n/* grid layout */\n.HorizontalMenu639929688--gridLayout {\n}\n\n/* columns layout */\n.HorizontalMenu639929688--columnsLayout {\n}\n\n.HorizontalMenu639929688--menu > .HorizontalMenu639929688--menuItem > .HorizontalMenu639929688--gridLayout {\n  position: absolute;\n}\n\n.HorizontalMenu639929688--menu > .HorizontalMenu639929688--menuItem > .HorizontalMenu639929688--columnsLayout {\n  position: absolute;\n}\n\n.InputWithOptions1678740305--root {\n}\n\n.InputWithOptions1678740305--inputComponent {\n}\n.AddressInput1980494635--root {\n}\n\n.AddressInput1980494635--option {\n    display: flex;\n}\n\n.AddressInput1980494635--iconWrapper {\n    display: flex;\n    align-items: center;\n    padding: 0 6px;\n}\n\n.AddressInput1980494635--icon {\n\n}\n\n.AddressInput1980494635--optionContent {\n    flex: 1;\n}\n\n.StylableHorizontalMenu2095386489--root {\n  -archetype: box;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsdirection=\"ltr\"] {\n  direction: ltr;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsdirection=\"rtl\"] {\n  direction: rtl;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsalignment=\"left\"] .HorizontalMenu639929688--menu {\n  justify-content: flex-start;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsdirection=\"rtl\"][data-stylablehorizontalmenu2095386489-itemsalignment=\"left\"] .HorizontalMenu639929688--menu {\n  justify-content: flex-end;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsalignment=\"center\"] .HorizontalMenu639929688--menu {\n  justify-content: center;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsalignment=\"right\"] .HorizontalMenu639929688--menu {\n  justify-content: flex-end;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsdirection=\"rtl\"][data-stylablehorizontalmenu2095386489-itemsalignment=\"right\"] .HorizontalMenu639929688--menu {\n  justify-content: flex-start;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsalignment=\"stretch\"] .StylableHorizontalMenu2095386489--rootMenuItem {\n  flex: 1 1 auto;\n}\n\n.StylableHorizontalMenu2095386489--root .HorizontalMenu639929688--menu {\n  -archetype: box;\n}\n\n.StylableHorizontalMenu2095386489--root .HorizontalMenu639929688--menuItem {\n  -archetype: box;\n}\n\n.StylableHorizontalMenu2095386489--rootMenuItem {\n}\n\n.StylableHorizontalMenu2095386489--rootMenuItem .HorizontalMenuItem2572109274--linkContainer {\n  justify-content: center;\n  text-align: center;\n}\n\n.StylableHorizontalMenu2095386489--rootMenuItem .HorizontalMenuItem2572109274--menuItemLink {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.StylableHorizontalMenu2095386489--subMenuItem {\n}\n\n.StylableHorizontalMenu2095386489--root .HorizontalMenu639929688--menuItem .HorizontalMenuItem2572109274--expandIcon {\n  -archetype: icon;\n}\n\n.StylableHorizontalMenu2095386489--root .HorizontalMenu639929688--columnsLayout {\n  -archetype: box;\n}\n\n.StylableHorizontalMenu2095386489--root .HorizontalMenu639929688--gridLayout {\n  -archetype: box;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-columnstextalignment=\"left\"] .HorizontalMenu639929688--columnsLayout .HorizontalMenuColumnsLayout4186806640--menuItem .HorizontalMenuItem2572109274--linkContainer {\n  justify-content: flex-start;\n  text-align: left;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsdirection=\"rtl\"][data-stylablehorizontalmenu2095386489-columnstextalignment=\"left\"] .HorizontalMenu639929688--columnsLayout .HorizontalMenuColumnsLayout4186806640--menuItem .HorizontalMenuItem2572109274--linkContainer {\n  justify-content: flex-end;\n  text-align: left;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-columnstextalignment=\"center\"] .HorizontalMenu639929688--columnsLayout .HorizontalMenuColumnsLayout4186806640--menuItem .HorizontalMenuItem2572109274--linkContainer {\n  justify-content: center;\n  text-align: center;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-columnstextalignment=\"right\"] .HorizontalMenu639929688--columnsLayout .HorizontalMenuColumnsLayout4186806640--menuItem .HorizontalMenuItem2572109274--linkContainer {\n  justify-content: flex-end;\n  text-align: right;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsdirection=\"rtl\"][data-stylablehorizontalmenu2095386489-columnstextalignment=\"right\"] .HorizontalMenu639929688--columnsLayout .HorizontalMenuColumnsLayout4186806640--menuItem .HorizontalMenuItem2572109274--linkContainer {\n  justify-content: flex-start;\n  text-align: right;\n}\n\n.StylableHorizontalMenu2095386489--root .HorizontalMenu639929688--columnsLayout .HorizontalMenuColumnsLayout4186806640--menuItem .HorizontalMenuItem2572109274--menuItemLink {\n  white-space: normal;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsdirection=\"rtl\"][data-stylablehorizontalmenu2095386489-columnsalignment=\"left\"] .HorizontalMenu639929688--columnsLayout {\n  justify-content: flex-end;\n}\n\n.StylableHorizontalMenu2095386489--root[data-stylablehorizontalmenu2095386489-itemsdirection=\"rtl\"][data-stylablehorizontalmenu2095386489-columnsalignment=\"right\"] .HorizontalMenu639929688--columnsLayout {\n  justify-content: flex-start;\n}\n"; }));