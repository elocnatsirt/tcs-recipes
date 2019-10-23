import * as appSettings from "tns-core-modules/application-settings";

import { getNativeApplication } from "tns-core-modules/application";
import { isAndroid, isIOS } from "tns-core-modules/platform";

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