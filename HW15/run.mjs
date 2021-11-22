import { Address } from "./Address.mjs";
let address1 = new Address();
address1 = Address.builder()
        .setCountry ("Country")
        .setCity ("City")
        .setStreet ("Street")
        .setHouseNumber(1);

console.log(address1.toString());