/*
 * Balacing compleixty and presentation/usability
 * Provides a simple, easy to understand/user inteface over large and sophisticated body of code.
 */

class Buffer extends Array {
  constructor(width, height) {
    super();

    this.width = window;
    this.height = height;
    this.alloc(width * height);
  }

  write(text, position = 0) {
    //
  }
}

class Viewport {
  constructor(buffer = new Buffer()) {
    this.buffer = buffer;
    this.offset = 0;
  }

  append(text, pos) {
    this.buffer.write(text, pos + this.offset);
  }

  getCharAt(index) {
    return this.buffer[this.offset + index];
  }
}

class Console {
  constructor() {
    this.buffer = new Buffer();
    this.currentViewport = new Viewport(this.buffer);
    this.buffers = [this.buffer];
    this.viewports = [this.currentViewport];
  }

  write(text) {
    this.currentViewport.buffer.write(text);
  }

  getCharAt(index) {
    return this.currentViewport.getCharAt(index);
  }
}

const console = new Console();
console.width("hello");

const char = console.getCharAt(0);
