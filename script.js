document.addEventListener("DOMContentLoaded", function() {
  const categoryButtons = document.querySelectorAll(".category");
  const recipeContainer = document.getElementById("recipeContainer");

  const recipes = [
     {
    cuisine: "china",
    name: "Dumplings",
    description: "Delicious dumplings filled with various ingredients.",
    recipe: "Here's a simple recipe for Dumplings:\n\n" +
            "Ingredients:\n" +
            "1) 250g all-purpose flour\n" +
            "2) 150ml water\n" +
            "3) 250g ground pork\n" +
            "4) 100g shrimp, peeled and deveined\n" +
            "5) 2 green onions, finely chopped\n" +
            "6) 2 cloves garlic, minced\n" +
            "7) 1 tablespoon soy sauce\n" +
            "8) 1 tablespoon sesame oil\n" +
            "9) 1/2 teaspoon salt\n\n" +
            "Tools:\n" +
            "1) Mixing bowl\n" +
            "2) Rolling pin\n" +
            "3) Dumpling wrappers\n" +
            "4) Frying pan\n\n" +
            "Steps:\n" +
            "1) In a mixing bowl, combine the ground pork, shrimp, green onions, garlic, soy sauce, sesame oil, and salt. Mix well.\n" +
            "2) In a separate bowl, mix the all-purpose flour and water to form a dough. Knead until smooth.\n" +
            "3) Roll out the dough on a floured surface into a thin sheet.\n" +
            "4) Cut out small circles from the dough using a round cookie cutter or a glass.\n" +
            "5) Place a spoonful of the pork and shrimp filling in the center of each dumpling wrapper.\n" +
            "6) Fold the wrapper in half and pinch the edges to seal the dumpling.\n" +
            "7) Heat a frying pan over medium heat and add some oil.\n" +
            "8) Place the dumplings in the pan and cook until the bottoms are golden brown.\n" +
            "9) Pour in a small amount of water, cover the pan, and steam the dumplings for about 5 minutes.\n" +
            "10) Remove the lid and continue cooking until all the water has evaporated.\n" +
            "11) Serve the dumplings hot with soy sauce or your favorite dipping sauce.\n",
},
      {
          cuisine: "china",
          name: "Peking Duck",
          description: "Crispy duck dish with thin pancakes and hoisin sauce.",
          recipe: "Sample recipe for Peking Duck. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "france",
          name: "Croissant",
          description: "Buttery and flaky pastry originating from France.",
          recipe: "Sample recipe for Croissant. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "france",
          name: "Coq au Vin",
          description: "Braised chicken dish cooked with red wine, mushrooms, and onions.",
          recipe: "Sample recipe for Coq au Vin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "greece",
          name: "Moussaka",
          description: "Layered dish with eggplant, minced meat, and béchamel sauce.",
          recipe: "Sample recipe for Moussaka. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "greece",
          name: "Spanakopita",
          description: "Greek spinach and feta cheese pie with crispy phyllo crust.",
          recipe: "Sample recipe for Spanakopita. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "india",
          name: "Biryani",
          description: "Flavorful rice dish with meat, vegetables, and aromatic spices.",
          recipe: "Sample recipe for Biryani. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "india",
          name: "Butter Chicken",
          description: "Creamy and rich chicken curry cooked in tomato-based sauce.",
          recipe: "Sample recipe for Butter Chicken. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "italy",
          name: "Pizza Margherita",
          description: "Classic Italian pizza with tomato sauce, mozzarella cheese, and basil.",
          recipe: "Sample recipe for Pizza Margherita. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "italy",
          name: "Tiramisu",
          description: "Layered dessert with coffee-soaked ladyfingers and mascarpone cream.",
          recipe: "Sample recipe for Tiramisu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "japan",
          name: "Sushi",
          description: "Japanese dish of vinegared rice with various fillings and toppings.",
          recipe: "Sample recipe for Sushi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "japan",
          name: "Ramen",
          description: "Noodles served in a flavorful broth with toppings like pork, egg, and seaweed.",
          recipe: "Sample recipe for Ramen. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "mexico",
          name: "Tacos",
          description: "Corn or flour tortillas filled with various meats, vegetables, and salsa.",
          recipe: "Sample recipe for Tacos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "mexico",
          name: "Enchiladas",
          description: "Rolled tortillas filled with meat, cheese, and topped with sauce.",
          recipe: "Sample recipe for Enchiladas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "spain",
          name: "Paella",
          description: "Saffron-infused rice dish with a variety of meats, vegetables, and seafood.",
          recipe: "Sample recipe for Paella. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "spain",
          name: "Gazpacho",
          description: "Chilled tomato-based soup with vegetables and herbs.",
          recipe: "Sample recipe for Gazpacho. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "thailand",
          name: "Pad Thai",
          description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts.",
          recipe: "Sample recipe for Pad Thai. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "thailand",
          name: "Green Curry",
          description: "Spicy curry made with green chili peppers, coconut milk, and meat or vegetables.",
          recipe: "Sample recipe for Green Curry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "vietnam",
          name: "Pho",
          description: "Vietnamese noodle soup with aromatic broth and various toppings.",
          recipe: "Sample recipe for Pho. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
          cuisine: "vietnam",
          name: "Banh Mi",
          description: "Vietnamese sandwich with French influence, typically filled with meat and pickled vegetables.",
          recipe: "Sample recipe for Banh Mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
  ];

  
  function filterRecipes(cuisine) {
      recipeContainer.innerHTML = "";

      const filteredRecipes = recipes.filter(recipe => recipe.cuisine === cuisine);
      filteredRecipes.forEach((recipe, index) => {
          const countryBox = document.createElement("div");
          countryBox.classList.add("country-box");
          countryBox.innerHTML = `
              <h3>${index + 1}. ${recipe.name}</h3>
              <p>${recipe.description}</p>
          `;

          const recipeBox = document.createElement("div");
          recipeBox.classList.add("recipe-box");
          recipeBox.innerHTML = `
              <h3>Recipe</h3>
              <p>${recipe.recipe}</p>
          `;

          countryBox.appendChild(recipeBox);
          recipeContainer.appendChild(countryBox);
      });
  }

  function clearRecipes() {
      recipeContainer.innerHTML = "";
  }

  categoryButtons.forEach(button => {
      button.addEventListener("click", function() {
          const cuisine = this.textContent.toLowerCase();
          const isCategoryActive = this.classList.contains("active");

          if (isCategoryActive) {
              clearRecipes();
              this.classList.remove("active");
          } else {
              filterRecipes(cuisine);
              categoryButtons.forEach(button => button.classList.remove("active"));
              this.classList.add("active");
          }
      });
  });
});
