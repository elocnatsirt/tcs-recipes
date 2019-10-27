import { EventData } from "tns-core-modules/data/observable";
import { Page, NavigatedData, View } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { MainPageModel } from "./main-view-model";
import { SelectedIndexChangedEventData, DropDown, selectedIndexProperty } from "nativescript-drop-down";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout"
import { NavigationEntry } from "tns-core-modules/ui/frame/frame";
import * as appSettings from "tns-core-modules/application-settings";
import { SwipeActionsEventData, ListViewEventData, RadListView } from "nativescript-ui-listview";
import * as dialogs from "tns-core-modules/ui/dialogs";

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
        // console.log(context.newRecipe);
        if (context.newRecipe) {
            mainPageModel.dataItems.push(context.newRecipe);
            context.newRecipe = undefined;
            mainPageModel.updateSort(mainPageModel.selectedIndex);
            console.log("Pushed recipe")
        }
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

// RadListView Swipe Functions
export function onSwipeCellStarted(args: SwipeActionsEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.object;
    const leftItem = swipeView.getViewById<View>('edit-view');
    const rightItem = swipeView.getViewById<View>('delete-view');
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
}

export function onLeftSwipeClick(args: ListViewEventData) {
    console.log("Editing entry...");
    mainPageModel.updateSort(mainPageModel.selectedIndex);
}

export function onRightSwipeClick(args) {
    dialogs.action({
        message: "Are you sure you want to delete this recipe?",
        cancelButtonText: "Cancel",
        actions: ["Yes", "No"]
    }).then(result => {
        if(result == "Yes"){
            let recipe = mainPageModel.dataItems.getItem(mainPageModel.dataItems.indexOf(args.object.bindingContext));
            if (appSettings.hasKey(recipe.name)) {
                // Remove recipe if stored in appSettings
                console.log("Removing from local data");
                appSettings.remove(recipe.name);
            } else {
                // Add to deletedRecipes appSettings entry if placeholder data
                console.log("Not in app settings, adding to deleted list");
                let delKeys = JSON.parse(appSettings.getString("deletedRecipes", '[]'));
                delKeys.push(recipe.name);
                appSettings.setString("deletedRecipes", JSON.stringify(delKeys));
            }
            // Remove from current viewmodel
            mainPageModel.dataItems.splice(mainPageModel.dataItems.indexOf(args.object.bindingContext), 1);
        } else if(result == "No"){
            mainPageModel.updateSort(mainPageModel.selectedIndex);
        }
    });
}
