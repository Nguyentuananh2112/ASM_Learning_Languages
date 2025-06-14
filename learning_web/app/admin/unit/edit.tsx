import {
  SimpleForm,
  Create,
  ReferenceInput,
  required,
  TextInput,
  NumberInput,
} from "react-admin";

export const UnitEdit = () => {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" label="Id" validate={[required()]} />
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
    </Create>
  );
};

export default UnitEdit;