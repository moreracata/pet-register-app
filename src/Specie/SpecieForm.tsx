import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from '../forms/TextField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import PinkBtn from '../Utils/PinkBtn/PinkBtn';
import * as Yup from 'yup';
import { specieCreationDTO } from './Models/specie.model';

export default function SpecieForm(props: SpecieFormProps) {
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
                   <PinkBtn type="submit">
                     SEND
                  </PinkBtn>
                </Form>
            )}
        </Formik>
    )
}

interface SpecieFormProps {
    model: specieCreationDTO;
    onSubmit(values: specieCreationDTO, action: FormikHelpers<specieCreationDTO>): void;
}