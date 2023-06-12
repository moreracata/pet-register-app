import Carousel from "../Utils/Carousel/Carousel";
import { CarouselOptionDTO } from "../Utils/Carousel/Models/CarouselOptionDTO"
import PinkBtn from '../Utils/PinkBtn/PinkBtn';
import '../Main/Style/Index.css';
import { useHistory } from 'react-router-dom';

export default function IndexPets(){
  
     const options: CarouselOptionDTO[] = [
        { id:0, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193375.png', tag: 'OPCION0'},
        { id:1, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193256.png', tag: 'OPCION1'}, 
        { id:2, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193260.png', tag: 'OPCION2' }, 
        { id:3, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193312.png', tag: 'OPCION3' },
        { id:4, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193308.png', tag: 'OPCION4'}, 
        { id:5, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193288.png', tag: 'OPCION5' }, 
        { id:6, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193354.png', tag: 'OPCION6' },
        { id:7, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193310.png', tag: 'OPCION7'}, 
        { id:8, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193251.png', tag: 'OPCION8' }, 
        { id:9, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193243.png', tag: 'OPCION9' },
        { id:10, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193285.png', tag: 'OPCION10'}, 
        { id:11, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193351.png', tag: 'OPCION11' }, 
        { id:12, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193347.png', tag: 'OPCION12' },
        
    ]

    const history = useHistory();

    function redirect(url:string) {
        history.push(url)
    }

    return (
        <> 
            <h1>PET MENU</h1> 
            <div className="row index-options">   
                <div className="col left-options px-3">   
                   <Carousel options={options} />
                </div> 
                <div className="col right-options">   
                    <div className="row justify-content-center">   
                        <PinkBtn type="button"
                            onClick={() => redirect('/PetCreation')}>
                            {'Register a Pet'}
                        </PinkBtn>
                        
                    </div>
                    <div className="row justify-content-center">   
                        <PinkBtn type="button"
                            onClick={() => redirect('/PetList')}>
                            {'List of Pets'}
                        </PinkBtn>
                    </div>
                    <div className="row justify-content-center">   
                        <PinkBtn type="button"
                            onClick={() => redirect('/PetList')}>
                            {'Pet information'}
                        </PinkBtn>
                    </div>
                    <div className="row justify-content-center">   
                       <PinkBtn type="button"
                            onClick={() => redirect('/PetList')}>
                            {'Pet information editon'}
                        </PinkBtn>
                    </div>
                </div> 
            </div>           
        </>
    )
}