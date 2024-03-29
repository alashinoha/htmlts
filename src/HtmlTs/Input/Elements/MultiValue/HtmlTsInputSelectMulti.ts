import AbstractHtmlTsInputMultiValue from "../Core/AbstractHtmlTsInputMultiValue";
import {HtmlTsInputArgsMultiValueType, HtmlTsInputChoiceType, HtmlTsInputMultiType} from "../Core/HtmlTsInputType";
import HtmlTsInputOption from "../Choice/HtmlTsInputOption";
import {TagNameTypes} from "../../../Core/HtmlTsTypes";
import HtmlTs from "../../../Core/HtmlTs";
import InterfaceHtmlTsInputDecoratorSet from "../../Decorator/Core/InterfaceHtmlTsInputDecoratorSet";
import InterfaceHtmlTsInputDecorator from "../../Decorator/Core/InterfaceHtmlTsInputDecorator";


export interface HtmlTsInputSelectMultiArgs extends HtmlTsInputArgsMultiValueType {
    size?: number; // 選択肢のサイズ
}

class HtmlTsInputSelectMulti extends AbstractHtmlTsInputMultiValue<HtmlTsInputOption> {

    type: HtmlTsInputMultiType = "select";
    protected inputTagName: TagNameTypes = "select";
    protected args: HtmlTsInputSelectMultiArgs;

    constructor(args: HtmlTsInputSelectMultiArgs) {
        super(args);
        this.build();
    }

    protected createInput(): HtmlTs {
        const input = super.createInput();
        input.setAttr("multiple", "true");
        if (this.args.size !== undefined) {
            input.setAttr("size", `${this.args.size}`);
        } else {
            input.setAttr("size", `${this.choiceValues.length}`);
        }
        return input;
    }

    protected createChoice(choice: HtmlTsInputChoiceType): HtmlTsInputOption {
        return new HtmlTsInputOption(
            choice.value,
            choice.label,
            choice.title,
            this.state,
        );
    }

    protected getDecorator(decoratorSet: InterfaceHtmlTsInputDecoratorSet): InterfaceHtmlTsInputDecorator {
        return decoratorSet.selectMulti(this.args.display);
    }

}

export default HtmlTsInputSelectMulti;