import {
    HtmlTsInputArgsSingleValueHasChildrenType, HtmlTsInputChoiceType,
    HtmlTsInputSingleType, HtmlTsInputStateType
} from "../../Core/HtmlTsInputType";
import AbstractHtmlTsInputSingleValueChoice from "../../Core/AbstractHtmlTsInputSingleValueChoice";
import HtmlTsInputChoiceRadio from "../../Choice/HtmlTsInputChoiceRadio";
import {TagNameTypes} from "../../../../Core/HtmlTsTypes";
import InterfaceHtmlTsInputDecoratorSet from "../../../Decorator/InterfaceHtmlTsInputDecoratorSet";
import HtmlTs from "../../../../Core/HtmlTs";

export interface HtmlTsInputRadioArgs extends HtmlTsInputArgsSingleValueHasChildrenType {
}

class HtmlTsInputRadio extends AbstractHtmlTsInputSingleValueChoice<HtmlTsInputChoiceRadio> {

    type: HtmlTsInputSingleType = "radio";

    protected inputTagName: TagNameTypes = "div";

    constructor(args: HtmlTsInputRadioArgs) {
        super(args);
        this.build();
    }

    protected createChoice(choice: HtmlTsInputChoiceType): HtmlTsInputChoiceRadio {
        return new HtmlTsInputChoiceRadio({
            name: this.name,
            value: choice.value,
            label: choice.label,
            title: choice.title,
            state: this.state,
        });
    }

    changeState(state: HtmlTsInputStateType): void {
        this.state = state;
        this.choice.forEach((choice) => {
            choice.changeState(state);
        });
    }

    protected getHtmlByDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): HtmlTs {
        const decorator = decoratorSet.radio(this.args.display);
        return decorator.createHtml(this);
    }

}

export default HtmlTsInputRadio;