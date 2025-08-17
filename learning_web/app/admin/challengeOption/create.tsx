import {
  SimpleForm,
  Create,
  ReferenceInput,
  required,
  TextInput,
  BooleanInput,
  AutocompleteInput
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
        source="text" 
        label="Text" 
        validate={[required()]} />

       <BooleanInput 
        source="correct"
        label="Correct option"
       />

        <ReferenceInput source="challengeId" reference="challenges">
          <AutocompleteInput
            optionText={record => `${record.id} - ${record.question}`}
            filterToQuery={searchText => ({ question: searchText })}
            fullWidth
          />
        </ReferenceInput>

        <TextInput 
          source="imageSrc"
          label="Image URL"
        />
        
        <TextInput 
          source="audioSrc"
          label="Audio URL"
        />

      </SimpleForm>
    </Create>
  );
};

export default ChallengeOptionCreate;