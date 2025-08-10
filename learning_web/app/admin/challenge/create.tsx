import {
  SimpleForm,
  Create,
  Edit,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput,
  ReferenceInput,
  required,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="question" label="Question" validate={[required()]} />

        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
          validate={[required()]}
        />

        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" validate={[required()]} label="Oder" />

        <ArrayInput source="options" label="Answer Options">
          <SimpleFormIterator>
            <TextInput
              source="text"
              label="Option Text"
              validate={[required()]}
            />
            <BooleanInput source="correct" label="Is Correct?" />
            <TextInput source="imageSrc" label="Image" />
            <TextInput source="audioSrc" label="Audio" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default ChallengeCreate;
