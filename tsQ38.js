function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("Los Angeles");
