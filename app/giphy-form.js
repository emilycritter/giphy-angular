"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var GiphyFormComponent = (function () {
    function GiphyFormComponent(http) {
        this.link = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
        this.gifs = [];
        this.http = http;
    }
    GiphyFormComponent.prototype.performSearch = function (searchTerm) {
        var _this = this;
        var apiLink = this.link + searchTerm.value;
        this.http.request(apiLink)
            .subscribe(function (res) {
            _this.gifs = res.json().data;
            console.log(_this.gifs);
        });
    };
    GiphyFormComponent = __decorate([
        core_1.Component({
            selector: 'giphy-form',
            template: "\n  <br>\n  <div class=\"input-group input-group-lg\">\n    <span class=\"input-group-addon glyphicon glyphicon-gift\" id=\"basic-addon1\"></span>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      placeholder=\"What would you like to see?\"\n      aria-describedby=\"basic-addon1\"\n      name=\"search\" #searchTerm (keyup)=\"performSearch(searchTerm)\"\n      >\n  </div>\n\n  <br>\n  <div class=\"container-flex\">\n    <div *ngFor=\"let g of gifs\">\n      <a href=\"{{g.url}}\" class=\"thumbnail\">\n        <img src=\"{{g.images.fixed_height.url}}\">\n      </a>\n    </div>\n  </div>",
            styleUrls: ['app/giphy.css']
        }),
        __metadata('design:paramtypes', [http_1.Http])
    ], GiphyFormComponent);
    return GiphyFormComponent;
}());
exports.GiphyFormComponent = GiphyFormComponent;
;
//# sourceMappingURL=giphy-form.js.map
