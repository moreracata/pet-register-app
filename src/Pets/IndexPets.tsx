import Carousel from "../Utils/Carousel/Carousel";
import { CarouselOptionDTO } from "../Utils/Carousel/Models/CarouselOptionDTO"
import PinkBtn from '../Utils/PinkBtn/PinkBtn';
import '../Main/Style/Index.css';
import { useHistory } from 'react-router-dom';

export default function IndexPets() {

    const history = useHistory();

    function redirect(url: string) {
        history.push(url)
    }

    return (
        <>
            <h1>PET MENU</h1>
            <div className="row index-options">
                <div className="col left-options px-3">
                    <Carousel />
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