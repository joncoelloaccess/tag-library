import { Component, Event, EventEmitter, Method, State } from "@stencil/core";
// import uniqid from "uniqid";

declare var $: any;

@Component({
  tag: "tag-k-grid",
  styleUrl: "tag-k-grid.scss"
})
export class TagKGrid {
  @Event() ready: EventEmitter;
  @State() parent: HTMLElement;
  @State() config: object;
  componentWillLoad() {
    this.ready.emit();
  }
  componentDidLoad() {
    const { config } = this;
    const $kg = $("#test");
    $kg.kendoGrid(config);
  }
  @Method()
  init(config: object) {
    this.config = { ...config };
  }
  render() {
    return <div id="test" />;
  }
}
