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
    "notes": [
        "Doubling this recipe: This recipe can be doubled for larger crowds.",
        "Storing leftover meatballs: Store leftover meatballs, either on their own or in a sauce, in a covered container in the refrigerator for up to 5 days. Reheat over low heat in a saucepan or in the microwave.",
        "Make-ahead meatballs: Meatballs can be shaped and kept refrigerated up to a day ahead. Arrange them in a casserole dish or on a baking sheet, but don't squish together. Cover and refrigerate for up to 1 day.",
        "Freezing uncooked meatballs: Prepare the meatballs through Step 5. Arrange in a single layer on a baking sheet and freeze until solid. Transfer the meatballs to a freezer container or freezer bag, and freeze for up to 1 month. (Meatballs can be frozen for longer, but tend to develop freezer burn.) Thaw meatballs in the refrigerator overnight before cooking.",
        "Freezing cooked meatballs: Let the cooked meatballs cool completely, then arrange in a single layer on baking sheet and freeze until solid. Transfer to a freezer container or bag and freeze for up to 2 months. Frozen meatballs can be thawed overnight in the refrigerator or reheated directly from the freezer. Reheat meatballs in a simmering sauce for 10 to 15 minutes or in a warm oven for 10 to 15 minutes."
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
    "notes": [
        "Make sure to have a properly ventilated area for cooking as this recipe will product a lot of smoke."
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
    "notes": [
        "I've used a variety of potatoes over the years and this works great with all types, including baby potatoes. High starch potatoes will yield a fluffier inside, whereas waxy potatoes are a bit less fluffy but are sort of creamy. You'll love both! You can make these with smaller or medium potatoes. Small ones - size of a golf ball or smaller - will come out crisper (like finger food, you can pick them up), whereas larger ones have the same crispiness on the surface but you get more fluffy potato on the inside because they don't get squished as thinly. I like them both ways!",
        "Flavourings: If you add garlic or dried herbs into the butter, it has a tendency to burn so you end up with black bits and they can be bitter. If you're really keen for garlic flavour, use the side of your knife to smash 2 cloves so they burst open. Place in small saucepan with butter and melt, then leave to infuse with garlic flavour. Discard cloves and proceed with recipe. For herbs, add a generous amount (dried or fresh) into the pot of boiling water so the potatoes get infused with herb flavour. Discard herbs and proceed with recipe."
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
    "notes": [
        "Delicious and simple! Serve with smashed new potatoes."
    ],
    "source": "https://www.foodnetwork.com/recipes/ree-drummond/pan-fried-pork-chops-recipe-1989074"
}]

export function getData() {
    /* Populate recipes stored locally
       This should be done by getAllKeys() as shown below but it resolves as undefined when app is starting. */
    if (isAndroid) {
        const sharedPreferences = getNativeApplication().getApplicationContext().getSharedPreferences("prefs.db", 0);
        const mappedPreferences = sharedPreferences.getAll();
        const iterator = mappedPreferences.keySet().iterator();

        while (iterator.hasNext()) {
            const key = iterator.next();
            if (key == "deletedRecipes") {
                console.log("Found deletedRecipes key");
                let delKeys = JSON.parse(appSettings.getString("deletedRecipes"));
                delKeys.forEach(function(element) {
                    if (recipes.findIndex(recipe => recipe.name == element) != -1) {
                        recipes.splice(recipes.findIndex(recipe => recipe.name == element), 1);
                        console.log("removed " + element);
                    }
                })
            }
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
        /* Remove any undefined entries from recipes array before returning. 
           If placeholder recipes get deleted, the array elements become undefined. Currently unsure why. 
           Another solution might be to store placeholder recipes in appData. */ 
        recipes.forEach(function (element) {
            if (element.name == undefined) {
                recipes.splice(recipes.findIndex(p => p.name == element.name), 1);
            }
        })
        resolve(recipes);
    });
}