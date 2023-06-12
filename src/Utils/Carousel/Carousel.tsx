import CarouselOption  from "./CarouselOption";
import './Style/Carousel.css';

import { useEffect, useState } from 'react';

import { CarouselOptionDTO } from "./Models/CarouselOptionDTO"

export default function Carousel(props: carouselProps){

    const [current, setCurrent] = useState(
            [ 
                { id:1, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193256.png', tag: 'OPCION1'}, 
                { id:2, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193260.png', tag: 'OPCION2' }, 
                { id:3, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193312.png', tag: 'OPCION3' }
            ]
    )
    
    const moveToLeft = () => {
        let left = current[0].id
        let right = current[2].id
        
            if( current[0].id != 0){
           var newCurrent = [props.options[right-3],props.options[right-2],props.options[right-1]]
           setCurrent(newCurrent)
        }
    }

    const moveToRight = () => {
        
        let left = current[0].id
        let right = current[2].id
       
        if(right != props.options.length-1){
            var newCurrent = [props.options[left+1],props.options[left+2],props.options[left+3]]
           setCurrent(newCurrent)
        }
    }

    const onclickOption = () => {console.log("'../img/gato.png'a")}
    
    return (
        <> 
            <div className="custom-carousel">  
                <div className="row"> 
                    <div className="col-1"> 
                        <a className="prev" onClick={moveToLeft}>&#10094;</a>
                    </div>
                    <div className="col-10"> 
                            <div className="custom-carousel-options">  
                                <CarouselOption custoClassName="left" onClick={onclickOption} option={current[0]} key={current[0].id} />
                                <CarouselOption custoClassName="center" onClick={onclickOption} option={current[1]} key={current[1].id} />
                                <CarouselOption custoClassName="right" onClick={onclickOption} option={current[2]} key={current[2].id} />
                            </div>
                        </div>
                    <div className="opt col-1"> 
                        <a className="next" onClick={moveToRight}>&#10095;</a>
                    </div>
                </div>
            </div>   
        </>
    )       
}
 

interface carouselProps{
    options: CarouselOptionDTO[];
}