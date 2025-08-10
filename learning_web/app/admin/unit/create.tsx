import {
  SimpleForm,
  Create,
  ReferenceInput,
  required,
  TextInput,
  NumberInput,
} from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
        source="title" 
        label="Title" 
        validate={[required()]} />

        <TextInput source="description" 
        label="Description" 
        validate={[required()]} />

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

export default UnitCreate;