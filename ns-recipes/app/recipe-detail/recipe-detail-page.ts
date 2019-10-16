import { EventData } from "tns-core-modules/data/observable";
import { Page, NavigatedData } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { RecipeDetailModel } from "./recipe-detail-view-model";

// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
export function navigatingTo(args: NavigatedData): void {
    const page: Page = <Page>args.object;
    const navigationContext = page.navigationContext;

    // The navigation event arguments are of type NavigatedData and provide another way to grab the passed context
    const context = args.context;
    // TODO: Figure out whether to pass whole object or do another lookup for data.

    page.bindingContext = navigationContext;
}


// export function navigatingTo(args: EventData) {
//     const page = <Page>args.object;
//     page.bindingContext = new RecipeDetailModel();
// }

export function goBack(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.goBack();
}
