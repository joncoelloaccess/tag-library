import { Component, State } from "@stencil/core";

@Component({
  tag: "tag-layout-sidenav",
  styleUrl: "tag-layout-sidenav.scss",
  shadow: true
})
export class TagLayoutSidenav {
  /** The state of the menu */
  @State() showMenu: boolean;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  render() {
    const { showMenu } = this;
    const itemsClass = showMenu
      ? "subnav__items subnav__items--show"
      : "subnav__items";
    return (
      <nav class="subnav">
        <div class={itemsClass}>
          <slot />
        </div>
        <tag-icon-set
          onClick={this.toggleMenu.bind(this)}
          class="subnav__menu"
          icon="Menu"
        />
      </nav>
    );
  }
}
