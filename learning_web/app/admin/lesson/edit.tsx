import {
  SimpleForm,
  Edit,
  ReferenceInput,
  required,
  TextInput,
  NumberInput,
} from "react-admin";

export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" label="Title" validate={[required()]} />
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
    </Edit>
  );
};

export default LessonEdit;