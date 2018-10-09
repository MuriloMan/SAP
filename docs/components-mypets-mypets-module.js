(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-mypets-mypets-module"],{

/***/ "./src/app/components/mypets/my-pets-list/my-pets-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/mypets/my-pets-list/my-pets-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      My pets\n    </ion-title>\n    <!--ion-buttons float-right>\n      <button ion-button color=\"secondary\" float-right>+</button>\n    </ion-buttons-->\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"cards-bg\">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n            <ion-button expand=\"full\" size=\"large\" color=\"primary\">\n              <ion-icon md=\"md-add\" name=\"add\"></ion-icon>\n              Add\n            </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-card *ngFor=\"let pet of pets\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <ion-avatar>\n                <img src=\"https://mymodernmet.com/wp/wp-content/uploads/2017/01/animal-selfies-5.jpg\"/>\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-8 text-left>\n              {{pet.nome}}, {{pet.idade}} year(s) old.\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    <!--ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg\"/>\n        </ion-avatar>\n        <h2>Woody</h2>\n        <p>1 year old.</p>\n        <ion-note item-end>1:12pm</ion-note>\n      </ion-item>\n    </ion-list-->\n</ion-content>"

/***/ }),

/***/ "./src/app/components/mypets/my-pets-list/my-pets-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/mypets/my-pets-list/my-pets-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-avatar-page ion-note {\n  font-size: 12px;\n  align-self: flex-start;\n  margin-top: 14px; }\n"

/***/ }),

/***/ "./src/app/components/mypets/my-pets-list/my-pets-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/mypets/my-pets-list/my-pets-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyPetsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPetsListComponent", function() { return MyPetsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_pet_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/pet.model */ "./src/app/models/pet.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyPetsListComponent = /** @class */ (function () {
    function MyPetsListComponent() {
    }
    MyPetsListComponent.prototype.ngOnInit = function () {
        this.pets = new Array();
        for (var i = 0; i < 10; i++) {
            this.pets.push(new _models_pet_model__WEBPACK_IMPORTED_MODULE_1__["Pet"](i, "Pet_" + i, 3 + i, new Date(2018, 2, 3, 4, 4, 54, 2)));
        }
    };
    MyPetsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-pets-list',
            template: __webpack_require__(/*! ./my-pets-list.component.html */ "./src/app/components/mypets/my-pets-list/my-pets-list.component.html"),
            styles: [__webpack_require__(/*! ./my-pets-list.component.scss */ "./src/app/components/mypets/my-pets-list/my-pets-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyPetsListComponent);
    return MyPetsListComponent;
}());



/***/ }),

/***/ "./src/app/components/mypets/mypets-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/mypets/mypets-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MyPetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPetsRoutingModule", function() { return MyPetsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/components/mypets/new-pet/new-pet.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_pets_list_my_pets_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-pets-list/my-pets-list.component */ "./src/app/components/mypets/my-pets-list/my-pets-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    /*
        Mapping of route /mypets/*
    */
    { path: '',
        children: [
            /*
                Mapping of route /mypets
            */
            { path: '', component: _my_pets_list_my_pets_list_component__WEBPACK_IMPORTED_MODULE_3__["MyPetsListComponent"] },
            /*
                Mapping of route /mypets/add
            */
            { path: 'add', component: _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_1__["NewPetComponent"] }
        ]
    }
];
var MyPetsRoutingModule = /** @class */ (function () {
    function MyPetsRoutingModule() {
    }
    MyPetsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], MyPetsRoutingModule);
    return MyPetsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/mypets/mypets.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/mypets/mypets.module.ts ***!
  \****************************************************/
/*! exports provided: MypetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypetsModule", function() { return MypetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/components/mypets/new-pet/new-pet.component.ts");
/* harmony import */ var _mypets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mypets-routing.module */ "./src/app/components/mypets/mypets-routing.module.ts");
/* harmony import */ var _my_pets_list_my_pets_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-pets-list/my-pets-list.component */ "./src/app/components/mypets/my-pets-list/my-pets-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MypetsModule = /** @class */ (function () {
    function MypetsModule() {
    }
    MypetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _mypets_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyPetsRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]
            ],
            declarations: [
                _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_2__["NewPetComponent"],
                _my_pets_list_my_pets_list_component__WEBPACK_IMPORTED_MODULE_4__["MyPetsListComponent"]
            ]
        })
    ], MypetsModule);
    return MypetsModule;
}());



/***/ }),

/***/ "./src/app/components/mypets/new-pet/new-pet.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/mypets/new-pet/new-pet.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  My pets list.\n</p>\n"

/***/ }),

/***/ "./src/app/components/mypets/new-pet/new-pet.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/mypets/new-pet/new-pet.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mypets/new-pet/new-pet.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/mypets/new-pet/new-pet.component.ts ***!
  \****************************************************************/
/*! exports provided: NewPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPetComponent", function() { return NewPetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewPetComponent = /** @class */ (function () {
    function NewPetComponent() {
    }
    NewPetComponent.prototype.ngOnInit = function () {
    };
    NewPetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-pet',
            template: __webpack_require__(/*! ./new-pet.component.html */ "./src/app/components/mypets/new-pet/new-pet.component.html"),
            styles: [__webpack_require__(/*! ./new-pet.component.scss */ "./src/app/components/mypets/new-pet/new-pet.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewPetComponent);
    return NewPetComponent;
}());



/***/ }),

/***/ "./src/app/models/pet.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/pet.model.ts ***!
  \*************************************/
/*! exports provided: Pet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
var Pet = /** @class */ (function () {
    function Pet(id, nome, idade, dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }
    return Pet;
}());



/***/ })

}]);
//# sourceMappingURL=components-mypets-mypets-module.js.map