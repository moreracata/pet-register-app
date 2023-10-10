import ListOptionData  from "./ListOptionData";
import './css/list.css';
import Paginator  from './Paginator';

export default function List(props: ListProps){
   
    return (
        <>
                <div className="row ">   
                    <div className="col-lg-12">
                        <div className="main-box clearfix">
                            <div className="table-responsive">
                                <table className="table user-list">
                                <thead>
                                    <tr>
                                    <th><span>Name</span></th>
                                    <th><span>Date of Birth</span></th>
                                    <th className="text-center"><span>Specie</span></th>
                                    <th><span>Owner</span></th>
                                    <th><span>Options</span></th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {props.options.map(option =>
                                <ListOptionData listObject={option} key={option.id} />)}
                                </tbody>
                                </table>
                            </div>
                            <Paginator numberOfPages={5} currentPage={3} />
                        </div>
                    </div>
                </div>  
        </>
    )

}

interface ListProps {
    headerOption: string[];
    options: any[]
 
}