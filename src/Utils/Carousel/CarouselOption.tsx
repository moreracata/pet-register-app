
import { CarouselOptionDTO } from "./Models/CarouselOptionDTO"

export default function CarouselOption(props: carouselOptionProps){
      
    return (
        <>
            <div className={"carousel-option "+  props.custoClassName}>             
                <img  src={ props.option.image}/>     
            </div>
        </>
    )
}

interface carouselOptionProps{
    option: CarouselOptionDTO;
    custoClassName: string
    onClick(): void;
}
