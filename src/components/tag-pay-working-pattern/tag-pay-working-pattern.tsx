import { Component, Prop } from "@stencil/core";
import { WorkingPatternWeek } from "./tag-pay-working-pattern.utils";
import { PayWpStates } from "../tag-pay-wp/tag-pay-wp.util";

@Component({
  tag: "tag-pay-working-pattern",
  styleUrl: "tag-pay-working-pattern.scss"
})
export class TagPayWorkingPattern {
  @Prop()
  value: WorkingPatternWeek = {
    monday: PayWpStates.none,
    tuesday: PayWpStates.none,
    wednesday: PayWpStates.none,
    thursday: PayWpStates.none,
    friday: PayWpStates.none
  };
  render(): JSX.Element {
    const { value } = this;
    return (
      <div class="tpwp__pattern">
        <tag-pay-wp dayofweek="Monday" value={value.monday} />
        <tag-pay-wp dayofweek="Tuesday" value={value.tuesday} />
        <tag-pay-wp dayofweek="Wednesday" value={value.wednesday} />
        <tag-pay-wp dayofweek="Thursday" value={value.thursday} />
        <tag-pay-wp dayofweek="Friday" value={value.friday} />
      </div>
    );
  }
}
