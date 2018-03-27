import { Component } from "@stencil/core";

@Component({
  tag: "tag-form",
  styleUrl: "tag-form.scss",
  shadow: true
})
export class TagFormGroup {
  render() {
    return (
      <div class="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    );
  }
}
