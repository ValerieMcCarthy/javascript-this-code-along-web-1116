const app = "I don't do much."

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}
 
function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}

 var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");
 
var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}
 
salad.describe = pbj.describe.bind(salad);


function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}
 
deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);