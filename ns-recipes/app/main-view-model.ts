import { Observable } from "tns-core-modules/data/observable";
import { ObservableProperty } from "./shared/observable-property-decorator";
import { ObservableArray } from "tns-core-modules/data/observable-array";

import { getData } from "./placeholder-data";

export class MainPageModel extends Observable {
    // Dropdown populating
    @ObservableProperty() dropdownItems: ObservableArray<any>;
    @ObservableProperty() selectedIndex: number;
    @ObservableProperty() recipeList;

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

        // Populate recipes
        getData().then((recipeData) => {
            this.dataItems.push(recipeData);
            this.isBusy = false;
            this.updateSort(this.selectedIndex);
        });
    }

    public updateSort(index: number) {
        this.selectedIndex = index;
        if (this.selectedIndex == 0) {
            this.dataItems.sort(function (a, b) {
                return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
            });
        } else if (this.selectedIndex == 1) {
            this.dataItems.sort(function (a, b) {
                return b.name.toUpperCase().localeCompare(a.name.toUpperCase());
            });
        }
        console.log("Sorted");
        return this.recipeList.refresh();
    }
}