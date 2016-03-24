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
      var ulCompleted = document.querySelector("#completedList");
      var li = document.createElement("li");

      var label = document.createElement("label");
      label.innerHTML = this.item;

      var input = document.createElement("input");
      input.type = "checkbox";
      label.appendChild(input);

      li.appendChild(label);

      li.addEventListener("change", function (e) {
        li.classList.add("completed");
        ulCompleted.appendChild(li);
        label.removeChild(input);
        console.log(li);
      });

      ul.appendChild(li);
    }
  }]);

  return ToDo;
}();

exports.default = ToDo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvVG9Eby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBYjtBQUNOLElBQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWjtBQUNOLElBQU0sV0FBVyxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWDs7QUFFTixTQUFTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUMsQ0FBRCxFQUFPO0FBQ3pDLE1BQU0sT0FBTyxtQkFBUyxVQUFVLEtBQVYsQ0FBaEIsQ0FEbUM7QUFFekMsSUFBRSxjQUFGLEdBRnlDO0FBR3pDLE9BQUssTUFBTCxHQUh5QztBQUl6QyxZQUFVLEtBQVYsR0FBa0IsRUFBbEIsQ0FKeUM7QUFLekMsWUFBVSxLQUFWLEdBTHlDO0NBQVAsQ0FBcEM7Ozs7Ozs7Ozs7Ozs7SUNOTTtBQUNKLFdBREksSUFDSixDQUFZLElBQVosRUFBa0I7MEJBRGQsTUFDYzs7QUFDaEIsU0FBSyxJQUFMLEdBQVksSUFBWixDQURnQjtBQUVoQixTQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FGZ0I7R0FBbEI7O2VBREk7OzZCQU1LO0FBQ1AsVUFBTSxLQUFLLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFMLENBREM7QUFFUCxVQUFNLGNBQWMsU0FBUyxhQUFULENBQXVCLGdCQUF2QixDQUFkLENBRkM7QUFHUCxVQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLElBQXZCLENBQUwsQ0FIQzs7QUFLUCxVQUFNLFFBQVEsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVIsQ0FMQztBQU1QLFlBQU0sU0FBTixHQUFrQixLQUFLLElBQUwsQ0FOWDs7QUFRUCxVQUFNLFFBQVEsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVIsQ0FSQztBQVNQLFlBQU0sSUFBTixHQUFhLFVBQWIsQ0FUTztBQVVQLFlBQU0sV0FBTixDQUFrQixLQUFsQixFQVZPOztBQVlQLFNBQUcsV0FBSCxDQUFlLEtBQWYsRUFaTzs7QUFjUCxTQUFHLGdCQUFILENBQW9CLFFBQXBCLEVBQThCLFVBQUMsQ0FBRCxFQUFPO0FBQ25DLFdBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsV0FBakIsRUFEbUM7QUFFbkMsb0JBQVksV0FBWixDQUF3QixFQUF4QixFQUZtQztBQUduQyxjQUFNLFdBQU4sQ0FBa0IsS0FBbEIsRUFIbUM7QUFJbkMsZ0JBQVEsR0FBUixDQUFZLEVBQVosRUFKbUM7T0FBUCxDQUE5QixDQWRPOztBQXFCUCxTQUFHLFdBQUgsQ0FBZSxFQUFmLEVBckJPOzs7O1NBTkw7OztrQkErQlMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vbW9kdWxlcy9Ub0RvXCI7XG5cbmNvbnN0IHRvRG9TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9TdWJtaXRcIik7XG5jb25zdCB0b0RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9JbnB1dFwiKTtcbmNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvRm9ybVwiKTtcblxudG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBjb25zdCB0b0RvID0gbmV3IFRvRG8odG9Eb0lucHV0LnZhbHVlKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b0RvLnJlbmRlcigpO1xuICB0b0RvSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0b0RvSW5wdXQuZm9jdXMoKTtcbn0pO1xuIiwiY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKGl0ZW0pIHtcbiAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9zXCIpO1xuICAgIGNvbnN0IHVsQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRMaXN0XCIpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVtO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBsaS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgdWxDb21wbGV0ZWQuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgbGFiZWwucmVtb3ZlQ2hpbGQoaW5wdXQpO1xuICAgICAgY29uc29sZS5sb2cobGkpO1xuICAgIH0pO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG87XG4iXX0=
