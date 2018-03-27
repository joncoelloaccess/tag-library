import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-card-widget",
  styleUrl: "tag-card-widget.scss",
  shadow: true
})
export class TagCardWidget {
  /**
   * The left border accent colour
   */
  @Prop() accent: string;
  /**
   * The description of the text
   */
  @Prop() description: string = "";
  /**
   * The value of text for the widget
   */
  @Prop() value: string = "";
  /**
   * Text used for the button. ```buttontext``` or ```buttonicon``` must exist for button to appear.
   */
  @Prop() buttontext: string;
  /**
   * Icon for the button. ```buttontext``` or ```buttonicon``` must exist for button to appear.
   */
  @Prop() buttonicon: string;
  @Prop() buttonclick: (e: Event) => void;
  /**
   * Application name
   */
  @Prop() applicationname: string = " ";
  /**
   * Application image. Either the image or icon is used, the image is used over the icon when both are used.
   */
  @Prop() applicationimage: string;
  /**
   * Application icon. Either the image or icon is used, the image is used over the icon when both are used.
   */
  @Prop() applicationicon: string;
  render() {
    const {
      accent,
      buttontext,
      buttonicon,
      applicationimage,
      applicationicon
    } = this;
    const appSty = {
      backgroundImage: applicationimage ? `url(${applicationimage})` : ""
    };
    return (
      <tag-card accent={accent}>
        <section class="wgt">
          <div class="left">
            <tag-text type="value" inline>
              {this.value}
            </tag-text>
            <tag-text type="feature">{this.description}</tag-text>
            {buttontext || buttonicon ? (
              <tag-button accent={this.accent} onClick={this.buttonclick}>
                Test
              </tag-button>
            ) : null}
          </div>
          <div class="right">
            {this.applicationimage ? (
              <div class="wgt__app-image" style={appSty} />
            ) : (
              <tag-icon-set icon={applicationicon} accent={accent} />
            )}
            <tag-text type="feature">
              {this.applicationname.toUpperCase()}
            </tag-text>
          </div>
        </section>
      </tag-card>
    );
  }
}
