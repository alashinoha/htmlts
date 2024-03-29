import {HtmlTsInputSingleType} from "../../Core/HtmlTsInputType";
import AbstractHtmlTsInputText, {AbstractHtmlTsInputTextArgs} from "./AbstractHtmlTsInputText";
import InterfaceHtmlTsInputDecoratorSet from "../../../Decorator/Core/InterfaceHtmlTsInputDecoratorSet";
import HtmlTs from "../../../../Core/HtmlTs";
import InterfaceHtmlTsInputDecorator from "../../../Decorator/Core/InterfaceHtmlTsInputDecorator";

class HtmlTsInputText extends AbstractHtmlTsInputText {

    type: HtmlTsInputSingleType = "text";

    constructor(args: AbstractHtmlTsInputTextArgs) {
        super(args);
        this.build();
    }

    protected getDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): InterfaceHtmlTsInputDecorator {
        return decoratorSet.text(this.args.display);
    }

}

export default HtmlTsInputText;