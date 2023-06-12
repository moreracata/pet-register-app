
import IndexOption from './IndexOption';
import {IndexOptionDTO} from './Models/IndexOptionDTO';

export default function MainOptions(){
    const options: IndexOptionDTO[] = [
        { id:1, image: 'https://cdn-icons-png.flaticon.com/512/2809/2809844.png', tag: 'PETS', url: '/Pet' }, 
        { id:2, image: 'https://cdn-icons-png.flaticon.com/512/6381/6381452.png', tag: 'OWNERS' , url: '/Owner' }, 
        { id:3, image: 'https://cdn-icons-png.flaticon.com/512/2259/2259486.png', tag: 'SPECIES', url: '/Specie'  },
        { id:4, image: 'https://cdn-icons-png.flaticon.com/512/5389/5389413.png', tag: 'STORE', url: '/Store' }, 
        { id:5, image: 'https://cdn-icons-png.flaticon.com/512/1292/1292651.png', tag: 'DOCTOR' , url: '/Doctor' }, 
        { id:6, image: 'https://cdn-icons-png.flaticon.com/512/7965/7965936.png', tag: 'GROOMING', url: '/Gromming'  }
    ]

    return (
        <> 
             <h1>PET REGISTER OPTIONS</h1> 
            <div className="row">   
                <IndexOption option={options[0]} key='1' />
                <IndexOption option={options[1]} key='2' />
                <IndexOption option={options[2]} key='3' />
            </div>    
            <div className="row">   
                <IndexOption option={options[3]} key='4' />
                <IndexOption option={options[4]} key='5' />
                <IndexOption option={options[5]} key='6' />
            </div>    
        </>
    )
}
