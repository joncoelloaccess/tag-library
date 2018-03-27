import { Component, Prop } from "@stencil/core";
import { WorkingPatterns, defaultValue } from "../../shared/demo";

@Component({
  tag: "tag-pay-wp-week",
  styleUrl: "tag-pay-wp-week.scss",
  shadow: true
})
export class TagPayWpWeek {
  /** Property description */
  @Prop() workingPatterns: WorkingPatterns = defaultValue;
  render() {
    const {
      monday,
      thursday,
      tuesday,
      wednesday,
      friday
    } = this.workingPatterns;
    return [
      <tag-pay-wp
        id="monday"
        dayofweek={monday.dayofweek}
        value={monday.value}
      />,
      <tag-pay-wp
        id="tuesday"
        dayofweek={tuesday.dayofweek}
        value={tuesday.value}
      />,
      <tag-pay-wp
        id="wednesday"
        dayofweek={wednesday.dayofweek}
        value={wednesday.value}
      />,
      <tag-pay-wp
        id="thursday"
        dayofweek={thursday.dayofweek}
        value={thursday.value}
      />,
      <tag-pay-wp
        id="friday"
        dayofweek={friday.dayofweek}
        value={friday.value}
      />
    ];
  }
}
