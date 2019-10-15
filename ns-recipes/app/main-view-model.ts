import { Observable } from "tns-core-modules/data/observable";
import { ObservableProperty } from "./shared/observable-property-decorator";
import { ObservableArray } from "tns-core-modules/data/observable-array";

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
        const items = ["Name (A-Z)", "Name (Z-A)", "Prep Time"];
        this.dropdownItems.push(items);

        getData(this.selectedIndex).then((recipeData) => {
            this.dataItems.push(recipeData);
            this.isBusy = false;
        });
    }
}
