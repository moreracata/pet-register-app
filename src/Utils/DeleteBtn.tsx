import ButtonIcon from './ButtonIcon';
import './css/deleteBtn.css';

interface DeleteBtnProps {
    listObject: any;
    deleteRegister: (id: number) => void;
}

export default function DeleteBtn(props: DeleteBtnProps) {

    function deleteRegister(id: number) {
        console.log("test")
    }

    return (
        <>
            <ButtonIcon classNameBtn="delete-btn" onClick={() => props.deleteRegister(props.listObject.id)} />

        </>
    )

}
