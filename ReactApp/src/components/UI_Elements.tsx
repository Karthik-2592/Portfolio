import type React from "react"

type ButtonProps = {
    children:React.ReactNode
    onClick: () => void
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon' | 'xl'
    customClass?: string
}
const buttonStyle = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer"
const buttonVariants = {
  variant: {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/85 active:opacity-80 shadow-lg shadow-primary/20",
    destructive:
      "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 active:opacity-70",
    outline:
      "border border-white/10 bg-transparent text-foreground hover:bg-white/5 hover:text-primary hover:border-primary/30",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:opacity-70",
    ghost:
      "hover:bg-white/5 hover:text-primary active:opacity-70",
    link:
      "text-primary underline-offset-4 hover:underline active:opacity-70",
  },
  size: {
    default: "h-9 px-4 py-2 has-[>svg]:px-3",
    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
    xl: "h-12 rounded-md px-8 has-[>svg]:px-6",
    icon: "size-9 rounded-md",
  },
};

export function Button({ children, onClick, variant = 'default', size='default', customClass}: ButtonProps )
{
    return(
        <button
          onClick={onClick} className={`${buttonStyle} ${buttonVariants.variant[variant]} ${buttonVariants.size[size]} ${customClass}`} 
        >
            {children}
        </button>
    )
}
type CardProps = {
    children: React.ReactNode
    customClass?: string

}

export function Card({ children, customClass }: CardProps) {
  return (
    <div
      data-slot="card"
      className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl 
        ${customClass} `}
    >
      {children}
    </div>
  );
}