/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hashMap.js":
/*!************************!*\
  !*** ./src/hashMap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HashMap: () => (/* binding */ HashMap)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n\n\nclass HashMap{\n    constructor(){\n        this.arr = [];\n        this.fillTheArray();\n        this.loadfactor = 0.75;\n        this.capacity = this.arr.length;\n    }\n\n    fillTheArray(arrLength = 16){\n        // empty this.arr when doubling the capacity and then fill it\n        this.arr = [];\n        let head = null;\n        for(let i = 0 ; i < arrLength ; i++){\n            this.arr[i] = head;\n        }\n    }\n\n    hash(key){\n        let hashCode = 0;\n\n        const primaryNumber = 31;\n        for(let i = 0 ; i < key.length ; i++){\n            hashCode = primaryNumber*hashCode + key.charCodeAt(i);\n            hashCode = hashCode%this.arr.length;\n        }\n        \n        return hashCode;\n    }\n\n    // although head variable here is different from the head in the starting head\n    // we are just renaming it to head due to inacessesability of the original one\n    set(key , value){\n        let head = null;\n        const index = this.hash(key);\n        \n        if(this.arr[index] === null){\n            head = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node(key , value); \n            this.arr[index] = head;\n            this.growBuckets();\n            return;\n        }\n\n        if(this.arr[index] !== null){\n            if(step1(this.arr[index])) return;\n            \n            if(step2(this.arr[index])){this.growBuckets()};\n            return;\n        }\n\n        function step1(object){\n            if(object.key === key){\n                object.value = value;\n                return true;\n            }\n\n            if(object.nextNode === null) return false;\n\n            if(object.key !== key){\n                return step1(object.nextNode);\n            }\n\n        }\n\n        function step2(object){\n            if(object.nextNode === null){\n                object.nextNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node(key , value);\n                return true;\n            }\n\n            if(object.nextNode !== null){\n                return step2(object.nextNode);\n            }\n        }\n\n    }\n\n    growBuckets(){\n        if(this.keys().length > this.loadfactor*this.arr.length){\n            const allEntries = this.entries();\n            this.fillTheArray(this.arr.length*2);\n            for(let i = 0 ; i < allEntries.length ; i++){\n                let key = allEntries[i][0];\n                let value = allEntries[i][1];\n                this.set(key , value);\n            }\n        }\n        return;\n    }\n\n    get(key){\n        const index = this.hash(key);\n\n        if(this.arr[index] === null){\n            return null;\n        }\n\n        if(this.arr[index] !== null){\n            return step(this.arr[index]);\n        }\n\n        function step(object){\n            if(object.key === key){\n                return object.value;\n            }\n\n            if(object.nextNode === null) return null;\n\n            if(object.key !== key){\n                return step(object.nextNode);\n            }\n        }\n\n    }\n\n    has(key){\n        const index = this.hash(key);\n\n        if(this.arr[index] === null){\n            return false;\n        }\n\n        if(this.arr[index] !== null){\n            return step(this.arr[index]);\n        }\n\n        function step(object){\n            if(object.key === key){\n                return true;\n            }\n\n            if(object.nextNode === null) return false;\n\n            if(object.key !== key){\n                return step(object.nextNode);\n            }\n        }\n    }\n\n    remove(key){\n        let head;\n        if(this.has(key)){\n            const index = this.hash(key);\n\n            if(this.arr[index].key === key){\n                head = this.arr[index].nextNode;\n                this.arr[index] = head;\n                return true;\n            }\n            \n            step(this.arr[index]);\n                \n            function step(object){\n                if(object.nextNode.key === key){\n                    object.nextNode = object.nextNode.nextNode;\n                    return true;\n                }\n\n                if(object.nextNode.key !== key){\n                    return step(object.nextNode)\n                }\n            }\n\n        }else {\n            return false;\n        }\n    }\n\n    length(){\n        let total = 0;\n\n        for(let i = 0 ; i < this.arr.length ; i++){\n            if(this.arr[i] !== null){\n                total += step(this.arr[i]);\n                \n                function step(object){\n                    if(object.nextNode === null){\n                        return 1;\n                    }\n\n                    if(object.nextNode !== null){\n                        return 1 + step(object.nextNode);\n                    }\n                }\n\n            }\n        }\n\n        return total;\n    }\n\n    clear(){\n        let head = null;\n\n        for(let i = 0 ; i < this.arr.length ; i++){\n            this.arr[i] = head;\n        }\n    }\n    \n    keys(){\n        let keysArray = [];\n\n        for(let i = 0 ; i < this.arr.length ; i++){\n            if(this.arr[i] !== null){\n                step(this.arr[i]);\n\n                function step(object){\n                    if(object.nextNode === null){\n                        keysArray.push(object.key);\n                        return;\n                    }\n\n                    if(object.nextNode !== null){\n                        keysArray.push(object.key);\n                        return step(object.nextNode);\n                    }\n                }\n\n            }\n        }\n\n        return keysArray;\n    }\n\n    values(){\n        let valuesArray = [];\n\n        for(let i = 0 ; i < this.arr.length ; i++){\n            if(this.arr[i] !== null){\n                step(this.arr[i]);\n\n                function step(object){\n                    if(object.nextNode === null){\n                        valuesArray.push(object.value);\n                        return;\n                    }\n\n                    if(object.nextNode !== null){\n                        valuesArray.push(object.value);\n                        return step(object.nextNode);\n                    }\n                }\n            }\n        }\n\n        return valuesArray;\n    }\n\n    entries(){\n        let entriesArray = [];\n\n        for(let i = 0 ; i < this.arr.length ; i++){\n            if(this.arr[i] !== null){\n                step(this.arr[i]);\n\n                function step(object){\n                    if(object.nextNode === null){\n                        fillAEntry(object);\n                        return;\n                    }\n\n                    if(object.nextNode !== null){\n                        fillAEntry(object);\n                        return step(object.nextNode);\n                    }\n                }\n            }\n        }\n\n        function fillAEntry(object){\n            let singleEntry = [];\n            singleEntry.push(object.key);\n            singleEntry.push(object.value);\n            entriesArray.push(singleEntry);\n        }\n\n        return entriesArray;\n    }\n\n    arrayLength(){\n        console.log(this.arr.length);\n    }\n\n    displayArray(){\n        console.log(this.arr);\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFzaE1hcC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjs7QUFFeEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQywwQ0FBSTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hhc2hNYXAuanM/ODEwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05vZGV9IGZyb20gXCIuL25vZGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIEhhc2hNYXB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcnIgPSBbXTtcbiAgICAgICAgdGhpcy5maWxsVGhlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5sb2FkZmFjdG9yID0gMC43NTtcbiAgICAgICAgdGhpcy5jYXBhY2l0eSA9IHRoaXMuYXJyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmaWxsVGhlQXJyYXkoYXJyTGVuZ3RoID0gMTYpe1xuICAgICAgICAvLyBlbXB0eSB0aGlzLmFyciB3aGVuIGRvdWJsaW5nIHRoZSBjYXBhY2l0eSBhbmQgdGhlbiBmaWxsIGl0XG4gICAgICAgIHRoaXMuYXJyID0gW107XG4gICAgICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBhcnJMZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5hcnJbaV0gPSBoZWFkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzaChrZXkpe1xuICAgICAgICBsZXQgaGFzaENvZGUgPSAwO1xuXG4gICAgICAgIGNvbnN0IHByaW1hcnlOdW1iZXIgPSAzMTtcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBrZXkubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIGhhc2hDb2RlID0gcHJpbWFyeU51bWJlcipoYXNoQ29kZSArIGtleS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgaGFzaENvZGUgPSBoYXNoQ29kZSV0aGlzLmFyci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBoYXNoQ29kZTtcbiAgICB9XG5cbiAgICAvLyBhbHRob3VnaCBoZWFkIHZhcmlhYmxlIGhlcmUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGhlYWQgaW4gdGhlIHN0YXJ0aW5nIGhlYWRcbiAgICAvLyB3ZSBhcmUganVzdCByZW5hbWluZyBpdCB0byBoZWFkIGR1ZSB0byBpbmFjZXNzZXNhYmlsaXR5IG9mIHRoZSBvcmlnaW5hbCBvbmVcbiAgICBzZXQoa2V5ICwgdmFsdWUpe1xuICAgICAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oYXNoKGtleSk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmFycltpbmRleF0gPT09IG51bGwpe1xuICAgICAgICAgICAgaGVhZCA9IG5ldyBOb2RlKGtleSAsIHZhbHVlKTsgXG4gICAgICAgICAgICB0aGlzLmFycltpbmRleF0gPSBoZWFkO1xuICAgICAgICAgICAgdGhpcy5ncm93QnVja2V0cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5hcnJbaW5kZXhdICE9PSBudWxsKXtcbiAgICAgICAgICAgIGlmKHN0ZXAxKHRoaXMuYXJyW2luZGV4XSkpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoc3RlcDIodGhpcy5hcnJbaW5kZXhdKSl7dGhpcy5ncm93QnVja2V0cygpfTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAxKG9iamVjdCl7XG4gICAgICAgICAgICBpZihvYmplY3Qua2V5ID09PSBrZXkpe1xuICAgICAgICAgICAgICAgIG9iamVjdC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihvYmplY3QubmV4dE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgaWYob2JqZWN0LmtleSAhPT0ga2V5KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RlcDEob2JqZWN0Lm5leHROb2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RlcDIob2JqZWN0KXtcbiAgICAgICAgICAgIGlmKG9iamVjdC5uZXh0Tm9kZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgb2JqZWN0Lm5leHROb2RlID0gbmV3IE5vZGUoa2V5ICwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihvYmplY3QubmV4dE5vZGUgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGVwMihvYmplY3QubmV4dE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBncm93QnVja2V0cygpe1xuICAgICAgICBpZih0aGlzLmtleXMoKS5sZW5ndGggPiB0aGlzLmxvYWRmYWN0b3IqdGhpcy5hcnIubGVuZ3RoKXtcbiAgICAgICAgICAgIGNvbnN0IGFsbEVudHJpZXMgPSB0aGlzLmVudHJpZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFRoZUFycmF5KHRoaXMuYXJyLmxlbmd0aCoyKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgYWxsRW50cmllcy5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBhbGxFbnRyaWVzW2ldWzBdO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGFsbEVudHJpZXNbaV1bMV07XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoa2V5ICwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnZXQoa2V5KXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhhc2goa2V5KTtcblxuICAgICAgICBpZih0aGlzLmFycltpbmRleF0gPT09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmFycltpbmRleF0gIT09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAodGhpcy5hcnJbaW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAob2JqZWN0KXtcbiAgICAgICAgICAgIGlmKG9iamVjdC5rZXkgPT09IGtleSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYob2JqZWN0Lm5leHROb2RlID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgaWYob2JqZWN0LmtleSAhPT0ga2V5KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RlcChvYmplY3QubmV4dE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBoYXMoa2V5KXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhhc2goa2V5KTtcblxuICAgICAgICBpZih0aGlzLmFycltpbmRleF0gPT09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5hcnJbaW5kZXhdICE9PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKHRoaXMuYXJyW2luZGV4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGVwKG9iamVjdCl7XG4gICAgICAgICAgICBpZihvYmplY3Qua2V5ID09PSBrZXkpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihvYmplY3QubmV4dE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgaWYob2JqZWN0LmtleSAhPT0ga2V5KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RlcChvYmplY3QubmV4dE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlKGtleSl7XG4gICAgICAgIGxldCBoZWFkO1xuICAgICAgICBpZih0aGlzLmhhcyhrZXkpKXtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oYXNoKGtleSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYXJyW2luZGV4XS5rZXkgPT09IGtleSl7XG4gICAgICAgICAgICAgICAgaGVhZCA9IHRoaXMuYXJyW2luZGV4XS5uZXh0Tm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFycltpbmRleF0gPSBoZWFkO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdGVwKHRoaXMuYXJyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGVwKG9iamVjdCl7XG4gICAgICAgICAgICAgICAgaWYob2JqZWN0Lm5leHROb2RlLmtleSA9PT0ga2V5KXtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm5leHROb2RlID0gb2JqZWN0Lm5leHROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihvYmplY3QubmV4dE5vZGUua2V5ICE9PSBrZXkpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcChvYmplY3QubmV4dE5vZGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxlbmd0aCgpe1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgdGhpcy5hcnIubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuYXJyW2ldICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBzdGVwKHRoaXMuYXJyW2ldKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdGVwKG9iamVjdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9iamVjdC5uZXh0Tm9kZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iamVjdC5uZXh0Tm9kZSAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMSArIHN0ZXAob2JqZWN0Lm5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH1cblxuICAgIGNsZWFyKCl7XG4gICAgICAgIGxldCBoZWFkID0gbnVsbDtcblxuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHRoaXMuYXJyLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmFycltpXSA9IGhlYWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAga2V5cygpe1xuICAgICAgICBsZXQga2V5c0FycmF5ID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCB0aGlzLmFyci5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5hcnJbaV0gIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHN0ZXAodGhpcy5hcnJbaV0pO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RlcChvYmplY3Qpe1xuICAgICAgICAgICAgICAgICAgICBpZihvYmplY3QubmV4dE5vZGUgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5c0FycmF5LnB1c2gob2JqZWN0LmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihvYmplY3QubmV4dE5vZGUgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5c0FycmF5LnB1c2gob2JqZWN0LmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcChvYmplY3QubmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5c0FycmF5O1xuICAgIH1cblxuICAgIHZhbHVlcygpe1xuICAgICAgICBsZXQgdmFsdWVzQXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHRoaXMuYXJyLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBpZih0aGlzLmFycltpXSAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgc3RlcCh0aGlzLmFycltpXSk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdGVwKG9iamVjdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9iamVjdC5uZXh0Tm9kZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNBcnJheS5wdXNoKG9iamVjdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihvYmplY3QubmV4dE5vZGUgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzQXJyYXkucHVzaChvYmplY3QudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXAob2JqZWN0Lm5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZXNBcnJheTtcbiAgICB9XG5cbiAgICBlbnRyaWVzKCl7XG4gICAgICAgIGxldCBlbnRyaWVzQXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHRoaXMuYXJyLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBpZih0aGlzLmFycltpXSAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgc3RlcCh0aGlzLmFycltpXSk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdGVwKG9iamVjdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9iamVjdC5uZXh0Tm9kZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsQUVudHJ5KG9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihvYmplY3QubmV4dE5vZGUgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbEFFbnRyeShvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXAob2JqZWN0Lm5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpbGxBRW50cnkob2JqZWN0KXtcbiAgICAgICAgICAgIGxldCBzaW5nbGVFbnRyeSA9IFtdO1xuICAgICAgICAgICAgc2luZ2xlRW50cnkucHVzaChvYmplY3Qua2V5KTtcbiAgICAgICAgICAgIHNpbmdsZUVudHJ5LnB1c2gob2JqZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIGVudHJpZXNBcnJheS5wdXNoKHNpbmdsZUVudHJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbnRyaWVzQXJyYXk7XG4gICAgfVxuXG4gICAgYXJyYXlMZW5ndGgoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnIubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5QXJyYXkoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnIpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hashMap.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hashMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashMap.js */ \"./src/hashMap.js\");\n\n\nconst list = new _hashMap_js__WEBPACK_IMPORTED_MODULE_0__.HashMap();\n\n// list of 24\n// list.set('apple', 'red');         // 1\n// list.set('banana', 'yellow');     // 2\n// list.set('grape', 'purple');      // 3\n// list.set('orange', 'orange');     // 4\n// list.set('lemon', 'yellow');      // 5\n// list.set('lime', 'green');        // 6\n// list.set('blueberry', 'blue');    // 7\n// list.set('strawberry', 'red');    // 8\n// list.set('cherry', 'dark red');   // 9\n// list.set('watermelon', 'green');  // 10\n// list.set('peach', 'peach');       // 11\n// list.set('plum', 'dark purple');  // 12\n// list.set('kiwi', 'brown');        // 13\n// list.set('mango', 'orange');      // 14\n// list.set('pineapple', 'golden');  // 15\n// list.set('pear', 'light green');  // 16\n// list.set('coconut', 'brown');     // 17\n// list.set('pomegranate', 'red');   // 18\n// list.set('blackberry', 'black');  // 19\n// list.set('raspberry', 'pink');    // 20\n// list.set('cranberry', 'red');     // 21\n// list.set('fig', 'purple');        // 22\n// list.set('papaya', 'orange');     // 23\n// list.set('dragonfruit', 'pink');  // 24\n\n// list of 48\n// list.set('apple', 'red');          // 1\n// list.set('banana', 'yellow');      // 2\n// list.set('grape', 'purple');       // 3\n// list.set('orange', 'orange');      // 4\n// list.set('lemon', 'yellow');       // 5\n// list.set('lime', 'green');         // 6\n// list.set('blueberry', 'blue');     // 7\n// list.set('strawberry', 'red');     // 8\n// list.set('cherry', 'dark red');    // 9\n// list.set('watermelon', 'green');   // 10\n// list.set('peach', 'peach');        // 11\n// list.set('plum', 'dark purple');   // 12\n// list.set('kiwi', 'brown');         // 13\n// list.set('mango', 'orange');       // 14\n// list.set('pineapple', 'golden');   // 15\n// list.set('pear', 'light green');   // 16\n// list.set('coconut', 'brown');      // 17\n// list.set('pomegranate', 'red');    // 18\n// list.set('blackberry', 'black');   // 19\n// list.set('raspberry', 'pink');     // 20\n// list.set('cranberry', 'red');      // 21\n// list.set('fig', 'purple');         // 22\n// list.set('papaya', 'orange');      // 23\n// list.set('dragonfruit', 'pink');   // 24\n// list.set('passionfruit', 'yellow'); // 25\n// list.set('lychee', 'white');       // 26\n// list.set('gooseberry', 'green');   // 27\n// list.set('jackfruit', 'yellow');   // 28\n// list.set('persimmon', 'orange');   // 29\n// list.set('mulberry', 'dark purple'); // 30\n// list.set('boysenberry', 'maroon'); // 31\n// list.set('elderberry', 'black');   // 32\n// list.set('tamarind', 'brown');     // 33\n// list.set('starfruit', 'yellow');   // 34\n// list.set('cantaloupe', 'orange');  // 35\n// list.set('honeydew', 'light green'); // 36\n// list.set('guava', 'light green');  // 37\n// list.set('soursop', 'white');      // 38\n// list.set('salak', 'brown');        // 39\n// list.set('durian', 'yellow');      // 40\n// list.set('miraclefruit', 'red');   // 41\n// list.set('marionberry', 'black');  // 42\n// list.set('cherimoya', 'green');    // 43\n// list.set('feijoa', 'green');       // 44\n// list.set('ackee', 'red');          // 45\n// list.set('jabuticaba', 'dark purple'); // 46\n// list.set('rambutan', 'red');       // 47\n// list.set('sapodilla', 'brown');    // 48\n\n// trigger limit\n// -\n\n// console test\nconsole.log(list.entries());\nconsole.log(list.keys().length);\nlist.arrayLength();\nlist.displayArray();\nconsole.log(list.get('ice-apple'));\nconsole.log(list.has('ice-apple'));\nconsole.log(list.remove('ice-apple'));\nlist.arrayLength();\nconsole.log(list.keys().length);\nconsole.log(list.length());\n// list.clear();\nconsole.log(list.keys());\nconsole.log(list.values());\n// list.displayArray();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBb0M7O0FBRXBDLGlCQUFpQixnREFBTzs7QUFFeEI7QUFDQSxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQzs7QUFFckM7QUFDQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFDdkMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHdDQUF3QztBQUN4QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHdDQUF3QztBQUN4QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsc0NBQXNDO0FBQ3RDLHNDQUFzQzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hhc2hNYXB9IGZyb20gXCIuL2hhc2hNYXAuanNcIlxuXG5jb25zdCBsaXN0ID0gbmV3IEhhc2hNYXAoKTtcblxuLy8gbGlzdCBvZiAyNFxuLy8gbGlzdC5zZXQoJ2FwcGxlJywgJ3JlZCcpOyAgICAgICAgIC8vIDFcbi8vIGxpc3Quc2V0KCdiYW5hbmEnLCAneWVsbG93Jyk7ICAgICAvLyAyXG4vLyBsaXN0LnNldCgnZ3JhcGUnLCAncHVycGxlJyk7ICAgICAgLy8gM1xuLy8gbGlzdC5zZXQoJ29yYW5nZScsICdvcmFuZ2UnKTsgICAgIC8vIDRcbi8vIGxpc3Quc2V0KCdsZW1vbicsICd5ZWxsb3cnKTsgICAgICAvLyA1XG4vLyBsaXN0LnNldCgnbGltZScsICdncmVlbicpOyAgICAgICAgLy8gNlxuLy8gbGlzdC5zZXQoJ2JsdWViZXJyeScsICdibHVlJyk7ICAgIC8vIDdcbi8vIGxpc3Quc2V0KCdzdHJhd2JlcnJ5JywgJ3JlZCcpOyAgICAvLyA4XG4vLyBsaXN0LnNldCgnY2hlcnJ5JywgJ2RhcmsgcmVkJyk7ICAgLy8gOVxuLy8gbGlzdC5zZXQoJ3dhdGVybWVsb24nLCAnZ3JlZW4nKTsgIC8vIDEwXG4vLyBsaXN0LnNldCgncGVhY2gnLCAncGVhY2gnKTsgICAgICAgLy8gMTFcbi8vIGxpc3Quc2V0KCdwbHVtJywgJ2RhcmsgcHVycGxlJyk7ICAvLyAxMlxuLy8gbGlzdC5zZXQoJ2tpd2knLCAnYnJvd24nKTsgICAgICAgIC8vIDEzXG4vLyBsaXN0LnNldCgnbWFuZ28nLCAnb3JhbmdlJyk7ICAgICAgLy8gMTRcbi8vIGxpc3Quc2V0KCdwaW5lYXBwbGUnLCAnZ29sZGVuJyk7ICAvLyAxNVxuLy8gbGlzdC5zZXQoJ3BlYXInLCAnbGlnaHQgZ3JlZW4nKTsgIC8vIDE2XG4vLyBsaXN0LnNldCgnY29jb251dCcsICdicm93bicpOyAgICAgLy8gMTdcbi8vIGxpc3Quc2V0KCdwb21lZ3JhbmF0ZScsICdyZWQnKTsgICAvLyAxOFxuLy8gbGlzdC5zZXQoJ2JsYWNrYmVycnknLCAnYmxhY2snKTsgIC8vIDE5XG4vLyBsaXN0LnNldCgncmFzcGJlcnJ5JywgJ3BpbmsnKTsgICAgLy8gMjBcbi8vIGxpc3Quc2V0KCdjcmFuYmVycnknLCAncmVkJyk7ICAgICAvLyAyMVxuLy8gbGlzdC5zZXQoJ2ZpZycsICdwdXJwbGUnKTsgICAgICAgIC8vIDIyXG4vLyBsaXN0LnNldCgncGFwYXlhJywgJ29yYW5nZScpOyAgICAgLy8gMjNcbi8vIGxpc3Quc2V0KCdkcmFnb25mcnVpdCcsICdwaW5rJyk7ICAvLyAyNFxuXG4vLyBsaXN0IG9mIDQ4XG4vLyBsaXN0LnNldCgnYXBwbGUnLCAncmVkJyk7ICAgICAgICAgIC8vIDFcbi8vIGxpc3Quc2V0KCdiYW5hbmEnLCAneWVsbG93Jyk7ICAgICAgLy8gMlxuLy8gbGlzdC5zZXQoJ2dyYXBlJywgJ3B1cnBsZScpOyAgICAgICAvLyAzXG4vLyBsaXN0LnNldCgnb3JhbmdlJywgJ29yYW5nZScpOyAgICAgIC8vIDRcbi8vIGxpc3Quc2V0KCdsZW1vbicsICd5ZWxsb3cnKTsgICAgICAgLy8gNVxuLy8gbGlzdC5zZXQoJ2xpbWUnLCAnZ3JlZW4nKTsgICAgICAgICAvLyA2XG4vLyBsaXN0LnNldCgnYmx1ZWJlcnJ5JywgJ2JsdWUnKTsgICAgIC8vIDdcbi8vIGxpc3Quc2V0KCdzdHJhd2JlcnJ5JywgJ3JlZCcpOyAgICAgLy8gOFxuLy8gbGlzdC5zZXQoJ2NoZXJyeScsICdkYXJrIHJlZCcpOyAgICAvLyA5XG4vLyBsaXN0LnNldCgnd2F0ZXJtZWxvbicsICdncmVlbicpOyAgIC8vIDEwXG4vLyBsaXN0LnNldCgncGVhY2gnLCAncGVhY2gnKTsgICAgICAgIC8vIDExXG4vLyBsaXN0LnNldCgncGx1bScsICdkYXJrIHB1cnBsZScpOyAgIC8vIDEyXG4vLyBsaXN0LnNldCgna2l3aScsICdicm93bicpOyAgICAgICAgIC8vIDEzXG4vLyBsaXN0LnNldCgnbWFuZ28nLCAnb3JhbmdlJyk7ICAgICAgIC8vIDE0XG4vLyBsaXN0LnNldCgncGluZWFwcGxlJywgJ2dvbGRlbicpOyAgIC8vIDE1XG4vLyBsaXN0LnNldCgncGVhcicsICdsaWdodCBncmVlbicpOyAgIC8vIDE2XG4vLyBsaXN0LnNldCgnY29jb251dCcsICdicm93bicpOyAgICAgIC8vIDE3XG4vLyBsaXN0LnNldCgncG9tZWdyYW5hdGUnLCAncmVkJyk7ICAgIC8vIDE4XG4vLyBsaXN0LnNldCgnYmxhY2tiZXJyeScsICdibGFjaycpOyAgIC8vIDE5XG4vLyBsaXN0LnNldCgncmFzcGJlcnJ5JywgJ3BpbmsnKTsgICAgIC8vIDIwXG4vLyBsaXN0LnNldCgnY3JhbmJlcnJ5JywgJ3JlZCcpOyAgICAgIC8vIDIxXG4vLyBsaXN0LnNldCgnZmlnJywgJ3B1cnBsZScpOyAgICAgICAgIC8vIDIyXG4vLyBsaXN0LnNldCgncGFwYXlhJywgJ29yYW5nZScpOyAgICAgIC8vIDIzXG4vLyBsaXN0LnNldCgnZHJhZ29uZnJ1aXQnLCAncGluaycpOyAgIC8vIDI0XG4vLyBsaXN0LnNldCgncGFzc2lvbmZydWl0JywgJ3llbGxvdycpOyAvLyAyNVxuLy8gbGlzdC5zZXQoJ2x5Y2hlZScsICd3aGl0ZScpOyAgICAgICAvLyAyNlxuLy8gbGlzdC5zZXQoJ2dvb3NlYmVycnknLCAnZ3JlZW4nKTsgICAvLyAyN1xuLy8gbGlzdC5zZXQoJ2phY2tmcnVpdCcsICd5ZWxsb3cnKTsgICAvLyAyOFxuLy8gbGlzdC5zZXQoJ3BlcnNpbW1vbicsICdvcmFuZ2UnKTsgICAvLyAyOVxuLy8gbGlzdC5zZXQoJ211bGJlcnJ5JywgJ2RhcmsgcHVycGxlJyk7IC8vIDMwXG4vLyBsaXN0LnNldCgnYm95c2VuYmVycnknLCAnbWFyb29uJyk7IC8vIDMxXG4vLyBsaXN0LnNldCgnZWxkZXJiZXJyeScsICdibGFjaycpOyAgIC8vIDMyXG4vLyBsaXN0LnNldCgndGFtYXJpbmQnLCAnYnJvd24nKTsgICAgIC8vIDMzXG4vLyBsaXN0LnNldCgnc3RhcmZydWl0JywgJ3llbGxvdycpOyAgIC8vIDM0XG4vLyBsaXN0LnNldCgnY2FudGFsb3VwZScsICdvcmFuZ2UnKTsgIC8vIDM1XG4vLyBsaXN0LnNldCgnaG9uZXlkZXcnLCAnbGlnaHQgZ3JlZW4nKTsgLy8gMzZcbi8vIGxpc3Quc2V0KCdndWF2YScsICdsaWdodCBncmVlbicpOyAgLy8gMzdcbi8vIGxpc3Quc2V0KCdzb3Vyc29wJywgJ3doaXRlJyk7ICAgICAgLy8gMzhcbi8vIGxpc3Quc2V0KCdzYWxhaycsICdicm93bicpOyAgICAgICAgLy8gMzlcbi8vIGxpc3Quc2V0KCdkdXJpYW4nLCAneWVsbG93Jyk7ICAgICAgLy8gNDBcbi8vIGxpc3Quc2V0KCdtaXJhY2xlZnJ1aXQnLCAncmVkJyk7ICAgLy8gNDFcbi8vIGxpc3Quc2V0KCdtYXJpb25iZXJyeScsICdibGFjaycpOyAgLy8gNDJcbi8vIGxpc3Quc2V0KCdjaGVyaW1veWEnLCAnZ3JlZW4nKTsgICAgLy8gNDNcbi8vIGxpc3Quc2V0KCdmZWlqb2EnLCAnZ3JlZW4nKTsgICAgICAgLy8gNDRcbi8vIGxpc3Quc2V0KCdhY2tlZScsICdyZWQnKTsgICAgICAgICAgLy8gNDVcbi8vIGxpc3Quc2V0KCdqYWJ1dGljYWJhJywgJ2RhcmsgcHVycGxlJyk7IC8vIDQ2XG4vLyBsaXN0LnNldCgncmFtYnV0YW4nLCAncmVkJyk7ICAgICAgIC8vIDQ3XG4vLyBsaXN0LnNldCgnc2Fwb2RpbGxhJywgJ2Jyb3duJyk7ICAgIC8vIDQ4XG5cbi8vIHRyaWdnZXIgbGltaXRcbi8vIC1cblxuLy8gY29uc29sZSB0ZXN0XG5jb25zb2xlLmxvZyhsaXN0LmVudHJpZXMoKSk7XG5jb25zb2xlLmxvZyhsaXN0LmtleXMoKS5sZW5ndGgpO1xubGlzdC5hcnJheUxlbmd0aCgpO1xubGlzdC5kaXNwbGF5QXJyYXkoKTtcbmNvbnNvbGUubG9nKGxpc3QuZ2V0KCdpY2UtYXBwbGUnKSk7XG5jb25zb2xlLmxvZyhsaXN0LmhhcygnaWNlLWFwcGxlJykpO1xuY29uc29sZS5sb2cobGlzdC5yZW1vdmUoJ2ljZS1hcHBsZScpKTtcbmxpc3QuYXJyYXlMZW5ndGgoKTtcbmNvbnNvbGUubG9nKGxpc3Qua2V5cygpLmxlbmd0aCk7XG5jb25zb2xlLmxvZyhsaXN0Lmxlbmd0aCgpKTtcbi8vIGxpc3QuY2xlYXIoKTtcbmNvbnNvbGUubG9nKGxpc3Qua2V5cygpKTtcbmNvbnNvbGUubG9nKGxpc3QudmFsdWVzKCkpO1xuLy8gbGlzdC5kaXNwbGF5QXJyYXkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Node: () => (/* binding */ Node)\n/* harmony export */ });\nclass Node{\n    constructor(key , value){\n        this.key = key;\n        this.value = value;\n        this.nextNode = null;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbm9kZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbm9kZS5qcz8xMWU3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb2Rle1xuICAgIGNvbnN0cnVjdG9yKGtleSAsIHZhbHVlKXtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0Tm9kZSA9IG51bGw7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/node.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;