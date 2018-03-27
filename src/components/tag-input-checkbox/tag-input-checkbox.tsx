import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-input-checkbox",
  styleUrl: "tag-input-checkbox.scss"
})
export class TagInputCheckbox {
  @Prop() checked: boolean;
  @Prop() label: string;

  toggleChecked() {
    const { checked } = this;
    this.checked = !checked;
  }

  render() {
    const { checked, label } = this;
    return (
      <span onClick={() => this.toggleChecked()}>
        <input
          type="checkbox"
          id="exampleCheckbox"
          name="check"
          checked={checked}
        />
        <label htmlfor="exampleCheckbox" class="caption">
          {label}
        </label>
      </span>
    );
  }
}
