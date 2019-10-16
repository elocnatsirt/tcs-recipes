export function getData(index) {
    return new Promise((resolve, reject) => {
        resolve(recipes);
    });
}

const recipes = [{
    "name": "Easy Meatballs",
    "ingredients": {
        "milk": "1 cup",
        "eggs": "1 egg",
        "salt": "2 tsp",
        "meat": "1 lb"
    },
    "image": "~/images/meatballs.png",
    "steps": {
        "1": "Make meatballs",
        "2": "Eat meatballs"
    },
    "source": "https://www.thekitchn.com/how-to-make-meatballs-cooking-lessons-from-the-kitchn-108048"
},
{
    "name": "Cast-Iron Steak",
    "ingredients": {
        "meat": "1 1/2\" thick steak cut of choice",
        "spices": "kosher salt and black pepper for seasoning",
        "oil": "oil for coating"
    },
    "image": "~/images/steak.png",
    "steps": {
        "1": "Make steak",
        "2": "Eat steak"
    },
    "source": "https://www.foodnetwork.com/recipes/alton-brown/pan-seared-rib-eye-recipe-2131274"
},
{
    "name": "Crispy Smashed Potatoes",
    "ingredients": {
        "meat": "8 potatoes",
        "spices": "kosher salt and black pepper for seasoning",
        "oil": "oil for coating"
    },
    "image": "~/images/potatoes.png",
    "steps": {
        "1": "Make potatoes",
        "2": "Eat potatoes"
    },
    "source": "https://www.recipetineats.com/crispy-smashed-potatoes/"
},
{
    "name": "Pan Fried Pork Chops",
    "ingredients": {
        "meat": "thick porkchops",
        "spices": "kosher salt and black pepper for seasoning",
        "oil": "oil for coating"
    },
    "image": "~/images/porkchops.png",
    "steps": {
        "1": "Make pork chops",
        "2": "Eat pork chops"
    },
    "source": "https://www.foodnetwork.com/recipes/ree-drummond/pan-fried-pork-chops-recipe-1989074"
}]