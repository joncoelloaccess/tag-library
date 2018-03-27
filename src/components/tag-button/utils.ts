type ClassBuilder = (accent: string, size: string) => string;

export const classBuilder: ClassBuilder = (accent, size) => {
  const acnt = accent ? [`btn__accent--${accent.toLowerCase()}`] : [];
  const sz = size ? [`btn__size--${size}`] : [];
  return ["btn", ...acnt, ...sz].join(" ");
};
