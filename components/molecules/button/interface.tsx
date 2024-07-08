export interface IButtonProps {
    text: string
    bgColor: string
    color: string
    onClick?: () => void
    variant?: "h2" | "h3" | "h1" | "large" | "xlarge" | "xxlarge" | "medium" | "small" | "normal"
    type?: string
    paddingHorizontal?: string
    paddingVertical?: string
    disabled?: boolean
  }
  