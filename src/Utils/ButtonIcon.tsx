export default function ButtonIcon(props: ButtonIconProps){
      
      return <button className={props.classNameBtn} 
      onClick={props.onClick}
      ></button>
}

interface ButtonIconProps{
    onClick?(): void;
    classNameBtn?: string;
}