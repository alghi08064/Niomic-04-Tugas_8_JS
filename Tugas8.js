function ceknama() {
  var person = {
    firstName: "Deedy",
    lastName : "Kohbusyeet",
    id       : 324325301278203,
  }
  console.log(person)
  console.log("Nama :", person.firstName, person.lastName)
  console.log("Nomer ID:", person.id)
  console.log(" ")
  // #perubahan id
  console.log("Perubahan Data menjadi:")
  person.id = 324325301278101
  console.log(person)
  console.log("Nama :", person.firstName, person.lastName)
  console.log("Nomer ID:", person.id)
}
 ceknama();
