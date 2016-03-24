(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _ToDo = require("./modules/ToDo");

var _ToDo2 = _interopRequireDefault(_ToDo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toDoSubmit = document.querySelector("#toDoSubmit");
var toDoInput = document.querySelector("#toDoInput");
var toDoForm = document.querySelector("#toDoForm");

toDoForm.addEventListener("submit", function (e) {
  var toDo = new _ToDo2.default(toDoInput.value);
  e.preventDefault();
  toDo.render();
  toDoInput.value = "";
  toDoInput.focus();
});

},{"./modules/ToDo":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDo = function () {
  function ToDo(item) {
    _classCallCheck(this, ToDo);

    this.item = item;
    this.completed = false;
  }

  _createClass(ToDo, [{
    key: "render",
    value: function render() {
      var ul = document.querySelector("#toDos");
      var li = document.createElement("li");

      var label = document.createElement("label");
      label.innerHTML = this.item;

      var input = document.createElement("input");
      input.type = "checkbox";
      label.appendChild(input);

      li.appendChild(label);

      li.addEventListener("change", function (e) {
        li.classList.add("completed");
        label.removeChild(input);
      });

      ul.appendChild(li);
    }
  }]);

  return ToDo;
}();

exports.default = ToDo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvVG9Eby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBYjtBQUNOLElBQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWjtBQUNOLElBQU0sV0FBVyxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWDs7QUFFTixTQUFTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUMsQ0FBRCxFQUFPO0FBQ3pDLE1BQU0sT0FBTyxtQkFBUyxVQUFVLEtBQVYsQ0FBaEIsQ0FEbUM7QUFFekMsSUFBRSxjQUFGLEdBRnlDO0FBR3pDLE9BQUssTUFBTCxHQUh5QztBQUl6QyxZQUFVLEtBQVYsR0FBa0IsRUFBbEIsQ0FKeUM7QUFLekMsWUFBVSxLQUFWLEdBTHlDO0NBQVAsQ0FBcEM7Ozs7Ozs7Ozs7Ozs7SUNOTTtBQUNKLFdBREksSUFDSixDQUFZLElBQVosRUFBa0I7MEJBRGQsTUFDYzs7QUFDaEIsU0FBSyxJQUFMLEdBQVksSUFBWixDQURnQjtBQUVoQixTQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FGZ0I7R0FBbEI7O2VBREk7OzZCQU1LO0FBQ1AsVUFBTSxLQUFLLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFMLENBREM7QUFFUCxVQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLElBQXZCLENBQUwsQ0FGQzs7QUFJUCxVQUFNLFFBQVEsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVIsQ0FKQztBQUtQLFlBQU0sU0FBTixHQUFrQixLQUFLLElBQUwsQ0FMWDs7QUFPUCxVQUFNLFFBQVEsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVIsQ0FQQztBQVFQLFlBQU0sSUFBTixHQUFhLFVBQWIsQ0FSTztBQVNQLFlBQU0sV0FBTixDQUFrQixLQUFsQixFQVRPOztBQVdQLFNBQUcsV0FBSCxDQUFlLEtBQWYsRUFYTzs7QUFhUCxTQUFHLGdCQUFILENBQW9CLFFBQXBCLEVBQThCLFVBQUMsQ0FBRCxFQUFPO0FBQ25DLFdBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsV0FBakIsRUFEbUM7QUFFbkMsY0FBTSxXQUFOLENBQWtCLEtBQWxCLEVBRm1DO09BQVAsQ0FBOUIsQ0FiTzs7QUFrQlAsU0FBRyxXQUFILENBQWUsRUFBZixFQWxCTzs7OztTQU5MOzs7a0JBNEJTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBUb0RvIGZyb20gXCIuL21vZHVsZXMvVG9Eb1wiO1xuXG5jb25zdCB0b0RvU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvU3VibWl0XCIpO1xuY29uc3QgdG9Eb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvSW5wdXRcIik7XG5jb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb0Zvcm1cIik7XG5cbnRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgY29uc3QgdG9EbyA9IG5ldyBUb0RvKHRvRG9JbnB1dC52YWx1ZSk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdG9Eby5yZW5kZXIoKTtcbiAgdG9Eb0lucHV0LnZhbHVlID0gXCJcIjtcbiAgdG9Eb0lucHV0LmZvY3VzKCk7XG59KTtcbiIsImNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0Rvc1wiKTtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IHRoaXMuaXRlbTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgIGxhYmVsLnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICB9KTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xuIl19
