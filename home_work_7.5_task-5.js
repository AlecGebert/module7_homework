class ElectricApp {
  constructor(name, brand, amperage, type) {
    (this.name = name),
      (this.voltage = 220),
      (this.amperage = amperage),
      (this.isOn = false),
      (this.type = type),
      (this.brand = brand);
  }
  getType() {
    console.log(`${this.name} это - ${this.type}`);
  }
  getBrand() {
    console.log(`${this.name} произведен ${this.brand}`);
  }
  start() {
    this.isOn = true;
    console.log(`${this.name} работает.`);
  }
  stop() {
    this.isOn = false;
    console.log(`${this.name} не работает.`);
  }
  getPower() {
    let p = this.voltage * this.amperage;
    console.log(`Мощность - ${p} Вт`);
  }
  getDiscount() {
    let discount = Math.round(Math.random() * 100);
    console.log(`На ${this.name} действует скидка - ${discount} %`);
    if (discount > 80) {
      console.log("Только для членов клуба покупателей");
    }
  }
  getWarranty() {
    let warranty = Math.round(Math.random() * 10);
    if (warranty == 1) {
      console.log(`Гарантия на ${this.name} - ${warranty} год`);
    } else if (warranty >= 2 && warranty <= 4) {
      console.log(`Гарантия на ${this.name} - ${warranty} года`);
    } else {
      console.log(`Гарантия на ${this.name} - ${warranty} лет`);
    }
  }
  getProcessorType() {
    console.log(`Процессор - ${this.processor}`);
  }
  getBulbType() {
    console.log(`Стоит ${this.bulbType} лампа`);
  }
}

class ElectroLamp extends ElectricApp {
  constructor(name, brand, amperage, type) {
    super(name, brand, amperage, type);
    this.bulbType = "энергоберегающая";
  }
  getDiscount() {
    console.log(`Скидка на ${this.name} не предусмотрена`);
  }
}

const tableLamp = new ElectroLamp("Arstid", "IKEA", 1.5, "настольная лампа");

tableLamp.getType();
tableLamp.start();
tableLamp.getBrand();
tableLamp.getPower();
tableLamp.getDiscount();
tableLamp.getWarranty();
tableLamp.getBulbType();

class Computers extends ElectricApp {
  constructor(name, brand, amperage, type) {
    super(name, brand, amperage, type);
    this.processor = "Intel";
  }
  getWarranty() {
    console.log("Товар снят с гарантии");
  }
}

Computers.prototype = new ElectricApp();

const tableComp = new Computers("Idea Centre 3", "Lenovo", 5, "компьютер");

tableComp.getType();
tableComp.stop();
tableComp.getBrand();
tableComp.getPower();
tableComp.getDiscount();
tableComp.getWarranty();
tableComp.getProcessorType();
