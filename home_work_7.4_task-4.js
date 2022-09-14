function ElectricApp(name, amperage, type) {
  (this.name = name),
    (this.voltage = 220),
    (this.amperage = amperage),
    (this.isOn = false),
    (this.type = type);
}

ElectricApp.prototype.getType = function () {
  console.log(`${this.name} это - ${this.type}`);
};

ElectricApp.prototype.getBrand = function () {
  console.log(`${this.name} произведен ${this.brand}`);
};

ElectricApp.prototype.start = function () {
  this.isOn = true;
  console.log(`${this.name} работает.`);
};

ElectricApp.prototype.stop = function () {
  this.isOn = false;
  console.log(`${this.name} не работает.`);
};

ElectricApp.prototype.getPower = function () {
  let p = this.voltage * this.amperage;
  console.log(`Мощность - ${p} Вт`);
};

ElectricApp.prototype.getDiscount = function () {
  let discount = Math.round(Math.random() * 100);
  console.log(`На ${this.name} действует скидка - ${discount} %`);
  if (discount > 80) {
    console.log("Только для членов клуба покупателей");
  }
};

ElectricApp.prototype.getWarranty = function () {
  let warranty = Math.round(Math.random() * 10);
  if (warranty == 1) {
    console.log(`Гарантия на ${this.name} - ${warranty} год`);
  } else if (warranty >= 2 && warranty <= 4) {
    console.log(`Гарантия на ${this.name} - ${warranty} года`);
  } else {
    console.log(`Гарантия на ${this.name} - ${warranty} лет`);
  }
};

ElectricApp.prototype.getProcessorType = function () {
  console.log(`Процессор - ${this.processor}`);
};

ElectricApp.prototype.getBulbType = function () {
  console.log(`Стоит ${this.bulbType} лампа`);
};

function ElectroLamp(name, brand, amperage, type) {
  (this.name = name),
    (this.brand = brand),
    (this.amperage = amperage),
    (this.type = type),
    (this.bulbType = "энергосберегающая");
}

ElectroLamp.prototype = new ElectricApp();

ElectroLamp.prototype.getDiscount = function () {
  console.log(`Скидка на ${this.name} не предусмотрена`);
};

const tableLamp = new ElectroLamp("Arstid", "IKEA", 1.5, "настольная лампа");

tableLamp.getType();
tableLamp.start();
tableLamp.getBrand();
tableLamp.getPower();
tableLamp.getDiscount();
tableLamp.getWarranty();
tableLamp.getBulbType();

function Computers(name, brand, amperage, type) {
  (this.name = name),
    (this.brand = brand),
    (this.amperage = amperage),
    (this.type = type),
    (this.processor = "Intel");
}

Computers.prototype = new ElectricApp();

Computers.prototype.getWarranty = function () {
  console.log("Товар снят с гарантии");
};

const tableComp = new Computers("Idea Centre 3", "Lenovo", 5, "компьютер");

tableComp.getType();
tableComp.stop();
tableComp.getBrand();
tableComp.getPower();
tableComp.getDiscount();
tableComp.getWarranty();
tableComp.getProcessorType();
