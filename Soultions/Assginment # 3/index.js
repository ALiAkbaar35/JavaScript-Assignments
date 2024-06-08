function Person(name, city) {
  this.name = name;
  this.city = city;
}

function filteredData() {
  var persons = [
    new Person("Ali", "Lahore"),
    new Person("Obaid", "Karachi"),
    new Person("Sara", "Lahore"),
    new Person("Ahmed", "Karachi"),
  ];

  var data = persons.map((person) => ({
    [person.city]: [person.name],
  }));

  const result = {};
  data.forEach((item) => {
    const city = Object.keys(item)[0];
    if (result[city]) {
      result[city] = result[city].concat(item[city]);
    } else {
      result[city] = item[city];
    }
  });

  console.log("Unsorted Data:", persons);
  return result;
}

document.addEventListener("DOMContentLoaded", function () {
  var result = filteredData();
  console.log("Grouped by city:", result);
});
