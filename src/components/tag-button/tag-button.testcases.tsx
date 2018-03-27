import { Accents } from "../../shared/types";
import { Testcase } from "../../shared/types";

type Testcases = {
  [key: string]: Testcase;
};

const toTagButtonWithAccent = (tests, accent: string): Testcases => {
  return {
    ...tests,
    [`tag-button ${accent}`]: {
      markup: <tag-button accent={Accents[accent]}>{accent}</tag-button>
    }
  };
};

const accentTests = Object.keys(Accents).reduce(toTagButtonWithAccent, {});

export default accentTests;
