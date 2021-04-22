class ClassBuilder {
  constructor(className) {
    this.className = className;
    this.fields = [];
  }

  addField(fieldName) {
    this.fields.push(fieldName);
    return this;
  }

  buildClass() {
    const { fields, className } = this;

    const constructorArguments = fields.join(", ");
    const classProporties = fields
      .map((field) => `    this.${field} = ${field};\n`)
      .join("");

    const buildedClass =
      `class ${className} {\n` +
      `  constructor(${constructorArguments}) {\n` +
      `${classProporties}` +
      `  }\n}`;

    return buildedClass;
  }

  toString() {
    return this.buildClass();
  }
}

const classBuilder = new ClassBuilder("Person");
classBuilder.addField("name").addField("age");

console.log(classBuilder.toString());
