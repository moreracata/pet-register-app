import ListOptionData from "./ListOptionData";
import './css/List.css';
import Paginator from './Paginator';
import { useEffect, useState } from 'react';


interface ListProps {
    headerOption: string[];
    options: any[]
}


export default function List(props: ListProps) {

    const [options, setOptions] = useState(props.options)

    function deleteRegister(id: number) {
        let newOptions = options.filter(option => option.id != id)
        setOptions(newOptions)
    }

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
                                    {options.map(option =>
                                        <ListOptionData
                                            deleteRegister={deleteRegister}
                                            listObject={option} key={option.id} />)}
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
