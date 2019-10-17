import { Observable } from "tns-core-modules/data/observable";

export class AddRecipeViewModel extends Observable {
    constructor() {
        super();
        this.newRecipe = new NewRecipe("Mashed Potatoes", "~/images/potatoes.png", "https://google.com", "ingredients", "steps", "notes");
    }

    set newRecipe(value: NewRecipe) {
        this.set("_newRecipe", value);
    }

    get newRecipe(): NewRecipe {
        return this.get("_newRecipe");
    }
}

export class NewRecipe {
    public name: string;
    public image: string;
    public source: URL;
    public ingredients: string;
    public steps: string;
    public notes: string;
    
    constructor(name, image, source, ingredients, steps, notes) {
        this.name = name;
        this.image = image;
        this.source = source;
        this.ingredients = ingredients;
        this.steps = steps;
        this.notes = notes;
    }
}