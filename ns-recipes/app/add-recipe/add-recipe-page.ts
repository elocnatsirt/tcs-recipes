import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { AddRecipeViewModel } from "./add-recipe-view-model";
import * as appSettings from "tns-core-modules/application-settings";
import { NavigationEntry } from "tns-core-modules/ui/frame/frame";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new AddRecipeViewModel();
}

export function goBack(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.goBack();
}

export function addRecipe(args: EventData) {
    // console.log("Adding recipe")
    const item: Button = <Button>args.object;
    const page: Page = item.page;
    let newRecipe = args.object.get("newRecipe");
    // console.dir(newRecipe);
    // console.log(newRecipe.name)
    if (saveRecipe(newRecipe)) {
        // page.frame.navigate("~/main-page");
        const navigationEntry: NavigationEntry = {
            moduleName: "~/main-page",
            context: { newRecipe },
        };
        page.frame.navigate(navigationEntry);
    }
}

export function saveRecipe(recipe) {
    // console.dir(recipe);
    // console.log(recipe.steps);
    try {
        recipe.steps = recipe.steps.split(" ")
    } catch(e) {
        console.log(e)
        recipe.steps = [recipe.steps]
    }
    // console.log(recipe.steps);
    // console.dir(recipe);
    if (!appSettings.hasKey(recipe.name)) {
        // console.log("Doesn't exist, saving");
        appSettings.setString(recipe.name, JSON.stringify(recipe));
        return true;
    } else {
        // console.log("Recipe exists, not saving, showing existing recipe")
        // let storedRecipe = appSettings.getString(recipe.name);
        // console.dir(JSON.parse(storedRecipe));
        alert("Recipe with that name already exists");
        return false;
    }
}