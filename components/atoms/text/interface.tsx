export interface ITextProps {
    variant?:
      | "h2"
      | "h3"
      | "h1"
      | "large"
      | "xlarge"
      | "xxlarge"
      | "medium"
      | "small"
      | "normal"
      | "xsmall"
      | "normalActive";
    text?: string | number | undefined | null | boolean;
    color: string;
  }
  