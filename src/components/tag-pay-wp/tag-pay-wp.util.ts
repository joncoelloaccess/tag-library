export enum PayWpStates {
  none = "none",
  halfDay = "half-day",
  fullDay = "full-day"
}

export type PayWpState = {
  value: PayWpStates;
};

export interface PayWp {
  transition: (nextState?: PayWpStates) => PayWp;
  value: PayWpStates;
}

export type PayWpFactory = (initialState: PayWpStates) => PayWp;

type ToPayWpState = (value: string) => PayWpStates;

export const toPayWpState: ToPayWpState = value => {
  for (const state of Object.keys(PayWpStates)) {
    if (PayWpStates[state] === value) {
      return PayWpStates[state];
    }
  }
  return PayWpStates.none;
};

export const payWpFactory: PayWpFactory = initialState => {
  let internalState: PayWpStates = initialState;
  const cycledValue = (val: PayWpStates): PayWpStates => {
    if (val === PayWpStates.none) {
      return PayWpStates.halfDay;
    }
    if (val === PayWpStates.halfDay) {
      return PayWpStates.fullDay;
    }
    if (val === PayWpStates.fullDay) {
      return PayWpStates.none;
    }
  };
  const transition = (nextState?: PayWpStates): PayWp => {
    internalState = nextState || cycledValue(internalState);
    return {
      transition: transition,
      value: internalState
    };
  };
  return {
    transition: transition,
    value: initialState
  };
};
