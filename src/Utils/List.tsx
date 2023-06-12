import ListOptionData  from "./ListOptionData";
import './css/List.css';

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
                            <ul className="pagination pull-right">
                            <li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
        </>
    )

}

interface  ListProps {
    headerOption: string[];
    options: any[]
 
}