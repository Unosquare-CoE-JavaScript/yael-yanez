//* open for extension (herencia), closed for modification

let Color = Object.freeze({
  red: "red",
  green: "green",
  blue: "blue",
});

let Size = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  //! State space explosion
  //! 3 critaria will take 7 methods and thats not good

  filterByColor(products, color) {
    return products.filter((product) => product.color === color);
  }

  filterBySize(products, size) {
    return products.filter((product) => product.size === size);
  }

  filterBySizeAndColor(products, color, size) {
    return products.filter(
      (product) => product.size === size && product.color === color
    );
  }
}

//* Specification
class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

class BetterProductFilter {
  filter(items, spec) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}

let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);

let products = [apple, tree, house];

let productFilter = new ProductFilter();

console.log(`Green products (old): `);

for (let product of productFilter.filterByColor(products, Color.green))
  console.log(` * ${product.name} is green`);

let betterFilter = new BetterProductFilter();

console.log(`\nGreen products (new): `);

for (let product of betterFilter.filter(
  products,
  new ColorSpecification(Color.green)
))
  console.log(` * ${product.name} is green`);

let specs = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);

console.log(`\nLarge and green products: `);

for (let product of betterFilter.filter(products, specs))
  console.log(` * ${product.name} is large and green`);
