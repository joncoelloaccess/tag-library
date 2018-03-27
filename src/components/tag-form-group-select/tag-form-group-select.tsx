import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "tag-form-group-select",
  styleUrl: "tag-form-group-select.scss"
})
export class TagFormGroupSelect {
  @Prop() label: string;
  @State() stateId: string = "asdf";
  render() {
    const { label } = this;
    return (
      <div class="form-group">
        <label htmlFor={this.stateId}>
          <tag-text type="h5">{label}</tag-text>
        </label>
        <select id={this.stateId} class="custom-select">
          <option>Just one</option>
        </select>
      </div>
    );
  }
}
