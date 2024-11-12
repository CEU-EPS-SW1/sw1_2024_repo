class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() { return this.values[0]; }
  set red(value) { this.values[0] = value; }
}

const color = new Color(255,0,0);
console.log(color.red);
color.red = 100;
