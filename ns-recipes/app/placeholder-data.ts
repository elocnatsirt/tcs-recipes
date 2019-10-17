export function getData(index) {
    return new Promise((resolve, reject) => {
        resolve(recipes);
    });
}

const recipes = [{
    "name": "Easy Meatballs",
    "ingredients": [
        "milk 1 cup",
        "eggs 1 egg",
        "salt 2 tsp",
        "meat 1 lb"
    ],
    "image": "~/images/meatballs.png",
    "steps": [
        "Make meatballs",
        "Eat meatballs"
    ],
    "source": "https://www.thekitchn.com/how-to-make-meatballs-cooking-lessons-from-the-kitchn-108048"
},
{
    "name": "Cast-Iron Steak",
    "ingredients": [
        "1 1/2\" thick steak cut of choice",
        "kosher salt and black pepper for seasoning",
        "oil for coating"
    ],
    "image": "~/images/steak.png",
    "steps": [
        "Make steak",
        "Eat steak"
    ],
    "source": "https://www.foodnetwork.com/recipes/alton-brown/pan-seared-rib-eye-recipe-2131274"
},
{
    "name": "Crispy Smashed Potatoes",
    "ingredients": [
        "8 potatoes",
        "kosher salt and black pepper for seasoning",
        "oil for coating"
    ],
    "image": "~/images/potatoes.png",
    "steps": [
        "Make potatoes",
        "Eat potatoes"
    ],
    "source": "https://www.recipetineats.com/crispy-smashed-potatoes/"
},
{
    "name": "Pan Fried Pork Chops",
    "ingredients": [
        "1\" thick porkchops",
        "kosher salt and black pepper for seasoning",
        "oil for coating"
    ],
    "image": "~/images/porkchops.png",
    "steps": [
        "Make pork chops",
        "Eat pork chops"
    ],
    "source": "https://www.foodnetwork.com/recipes/ree-drummond/pan-fried-pork-chops-recipe-1989074"
}]