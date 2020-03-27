/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Partie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var partie = new _classes_Partie__WEBPACK_IMPORTED_MODULE_0__["Partie"](5, 2);
partie.initialiser();
partie.lancer();
partie.afficher_gagnant();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partie", function() { return Partie; });
/* harmony import */ var _Gobelet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Joueur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


var Partie = /** @class */ (function () {
    function Partie(nb_tours, nb_des) {
        this._nb_tours = nb_tours;
        this._gobelet = new _Gobelet__WEBPACK_IMPORTED_MODULE_0__["Gobelet"](nb_des);
        this._joueurs = [];
    }
    /**
     * Création des participants
     */
    Partie.prototype.initialiser = function () {
        var _this = this;
        var participants = ['Nicole', 'Manu', 'Michel'];
        participants.forEach(function (participant) {
            var joueur = new _Joueur__WEBPACK_IMPORTED_MODULE_1__["Joueur"](participant);
            _this._joueurs.push(joueur);
        });
        this.afficherJoueurs();
    };
    /**
     * Affiche les joueurs participant à la partie
     */
    Partie.prototype.afficherJoueurs = function () {
        console.log('Les joueurs présents sont :');
        this._joueurs.forEach(function (joueur) {
            console.log(joueur.nom);
        });
    };
    /**
     * Lance la partie
     */
    Partie.prototype.lancer = function () {
        var _this = this;
        console.log("\nQue la partie commence / En " + this._nb_tours + " tours avec " + this._gobelet.des + " d\u00E9s !");
        //Nombre de tours
        for (var i = 1; i <= this._nb_tours; i++) {
            console.log("\nTour numero : " + i);
            //Pour chaque joueurs
            this._joueurs.forEach(function (joueur) {
                console.log("\n" + joueur.nom + " lance le gobelet.");
                joueur.jouer(_this._gobelet);
                console.log(joueur.nom + " " + _this._gobelet.afficher_score());
                joueur.afficher_score();
            });
        }
    };
    /**
     * Affiche le nom et le score du gagant
     */
    Partie.prototype.afficher_gagnant = function () {
        var scoreGagnant = 0;
        var nomGagnant = '';
        this._joueurs.forEach(function (joueur) {
            if (joueur.score > scoreGagnant) {
                scoreGagnant = joueur.score;
                nomGagnant = joueur.nom;
            }
        });
        console.log("\nLe grand gagant est " + nomGagnant + ", avec " + scoreGagnant + " points.");
    };
    return Partie;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gobelet", function() { return Gobelet; });
/* harmony import */ var _De__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var Gobelet = /** @class */ (function () {
    function Gobelet(nb_des) {
        this._valeur = 0;
        this._des = nb_des;
    }
    Object.defineProperty(Gobelet.prototype, "valeur", {
        get: function () {
            return this._valeur;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gobelet.prototype, "des", {
        get: function () {
            return this._des;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Lance les dés du gobelet
     */
    Gobelet.prototype.lancer = function () {
        this._valeur = 0;
        for (var i = 1; i <= this._des; i++) {
            var leDe = new _De__WEBPACK_IMPORTED_MODULE_0__["De"]();
            leDe.lancer();
            this._valeur += leDe.valeur;
        }
    };
    /**
     * Retourne les points obtenu avec le gobelet
     */
    Gobelet.prototype.afficher_score = function () {
        return "fait " + this._valeur;
    };
    return Gobelet;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "De", function() { return De; });
var De = /** @class */ (function () {
    function De() {
        this._valeur = 0;
    }
    Object.defineProperty(De.prototype, "valeur", {
        get: function () {
            return this._valeur;
        },
        enumerable: true,
        configurable: true
    });
    De.prototype.lancer = function () {
        this._valeur = Math.floor(Math.random() * (7 - 1) + 1);
    };
    return De;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Joueur", function() { return Joueur; });
var Joueur = /** @class */ (function () {
    function Joueur(nom) {
        this._nom = nom;
        this._score = 0;
    }
    Object.defineProperty(Joueur.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Joueur.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Le joueur joue avec le gobelet
     * @param gobelet
     */
    Joueur.prototype.jouer = function (gobelet) {
        gobelet.lancer();
        gobelet.afficher_score();
        this._score += gobelet.valeur;
    };
    /**
     * Affiche le nombre de points du joueur
     */
    Joueur.prototype.afficher_score = function () {
        console.log(this._nom + " a un total de " + this._score + " points");
    };
    return Joueur;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BhcnRpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Hb2JlbGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0RlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0pvdWV1ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQTBDO0FBRTFDLElBQU0sTUFBTSxHQUFZLElBQUksc0RBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQixNQUFNLENBQUMsZ0JBQWdC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QUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0JBQUksdUJBQUc7YUFBUDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRDs7O09BR0c7SUFDSCxzQkFBSyxHQUFMLFVBQU0sT0FBZ0I7UUFDbEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQWMsR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksdUJBQWtCLElBQUksQ0FBQyxNQUFNLFlBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBQYXJ0aWUgfSBmcm9tIFwiLi9jbGFzc2VzL1BhcnRpZVwiO1xyXG5cclxuY29uc3QgcGFydGllIDogUGFydGllID0gbmV3IFBhcnRpZSg1LCAyKTtcclxuXHJcbnBhcnRpZS5pbml0aWFsaXNlcigpO1xyXG5wYXJ0aWUubGFuY2VyKCk7XHJcbnBhcnRpZS5hZmZpY2hlcl9nYWduYW50KCk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IEdvYmVsZXQgfSBmcm9tIFwiLi9Hb2JlbGV0XCI7XHJcbmltcG9ydCB7IEpvdWV1ciB9IGZyb20gXCIuL0pvdWV1clwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpZSB7XHJcbiAgICBwcml2YXRlIF9qb3VldXJzOiBKb3VldXJbXTtcclxuICAgIHByaXZhdGUgX25iX3RvdXJzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9nb2JlbGV0OiBHb2JlbGV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5iX3RvdXJzOiBudW1iZXIsIG5iX2RlczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbmJfdG91cnMgPSBuYl90b3VycztcclxuICAgICAgICB0aGlzLl9nb2JlbGV0ID0gbmV3IEdvYmVsZXQobmJfZGVzKTtcclxuICAgICAgICB0aGlzLl9qb3VldXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcsOpYXRpb24gZGVzIHBhcnRpY2lwYW50c1xyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXNlcigpIHtcclxuICAgICAgICBsZXQgcGFydGljaXBhbnRzIDpzdHJpbmdbXSA9IFsnTmljb2xlJywgJ01hbnUnLCAnTWljaGVsJ107XHJcblxyXG4gICAgICAgIHBhcnRpY2lwYW50cy5mb3JFYWNoKHBhcnRpY2lwYW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGpvdWV1ciA9IG5ldyBKb3VldXIocGFydGljaXBhbnQpO1xyXG4gICAgICAgICAgICB0aGlzLl9qb3VldXJzLnB1c2goam91ZXVyKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFmZmljaGVySm91ZXVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZmaWNoZSBsZXMgam91ZXVycyBwYXJ0aWNpcGFudCDDoCBsYSBwYXJ0aWVcclxuICAgICAqL1xyXG4gICAgYWZmaWNoZXJKb3VldXJzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMZXMgam91ZXVycyBwcsOpc2VudHMgc29udCA6Jyk7XHJcbiAgICAgICAgdGhpcy5fam91ZXVycy5mb3JFYWNoKGpvdWV1ciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpvdWV1ci5ub20pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGFuY2UgbGEgcGFydGllXHJcbiAgICAgKi9cclxuICAgIGxhbmNlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgXFxuUXVlIGxhIHBhcnRpZSBjb21tZW5jZSAvIEVuICR7dGhpcy5fbmJfdG91cnN9IHRvdXJzIGF2ZWMgJHt0aGlzLl9nb2JlbGV0LmRlc30gZMOpcyAhYCk7XHJcblxyXG4gICAgICAgIC8vTm9tYnJlIGRlIHRvdXJzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5fbmJfdG91cnM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgXFxuVG91ciBudW1lcm8gOiAke2l9YCk7XHJcbiAgICAgICAgICAgIC8vUG91ciBjaGFxdWUgam91ZXVyc1xyXG4gICAgICAgICAgICB0aGlzLl9qb3VldXJzLmZvckVhY2goam91ZXVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcXG4ke2pvdWV1ci5ub219IGxhbmNlIGxlIGdvYmVsZXQuYCk7XHJcbiAgICAgICAgICAgICAgICBqb3VldXIuam91ZXIodGhpcy5fZ29iZWxldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtqb3VldXIubm9tfSAke3RoaXMuX2dvYmVsZXQuYWZmaWNoZXJfc2NvcmUoKX1gKTtcclxuICAgICAgICAgICAgICAgIGpvdWV1ci5hZmZpY2hlcl9zY29yZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZmZpY2hlIGxlIG5vbSBldCBsZSBzY29yZSBkdSBnYWdhbnRcclxuICAgICAqL1xyXG4gICAgYWZmaWNoZXJfZ2FnbmFudCgpIHtcclxuICAgICAgICBsZXQgc2NvcmVHYWduYW50ID0gMDtcclxuICAgICAgICBsZXQgbm9tR2FnbmFudCA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLl9qb3VldXJzLmZvckVhY2goam91ZXVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGpvdWV1ci5zY29yZSA+IHNjb3JlR2FnbmFudCkge1xyXG4gICAgICAgICAgICAgICAgc2NvcmVHYWduYW50ID0gam91ZXVyLnNjb3JlO1xyXG4gICAgICAgICAgICAgICAgbm9tR2FnbmFudCA9IGpvdWV1ci5ub207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYFxcbkxlIGdyYW5kIGdhZ2FudCBlc3QgJHtub21HYWduYW50fSwgYXZlYyAke3Njb3JlR2FnbmFudH0gcG9pbnRzLmApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGUgfSBmcm9tIFwiLi9EZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvYmVsZXQge1xyXG4gICAgcHJpdmF0ZSBfdmFsZXVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kZXM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYl9kZXM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3ZhbGV1ciA9IDA7XHJcbiAgICAgICAgdGhpcy5fZGVzID0gbmJfZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWxldXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGV1cjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYW5jZSBsZXMgZMOpcyBkdSBnb2JlbGV0XHJcbiAgICAgKi9cclxuICAgIGxhbmNlcigpIHtcclxuICAgICAgICB0aGlzLl92YWxldXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuX2RlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsZURlOiBEZSA9IG5ldyBEZSgpO1xyXG4gICAgICAgICAgICBsZURlLmxhbmNlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl92YWxldXIgKz0gbGVEZS52YWxldXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0b3VybmUgbGVzIHBvaW50cyBvYnRlbnUgYXZlYyBsZSBnb2JlbGV0XHJcbiAgICAgKi9cclxuICAgIGFmZmljaGVyX3Njb3JlKCkge1xyXG4gICAgICAgIHJldHVybiBgZmFpdCAke3RoaXMuX3ZhbGV1cn1gO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIERlIHtcclxuICAgIHByaXZhdGUgX3ZhbGV1cjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl92YWxldXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWxldXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGV1cjtcclxuICAgIH1cclxuXHJcbiAgICBsYW5jZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsZXVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAxKSArIDEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR29iZWxldCB9IGZyb20gXCIuL0dvYmVsZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBKb3VldXIge1xyXG4gICAgcHJpdmF0ZSBfbm9tOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zY29yZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbm9tID0gbm9tO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbm9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub207XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExlIGpvdWV1ciBqb3VlIGF2ZWMgbGUgZ29iZWxldFxyXG4gICAgICogQHBhcmFtIGdvYmVsZXQgXHJcbiAgICAgKi9cclxuICAgIGpvdWVyKGdvYmVsZXQ6IEdvYmVsZXQpIHtcclxuICAgICAgICBnb2JlbGV0LmxhbmNlcigpO1xyXG4gICAgICAgIGdvYmVsZXQuYWZmaWNoZXJfc2NvcmUoKTtcclxuICAgICAgICB0aGlzLl9zY29yZSArPSBnb2JlbGV0LnZhbGV1cjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmZmljaGUgbGUgbm9tYnJlIGRlIHBvaW50cyBkdSBqb3VldXJcclxuICAgICAqL1xyXG4gICAgYWZmaWNoZXJfc2NvcmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fbm9tfSBhIHVuIHRvdGFsIGRlICR7dGhpcy5fc2NvcmV9IHBvaW50c2ApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==