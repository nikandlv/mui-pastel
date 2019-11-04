(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{283:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),random_seed=__webpack_require__(114),random_seed_default=__webpack_require__.n(random_seed),Chip=(__webpack_require__(36),__webpack_require__(37),__webpack_require__(41),__webpack_require__(32),__webpack_require__(30),__webpack_require__(59),__webpack_require__(257),__webpack_require__(4),__webpack_require__(260),__webpack_require__(261),__webpack_require__(28),__webpack_require__(44),__webpack_require__(38),__webpack_require__(641)),green=__webpack_require__(624),amber=__webpack_require__(625),red=__webpack_require__(117),blue=__webpack_require__(626),orange=__webpack_require__(627),lime=__webpack_require__(628),purple=__webpack_require__(629),teal=__webpack_require__(630),pink=__webpack_require__(118),indigo=__webpack_require__(119),deepPurple=__webpack_require__(631),deepOrange=__webpack_require__(632),cyan=__webpack_require__(633),lightBlue=__webpack_require__(634),yellow=__webpack_require__(635),lightGreen=__webpack_require__(636),withStyles=__webpack_require__(640);function _typeof2(obj){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(obj){return _typeof2(obj)}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj)})(obj)}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var styles={chip:{margin:1,color:"#000000","&.style-1,&.style-green":{backgroundColor:green.a.A100},"&.style-2,&.style-amber":{backgroundColor:amber.a.A100},"&.style-3,&.style-red":{backgroundColor:red.a.A100},"&.style-4,&.style-blue":{backgroundColor:blue.a.A100},"&.style-5,&.style-orange":{backgroundColor:orange.a.A100},"&.style-6,&.style-lime":{backgroundColor:lime.a.A100},"&.style-7,&.style-purple":{backgroundColor:purple.a.A100},"&.style-8,&.style-teal":{backgroundColor:teal.a.A100},"&.style-9,&.style-pink":{backgroundColor:pink.a.A100},"&.style-9,&.style-indigo":{backgroundColor:indigo.a.A100},"&.style-10,&.style-deepPurple":{backgroundColor:deepPurple.a.A100},"&.style-11,&.style-deepOrange":{backgroundColor:deepOrange.a.A100},"&.style-12,&.style-cyan":{backgroundColor:cyan.a.A100},"&.style-13,&.style-lightBlue":{backgroundColor:lightBlue.a.A100},"&.style-14,&.style-yellow":{backgroundColor:yellow.a.A100},"&.style-15,&.style-lightGreen":{backgroundColor:lightGreen.a.A100},"&.style-16,&.style-default":{}}},Pastel_Pastel=function(_React$Component){function Pastel(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Pastel),(_this=_possibleConstructorReturn(this,_getPrototypeOf(Pastel).call(this,props))).rand=function randomBetween(generator,min,max){return generator.intBetween(min,max)}(function seededGenerator(str){if(void 0===str)return random_seed_default.a.create();var seed=str="".concat(str).substr(0,20)+str.length;return random_seed_default.a.create(seed)}(props.label),1,16),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Pastel,react_default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Pastel,[{key:"render",value:function(){var props=this.props,classes=this.props.classes,color=this.props.color||null;return react_default.a.createElement(Chip.a,_extends({className:"".concat(classes.chip," style-").concat(null===color?this.rand:color)},props,{classes:null,color:"default"}))}}]),Pastel}(),lib_Pastel=Object(withStyles.a)(styles)(Pastel_Pastel),Grid=__webpack_require__(637),Card=__webpack_require__(642),CardContent=__webpack_require__(638),Typography=__webpack_require__(639);function PastelDemo(){return react_default.a.createElement("div",null,react_default.a.createElement(Grid.a,{container:!0,justify:"center"},react_default.a.createElement(Grid.a,{item:!0,xs:12,sm:10,md:5,lg:4},react_default.a.createElement("br",null),react_default.a.createElement("br",null),react_default.a.createElement("br",null),react_default.a.createElement(Card.a,null,react_default.a.createElement(CardContent.a,null,react_default.a.createElement(Typography.a,{variant:"h4",gutterBottom:!0},"Auto colored pastels"),react_default.a.createElement(Typography.a,{variant:"body1",gutterBottom:!0},'The colors will stay the same for a specific label ex, "hello" will always result in the same color!'),react_default.a.createElement("br",null),react_default.a.createElement(lib_Pastel,{label:"Hello!"}),react_default.a.createElement(lib_Pastel,{label:"Goodbye!"}),react_default.a.createElement(lib_Pastel,{label:"Small size chip",size:"small"}),react_default.a.createElement(lib_Pastel,{label:"Medium!",size:"medium"}),react_default.a.createElement(lib_Pastel,{label:"Default size"}),react_default.a.createElement(lib_Pastel,{label:"Admin"}),react_default.a.createElement(lib_Pastel,{label:"User"}),react_default.a.createElement(lib_Pastel,{label:"Permission"}))),react_default.a.createElement("br",null),react_default.a.createElement(Card.a,null,react_default.a.createElement(CardContent.a,null,react_default.a.createElement(Typography.a,{variant:"h4",gutterBottom:!0},"One colored pastels"),react_default.a.createElement(Typography.a,{variant:"body1",gutterBottom:!0},"You can choose which color you want by passing the following props"),react_default.a.createElement(lib_Pastel,{label:'color="amber"',color:"amber"}),react_default.a.createElement("br",null),react_default.a.createElement("br",null),react_default.a.createElement(lib_Pastel,{label:"lightBlue",color:"lightBlue"}),react_default.a.createElement(lib_Pastel,{label:"green",color:"green"}),react_default.a.createElement(lib_Pastel,{label:"red",color:"red"}),react_default.a.createElement(lib_Pastel,{label:"blue",color:"blue"}),react_default.a.createElement(lib_Pastel,{label:"amber",color:"amber"}),react_default.a.createElement(lib_Pastel,{label:"lime",color:"lime"}),react_default.a.createElement(lib_Pastel,{label:"orange",color:"orange"}),react_default.a.createElement(lib_Pastel,{label:"purple",color:"purple"}),react_default.a.createElement(lib_Pastel,{label:"teal",color:"teal"}),react_default.a.createElement(lib_Pastel,{label:"pink",color:"pink"}),react_default.a.createElement(lib_Pastel,{label:"indigo",color:"indigo"}),react_default.a.createElement(lib_Pastel,{label:"deepOrange",color:"deepOrange"}),react_default.a.createElement(lib_Pastel,{label:"deepPurple",color:"deepPurple"}),react_default.a.createElement(lib_Pastel,{label:"yellow",color:"yellow"}),react_default.a.createElement(lib_Pastel,{label:"lightGreen",color:"lightGreen"}),react_default.a.createElement(lib_Pastel,{label:"default",color:"default"}))))))}__webpack_exports__.a=PastelDemo;PastelDemo.__docgenInfo={description:"",methods:[],displayName:"PastelDemo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/PastelDemo.js"]={name:"PastelDemo",docgenInfo:PastelDemo.__docgenInfo,path:"lib/PastelDemo.js"})},287:function(module,exports,__webpack_require__){__webpack_require__(288),__webpack_require__(392),module.exports=__webpack_require__(393)},393:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(42),__webpack_require__(30),__webpack_require__(28),__webpack_require__(43),__webpack_require__(38);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(80),imports=__webpack_require__(602);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{showDownPanel:!1,showAddonPanel:!1,isToolshown:!1}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){imports.keys().forEach(function(filename){return imports(filename)})},module)}.call(this,__webpack_require__(195)(module))},602:function(module,exports,__webpack_require__){var map={"./index.stories.js":603};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=602},603:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(80),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_lib_PastelDemo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(283),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_PastelDemo__WEBPACK_IMPORTED_MODULE_2__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Demos",module).add("Pastel Demo",function(){return _ref})}.call(this,__webpack_require__(195)(module))}},[[287,1,2]]]);
//# sourceMappingURL=main.9e70a29fdf08e820c78b.bundle.js.map