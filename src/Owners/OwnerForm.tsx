import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from '../forms/TextField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import PinkBtn from '../Utils/PinkBtn/PinkBtn';
import * as Yup from 'yup';
import { ownerCreationDTO } from './Models/OwnerDTO';

export default function OwnerForm(props: OwnerFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase(),
                dateOfBirth: Yup.date().nullable().required('This field is required')
            })}
        >
            {(formikProps) => (
                <Form>
                   <TextField displayName="Name" field="name" />
                   <DateField displayName="Date of Birth" field="dateOfBirth" />
                  
                    

                   <PinkBtn type="submit">
                     SEND
                  </PinkBtn>
                </Form>
            )}
        </Formik>
    )
}

interface  OwnerFormProps {
    model: ownerCreationDTO;
    onSubmit(values: ownerCreationDTO, action: FormikHelpers<ownerCreationDTO>): void;
}