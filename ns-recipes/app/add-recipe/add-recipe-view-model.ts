import { Observable } from "tns-core-modules/data/observable";

import recipePlaceholder from './add-recipe-placeholder.json';
import recipeMetadata from './add-recipe-metadata.json';

export class AddRecipeViewModel extends Observable {
    constructor() {
        super();
        this.set("newRecipe", JSON.parse(JSON.stringify(recipePlaceholder)))
        this.set("newRecipeMetadata", JSON.parse(JSON.stringify(recipeMetadata)))
    }
}