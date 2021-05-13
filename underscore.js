const _ = {
  each: function (list, callback) {
    if (Array.isArray(list))
      for (let i = 0; i < list.length; i++) callback(list[i], i, list);
    else for (key in list) callback(list[key], key, list);
  },
  map: function (list, callback) {
    const storage = [];

    this.each(list, (name, idx, list) =>
      storage.push(callback(name, idx, list))
    );

    return storage;
  },
  fiter: function (list, callback) {
    const storage = [];

    this.each(
      list,
      (name, idx, list) => callback(name, idx, list) && storage.push(name)
    );

    return storage;
  },
  from: function (arr) {
    return Array.prototype.slice.call(arr);
  },
  reduce: function (list, callback, initialValue) {
    let current = initialValue;

    for (let i = 0; i < list.length; i++) {
      current = callback(list[i], current);
    }

    return current;
  },
  forEachRight: function (list, callback) {
    if (Array.isArray(list))
      for (i = list.length; i > 0; i--) callback(list[i - 1], i, list);
  },
  curry: function (fn) {
    return (arg) => {
      return (arg2) => {
        return fn(arg, arg2);
      };
    };
  },
  compose: function (func1, func2) {
    return (value) => {
      return func1(func2(value));
    };
  },
};

module.exports = _;
