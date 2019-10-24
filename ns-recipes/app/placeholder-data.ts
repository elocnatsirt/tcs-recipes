import * as appSettings from "tns-core-modules/application-settings";

import { getNativeApplication } from "tns-core-modules/application";
import { isAndroid, isIOS } from "tns-core-modules/platform";

const recipes = [{
    "name": "Easy Meatballs",
    "ingredients": [
        "1/2 cup fine, dry breadcrumbs",
        "1/2 cup milk",
        "1 large egg",
        "1/2 cup grated Parmesan cheese",
        "1/4 cup finely chopped fresh parsley leaves",
        "2 teaspoons kosher salt",
        "Freshly ground black pepper",
        "1 pound ground meat, such as beef, pork, turkey, chicken, or veal, or a mix",
        "1/2 cup finely chopped onion (or grated on the large holes of a coarse grater)",
        "1 clove garlic, minced"
    ],
    "image": "~/images/meatballs.png",
    "steps": [
        "Combine milk and breadcrumbs.",
        "Whisk the egg, salt, pepper, Parmesan, and parsley.",
        "Add the ground meat.",
        "Add the onions and soaked breadcrumbs.",
        "Form the meat into meatballs.",
        "Option 1: Roast or broil the meatballs in the oven.",
        "Option 2: Cook the meatballs directly in sauce."
    ],
    "source": "https://www.thekitchn.com/how-to-make-meatballs-cooking-lessons-from-the-kitchn-108048"
},
{
    "name": "Pan-Seared Rib-Eye",
    "ingredients": [
        "1 boneless rib eye steak, 1 1/2 inches thick",
        "Canola oil, to coat",
        "Kosher salt and ground black pepper"
    ],
    "image": "~/images/steak.png",
    "steps": [
        "Place a 10-to-12-inch cast-iron skillet in the oven and heat the oven to 500 degrees F. Bring the steak to room temperature.",
        "When the oven reaches temperature, remove the skillet and place on the range over high heat for 5 minutes. Coat the steak lightly with oil and sprinkle both sides with a generous pinch of salt. Grind on black pepper.",
        "Immediately place the steak in the middle of the hot, dry skillet. Cook 30 seconds without moving. Turn with tongs and cook another 30 seconds, then put the pan straight into the oven for 2 minutes. Flip the steak and cook for another 2 minutes. (This time is for medium-rare steak. If you prefer medium, add a minute to both of the oven turns.)",
        "Remove the steak from the skillet, cover loosely with foil and rest for 2 minutes. Serve whole or slice thin and fan onto plate."
    ],
    "source": "https://www.foodnetwork.com/recipes/alton-brown/pan-seared-rib-eye-recipe-2131274"
},
{
    "name": "Crispy Smashed Potatoes",
    "ingredients": [
        "700 g / 1.4 lb small potatoes",
        "50 g / 3 tbsp unsalted butter (melted)",
        "1 tbsp olive oil",
        "Salt and pepper",
        "Finely chopped parsley (optional garnish)"
    ],
    "image": "~/images/potatoes.png",
    "steps": [
        "Bring a pot of water to the boil. Cook potatoes until soft - small ones should take around 20 to 25 minutes, large ones might take 30 minutes. It's ok if the skin splits. Alternatively, steam or microwave them.",
        "Preheat oven to 180C/350F (standard) or 160C/320F (fan / convection).",
        "Drain the potatoes and let them dry in the colander for 5 minutes or so.",
        "Place on the tray then use a large fork or potato masher to squish them, keeping them in one piece. Thin = crisper. More nubbly surface = better crunch!",
        "Leave on the tray to steam dry for 5 minutes or so - makes them crispier!",
        "Drizzle with butter, then just a bit of olive oil (about 1/4 tsp on each). Sprinkle with salt and pepper.",
        "Bake for 40 minutes or until deep golden and crispy. Do not flip!",
        "Serve hot, sprinkled with parsley if desired."
    ],
    "source": "https://www.recipetineats.com/crispy-smashed-potatoes/"
},
{
    "name": "Pan Fried Pork Chops",
    "ingredients": [
        "1 teaspoon seasoned salt, plus more for seasoning",
        "1 teaspoon ground black pepper, plus more for seasoning",
        "8 pork breakfast chops",
        "1 cup all-purpose flour",
        "Cayenne pepper",
        "1/2 cup canola oil",
        "1 tablespoon butter"
    ],
    "image": "~/images/porkchops.png",
    "steps": [
        "Salt and pepper both sides of the pork chops.",
        "Combine the flour and some cayenne, salt and black pepper. Dredge each side of the pork chops in the flour mixture, and then set aside on a plate.",
        "Heat the canola oil over medium to medium-high heat. Add the butter. When the butter is melted and the butter/oil mixture is hot, cook 3 pork chops at a time, 2 to 3 minutes on the first side. Flip and cook until the chops are golden brown on the other side, 1 to 2 minutes (make sure no pink juices remain). Remove to a plate and repeat with the remaining pork chops."
    ],
    "source": "https://www.foodnetwork.com/recipes/ree-drummond/pan-fried-pork-chops-recipe-1989074"
}]

export function getData() {
    // This should be done by getAllKeys() but it resolves as undefined when app is starting.
    if (isAndroid) {
        const sharedPreferences = getNativeApplication().getApplicationContext().getSharedPreferences("prefs.db", 0);
        const mappedPreferences = sharedPreferences.getAll();
        const iterator = mappedPreferences.keySet().iterator();

        while (iterator.hasNext()) {
            const key = iterator.next();
            // console.log(key); // myString, myNumbver, isReal
            const value = mappedPreferences.get(key);
            // console.log(value); // "John Doe", 42, true
            recipes.push(JSON.parse(appSettings.getString(key)));
        }
    } else if (isIOS) {
        // tslint:disable-next-line
        // Note: If using TypeScript you will need tns-platform-declarations plugin to access the native APIs like NSUserDefaults
        const userDefaults = NSUserDefaults.standardUserDefaults;
        const dictionaryUserDefaults = userDefaults.dictionaryRepresentation();

        const allKeys = dictionaryUserDefaults.allKeys;
        console.log(allKeys);
        const allValues = dictionaryUserDefaults.allValues;
        console.log(allValues);
    }
    
    // Populate recipes stored locally
    // try {
    //     let storedRecipes = appSettings.getAllKeys();
    //     console.dir(storedRecipes)
    //     storedRecipes.forEach(element => {
    //         // console.dir(JSON.parse(appSettings.getString(element)))
    //         recipes.push(JSON.parse(appSettings.getString(element)))
    //     });
    // } catch (e) {
    //     console.log("No stored recipes");
    //     console.log(e);
    // }
    return new Promise((resolve, reject) => {
        resolve(recipes);
    });
}