import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-form-group",
  styleUrl: "tag-form-group.scss"
})
export class TagFormGroup {
  /** Placeholder text */
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() value: string;
  render(): JSX.Element {
    const { label, placeholder, value } = this;
    return (
      <div class="form-group">
        <label htmlFor="exampleInputEmail1">
          <tag-text inline type="h5">
            {label}
          </tag-text>
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}
