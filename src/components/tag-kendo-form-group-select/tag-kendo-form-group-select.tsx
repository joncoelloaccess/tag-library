import { Component, Element, Prop, State } from "@stencil/core";
import randomId from "random-id";

// declare var $: any;

export enum States {
  NojQuery,
  NoKendo,
  NoComponent,
  ComponentLoaded
}

@Component({
  tag: "tag-kendo-form-group-select",
  styleUrl: "tag-kendo-form-group-select.scss",
  shadow: true
})
export class TagKendoFormGroupSelect {
  @Prop() label: string;
  @Prop() options: any[];
  @Prop() value: string;
  @Prop() $: any;
  @State() stateId: string = randomId();
  @Element() kendoSelect: HTMLElement;
  componentDidUpdate(): void {
    this.$(this.kendoSelect)
      .find("select")
      .kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: this.options,
        value: this.value
        // change: onChange
      });
  }
  render(): JSX.Element {
    const { $, label } = this;
    console.log("render", !$, $);

    if (!$) {
      return null;
    }

    return (
      <div class="form-group">
        <label htmlFor={this.stateId}>
          <tag-text inline type="h5">
            {label}
          </tag-text>
        </label>
        <select id={this.stateId} />
      </div>
    );
  }
}
