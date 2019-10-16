import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";

// export function navigatingTo(args: EventData) {
//     const page = <Page>args.object;
//     page.bindingContext = new AddRecipeModel();
// }

export function goBack(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.goBack();
}
