!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("lodash"),require("coreUtilsLib"),require("prop-types"),require("react"),require("create-react-class"),require("reactDOM"));else if("function"==typeof define&&define.amd)define(["lodash","coreUtilsLib","prop-types","react","create-react-class","reactDOM"],t);else{var o="object"==typeof exports?t(require("lodash"),require("coreUtilsLib"),require("prop-types"),require("react"),require("create-react-class"),require("reactDOM")):t(e.lodash,e.coreUtilsLib,e["prop-types"],e.react,e["create-react-class"],e.reactDOM);for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,(function(e,t,o,n,i,r){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=124)}({0:function(t,o){t.exports=e},1:function(e,t,o){"use strict";var n=o(9),i=o(19).Definitions;e.exports=n(i)},11:function(e,t,o){"use strict";var n=o(0),i=o(8),r=o(3),s=o(2),a=o(12),c=o(13),u=o(1),l=o(15),p=o(16).BASE_COMP_ACTIONS,d=["wysiwyg.viewer.components.SiteBackground"];function g(e){var t=n.pick(e,n.values(p));if(n.get(this.props.compProp,"isDisabled"))return t;var o=n(this.props.compActions).pick(n.keys(p)).mapKeys((function(e,t){return p[t]})).mapValues(function(e){return this.handleAction.bind(this,e.name)}.bind(this)).value();return o.onClick&&this.props.setCustomClickOccurred&&(o.onClickCapture=function(e){n.includes(e.target.id,this.props.id)&&this.props.setCustomClickOccurred()}.bind(this)),n.assignWith(o,t,function(e,t){var o=this;return function(){e&&e.apply(o,arguments),t&&t.apply(o,arguments)}}.bind(this))}function f(e){var t=!(!n.invoke(this,"isScreenWidth")&&!this.props.isHorizontallyDocked),o=n.isFunction(this.ignoreDimensions)&&this.ignoreDimensions(),i=e.style,r=t&&l(this.props.isMobileView,this.props.siteWidth,n.get(this.props.structure,["layout","docked"])),s=n.omit(this.props.style,o&&["width","height"]),a=n.defaults({},i,r,s);return e["data-hidden"]&&(a.visibility="hidden"),e["data-collapsed"]&&n.assign(a,{visibility:"hidden",overflow:"hidden",width:0,minWidth:0,height:0,minHeight:0},this.props.isMeshLayoutMechanism?{marginBottom:0}:{top:0,left:0,position:"absolute"}),!n.get(this.props.compProp,"isDisabled")&&n.has(this.props.compActions,"click")&&(a.cursor="pointer"),a}function m(e){return n.compact([e,this.props.layoutComponentClassName,this.props.className]).join(" ")}var b={mixins:[a,s.renderDoneMixin,c],propTypes:{id:u.Component.id.isRequired,className:r.string,structure:u.Component.structure,rotationInDegrees:u.Component.rotationInDegrees,siteWidth:u.siteWidth,style:u.Component.style,registerLayoutFunc:u.Layout.registerLayoutFunc,isCollapsed:u.Component.isCollapsed,compActions:u.Component.compActions,compBehaviors:u.Component.compBehaviors,isHorizontallyDocked:u.Component.isHorizontallyDocked,compProp:u.Component.compProp,registerReLayoutPending:u.Layout.registerReLayoutPending,reLayoutIfPending:u.Layout.reLayoutIfPending,isExperimentOpen:u.isExperimentOpen,isMobileView:u.isMobileView,shouldHideAnimatable:u.Component.shouldHideAnimatable,layoutComponentClassName:u.Layout.layoutComponentClassName,isMeshLayoutMechanism:u.Layout.isMeshLayoutMechanism,isResponsive:u.RendererModel.isResponsive},registerReLayout:function(){this.props.registerReLayoutPending&&this.props.registerReLayoutPending(this.props.id)},componentDidUpdate:function(){this.props.reLayoutIfPending&&this.callAfterRenderDone(this.props.reLayoutIfPending)},componentDidMount:function(){n.isFunction(this.measureComponent)&&this.props.registerLayoutFunc(i.findDOMNode(this),this.measureComponent)},shouldComponentUpdate:function(e,t){var o=!this.shouldComponentUpdateAnimatable||this.shouldComponentUpdateAnimatable(e,t),i=e.structure&&n.includes(d,e.structure.componentType),r=!n.isFunction(this.componentSpecificShouldUpdate)||this.componentSpecificShouldUpdate(e,t);return o&&r||i},updateRootRefDataStyles:function(e){if(!n.get(this.props,"compProp.isHidden")&&!this.props.isCollapsed){var t=g.call(this,e);n.assign(e,t)}if((n.get(this.props,"compProp.isHidden")||this.props.shouldHideAnimatable)&&(e["data-hidden"]=!0),this.props.isCollapsed&&(e["data-collapsed"]=!0),this.props.isResponsive)e["data-hidden"]&&(e.style={visibility:"hidden"}),e["data-collapsed"]&&(e.style={visibility:"hidden",overflow:"hidden",width:0,minWidth:0,height:0,minHeight:0,top:0,left:0,position:"absolute"});else{e.style=f.call(this,e);var o=this.props.rotationInDegrees;o&&(e["data-angle"]=o)}e.className=m.call(this,e.className)}};e.exports={baseComp:b,_testActionsMap:p}},12:function(e,t,o){"use strict";var n=o(8),i=o(0);e.exports={isAnimatable:!0,shouldChildrenUpdate:!0,componentWillMount:function(){this._animatableMixin={animationsCounter:0,deferredStates:[]},this._onAnimationEnded=i.noop},componentDidMount:function(){this._animatableMixin.setStateOrig=this.setState},componentWillUnmount:function(){this._animatableMixin.updateOnAnimationEnded=!1},animationStarted:function(){1==++this._animatableMixin.animationsCounter&&(this.setState=this.setStateDeferred,this.isCurrentlyAnimating=!0),this.shouldChildrenUpdate||i(this.refs).filter("isAnimatable").invokeMap("animationStarted").value()},animationEnded:function(e){e=!1!==e,this.shouldChildrenUpdate||i(this.refs).filter("isAnimatable").invokeMap("animationEnded",!1).value();var t,o,r=this._animatableMixin;if(r.animationsCounter&&0==--r.animationsCounter&&(this.setState=r.setStateOrig,this.isCurrentlyAnimating=!1,i.invoke(this,"_onAnimationEnded")),e)if(r.deferredStates.length){for(var s=r.deferredStates,a=0;a<s.length;a+=2)r.setStateOrig.call(this,s[a],s[a+1]);s.length=0}else r.updateOnAnimationEnded&&this.forceUpdate();r.updateOnAnimationEnded=!1,!0===this.forceRedrawOnAnimationEnded&&(t=n.findDOMNode(this),o=t.style.display,t.style.display="none",t.offsetHeight,t.style.display=o)},setStateDeferred:function(e,t){var o=this._animatableMixin.deferredStates,n=o.length;0===n||o[n-1]||t?(o.push(e),o.push(t)):(i.assign(o[n-2],e),o[n-1]=t)},shouldComponentUpdateAnimatable:function(){var e=0===this._animatableMixin.animationsCounter;return e||(this._animatableMixin.updateOnAnimationEnded=!0),e},registerOnAnimationEnd:function(e){this._onAnimationEnded=e},unregisterOnAnimationEnd:function(){this._onAnimationEnded=i.noop}}},124:function(e,t,o){"use strict";var n=o(125),i=o(128);e.exports={Component:n,Aspect:i}},125:function(e,t,o){"use strict";var n=o(0),i=o(4),r=o(8),s=o(5),a=o(3),c=o(36),u=o(11),l=o(1),p=o(126),d=o(127),g=s({displayName:"Popover",mixins:[u.baseComp],propTypes:{id:l.Component.id.isRequired,compProp:l.Component.compProp.isRequired,style:l.Component.style.isRequired,rootContentStyle:l.Popover.rootContentStyle,open:l.Popover.open.isRequired,close:l.Popover.close.isRequired,onPopoverMouseIn:l.Popover.onPopoverMouseIn.isRequired,onPopoverMouseOut:l.Popover.onPopoverMouseOut.isRequired,onTargetMouseIn:l.Popover.onTargetMouseIn.isRequired,onTargetMouseOut:l.Popover.onTargetMouseOut.isRequired,targetBounds:l.Popover.targetBounds,targetPortal:l.Popover.targetPortal,isQAMode:l.isQAMode,children:a.node},hide:function(e){this.props.close(),n.isFunction(e)&&e()},show:function(e,t){this.props.open(e,{closeMethod:this.props.compProp.closeMethod}),n.isFunction(t)&&t()},onDocumentClick:function(e){var t=this.contentWrapperRef.current.getBoundingClientRect();d.isInBounds(t,e.clientX,e.clientY)||this.props.close()},componentWillMount:function(){this.contentWrapperRef=i.createRef()},render:function(){var e=this.props,t=e.id,o=e.compProp,s=e.structure,a=e.style,c=e.targetBounds,u=e.targetPortal,l=e.children,d=e.rootContentStyle;l&&n.assign(a,{pointerEvents:"none"});var g={id:t,style:a};if(this.props.isQAMode&&n.assign(g,{"data-comp":s.componentType}),this.props.targetBounds){var f=function(e,t,o,r){return i.createElement("div",{style:n.defaults(e,{position:"absolute"}),onMouseEnter:o,onMouseLeave:r},t)}(c,function(e,t,o,r,s,a,c){var u={ref:r,style:n.assign({position:"absolute",width:"auto",height:"auto"},p(s.position,s.alignment,s.horizontalOffset,s.verticalOffset)),onMouseEnter:function(e){e.stopPropagation(),a()},onMouseLeave:function(e){e.stopPropagation(),c()},"data-aid":e};return i.createElement("div",u,i.cloneElement(t,{style:o}))}(t,l[0],d,this.contentWrapperRef,o,this.props.onPopoverMouseIn,this.props.onPopoverMouseOut),this.props.onTargetMouseIn,this.props.onTargetMouseOut),m=r.createPortal(f,u);return i.createElement("div",g,m)}return i.createElement("div",g,l)}});e.exports=c({hidePopover:{methodName:"hide"},showPopover:{methodName:"show",params:["targetId"]}})(g)},126:function(e,t,o){"use strict";e.exports=function(e,t,o,n){var i={};switch(e){case"left":i.right="calc(100% - ".concat(o,"px)");break;case"right":i.left="calc(100% + ".concat(o,"px)");break;case"top":i.bottom="calc(100% + ".concat(n,"px)");break;case"bottom":i.top="calc(100% - ".concat(n,"px)")}switch(e){case"left":case"right":switch(t){case"start":i.top=-1*n;break;case"center":i.top="calc(50% - ".concat(n,"px)"),i.transform="translateY(-50%)";break;case"end":i.bottom=-1*n}break;case"top":case"bottom":switch(t){case"start":i.left=o;break;case"center":i.left="calc(50% + ".concat(o,"px)"),i.transform="translateX(-50%)";break;case"end":i.right=o}}return i}},127:function(e,t,o){"use strict";e.exports={isInBounds:function(e,t,o){return t>e.x&&t<e.x+e.width&&o>e.y&&o<e.y+e.height}}},128:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=o(0),s=new WeakMap,a=o(8),c=o(3),u=o(129).CLOSE_METHODS,l={closeMethod:u.OUTER_CLICK},p=function(e,t){var o=e.options[t].closeMethod;e.aspectProps.transaction((function(){e.aspectProps.deactivateMode(t),e.storageAPI.set(t,null),o!==u.MANUAL&&e.aspectProps.unRegisterToDocumentClickEvent(t)})),function(e,t){delete e.closeRequests[t],delete e.options[t]}(e,t)},d=function(e){var t=r.keys(e.storageAPI.getAll());e.aspectProps.transaction((function(){r.forEach(t,(function(t){return p(e,t)}))}))},g=function(e,t){var o=e.closeRequests[t];o&&(clearTimeout(o),delete e.closeRequests[t])},f=function(e,t){e.options[t].closeMethod===u.MOUSE_OUT&&(e.closeRequests[t]=setTimeout(p.bind(null,e,t),500))},m=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;n(this,e),s.set(this,{storageAPI:o,aspectProps:t,closeRequests:{},options:{}})}var t,o,c;return t=e,(o=[{key:"onHostPropsChanged",value:function(e){var t=s.get(this);t.aspectProps.isPopoverAllowed&&!e.isPopoverAllowed&&d(t),e.isPopoverAllowed&&t.aspectProps.isMobileView!==e.isMobileView&&d(t),t.aspectProps=e}},{key:"openPopover",value:function(e,t,o){var n=this.getTargetPortal();if(n){var i=s.get(this);o=r.defaults(o,l),i.aspectProps.transaction((function(){i.options[e]=o,i.aspectProps.activateMode(e),i.storageAPI.set(e,function(e,t,o){var n=e.aspectProps.getComponentByPageAndCompId(t),i=a.findDOMNode(n).getBoundingClientRect(),r=o.getBoundingClientRect();return{top:i.y+e.aspectProps.getScrollPosition().y,left:i.x-r.x,width:i.width,height:i.height}}(i,t,n)),o.closeMethod!==u.MANUAL&&i.aspectProps.registerToDocumentClickEvent(e)}))}}},{key:"onPopoverMouseIn",value:function(e){var t=s.get(this);g(t,e)}},{key:"onPopoverMouseOut",value:function(e){var t=s.get(this);f(t,e)}},{key:"onTargetMouseOut",value:function(e){var t=s.get(this);f(t,e)}},{key:"onTargetMouseIn",value:function(e){var t=s.get(this);g(t,e)}},{key:"closePopover",value:function(e){var t=s.get(this);p(t,e)}},{key:"getTargetBounds",value:function(e){return s.get(this).storageAPI.get(e)}},{key:"getTargetPortal",value:function(){return s.get(this).aspectProps.getTargetPortal()}}])&&i(t.prototype,o),c&&i(t,c),e}();m.aspectName="popoverAspect",m.hostPropTypes={deactivateMode:c.func.isRequired,activateMode:c.func.isRequired,getComponentByPageAndCompId:c.func.isRequired,getScrollPosition:c.func.isRequired,transaction:c.func.isRequired,getTargetPortal:c.func.isRequired,registerToDocumentClickEvent:c.func.isRequired,unRegisterToDocumentClickEvent:c.func.isRequired,isPopoverAllowed:c.bool.isRequired,isMobileView:c.bool.isRequired},e.exports=m},129:function(e,t,o){"use strict";e.exports={CLOSE_METHODS:{MOUSE_OUT:"mouseOut",OUTER_CLICK:"outerClick",MANUAL:"manual"}}},13:function(e,t,o){"use strict";var n=o(14).getEvent,i=o(0),r=o(1);e.exports={propTypes:{id:r.Component.id,handleAction:r.Behaviors.handleAction,compActions:r.Component.compActions,now:r.Utils.logging.performance.now},handleAction:function(e,t){var o=i.get(this.props.compActions,e);o&&this.props.handleAction(o,n.call(this,t))}}},14:function(e,t,o){"use strict";var n=o(0);t.getEvent=function(e){var t={id:n.get(e,"id")||this.props?this.props.id:null,timeStamp:this.props&&this.props.now?this.props.now():null};return e?(t.timeStamp=e.timeStamp||t.timeStamp,n.defaults(t,e)):t}},15:function(e,t,o){"use strict";var n=o(0),i=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return n.get(e,[t,o],0)},r=function(e){return n.hasIn(e,["left"])&&n.hasIn(e,["right"])},s=function(e){return i(e,"left","px")>0||i(e,"right","px")>0},a=function(e){return i(e,"left","vw")>0||i(e,"right","vw")>0},c=function(e){return r(e)&&function(e){return s(e)?"".concat(i(e,"left"),"px"):a(e)?"".concat(i(e,"left","vw"),"vw"):null}(e)||"0"},u=function(e){if(!r(e))return"100%";var t=function(e){if(s(e)){var t=i(e,"left")+i(e,"right");return"".concat(t,"px")}if(a(e)){var o=i(e,"left","vw")+i(e,"right","vw");return"".concat(o,"vw")}return null}(e);return t?"calc(100% - ".concat(t,")"):"100%"};e.exports=function(e,t,o){return e?{left:"0",marginLeft:"0",width:"".concat(t,"px")}:{left:"0",marginLeft:c(o),width:u(o),minWidth:o?"initial":"".concat(t,"px")}}},16:function(e,t,o){"use strict";e.exports={BASE_COMP_ACTIONS:{click:"onClick",dblClick:"onDoubleClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave"}}},19:function(e,t,o){"use strict";var n=o(3),i=n.shape({languageCode:n.string,name:n.string,iconUrl:n.string}),r=n.shape({bottom:n.oneOfType([n.string,n.number]),height:n.oneOfType([n.string,n.number]),left:n.oneOfType([n.string,n.number]),position:n.string,right:n.oneOfType([n.string,n.number]),top:n.oneOfType([n.string,n.number]),width:n.oneOfType([n.string,n.number])}),s=n.shape({px:n.number,vw:n.number}),a=n.objectOf(n.shape({id:n.string.isRequired,width:n.number.isRequired,height:n.number.isRequired,alignment:n.number.isRequired}));e.exports={Definitions:{isInSSR:n.bool,isInSeo:n.bool,isMobileView:n.bool,isVisualFocusEnabled:n.bool,isDebugMode:n.bool,isQAMode:n.bool,hideComponentsListForQa:n.string,getRootIdsWhichShouldBeRendered:n.func,isExperimentOpen:n.func,getExperimentValue:n.func,setCustomClickOccurred:n.func,reportBI:n.func,currentUrl:n.shape({query:n.shape({lang:n.string}),host:n.string}),siteWidth:n.number,rootWidth:n.string,animations:n.object,isSiteBusy:n.func,isPreviewMode:n.bool,isCurrentPageLandingPage:n.bool,santaBase:n.string,RendererModel:{multilingual:{isEnabled:n.bool,languages:n.arrayOf(i),currentLanguage:i,setCurrentLanguageCode:n.func,originalLanguage:i},geo:n.string,siteMetaData:{contactInfo:n.object,quickActions:{configuration:n.object,socialLinks:n.string,colorScheme:n.string}},documentType:n.string,siteTitleSEO:n.string,userId:n.string,metaSiteId:n.string,useSandboxInHTMLComp:n.bool,siteId:n.string,clientSpecMap:n.object,languageCode:n.string,siteMediaToken:n.string,mediaAuthToken:n.string,premiumFeatures:n.array,isResponsive:n.bool,currency:n.string,timeZone:n.string,multiCurrency:{currentCurrency:n.string}},currentUrlPageId:n.string,Modes:{getActiveModes:n.func,activateModeById:n.func,deactivateModeById:n.func,switchModesByIds:n.func,triggerFakeModeChange:n.func},Scrollable:{registerToInnerScroll:n.func,unregisterInnerScroll:n.func},SiteAspects:{windowScrollEvent:n.object,windowResizeEvent:n.object,actionsAspect:n.object,siteMembers:n.object,siteScrollingBlocker:n.object,svSessionChangeEvent:n.object,siteMetadataChangeAspect:n.object,windowFocusEvents:n.object,windowKeyboardEvent:n.object,windowTouchEvents:n.object,windowClickEventAspect:n.object,viewportChangeAspect:n.object,anchorChangeEvent:n.object,externalScriptLoader:n.object,mediaAspect:n.object,designDataChangeAspect:n.object,tpaComponentsDomAspect:n.object,tpaPageNavigationAspect:n.object,dynamicClientSpecMapAspect:n.object,fontsLoaderAspect:n.object},Media:{shouldRenderSrc:n.bool,imageUrlPreMeasureParams:n.object,registerPlayer:n.func,unregisterPlayer:n.func,updatePlayerState:n.func,globalImageQuality:n.object,renderParts:n.object,playbackUrl:n.string,flipTransformStyle:n.object,playbackFormat:n.string,playbackConfig:n.object,canVideoPlayInline:n.bool,playerPlaybackState:n.string,playbackState:n.string,getIsPlaybackPlayIntent:n.func,fullscreen:n.bool,volume:n.number,muted:n.bool,controlsData:n.object,enableBackgroundVideo:n.bool,SiteBackground:{data:n.object,mediaQuality:n.string,renderParts:n.object,playbackUrl:n.string,playbackFormat:n.string,playbackConfig:n.object},Popup:{data:n.object,mediaQuality:n.string,renderParts:n.object,playbackUrl:n.string,playbackFormat:n.string,playbackConfig:n.object},enableMaskedVideo:n.bool,mask:n.object,dropShadow:n.object,maskPosterFallback:n.object,lazyLoad:n.bool},MediaPlatform:{uploadFile:n.func},NativeComponentSantaTypes:{publicData:n.object,sectionUrls:n.arrayOf(n.object),widgetStyle:n.object,instance:n.string,resizeComponent:n.func,viewMode:n.string,formFactor:n.string,deviceType:n.string,appLoadBI:n.object,getComponent:n.func,loadFonts:n.func,registerToSiteReady:n.func,handleEvent:n.func,deadComponentTranslations:n.object},ColumnsContainer:{childrenData:a},Fonts:{fontsMap:n.array},Popover:{open:n.func,close:n.func,rootContentStyle:n.object,onPopoverMouseIn:n.func,onPopoverMouseOut:n.func,onTargetMouseIn:n.func,onTargetMouseOut:n.func,targetBounds:n.object,targetPortal:n.object},InlinePopup:{open:n.func,close:n.func,isOpen:n.bool,isTargetOpen:n.bool},DocumentClickEvent:{registerToDocumentClickEvent:n.func,unRegisterToDocumentClickEvent:n.func},Container:{defaultBackgroundStyle:n.object,defaultContentArea:n.object},Component:{isCollapsed:n.bool,isHorizontallyDocked:n.bool,id:n.string,refInParent:n.string,rootId:n.string,pageId:n.string,compActions:n.object,structure:n.shape({componentType:n.string.isRequired,dataQuery:n.oneOfType([n.string,n.object]),propertyQuery:n.oneOfType([n.string,n.object]),designQuery:n.oneOfType([n.string,n.object]),behaviorQuery:n.oneOfType([n.string,n.object]),components:n.array,skin:n.string,styleId:n.string,id:n.string,type:n.string}),styleParam:{textAlignment:n.string,colorScheme:n.string},childrenLayout:n.object,childrenStyle:n.object,fixedChildrenIDs:n.array,pinnedChildrenIDs:n.object,rootNavigationInfo:n.shape({pageId:n.string.isRequired,title:n.string,pageAdditionalData:n.string,pageItemId:n.string,pageItemAdditionalData:n.string,transition:n.string,anchorData:n.string}),currentUrlPageId:n.string,pageStub:n.bool,styleId:n.string,skin:n.string,getStyleData:n.func,compProp:n.object,compData:n.object,compDesign:n.object,renderFixedPosition:n.bool,layout:n.object,style:r,meshParams:n.object,rotationInDegrees:n.number,scale:n.number,flip:n.string,currentUrlPageTitle:n.string,dimensions:n.shape({x:n.number.isRequired,y:n.number.isRequired,width:n.number.isRequired,height:n.number.isRequired}),compStaticBehaviors:n.array,theme:n.object,compBehaviors:n.array,trackBehaviorsToExecute:n.func,isHiddenOnStart:n.bool,shouldHideAnimatable:n.bool},Theme:{all:n.object,colors:n.array,colorsMap:n.array,THEME_DATA:n.object},Behaviors:{handleAction:n.func,registerBehaviors:n.func,setBehaviorsForActions:n.func,convertBehaviors:n.func,handleBehavior:n.func},Layout:{reLayoutIfPending:n.func,registerReLayoutPending:n.func,registerLayoutFunc:n.func,responsiveContainerClassName:n.string,layoutContainerClassName:n.string,layoutContainerWrapperClassName:n.string,layoutContainerOverflowWrapperClassName:n.string,shouldRenderOverflowWrapper:n.bool,layoutComponentClassName:n.string,isMeshLayoutMechanism:n.bool},Utils:{logging:{performance:{now:n.func}},logger:n.shape({error:n.func.isRequired})},Device:{isTouchDevice:n.bool,isMobileDevice:n.bool,devicePixelRatio:n.number,isTabletDevice:n.func,isDesktopDevice:n.func},Mobile:{cannotHideIframeWithinRoundedCorners:n.bool,siteZoomRatio:n.number,invertedZoomRatio:n.number,orientationZoomFix:n.number,mobileZoom:n.number},RenderFlags:{allowSiteOverflow:n.bool,all:n.object,allowShowingFixedComponents:n.bool,componentPreviewState:n.string,componentViewMode:n.string,hideSiteBackground:n.bool,ignoreComponentCollapsedProperty:n.bool,ignoreComponentHiddenProperty:n.bool,isBackToTopButtonAllowed:n.bool,isComponentTransitionAllowed:n.bool,isComponentVisible:n.bool,isExternalNavigationAllowed:n.bool,isPlayingAllowed:n.bool,isSlideShowGalleryClickAllowed:n.bool,isSocialInteractionAllowed:n.bool,isTinyMenuOpenAllowed:n.bool,isWixAdsAllowed:n.bool,isZoomAllowed:n.bool,renderFixedPositionBackgrounds:n.bool,renderFixedPositionContainers:n.bool,siteScale:n.number,shouldBlockGoogleMapInteraction:n.bool,shouldRenderTPAsIframe:n.bool,shouldResetComponent:n.bool,shouldResetGalleryToOriginalState:n.bool,shouldResetSlideShowNextPrevButtonsPosition:n.bool,shouldResetSubscribeFormMinMaxWidth:n.bool,shouldResetTinyMenuZIndex:n.bool,showControllers:n.bool,showHiddenComponents:n.bool},RenderRealtimeConfig:{previewTooltipCallback:n.func,shouldHideTextComponent:n.bool,shouldHideComponent:n.bool,shouldShowComponentOnTop:n.bool,componentOpacity:n.number},RawSvg:{getRawSVG:n.string},Animations:{animationProperties:n.object},ServiceTopology:{scriptsDomainUrl:n.string,staticMediaUrl:n.string,staticVideoUrl:n.string,staticAudioUrl:n.string,scriptsLocationMap:n.object,getMediaFullStaticUrl:n.func,adaptiveVideoDomain:n.string,serviceTopology:n.object,getStaticHTMLComponentUrl:n.string,staticHTMLComponentUrl:n.string},Browser:{browser:n.object},BrowserFlags:{cssFiltersSupported:n.bool,ios:n.func,forceOverflowScroll:n.func,animateTinyMenuIcon:n.func,highlightAnchorsInMenu:n.func,positionFixedShouldBeAbsoluteAtPageBottom:n.func,mixBlendModeSupported:n.func,webglCrossOriginSupported:n.func,webglVideoTextureSupported:n.func,clipParallaxWithWebkitClipPath:n.func,fixedBackgroundColorBalata:n.bool,fixedSiteBackground:n.bool,useDropShadowFilterOnVideo:n.bool,cssFeatureQueriesSupported:n.bool},Images:{onImageUnmount:n.func},__DangerousSantaTypes:{getRenderedMasterPageHeight:n.func,getWindowSize:n.func,getSliderGalleryMeasures:n.func,getPaginatedGridGalleryMeasures:n.func,getCustomMeasureMap:n.func,getWindowInnerHeight:n.func},DAL:{setCompState:n.func,setCompData:n.func,setCompProps:n.func,removeCompState:n.func},PageGroup:{pagesToRender:n.array,createPageProps:n.func,stubifyPage:n.func},Repeater:{templateLayout:n.shape({repeaterWidth:n.number,templateWidth:n.number,docked:n.shape({left:s,top:s,right:s,bottom:s}),itemCount:n.number}),setDisplayedOnlyCompsTemplateId:n.func,clearDisplayedOnlyCompsTemplateId:n.func},SiteButton:{link:n.object,impliedLink:n.object},Tags:{tagList:n.array},WPhoto:{Link:n.object},WRichText:{Links:n.object},Link:{renderedLink:n.object,renderInfo:n.shape({primaryPageId:n.string,currentUrl:n.object,currentUrlPageId:n.string,urlFormat:n.string,mainPageId:n.string,externalBaseUrl:n.string,unicodeExternalBaseUrl:n.string,publicBaseUrl:n.string,isFeedbackEndpoint:n.bool,isSiteHistoryEndpoint:n.bool,isViewerMode:n.bool,isWixSite:n.bool,languageCode:n.string,isTemplate:n.bool,isUsingSlashUrlFormat:n.bool,isPremiumDomain:n.bool,serviceTopology:n.shape({staticDocsUrl:n.string,basePublicUrl:n.string,baseDomain:n.string}),rendererModel:n.shape({runningExperiments:n.object}),cookie:n.string,routersConfigMap:n.object,allPageIds:n.array,pagesDataItemsMap:n.object,mapFromPageUriSeoToPageId:n.object,isPermalink:n.func,rootNavigationInfo:n.object})},VectorImage:{svgId:n.string,link:n.object,strokeWidth:n.number,svgString:n.string,svgStringFromCropData:n.string,svgInfo:n.object,legacySvgString:n.string,legacySvgInfo:n.object,svgType:n.string,overrideColorsAsCss:n.array,shapeStyle:n.object,preserveViewBox:n.bool,shouldScaleStroke:n.bool,svgPropsForMemberLoginIconItems:n.object,svgPropsMapForMediaControls:n.object,flipTransformStyle:n.object},GoogleMap:{locations:n.array,imageId:n.string,imageBaseUrl:n.string,language:n.string},WixAds:{wixTopAdsHeight:n.number},WixUserSantaTypes:{userLanguage:n.string,userLanguageDirection:n.string},JsonLd:{renderer:n.func},Audio:{isPlaying:n.bool,isSoundManagerOnResetup:n.bool,soundManagerReady:n.bool,createAudioObj:n.func,updatePlayingComp:n.func,updatePausingComp:n.func,onHTML5ErrorTryToReloadWithFlash:n.func},TPA:{data:n.shape({isModalOpen:n.bool,queryParams:n.object}),showModal:n.func,removeModal:n.func,showPopup:n.func,removePopup:n.func,removeAllPopups:n.func,deleteCompListeners:n.func,initialClientSpecMap:n.object,publish:n.func,subscribe:n.func,unsubscribe:n.func,handleTPAMessage:n.func,sendPostMessage:n.func,callHandler:n.func,seoHtmlContent:n.string,loadingTranslation:n.string},AspectComponent:{addComponent:n.func,deleteComponent:n.func},SocialShareHandler:{handleShareRequest:n.func,shortenURL:n.func},VerticalAnchorsMenu:{updateInformation:n.func,updateImageInfo:n.func,registerToMeanColor:n.func,unregisterToMeanColor:n.func,getOverlappingBackgroundBrightness:n.func,activeAnchor:n.object,getAnchorLinkItems:n.func,registerToActiveAnchor:n.func,unregisterToActiveAnchor:n.func},HtmlPostMessage:{registerComponent:n.func,unRegisterComponent:n.func},Pinterest:{data:n.object},MemberLogin:{language:n.string,memberName:n.string,memberAvatar:n.string,memberDefaultAvatar:n.string,isLoggedIn:n.bool,isConnectedToLoginData:n.bool,menuItems:n.array,iconItems:n.array},AnchorChange:{activeAnchorData:n.object,activeAnchorId:n.object},AppController:{isVisible:n.bool,applicativeUIData:n.shape({icon:n.string.isRequired})},Activity:{activityInfo:n.shape({currentUrl:n.object,hubSecurityToken:n.number,metaSiteId:n.string,svSession:n.string,baseUrl:n.string})},mobile:{cannotHideIframeWithinRoundedCorners:n.func,isZoomed:n.func,isZoomedIn:n.func,getInvertedZoomRatio:n.func,isAndroidOldBrowser:n.bool,isPortrait:n.func,mobileZoomByScreen:n.func,isLandscape:n.func},Navigation:{updateUrlIfNeeded:n.func,href:n.func,navigateToRenderedLink:n.func},CompDesign:{containerStyle:n.object},MediaPlayerDesign:{containerStyle:n.object},Menu:{siteMenuWithRenderForTinyMenu:n.array,siteMenuWithRender:n.array,menuItems:n.array},urlFormat:n.string,getMainPageUrl:n.func,getCurrentUrl:n.func,biData:n.object,biVisitorId:n.string,isViewerMode:n.bool,globalImageQuality:n.object,getScreenWidth:n.func,getScreenHeight:n.func,screenSize:n.object,getScrollBarWidth:n.func,forceBackground:n.func,disableForcedBackground:n.func,currentPopupId:n.string,isTemplate:n.bool,isPremiumUser:n.bool,popupPage:{close:n.func},popup:{open:n.func},NonPageItemZoom:{zoom:n.func,unzoom:n.func,currentItem:n.object},scrollToAnchor:n.func,navigateToPage:n.func,passClickEvent:n.func,RequestModel:{cookie:n.string,language:n.string},PublicModel:{externalBaseUrl:n.string,siteRevision:n.number,renderType:n.string},isZoomOpened:n.bool,isFacebookSite:n.bool,Location:{origin:n.string},primaryPageId:n.string,getPrimaryPageId:n.func,mainPageId:n.string,reportBeatEvent:n.func,getExistingRootNavigationInfo:n.func,pageUrl:n.string,pageUrlWithHash:n.string,getClientSpecMapEntry:n.func,enterFullScreenMode:n.func,exitFullScreenMode:n.func,enterOverflowHiddenMode:n.func,exitOverflowHiddenMode:n.func,enterMediaZoomMode:n.func,exitMediaZoomMode:n.func,ContactFormSantaTypes:{contactFormTranslations:n.object,orderedFields:n.array,errorMessage:n.string,validationErrorMessage:n.string,compMasterPageData:n.bool,isDynamicContactForm:n.bool,siteApiForPromoteAnalytics:n.object},SiteMembersSantaTypes:{smSettings:n.object,isSiteMembersDialogsOpenAllowed:n.bool,siteMembersUrl:n.string,forgotPasswordToken:n.string,dialogToDisplay:n.string,isSiteMembersDialogOpen:n.bool,isLoggedIn:n.bool,logout:n.func,showAuthenticationDialog:n.func,getMemberDetails:n.func,memberDetails:n.string,memberDetailsInPreview:n.string,reportSiteMembersBi:n.func,registerToMemberDetailsChange:n.func,unRegisterMemberDetailsChange:n.func},StoreSantaTypes:{loadBatch:n.func},QuickActions:{dynamicActions:n.array,structuredAction:n.object},viewerSessionId:n.string,isSinglePostPage:n.bool,rootPageTitle:n.object,getUniquePageId:n.func,Page:{markVisitedPage:n.func,isPopupPage:n.bool,popupAlignment:n.object},viewportStates:n.bool,isClientAfterSSR:n.bool,isFirstRenderAfterSSR:n.bool,isTpaRenderedInSsr:n.bool,isGoogleBot:n.bool,isCacheable:n.bool,compFactoryRuntimeState:n.object,resetCustomClickOccurred:n.func,shouldEnableMobileAnimations:n.bool,LoginButton:{language:n.string,actionTitle:n.string,memberTitle:n.string,isReadyToShow:n.bool},Social:{CurrentPageSocialUrl:n.string,MainPageSocialUrl:n.string},VK:{size:n.shape({width:n.number})},SlideShow:{slideStyle:n.object,canAutoPlay:n.bool,slidesIndexes:n.array,startAutoPlayInViewport:n.func,stopAutoPlayInViewport:n.func},pageMinHeightDefault:n.number,Accessibility:{languageCodeForAriaLabel:n.string,getTranslatedAriaLabel:n.func,prefersReducedMotion:n.bool},Translations:{getTranslationAllKeys:n.func},Responsive:{componentStyleBreakpointsData:n.object,getBreakpointMediaQuery:n.func},HeaderContainer:{isAfterScroll:n.bool},CustomElements:{previewUrl:n.string}}}},2:function(e,o){e.exports=t},3:function(e,t){e.exports=o},36:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,o){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(o):i.value}})(e,t,o||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=o(0),p=o(1),d=function(e,t,o){l.forEach(t,(function(t){var n=o[t.name];if(n&&l.isFunction(e[n.methodName])){var i=function(e,t){var o=l.map(e.params,(function(e){return l.isString(e)?t.params[e]:l.get(t.params,e.name,e.defaultValue)}));return t.callback?o.concat(t.callback):o}(n,t);e[n.methodName].apply(e,i)}}))};e.exports=function(e){return function(t){var o=function(t){function o(){return i(this,o),s(this,c(o).apply(this,arguments))}var n,p,g;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,t),n=o,(p=[{key:"componentWillMount",value:function(){var t=this;l.isFunction(a(c(o.prototype),"componentWillMount",this))&&a(c(o.prototype),"componentWillMount",this).call(this),this.dispose=this.props.trackBehaviorsToExecute((function(o){return d(t,o,e)}))}},{key:"componentWillUnmount",value:function(){l.isFunction(a(c(o.prototype),"componentWillUnmount",this))&&a(c(o.prototype),"componentWillUnmount",this).call(this),this.dispose()}}])&&r(n.prototype,p),g&&r(n,g),o}(t);return o.displayName="withBehaviors(".concat(t.displayName,")"),o.propTypes=l.assign({trackBehaviorsToExecute:p.Component.trackBehaviorsToExecute.isRequired},t.propTypes),o}}},4:function(e,t){e.exports=n},5:function(e,t){e.exports=i},8:function(e,t){e.exports=r},9:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=o(0);e.exports=function e(t,o){return i.reduce(t,(function(t,r,s){var a,c,u=o?"".concat(o,".").concat(s):s;switch(n(r)){case"function":return(c=(a=r).bind(null)).isRequired=a.isRequired.bind(null),(r=c).id=u,r.isRequired.id=u,i.set(t,s,r);case"object":return i.set(t,s,e(r,u));default:throw new Error("wtf:".concat(s))}}),{})}}})}));
//# sourceMappingURL=santa-component-popover.prod.js.map