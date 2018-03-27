import { PayWpStates } from "../components/tag-pay-wp/tag-pay-wp.util";

export type WorkingPattern = {
  dayofweek: string;
  value: PayWpStates;
};

export type WorkingPatterns = {
  monday: WorkingPattern;
  tuesday: WorkingPattern;
  wednesday: WorkingPattern;
  thursday: WorkingPattern;
  friday: WorkingPattern;
};

export const defaultValue: WorkingPatterns = {
  monday: { dayofweek: "Monday", value: PayWpStates.none },
  tuesday: { dayofweek: "Tuesday", value: PayWpStates.none },
  wednesday: { dayofweek: "Wednesday", value: PayWpStates.none },
  thursday: { dayofweek: "Thursday", value: PayWpStates.none },
  friday: { dayofweek: "Friday", value: PayWpStates.none }
};
