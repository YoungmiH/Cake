(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1096:function(e,t,n){var a=n(402);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,a,i,l){var c,o=e.lambda,u=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="list-item '+u(o(null!=t?s(t,"type"):t,t))+'">\n  <span class="filter-tag filter-'+u(o(null!=t?s(t,"type"):t,t))+'" title="'+u(o(null!=t?s(t,"value"):t,t))+" "+u(o(null!=t?s(t,"type"):t,t))+' filter">\n    <span class="search-tag">'+u(o(null!=t?s(t,"value"):t,t))+'</span>\n    <a class="filter-action close-icon" href="#" title="Remove '+u(o(null!=t?s(t,"value"):t,t))+" "+u(o(null!=t?s(t,"type"):t,t))+' filter">'+(null!=(c=e.invokePartial(n(1097),t,{name:"icons/24px/cancel",data:l,helpers:a,partials:i,decorators:e.decorators}))?c:"")+"</a>\n  </span>\n</div>\n"},usePartial:!0,useData:!0})},1097:function(e,t,n){var a=n(402);e.exports=(a.default||a).template({1:function(e,t,n,a,i){var l,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'aria-label="'+e.escapeExpression("function"==typeof(l=null!=(l=c(n,"aria-label")||(null!=t?c(t,"aria-label"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"aria-label",hash:{},data:i,loc:{start:{line:1,column:167},end:{line:1,column:181}}}):l)+'"'},3:function(e,t,n,a,i){return'aria-hidden="true"'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l,c,o=null!=t?t:e.nullContext||{},u=e.hooks.helperMissing,s=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" role="img" '+(null!=(l=r(n,"if").call(o,null!=t?r(t,"aria-label"):t,{name:"if",hash:{},fn:e.program(1,i,0),inverse:e.program(3,i,0),data:i,loc:{start:{line:1,column:137},end:{line:1,column:215}}}))?l:"")+' tabindex="-1"><defs><path id="a-'+s("function"==typeof(c=null!=(c=r(n,"uuid")||(null!=t?r(t,"uuid"):t))?c:u)?c.call(o,{name:"uuid",hash:{},data:i,loc:{start:{line:1,column:248},end:{line:1,column:256}}}):c)+'" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><mask id="b-'+s("function"==typeof(c=null!=(c=r(n,"uuid")||(null!=t?r(t,"uuid"):t))?c:u)?c.call(o,{name:"uuid",hash:{},data:i,loc:{start:{line:1,column:518},end:{line:1,column:526}}}):c)+'" fill="#fff"><use xlink:href="#a-'+s("function"==typeof(c=null!=(c=r(n,"uuid")||(null!=t?r(t,"uuid"):t))?c:u)?c.call(o,{name:"uuid",hash:{},data:i,loc:{start:{line:1,column:560},end:{line:1,column:568}}}):c)+'"/></mask><g fill="#FFF" mask="url(#b-'+s("function"==typeof(c=null!=(c=r(n,"uuid")||(null!=t?r(t,"uuid"):t))?c:u)?c.call(o,{name:"uuid",hash:{},data:i,loc:{start:{line:1,column:606},end:{line:1,column:614}}}):c)+')"><path d="M0 0h24v24H0z"/></g></g></svg>'},useData:!0})},490:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),l=n(4),c=n.n(l),o=n(5),u=n(776),s=n(1096),r=n.n(s);function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var h=function(e){return e.split(",").map((function(e){return e.trim()})).filter((function(e){return e.match(/^[a-zA-Z]+$/)}))},f=function(e,t){return t.indexOf(e)>-1},p=function(e,t){var n={type:t,value:e};return i()(i()(r()(n)).html())},m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$searchByIngredientForm=t,this.$tagListInclude=t.find(".tag-list-include"),this.$tagListExclude=t.find(".tag-list-exclude"),this.$searchButton=t.find(".search-button"),this.$keywordInput=t.find(".keywords"),this.$includeButton=t.find(".add-include"),this.$excludeButton=t.find(".add-exclude"),this.$includeInput=t.find(".include-ingredients"),this.$excludeInput=t.find(".exclude-ingredients"),this.included=[],this.excluded=[]}var t,n,a;return t=e,(n=[{key:"handleEvents",value:function(){c()(o.I).subscribe(this.onKeyUp.bind(this)),c()(o.m).subscribe(this.onClick.bind(this))}},{key:"onClick",value:function(e,t){return Object(u.a)(t,this.$searchButton)?(e.preventDefault(),this.submit()):Object(u.a)(t,this.$includeButton)?(e.preventDefault(),this.addIncludedItem()):Object(u.a)(t,this.$excludeButton)?(e.preventDefault(),this.addExcludedItem()):t.closest(".filter-included").length?(e.preventDefault(),e.stopPropagation(),this.removeIncludedItem(t.closest(".filter-included"))):t.closest(".filter-excluded").length?(e.preventDefault(),e.stopPropagation(),this.removeExcludedItem(t.closest(".filter-excluded"))):null}},{key:"onKeyUp",value:function(e,t){return Object(u.a)(t,this.$keywordInput)&&(""===this.$keywordInput.val().trim()?this.$keywordInput.closest(".primary").addClass("error"):this.$keywordInput.closest(".primary").removeClass("error")),null}},{key:"addToIncluded",value:function(e){var t=this,n=e.filter((function(e){return!f(e,t.included)}));this.included=this.included.concat(n),n.forEach((function(e){return t.$tagListInclude.append(p(e,"included"))})),this.$tagListInclude.css("margin-bottom","32px")}},{key:"addToExcluded",value:function(e){var t=this,n=e.filter((function(e){return!f(e,t.excluded)}));this.excluded=this.excluded.concat(n),n.forEach((function(e){return t.$tagListExclude.append(p(e,"excluded"))})),this.$tagListExclude.css("margin-bottom","32px")}},{key:"addIncludedItem",value:function(){this.addToIncluded(h(this.$includeInput.val())),this.$includeInput.val(null)}},{key:"addExcludedItem",value:function(){this.addToExcluded(h(this.$excludeInput.val())),this.$excludeInput.val(null)}},{key:"removeIncludedItem",value:function(e){var t=e.find(".search-tag").text();e.remove(),this.removeFromIncluded(t)}},{key:"removeExcludedItem",value:function(e){var t=e.find(".search-tag").text();e.remove(),this.removeFromExcluded(t)}},{key:"removeFromIncluded",value:function(e){this.included.splice(this.included.indexOf(e),1)}},{key:"removeFromExcluded",value:function(e){this.excluded.splice(this.excluded.indexOf(e),1)}},{key:"submit",value:function(){var e=h(this.$keywordInput.val()).join(",");if(e.length>0){this.$keywordInput.closest(".primary").removeClass("error"),this.addIncludedItem(),this.addExcludedItem();var t=this.included.join(","),n=this.excluded.join(","),a="".concat("https://www.allrecipes.com/search/results/","?WT=").concat(e,"&IngIncl=").concat(t,"&ingExcl=").concat(n,"&sort=re");window.location.href=a}else this.$keywordInput.closest(".primary").addClass("error"),this.$keywordInput.focus()}},{key:"init",value:function(){this.$keywordInput.val(null),this.$includeInput.val(null),this.$excludeInput.val(null),this.handleEvents()}}])&&d(t.prototype,n),a&&d(t,a),e}();t.default=function(){var e=new m(i()(".component.search-by-ingredient"));c()(o.N).subscribe((function(){return e.init()}))}},491:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),l=n(4),c=n.n(l),o=n(5),u=n(776);function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$context=t,this.$htmlForm=this.$context.find(".search-results-html-form"),this.$searchField=this.$context.find(".search-field"),this.$facetMenus=this.$context.find(".facet-menu"),this.$facetMenuOptions=this.$context.find(".facet-menu-options"),this.isMobile=i()(window).width()<768,this.hasChanged=!1,this.centerAllFacetMenus(),c()(o.x).subscribe((function(e,t){n.hasChanged||t.closest(".search-results-html-form").length>0&&(n.hasChanged=!0)})),c()(o.m).subscribe((function(e,t){var a=t.closest(".toggle-search-facets"),l=t.closest(n.$context.find("button.search")),c=t.closest(".search-results-form-chips .chip"),o=t.closest(".facet-menu:not(.empty)"),u=t.closest(".facet-menu-options"),s=t.closest("body > .facet-menu-options label"),r=t.closest("body > .facet-menu-options .close"),d=i()("body > .facet-menu-options"),h=i()("body > .black-out"),f=i()(".facet-menu.menu-active").length>0;if(a.length>0&&(e.preventDefault(),n.$context.find(".search-results-form-menus").removeClass("hide-on-mobile"),a.remove()),c.length>0){e.preventDefault();var p=c.attr("data-facet-field"),m=c.attr("data-facet-option");i()('.facet-menu[data-facet-field="'.concat(p,'"]')).find('input[data-facet-option="'.concat(m,'"]')).prop("checked",!1),c.remove(),n.$htmlForm.submit()}if(o.length>0&&u.length<1){var v=o.hasClass("menu-active");e.stopPropagation(),n.$facetMenus.removeClass("menu-active"),v?n.closeFacetMenu(o):n.openFacetMenu(o)}if(o.length<1&&f&&d.length<1&&l.length<1&&(n.$facetMenus.removeClass("menu-active"),n.hasChanged&&n.$htmlForm.submit()),s.length>0&&(n.hasChanged||(n.hasChanged=!0)),r.length>0&&u.length>0){e.preventDefault(),e.stopPropagation();var g=u.attr("data-facet-field"),b=n.$facetMenus.filter("[data-facet-field='".concat(g,"']"));n.closeFacetMenu(b)}if(h.length>0&&u.length<1){e.stopPropagation();var y=n.$context.find(".facet-menu.menu-active");n.closeFacetMenu(y)}})),c()(o.Eb).subscribe((function(e,t){Object(u.a)(t,n.$htmlForm)&&(e.preventDefault(),window.location.href=n.getSearchUrlFromForm())})),c()(o.tb).subscribe((function(){n.isMobile=i()(window).width()<768,n.centerAllFacetMenus()}))}var t,n,a;return t=e,(n=[{key:"getSearchUrlFromForm",value:function(){var e=this.$searchField.val(),t=this.$facetMenuOptions.find("input:checked"),n=this.$htmlForm.attr("action")||"/search";n+="?q=".concat(encodeURIComponent(e));var a={};t.each((function(e,t){var i=t.dataset.facetField,l=t.dataset.facetOption;"true"===t.dataset.facetFlattened?a[i]?a[i].push(l):a[i]=[l]:n+="&f[".concat(e,"]=").concat(encodeURIComponent("".concat(i,":").concat(l)))}));var i=Object.keys(a);return i.length?(i.forEach((function(e,t){a[e]&&(n+="&f[".concat(t,"]=").concat(encodeURIComponent("".concat(e,":").concat(a[e].join("|")))))})),n):(this.$context.hasClass("has-ingredients")&&(n="/search/ingredient-chef"),n)}},{key:"centerAllFacetMenus",value:function(){this.isMobile?this.$facetMenuOptions.each((function(e,t){i()(t).css("margin-left","0px")})):this.$facetMenuOptions.each((function(e,t){var n=i()(t),a=n.outerWidth();n.css("margin-left",a/2*-1)}))}},{key:"openFacetMenu",value:function(e){e.addClass("menu-active"),this.isMobile&&i()("body").append(e.find(".facet-menu-options")).append('<div class="black-out"></div>')}},{key:"closeFacetMenu",value:function(e){if(e.removeClass("menu-active"),this.isMobile){var t=e.attr("data-facet-field");i()("body > .facet-menu-options[data-facet-field='".concat(t,"']")).appendTo(e),i()("body > .black-out").remove()}this.hasChanged&&this.$htmlForm.submit()}}])&&s(t.prototype,n),a&&s(t,a),e}();t.default=function(){return i()(".component.search-results-form").each((function(){return new r(i()(this))}))}},776:function(e,t,n){"use strict";t.a=function(e,t){return e.is(t)||t.has(e).length>0}}}]);
//# sourceMappingURL=26-26.js.map