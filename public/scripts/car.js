class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <img src="${this.image}" class="img-fluid car-img" />
        <h1 class="car-title"> ${this.manufacture}/${this.model}</h1>
        <h2 class="car-price">Rp ${this.rentPerDay} / hari</h2>
        <p class="car-subtitle">${(this.description !== "") ? this.description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod commodi explicabo, omnis voluptates quisquam blanditiis.'}</p>
        <div class="car-detail">
          <div class="detail-item"><img src="./icons/fi_users.png" />${this.capacity} Orang</div>
          <div class="detail-item"><img src="./icons/fi_settings.png" />${this.transmission}</div>
          <div class="detail-item"><img src="./icons/fi_calendar.png" />Tahun ${this.year}</div>
        </div>
        <button class="btn btn-green w-100 mt-4">Pilih Mobil</button>
      </div>
    </div>
    `;
  }
}
