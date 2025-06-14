import {
  SimpleForm,
  Create,
  TextField,
  required,
  TextInput,
} from "react-admin";

export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Title" validate={[required()]} />
        <TextInput source="imageSrc" label="Image" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;