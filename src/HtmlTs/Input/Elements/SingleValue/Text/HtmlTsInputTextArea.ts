import {HtmlTsInputSingleType} from "../../Core/HtmlTsInputType";
import HtmlTs from "../../../../Core/HtmlTs";
import htmlts from "../../../../build";
import HtmlTsInputTextValidator from "../../../Validator/HtmlTsInputTextValidator";
import AbstractHtmlTsInputText, {AbstractHtmlTsInputTextArgs} from "./AbstractHtmlTsInputText";
import InterfaceHtmlTsInputDecoratorSet from "../../../Decorator/Core/InterfaceHtmlTsInputDecoratorSet";
import InterfaceHtmlTsInputDecorator from "../../../Decorator/Core/InterfaceHtmlTsInputDecorator";

export interface HtmlTsInputTextAreaArgs extends AbstractHtmlTsInputTextArgs {
    rows?: number | string;
    cols?: number | string;
}

class HtmlTsInputTextArea extends AbstractHtmlTsInputText {

    type: HtmlTsInputSingleType = "textarea";

    protected validator: HtmlTsInputTextValidator;

    constructor(args: HtmlTsInputTextAreaArgs) {
        super(args);
        this.build();
        if (args.rows !== undefined) {
            this.input.setAttr("rows", args.rows);
        }
        if (args.cols !== undefined) {
            this.input.setAttr("cols", args.cols);
        }
    }

    protected getDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): InterfaceHtmlTsInputDecorator {
        return decoratorSet.textarea(this.args.display);
    }

    protected createInput(): HtmlTs {
        return htmlts.create("textarea");
    }

    set(value: string): void {
        this.input.setText(value);
    }

    value(): string {
        return this.input.getText();
    }

}

export default HtmlTsInputTextArea;