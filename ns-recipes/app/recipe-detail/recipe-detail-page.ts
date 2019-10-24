import { EventData } from "tns-core-modules/data/observable";
import { Page, NavigatedData } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { Label } from "tns-core-modules/ui/label";
import * as utils from "tns-core-modules/utils/utils";

// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
export function navigatingTo(args: NavigatedData): void {
    const page: Page = <Page>args.object;
    const navigationContext = page.navigationContext;
    // The navigation event arguments are of type NavigatedData and provide another way to grab the passed context
    const context = args.context;
    page.bindingContext = navigationContext;
}

export function goBack(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.goBack();
}

export function gotoSource(args: EventData) {
    const label: Label = <Label>args.object;
    const page: Page = label.page;
    const url = <Label>args.object.get("text");
    utils.openUrl(url.toString())
}