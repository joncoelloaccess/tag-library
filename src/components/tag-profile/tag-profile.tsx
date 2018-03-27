import { Component, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "tag-profile",
  styleUrl: "tag-profile.scss",
  shadow: true
})
export class TagProfile {
  /** Name of user profiled */
  @Prop() name: string;
  /** Src of profile image */
  @Prop() src: string;
  @Prop() gender: string;
  @Prop() dob: string;
  @Prop() nationality: string;
  @Event() editProfileImage: EventEmitter;
  onEditProfileImage() {
    this.editProfileImage.emit();
  }
  render() {
    const { dob, gender, name, nationality, src } = this;

    return (
      <div>
        <div
          class="prof__img"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${src})`
          }}
        >
          <div class="prof__edit" onClick={() => this.onEditProfileImage()}>
            <tag-icon-set
              icon="Edit"
              accent="Selected"
              style={{
                width: "24px",
                height: "24px",
                padding: "10px"
              }}
            />
          </div>
        </div>
        <tag-text type="h2">{name}</tag-text>
        <hr />
        {gender ? <tag-text type="h3">Gender - {gender}</tag-text> : null}
        {dob ? <tag-text type="h3">Date of birth - {dob}</tag-text> : null}
        {nationality ? (
          <tag-text type="h3">Nationality - {nationality}</tag-text>
        ) : null}
      </div>
    );
  }
}
