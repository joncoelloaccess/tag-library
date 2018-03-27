interface Status {
  i: string;
  class: string;
}

const stClass = (cls: string): string =>
  `content__status content__status--${cls}`;

export const getStatusIconProps = (status: string): Status => {
  if (!status) return;
  switch (status.toLowerCase()) {
    case "success":
      return {
        i: "Tick",
        class: stClass("success")
      };
    case "warning":
      return {
        i: "Warning",
        class: stClass("warning")
      };
  }
};
