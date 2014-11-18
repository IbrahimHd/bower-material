/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-8975ee8
 */
goog.provide('ng.material.components.dialog');
goog.require('ng.material.components.backdrop');
goog.require('ng.material.core');
!function(){"use strict";function e(e,t){return{restrict:"E",link:function(o,n){t(n),e(function(){var e=n[0].querySelector("md-content");e&&e.scrollHeight>e.clientHeight&&n.addClass("md-content-overflow")})}}}function t(e){function t(e){return{template:['<md-dialog aria-label="{{dialog.label}}">',"<md-content>","<h2>{{ dialog.title }}</h2>","<p>{{ dialog.content }}</p>","</md-content>",'<div class="md-actions">','<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">',"{{ dialog.cancel }}","</md-button>",'<md-button ng-click="dialog.hide()" class="md-primary">',"{{ dialog.ok }}","</md-button>","</div>","</md-dialog>"].join(""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0}}function o(e,t,o,n,a,i,l,c,r,d,s){function u(a,i,r){function d(){var e=i[0].querySelector(".dialog-close");if(!e){var t=i[0].querySelectorAll(".md-actions button");e=t[t.length-1]}return angular.element(e)}r.parent=angular.element(r.parent),r.popInTarget=angular.element((r.targetEvent||{}).target);var u=d();return p(i.find("md-dialog")),r.hasBackdrop&&(r.backdrop=o('<md-backdrop class="md-opaque ng-enter">')(a),c.inherit(r.backdrop,r.parent),n.enter(r.backdrop,r.parent,null)),g(i,r.parent,r.popInTarget.length&&r.popInTarget).then(function(){r.escapeToClose&&(r.rootElementKeyupCallback=function(t){t.keyCode===l.KEY_CODE.ESCAPE&&e(s.cancel)},t.on("keyup",r.rootElementKeyupCallback)),r.clickOutsideToClose&&(r.dialogClickOutsideCallback=function(t){t.target===i[0]&&e(s.cancel)},i.on("click",r.dialogClickOutsideCallback)),u.focus()})}function m(e,o,a){return a.backdrop&&(n.leave(a.backdrop),o.data("backdrop",void 0)),a.escapeToClose&&t.off("keyup",a.rootElementKeyupCallback),a.clickOutsideToClose&&o.off("click",a.dialogClickOutsideCallback),n.leave(o).then(function(){o.remove(),a.popInTarget&&a.popInTarget.focus()})}function p(e){e.attr({role:"dialog"});var t=e.find("md-content");0===t.length&&(t=e),a.expectAsync(e,"aria-label",function(){var e=t.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function g(e,t,o){function n(t){t.target===e[0]&&(e.off(l.CSS.TRANSITIONEND,n),a.resolve())}var a=d.defer();t.append(e);var i;if(o){var c=o[0].getBoundingClientRect();i="translate3d("+(c.left-e[0].offsetWidth)+"px,"+(c.top-e[0].offsetHeight)+"px,0) scale(0.2)"}else i="translate3d(0,100%,0) scale(0.5)";return e.css(l.CSS.TRANSFORM,i).css("opacity",0),r(function(){r(function(){e.addClass("md-active").css(l.CSS.TRANSFORM,"").css("opacity","").on(l.CSS.TRANSITIONEND,n)})}),a.promise}return{hasBackdrop:!0,isolateScope:!0,onShow:u,onRemove:m,clickOutsideToClose:!0,escapeToClose:!0,targetEvent:null,transformTemplate:function(e){return'<div class="md-dialog-container">'+e+"</div>"}}}var n=["title","content","ariaLabel","ok"];return t.$inject=["$mdDialog"],o.$inject=["$timeout","$rootElement","$compile","$animate","$mdAria","$mdUtil","$mdConstant","$mdTheming","$$rAF","$q","$mdDialog"],e("$mdDialog").setDefaults({methods:["hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent"],options:o}).addPreset("alert",{methods:n,options:t}).addPreset("confirm",{methods:n.concat("cancel"),options:t})}angular.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",t),e.$inject=["$$rAF","$mdTheming"],t.$inject=["$$interimElementProvider"]}();