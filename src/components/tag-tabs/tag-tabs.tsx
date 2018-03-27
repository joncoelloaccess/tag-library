import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-tabs",
  styleUrl: "tag-tabs.scss"
})
export class TagTabs {
  @Prop() tabs: any[];
  componentDidLoad() {}
  render() {
    const tabs = this.tabs ? this.tabs : [];
    return (
      <div>
        <ul class="nav nav-tabs" role="tablist">
          {tabs.map(tab => (
            <li role="presentation" class="active">
              <a
                href={tab.href}
                aria-controls="home"
                role="tab"
                data-toggle="tab"
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>

        <div class="tab-content">
          {tabs.map(() => (
            <div role="tabpanel" class="tab-pane active" id="home">
              ...
            </div>
          ))}
        </div>
      </div>
    );
  }
}
