//This approach is moderately insane unless there is some behavior you REALLY want 
//that is very different from just a regular <button>

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button ( props: ButtonProps ) {
  return (
      <button onClick={ props.onClick } className={ props.className }>
          { props.children }
      </button>
  )
}
