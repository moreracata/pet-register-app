import CarouselOption from "./CarouselOption";
import './Style/Carousel.css';
import { useEffect, useState } from 'react';
import { CarouselOptionDTO } from "./Models/CarouselOptionDTO"

export default function Carousel(props: carouselProps) {

    const options: CarouselOptionDTO[] = [
        { id: 0, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193375.png', tag: 'OPCION0' },
        { id: 1, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193256.png', tag: 'OPCION1' },
        { id: 2, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193260.png', tag: 'OPCION2' },
        { id: 3, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193312.png', tag: 'OPCION3' },
        { id: 4, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193308.png', tag: 'OPCION4' },
        { id: 5, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193288.png', tag: 'OPCION5' },
        { id: 6, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193354.png', tag: 'OPCION6' },
        { id: 7, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193310.png', tag: 'OPCION7' },
        { id: 8, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193251.png', tag: 'OPCION8' },
        { id: 9, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193243.png', tag: 'OPCION9' },
        { id: 10, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193285.png', tag: 'OPCION10' },
        { id: 11, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193351.png', tag: 'OPCION11' },
        { id: 12, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193347.png', tag: 'OPCION12' },

    ]
    const max: number = options.length;

    const [current, setCurrent] = useState(
        [
            { id: 1, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193256.png', tag: 'OPCION1' },
            { id: 2, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193260.png', tag: 'OPCION2' },
            { id: 3, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193312.png', tag: 'OPCION3' }
        ]
    )

    const moveToLeft = () => {

        //Current options
        let leftId = current[0].id
        let rightId = current[2].id
        let centerId = current[1].id
        //console.log(`${leftId}, ${centerId}, ${rightId}!`)

        let newRight = options[(rightId - 1 + max) % max];
        let newLeft = options[(leftId - 1 + max) % max];
        let newCenter = options[(centerId - 1 + max) % max];
        var newCurrent = [newLeft, newCenter, newRight]
        setCurrent(newCurrent)

    }

    const moveToRight = () => {

        //Current options
        let leftId = current[0].id
        let rightId = current[2].id
        let centerId = current[1].id
        //console.log(`${leftId}, ${centerId}, ${rightId}!`)

        let newRight = options[(rightId + 1) % max];
        let newLeft = options[(leftId + 1) % max];
        let newCenter = options[(centerId + 1) % max];
        var newCurrent = [newLeft, newCenter, newRight]
        setCurrent(newCurrent)

    }



    const onclickOption = () => { console.log("'../img/gato.png'a") }

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


interface carouselProps {
    options?: CarouselOptionDTO[];
}