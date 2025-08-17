import {
  SimpleForm,
  Edit,
  TextField,
  required,
  TextInput,
} from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        {/* <TextInput source="id" label="Id" validate={[required()]} /> */}
        <TextField source="id" label="Id" />
        <TextInput source="title" label="Title" validate={[required()]} />
        <TextInput source="imageSrc" label="Image" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;