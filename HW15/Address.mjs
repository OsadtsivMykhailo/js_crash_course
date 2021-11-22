export class Address {
    #country;
    #city;
    #street;
    #houseNumber;
    Address() {
    }

    getCountry() {
        return this.#country;
    }
    getСity() {
        return this.#city;
    }
    getStreet() {
        return this.#street;
    }
    getHouseNumber() {
        return this.#houseNumber;
    }

    toString() {
        return `Country : ${this.getCountry()}
City : ${this.getСity()}
Street : ${this.getStreet()}
HouseNumber : ${this.getHouseNumber()}`
    }

    static builder () {
        let address = new Address;
        address.setCountry();
        address.setCity();
        address.setStreet();
        address.setHouseNumber();
        return address;
    }
    setCountry(country = "") {
        this.#country = country;
        return this;
    }
    setCity(city = "") {
        this.#city = city;
        return this;
    }
    setStreet(street = "") {
        this.#street = street;
        return this;
    }
    setHouseNumber(houseNumber = 0) {
        this.#houseNumber = houseNumber;
        return this;
    }
}

