export default function Button(props: buttonProps){
      
      return <button className={"btn btn-primary "+props.classNameBtn} 
      onClick={props.onClick}
      >{props.children}</button>
}

interface buttonProps{
    children: React.ReactNode;
    onClick?(): void;
    classNameBtn?: string;
}