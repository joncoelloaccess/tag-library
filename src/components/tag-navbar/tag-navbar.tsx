import { Component } from "@stencil/core";

@Component({
  tag: "tag-navbar",
  styleUrl: "tag-navbar.scss",
  shadow: true
})
export class TagNavbar {
  render() {
    return (
      <header>
        <nav>
          <slot />
        </nav>
      </header>
    );
  }
}
