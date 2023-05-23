document.addEventListener("DOMContentLoaded", function() {
  const categoryButtons = document.querySelectorAll(".category");
  const recipeContainer = document.getElementById("recipeContainer");

  const recipes = [
    {
      cuisine: "china",
      name: "Dumplings",
      description: "Delicious dumplings filled with various ingredients.",
    },
    {
      cuisine: "china",
      name: "Peking Duck",
      description: "Crispy duck dish with thin pancakes and hoisin sauce.",
    },
    // Add more recipe objects for each cuisine
  ];

  // Function to filter and display recipes based on the selected cuisine
  function filterRecipes(cuisine) {
    recipeContainer.innerHTML = ""; // Clear existing recipes

    const filteredRecipes = recipes.filter(recipe => recipe.cuisine === cuisine);
    filteredRecipes.forEach(recipe => {
      const recipeElement = document.createElement("div");
      recipeElement.innerHTML = `
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
      `;
      recipeContainer.appendChild(recipeElement);
    });
  }

  // Add event listeners to each category button
  categoryButtons.forEach(button => {
    button.addEventListener("click", function() {
      const cuisine = this.getAttribute("data-cuisine");
      filterRecipes(cuisine);
    });
  });
});


const dropdown = document.querySelector('.dropdown a');
      dropdown.addEventListener('click', (event) => {
        event.preventDefault();
        const text = dropdown.innerText.trim();
        navigator.clipboard.writeText(text).then(() => {
          alert(`"${text}" has been copied to the clipboard.`);
        }).catch((error) => {
          console.error(`Unable to copy text: ${error}`);
        });
      });