import {
    HtmlTsInputDecoratorChoiceTypes
} from "../../HtmlTs/Input/Decorator/Core/HtmlTsInputDecoratorTypes";
import HtmlTs from "../../HtmlTs/Core/HtmlTs";
import htmlts from "../../HtmlTs/build";
import AbstractBootStrap4InputDecorator from "./AbstractBootStrap4InputDecorator";
import AbstractHtmlTsInputSingleValueChoice
    from "../../HtmlTs/Input/Elements/Core/AbstractHtmlTsInputSingleValueChoice";
import InterfaceHtmlTsInput from "../../HtmlTs/Input/Elements/Core/InterfaceHtmlTsInput";

let seq = 0;

const getBootStrap4ChoiceId = (): string => {
    return `id_bootstrap_choice_${seq++}`;
};

class BootStrap4InputDecoratorChoice extends AbstractBootStrap4InputDecorator<HtmlTsInputDecoratorChoiceTypes> {

    protected params: HtmlTsInputDecoratorChoiceTypes;

    constructor(params: HtmlTsInputDecoratorChoiceTypes = undefined) {
        super(params);
    }

    protected createInput(htmlTsInput: AbstractHtmlTsInputSingleValueChoice<any>): HtmlTs {
        const formCheckClassNames: string[] = ["form-check"];
        if (this.params !== undefined && this.params.choiceDisplay === "inline") {
            formCheckClassNames.push("form-check-inline");
        }
        return htmlts.create("div", {
            content: htmlTsInput.choice.map((choice) => {
                const id = getBootStrap4ChoiceId();
                return htmlts.create("div", {
                    class: formCheckClassNames,
                    content: [
                        choice.htmlInput.addClass("form-check-input").setAttr("id", id),
                        choice.htmlLabel.addClass("form-check-label").setAttr("for", id),
                    ],
                });
            }).concat(htmlTsInput.validation),
        });
    }

    protected validationSuccessThenInput(htmlTsInput: AbstractHtmlTsInputSingleValueChoice<any>): void {
        htmlTsInput.validation.setCss("display", "");
        htmlTsInput.choice.forEach((choice) => {
           choice.htmlInput.removeClass(["is-invalid"]).addClass("is-valid");
        });
    }

    protected validationErrorThenInput(htmlTsInput: AbstractHtmlTsInputSingleValueChoice<any>): void {
        htmlTsInput.validation.setCss("display", "block");
        htmlTsInput.choice.forEach((choice) => {
            choice.htmlInput.removeClass(["is-valid"]).addClass("is-invalid");
        });
    }

}

export default BootStrap4InputDecoratorChoice;
