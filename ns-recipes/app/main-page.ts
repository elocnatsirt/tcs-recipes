import { EventData } from "tns-core-modules/data/observable";
import { Page, NavigatedData } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { MainPageModel } from "./main-view-model";
import { SelectedIndexChangedEventData, DropDown, selectedIndexProperty } from "nativescript-drop-down";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout"
import { NavigationEntry } from "tns-core-modules/ui/frame/frame";
import * as appSettings from "tns-core-modules/application-settings";

const mainPageModel = new MainPageModel();

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const recipeList = page.getViewById("recipeList");
    const navigationContext = page.navigationContext;

    // The navigation event arguments are of type NavigatedData and provide another way to grab the passed context
    const context = args.context;
    page.bindingContext = mainPageModel;
    mainPageModel.recipeList = recipeList;
    try {
        console.log(context.newRecipe);
        mainPageModel.dataItems.push(context.newRecipe);
        context.newRecipe = undefined;
        mainPageModel.updateSort(0);
    } catch(e) {
        console.log(e)
    }
}

// Dropdown Functions
// export function dropDownOpened(args: EventData) {
//     console.log("Drop Down opened");
// }

// export function dropDownClosed(args: EventData) {
//     console.log("Drop Down closed");
// }

export function dropDownSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    // console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    mainPageModel.updateSort(args.newIndex);
}

// Recipe functions
export function addRecipe(args: EventData) {
    // console.log("Adding recipe")
    const item: Button = <Button>args.object;
    const page: Page = item.page;
    page.frame.navigate("~/add-recipe/add-recipe-page");
}

export function recipeDetail(args: EventData) {
    // console.log("Recipe detail")
    const item: GridLayout = <GridLayout>args.object;
    const page: Page = item.page;
    let recipe = <GridLayout>args.object.get("recipeData");
    const navigationEntry: NavigationEntry = {
        moduleName: "~/recipe-detail/recipe-detail-page",
        context: { recipeData: recipe },
    };
    page.frame.navigate(navigationEntry);
}