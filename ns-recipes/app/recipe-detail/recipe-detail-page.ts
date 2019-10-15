import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
// import { RecipeDetailViewModel } from "./recipe-detail-view-model";

// export function navigatingTo(args: EventData) {
//     const page = <Page>args.object;
//     page.bindingContext = new RecipeDetailViewModel();
// }

export function goBack(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.goBack();
}
