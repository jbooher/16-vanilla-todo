(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _ToDo = require("./modules/ToDo");

var _ToDo2 = _interopRequireDefault(_ToDo);

var _ToDoList = require("./modules/ToDoList");

var _ToDoList2 = _interopRequireDefault(_ToDoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toDoSubmit = document.querySelector("#toDoSubmit");
var toDoInput = document.querySelector("#toDoInput");
var toDoForm = document.querySelector("#toDoForm");

var toDoList = new _ToDoList2.default();

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  toDoList.createToDo(toDoInput.value);
  toDoInput.value = "";
  toDoInput.focus();
  console.log(toDoList.toDos);
});

},{"./modules/ToDo":2,"./modules/ToDoList":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDo = function () {
  function ToDo(item) {
    var completed = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var todoList = arguments[2];

    _classCallCheck(this, ToDo);

    this.item = item;
    this.completed = completed;
    this.todoList = todoList;
  }

  _createClass(ToDo, [{
    key: "render",
    value: function render() {
      var _this = this;

      var ul = document.querySelector("#toDos");
      var ulCompleted = document.querySelector("#completedList");
      var li = document.createElement("li");

      var label = document.createElement("label");
      label.innerHTML = this.item;

      var input = document.createElement("input");
      input.type = "checkbox";
      label.appendChild(input);

      li.appendChild(label);

      if (this.completed === true) {
        ulCompleted.appendChild(li);
        input.type = "submit";
        input.value = "Archive";
        input.addEventListener("click", function (e) {
          ulCompleted.removeChild(li);
        });
      } else {
        li.addEventListener("change", function (e) {
          _this.completed = true;
          _this.todoList.save();
          ulCompleted.appendChild(li);
          input.type = "submit";
          input.value = "Archive";
          input.addEventListener("click", function (e) {
            ulCompleted.removeChild(li);
            _this.todoList.removeToDo(_this);
            _this.todoList.save();
          });
        });

        ul.appendChild(li);
      }
    }
  }]);

  return ToDo;
}();

exports.default = ToDo;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ToDo = require('./ToDo');

var _ToDo2 = _interopRequireDefault(_ToDo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoList = function () {
  function ToDoList() {
    _classCallCheck(this, ToDoList);

    this.toDos = [];
    this.load();
  }

  _createClass(ToDoList, [{
    key: 'createToDo',
    value: function createToDo(value) {
      var completed = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var toDo = new _ToDo2.default(value, completed, this);
      this.toDos.push(toDo);
      this.save();
      toDo.render();
    }
  }, {
    key: 'removeToDo',
    value: function removeToDo(todo) {
      this.toDos.splice(todo, 1);
    }
  }, {
    key: 'save',
    value: function save() {
      var todoData = this.toDos.map(function (todo) {
        return { item: todo.item, completed: todo.completed };
      });

      localStorage.setItem('todos', JSON.stringify(todoData));
    }
  }, {
    key: 'load',
    value: function load() {
      var _this = this;

      var stringified = localStorage.getItem('todos');
      if (stringified === null) {
        return;
      }

      JSON.parse(stringified).forEach(function (todo) {
        _this.createToDo(todo.item, todo.completed, _this);
      });
    }
  }]);

  return ToDoList;
}();

exports.default = ToDoList;

},{"./ToDo":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvVG9Eby5qcyIsImFwcC9tb2R1bGVzL1RvRG9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLGFBQXZCLENBQWI7QUFDTixJQUFNLFlBQVksU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQVo7QUFDTixJQUFNLFdBQVcsU0FBUyxhQUFULENBQXVCLFdBQXZCLENBQVg7O0FBRU4sSUFBTSxXQUFXLHdCQUFYOztBQUVOLFNBQVMsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsVUFBQyxDQUFELEVBQU87QUFDekMsSUFBRSxjQUFGLEdBRHlDO0FBRXpDLFdBQVMsVUFBVCxDQUFvQixVQUFVLEtBQVYsQ0FBcEIsQ0FGeUM7QUFHekMsWUFBVSxLQUFWLEdBQWtCLEVBQWxCLENBSHlDO0FBSXpDLFlBQVUsS0FBVixHQUp5QztBQUt6QyxVQUFRLEdBQVIsQ0FBWSxTQUFTLEtBQVQsQ0FBWixDQUx5QztDQUFQLENBQXBDOzs7Ozs7Ozs7Ozs7O0lDVE07QUFDSixXQURJLElBQ0osQ0FBWSxJQUFaLEVBQStDO1FBQTdCLGtFQUFZLHFCQUFpQjtRQUFWLHdCQUFVOzswQkFEM0MsTUFDMkM7O0FBQzdDLFNBQUssSUFBTCxHQUFZLElBQVosQ0FENkM7QUFFN0MsU0FBSyxTQUFMLEdBQWlCLFNBQWpCLENBRjZDO0FBRzdDLFNBQUssUUFBTCxHQUFnQixRQUFoQixDQUg2QztHQUEvQzs7ZUFESTs7NkJBT0s7OztBQUNQLFVBQU0sS0FBSyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBTCxDQURDO0FBRVAsVUFBTSxjQUFjLFNBQVMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBZCxDQUZDO0FBR1AsVUFBTSxLQUFLLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFMLENB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dXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBUb0RvIGZyb20gXCIuL21vZHVsZXMvVG9Eb1wiO1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gXCIuL21vZHVsZXMvVG9Eb0xpc3RcIjtcblxuY29uc3QgdG9Eb1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb1N1Ym1pdFwiKTtcbmNvbnN0IHRvRG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb0lucHV0XCIpO1xuY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9Gb3JtXCIpO1xuXG5jb25zdCB0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpO1xuXG50b0RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdG9Eb0xpc3QuY3JlYXRlVG9Ebyh0b0RvSW5wdXQudmFsdWUpO1xuICB0b0RvSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0b0RvSW5wdXQuZm9jdXMoKTtcbiAgY29uc29sZS5sb2codG9Eb0xpc3QudG9Eb3MpO1xuXG59KTtcbiIsImNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3RvcihpdGVtLCBjb21wbGV0ZWQgPSBmYWxzZSwgdG9kb0xpc3QpIHtcbiAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb3NcIik7XG4gICAgY29uc3QgdWxDb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZExpc3RcIik7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSB0aGlzLml0ZW07XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGxpLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIGlmICh0aGlzLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgdWxDb21wbGV0ZWQuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgaW5wdXQudHlwZSA9IFwic3VibWl0XCI7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiQXJjaGl2ZVwiO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHVsQ29tcGxldGVkLnJlbW92ZUNoaWxkKGxpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZG9MaXN0LnNhdmUoKTtcbiAgICAgICAgdWxDb21wbGV0ZWQuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBpbnB1dC50eXBlID0gXCJzdWJtaXRcIjtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIkFyY2hpdmVcIjtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgdWxDb21wbGV0ZWQucmVtb3ZlQ2hpbGQobGkpO1xuICAgICAgICAgIHRoaXMudG9kb0xpc3QucmVtb3ZlVG9Ebyh0aGlzKTtcbiAgICAgICAgICB0aGlzLnRvZG9MaXN0LnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xuIiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vVG9Eb1wiO1xuXG5jbGFzcyBUb0RvTGlzdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b0RvcyA9IFtdO1xuICAgIHRoaXMubG9hZCgpO1xuICB9XG5cbiAgY3JlYXRlVG9Ebyh2YWx1ZSwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICBjb25zdCB0b0RvID0gbmV3IFRvRG8odmFsdWUsIGNvbXBsZXRlZCwgdGhpcyk7XG4gICAgdGhpcy50b0Rvcy5wdXNoKHRvRG8pO1xuICAgIHRoaXMuc2F2ZSgpO1xuICAgIHRvRG8ucmVuZGVyKCk7XG4gIH1cblxuICByZW1vdmVUb0RvKHRvZG8pIHtcbiAgICB0aGlzLnRvRG9zLnNwbGljZSh0b2RvLCAxKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgbGV0IHRvZG9EYXRhID0gdGhpcy50b0Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiB7IGl0ZW06IHRvZG8uaXRlbSwgY29tcGxldGVkOiB0b2RvLmNvbXBsZXRlZCB9O1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0RhdGEpKTtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgbGV0IHN0cmluZ2lmaWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJyk7XG4gICAgaWYgKHN0cmluZ2lmaWVkID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgSlNPTi5wYXJzZShzdHJpbmdpZmllZCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVUb0RvKHRvZG8uaXRlbSwgdG9kby5jb21wbGV0ZWQsIHRoaXMpO1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7XG4iXX0=
