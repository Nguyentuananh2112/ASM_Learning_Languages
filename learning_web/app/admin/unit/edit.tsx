import {
  SimpleForm,
  Edit,
  ReferenceInput,
  required,
  TextInput,
  NumberInput,
  TextField,
} from "react-admin";

export const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        {/* <NumberInput source="id" label="Id" validate={[required()]} /> */}
        <TextField source="id" label="Id" />
        <TextInput source="title" label="Title" validate={[required()]} />
        <TextInput source="description" label="Description" validate={[required()]} />
        <ReferenceInput 
          source="courseId"
          reference="courses"
        />
        <NumberInput 
          source="order"
          validate={[required()]}
          label="Oder"
        />
      </SimpleForm>
    </Edit>
  );
};

export default UnitEdit;