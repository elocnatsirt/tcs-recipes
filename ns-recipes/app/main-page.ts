import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { HelloWorldModel } from "./main-view-model";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout"
import { NavigationEntry } from "tns-core-modules/ui/frame/frame";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function goBack(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    console.log("done")
    page.frame.goBack();
}

// Dropdown Functions
export function dropDownOpened(args: EventData) {
    console.log("Drop Down opened");
}
 
export function dropDownClosed(args: EventData) {
    console.log("Drop Down closed");
}

export function dropDownSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
}

// Recipe functions
export function addRecipe(args: EventData) {
    console.log("Adding recipe")
    // TODO: Navigate to "add recipe" page, save recipe in user's local storage
    const item: Button = <Button>args.object;
    const page: Page = item.page;
    page.frame.navigate("~/add-recipe/add-recipe-page");
}

export function recipeDetail(args: EventData) {
    console.log("Recipe detail")
    const item: GridLayout = <GridLayout>args.object;
    const page: Page = item.page;
    let recipe = <GridLayout>args.object.get("recipeData");
    const navigationEntry: NavigationEntry = {
        moduleName: "~/recipe-detail/recipe-detail-page",
        context: { recipeData: recipe },
    };
    page.frame.navigate(navigationEntry);
}