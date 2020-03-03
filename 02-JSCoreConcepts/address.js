title = "dr";
name = "Mateusz";
surname = "Kubicki";
street = "Długa 15";
city = "Kraków";
zip = "30-781";
country = "Poland";

adress1 =
  title +
  " " +
  surname +
  "\n" +
  "ul. " +
  street +
  "\n" +
  zip +
  " " +
  city +
  "\n" +
  country;

adress2 = `${title} ${surname} \nul. ${street} \n${zip} ${city} \n${country} `;

console.log(adress1);
console.log(adress2);
