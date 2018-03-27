import { PayWpStates } from "../tag-pay-wp/tag-pay-wp.util";

export type WorkingPatternWeek = {
  monday: PayWpStates;
  tuesday: PayWpStates;
  wednesday: PayWpStates;
  thursday: PayWpStates;
  friday: PayWpStates;
};
