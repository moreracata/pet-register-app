
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

interface ListOptionDataProps {
    listObject: any;
    deleteRegister: (id: number) => void;
}

export default function ListOptionData(props: ListOptionDataProps) {


    return (
        <>
            <tr>
                <td>
                    <img src={props.listObject.picture} alt="" />
                    <a href="#" className="user-link">{props.listObject.name}</a>
                    <span className="user-subhead">Age:{props.listObject.age} </span>
                </td>
                <td>
                    2013/08/08
                </td>
                <td className="text-center">
                    <span className="label label-default">Cat</span>
                </td>
                <td>
                    <span className="label label-default">Cata</span>
                </td>
                <td>
                    <DeleteBtn
                        listObject={props.listObject}
                        deleteRegister={props.deleteRegister} />
                    <EditBtn />
                </td>
            </tr>
        </>
    )

}
