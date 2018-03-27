import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-card-task",
  styleUrl: "tag-card-task.scss",
  shadow: true
})
export class TagCardTask {
  /**
   * The left border accent colour
   */
  @Prop() accent: string;
  @Prop() heading: string;
  @Prop() subtitle: string;
  @Prop() avatarsrc: string;
  @Prop() avatarplaceholder: string;
  @Prop() when: string;
  @Prop() who: string;
  render() {
    return (
      <tag-card accent={this.accent}>
        <tag-text type="feature" inline>
          {this.heading}
        </tag-text>
        <span>{this.subtitle}</span>
        <div class="content">
          <tag-avatar placeholder={this.avatarplaceholder} size="small" />
          <ul class="content__items">
            <li class="content__item">
              <tag-icon-set class="content__icon" icon="Calendar" /> {this.when}
            </li>
            <li class="content__item">
              <tag-icon-set class="content__icon" icon="User" /> {this.who}
            </li>
          </ul>
        </div>
      </tag-card>
    );
  }
}
