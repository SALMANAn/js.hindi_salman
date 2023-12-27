function Bike(model, color) {
    this.model = model;
    this.color = color;
  }
  
  Bike.prototype.getDetails = function () {
    return this.model + " bike has" + this.color + " color";
  };
