import { Observable } from "tns-core-modules/data/observable";
import { ObservableProperty } from "./shared/observable-property-decorator";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import * as appSettings from "tns-core-modules/application-settings";

import { getData } from "./placeholder-data";

export class HelloWorldModel extends Observable {
    // Dropdown populating
    @ObservableProperty() dropdownItems: ObservableArray<any>;
    @ObservableProperty() selectedIndex: 0;

    // Recipe templating
    @ObservableProperty() isBusy: boolean = true;
    @ObservableProperty() dataItems: ObservableArray<any>;

    constructor() {
        super();
        this.isBusy = true;
        this.dataItems = new ObservableArray<any>();

        this.dropdownItems = new ObservableArray<any>();
        this.selectedIndex = 0;

        // Populate sort by dropdown
        const items = ["Name (A-Z)", "Name (Z-A)"];
        this.dropdownItems.push(items);

        // Populate recipes stored locally
        let storedRecipes = [];
        try {
            storedRecipes = appSettings.getAllKeys();
            storedRecipes.forEach(element => {
                // console.dir(JSON.parse(appSettings.getString(element)))
                this.dataItems.push(JSON.parse(appSettings.getString(element)))
            });
        } catch (e) {
            console.log("No stored recipes")
        }

        // Populate recipes from placeholder data
        getData(this.selectedIndex).then((recipeData) => {
            this.dataItems.push(recipeData);
            this.isBusy = false;
        });
    }
}
