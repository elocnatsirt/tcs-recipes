import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { AddRecipeViewModel } from "./add-recipe-view-model";
import * as appSettings from "tns-core-modules/application-settings";
import { NavigationEntry } from "tns-core-modules/ui/frame/frame";
import * as camera from "nativescript-camera";
import { ImageSource } from "tns-core-modules/image-source/image-source";
import * as fileSystem from "tns-core-modules/file-system";
import * as imagepicker from "nativescript-imagepicker";

let imageLocation;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new AddRecipeViewModel();
    // Set the placeholder image for new recipes
    page.bindingContext.set("cameraImage", "~/images/placeholder.png");
}

export function goBack(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.goBack();
}

export function addRecipe(args: EventData) {
    const item: Button = <Button>args.object;
    const page: Page = item.page;
    let newRecipe = args.object.get("newRecipe");
    if (saveRecipe(newRecipe)) {
        // Pass the newRecipe object to the main page so we can update the list of recipes
        const navigationEntry: NavigationEntry = {
            moduleName: "~/main-page",
            context: { newRecipe },
        };
        page.frame.navigate(navigationEntry);
    }
}

export function saveRecipe(recipe) {
    // Validate fields aren't blank
    for (var key in recipe) {
        if (recipe[key] == "") {
            alert(key.substring(0,1).toUpperCase() + key.substring(1) + " cannot be blank");
            return false;
        }
    }
    // Ensure recipe doesn't exist
    if (!appSettings.hasKey(recipe.name)) {
        // Split multiline text entry into arrays
        recipe.steps = recipe.steps.split(/\r?\n/);
        recipe.ingredients = recipe.ingredients.split(/\r?\n/);
        recipe.notes = recipe.notes.split(/\r?\n/);
        // Set recipe image based on if picture was taken/chosen
        if (imageLocation) {
            recipe.image = imageLocation;
        } else {
            recipe.image = "~/images/placeholder.png"
        }
        // Save recipe locally
        appSettings.setString(recipe.name, JSON.stringify(recipe));
        // Reset imageLocation for next recipe
        imageLocation = null;
        return true;
    } else {
        alert("Recipe with that name already exists");
        return false;
    }
}

// Image Functions
export function takePicture(args: EventData) {
    const page = <Page>args.object;
    camera.requestPermissions().then(
        function success() {
            camera.takePicture().
                then((imageAsset) => {
                    const source = new ImageSource();
                    source.fromAsset(imageAsset).
                        then((imageSource: ImageSource) => {
                            const folderName = fileSystem.knownFolders.documents();
                            const fileName = Date.now() + ".jpg";
                            const fileDest = fileSystem.path.join(folderName.path, fileName);
                            const saved: boolean = imageSource.saveToFile(fileDest, "jpg");
                            if (saved) {
                                console.log("Saved: " + fileDest);
                                // Set the imageLocation var so that we can add it to the saved recipe data
                                imageLocation = fileDest;
                                // Display the picture on the page once taken
                                page.bindingContext.set("cameraImage", imageAsset);
                            } else {
                                console.log("Failed to save image...");
                            }
                        }).catch((err) => {
                            console.log(err);
                        });
                }).catch((err) => {
                    console.log("Error -> " + err.message);
                });
        },
        function failure() {
            console.log("Error: No camera perms");
            alert("TC's Recipes requires access to your camera.");
        }
    );
}

export function choosePicture(args: EventData) {
    const page = <Page>args.object;
    let context = imagepicker.create({
        mode: "single"
    });
    context
    .authorize()
    .then(function() {
        return context.present();
    })
    .then(function(selection) {
        selection.forEach(function(selected) {
            // process the selected image
            page.bindingContext.set("cameraImage", selected);
            imageLocation = selected.get("_android");
        });
    }).catch(function (e) {
        // process error
        console.log(e)
    });
}