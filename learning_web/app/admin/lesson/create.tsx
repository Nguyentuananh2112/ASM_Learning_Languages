import {
  SimpleForm,
  Create,
  ReferenceInput,
  required,
  TextInput,
  NumberInput,
} from "react-admin";

export const LessonCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
        source="title" 
        label="Title" 
        validate={[required()]} />

        <ReferenceInput 
          source="unitId"
          reference="units"
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

export default LessonCreate;