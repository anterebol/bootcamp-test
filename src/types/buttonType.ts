export type ButtonType = {
  cls?: Array<string>;
  children?: JSX.Element;
  callback?: () => void;
  text?: string;
  isDisable?: boolean;
};
