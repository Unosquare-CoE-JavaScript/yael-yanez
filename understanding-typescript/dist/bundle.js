(() => {
  'use strict';
  var e;
  !(function (e) {
    (e[(e.Active = 0)] = 'Active'), (e[(e.Finished = 1)] = 'Finished');
  })(e || (e = {}));
  class t {
    constructor(e, t, n, r, s) {
      (this.id = e),
        (this.title = t),
        (this.description = n),
        (this.people = r),
        (this.status = s);
    }
  }
  const n = function (e, t, n) {
    const r = n.value;
    return {
      configurable: !0,
      get() {
        return r.bind(this);
      },
    };
  };
  class r extends class {
    constructor() {
      this.listeners = [];
    }
    addListener(e) {
      this.listeners.push(e);
    }
  } {
    constructor() {
      super(), (this.projects = []);
    }
    static getInstance() {
      return this.instance || (this.instance = new r()), this.instance;
    }
    addProject(n, r, s) {
      const i = new t(Math.random().toString(), n, r, s, e.Active);
      this.projects.push(i), this.updateListeners();
    }
    moveProject(e, t) {
      const n = this.projects.find((t) => t.id === e);
      n && n.status !== t && ((n.status = t), this.updateListeners());
    }
    updateListeners() {
      for (const e of this.listeners) e(this.projects.slice());
    }
  }
  const s = r.getInstance();
  function i(e) {
    const {
      value: t,
      required: n,
      minLength: r,
      maxLength: s,
      min: i,
      max: o,
    } = e;
    let l = !0;
    return (
      n && (l = l && !!t.toString().trim()),
      null != r && 'string' == typeof t && (l = l && t.trim().length >= r),
      null != s && 'string' == typeof t && (l = l && t.trim().length <= s),
      null != i && 'number' == typeof t && (l = l && t >= i),
      null != o && 'number' == typeof t && (l = l && t <= o),
      l
    );
  }
  const o = class {
    constructor(e, t, n, r) {
      (this.templateElement = document.getElementById(e)),
        (this.hostElement = document.getElementById(t));
      const s = document.importNode(this.templateElement.content, !0);
      (this.element = s.firstElementChild),
        r && (this.element.id = r),
        this.attach(n);
    }
    attach(e) {
      this.hostElement.insertAdjacentElement(
        e ? 'afterbegin' : 'beforeend',
        this.element
      );
    }
  };
  class l extends o {
    constructor() {
      super('project-input', 'app', !0, 'user-input'),
        (this.titleInputElement = this.element.querySelector('#title')),
        (this.descriptionInputElement =
          this.element.querySelector('#description')),
        (this.peopleInputElement = this.element.querySelector('#people')),
        this.configure();
    }
    configure() {
      this.element.addEventListener('submit', this.submitHandler);
    }
    renderContent() {}
    gatherUserInput() {
      const e = this.titleInputElement.value,
        t = this.descriptionInputElement.value,
        n = this.peopleInputElement.value,
        r = { value: t, required: !0, minLength: 5 },
        s = { value: +n, required: !0, min: 1, max: 5 };
      return i({ value: e, required: !0 }) && i(r) && i(s)
        ? [e, t, +n]
        : void alert('Invalid input, please try again');
    }
    clearInputs() {
      (this.titleInputElement.value = ''),
        (this.descriptionInputElement.value = ''),
        (this.peopleInputElement.value = '');
    }
    submitHandler(e) {
      e.preventDefault();
      const t = this.gatherUserInput();
      if (Array.isArray(t)) {
        const [e, n, r] = t;
        s.addProject(e, n, r), this.clearInputs();
      }
    }
  }
  !(function (e, t, n, r) {
    var s,
      i = arguments.length,
      o =
        i < 3
          ? t
          : null === r
          ? (r = Object.getOwnPropertyDescriptor(t, n))
          : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(e, t, n, r);
    else
      for (var l = e.length - 1; l >= 0; l--)
        (s = e[l]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
    i > 3 && o && Object.defineProperty(t, n, o);
  })([n], l.prototype, 'submitHandler', null);
  const a = l;
  var c = function (e, t, n, r) {
    var s,
      i = arguments.length,
      o =
        i < 3
          ? t
          : null === r
          ? (r = Object.getOwnPropertyDescriptor(t, n))
          : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(e, t, n, r);
    else
      for (var l = e.length - 1; l >= 0; l--)
        (s = e[l]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
    return i > 3 && o && Object.defineProperty(t, n, o), o;
  };
  class d extends o {
    constructor(e, t) {
      super('single-project', e, !1, t.id),
        (this.project = t),
        this.configure(),
        this.renderContent();
    }
    get persons() {
      return 1 === this.project.people
        ? '1 person'
        : `${this.project.people} persons`;
    }
    renderContent() {
      (this.element.querySelector('h2').textContent = this.project.title),
        (this.element.querySelector(
          'h3'
        ).textContent = `${this.persons} assigned.`),
        (this.element.querySelector('p').textContent =
          this.project.description);
    }
    dragStartHandler(e) {
      e.dataTransfer.setData('text/plain', this.project.id),
        (e.dataTransfer.effectAllowed = 'move');
    }
    dragEndHandler(e) {
      console.log('DragEnd');
    }
    configure() {
      this.element.addEventListener('dragstart', this.dragStartHandler),
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
  }
  c([n], d.prototype, 'dragStartHandler', null),
    c([n], d.prototype, 'dragEndHandler', null);
  const p = d;
  var u = function (e, t, n, r) {
    var s,
      i = arguments.length,
      o =
        i < 3
          ? t
          : null === r
          ? (r = Object.getOwnPropertyDescriptor(t, n))
          : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(e, t, n, r);
    else
      for (var l = e.length - 1; l >= 0; l--)
        (s = e[l]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
    return i > 3 && o && Object.defineProperty(t, n, o), o;
  };
  class h extends o {
    constructor(t) {
      super('project-list', 'app', !1, `${e[t].toLowerCase()}-projects`),
        (this.type = t),
        (this.assignedProjects = []),
        this.configure(),
        this.renderContent();
    }
    renderProjects() {
      document.getElementById(
        `${e[this.type].toLowerCase()}-projects-list`
      ).innerHTML = '';
      for (const e of this.assignedProjects)
        new p(this.element.querySelector('ul').id, e);
    }
    dragOverHandler(e) {
      e.dataTransfer &&
        'text/plain' === e.dataTransfer.types[0] &&
        (e.preventDefault(),
        this.element.querySelector('ul').classList.add('droppable'));
    }
    dropHandler(e) {
      const t = e.dataTransfer.getData('text/plain');
      s.moveProject(t, this.type);
    }
    dragLeaveHandler(e) {
      this.element.querySelector('ul').classList.remove('droppable');
    }
    configure() {
      this.element.addEventListener('dragover', this.dragOverHandler),
        this.element.addEventListener('dragleave', this.dragLeaveHandler),
        this.element.addEventListener('drop', this.dropHandler),
        s.addListener((t) => {
          const n = t.filter((t) =>
            this.type === e.Active
              ? t.status === e.Active
              : t.status === e.Finished
          );
          (this.assignedProjects = n), this.renderProjects();
        });
    }
    renderContent() {
      const t = `${e[this.type].toLowerCase()}-projects-list`;
      (this.element.querySelector('ul').id = t),
        (this.element.querySelector('h2').textContent =
          e[this.type].toUpperCase() + ' PROJECTS');
    }
  }
  u([n], h.prototype, 'dragOverHandler', null),
    u([n], h.prototype, 'dropHandler', null),
    u([n], h.prototype, 'dragLeaveHandler', null);
  const m = h;
  new a(), new m(e.Active), new m(e.Finished), console.log('kk');
})();
