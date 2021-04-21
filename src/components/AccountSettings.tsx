import { FC, useState } from 'react';
import styled from 'styled-components';
import { SubTitle } from './SubTitle';
import { Input as BaseInput } from './Input';
import { AiFillEdit } from 'react-icons/ai';

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: #007985;
`;

const Container = styled.div`
  background: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  padding: 28px 20px;
`;

const Input = styled(BaseInput)`
  width: 150px;
  margin: 0px 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0;
`;

const ValueContainer = styled.div`
  width: 150px;
  margin: 0px 20px;
  padding: 14px 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LabelContainer = styled.div`
  width: 100px;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

type TextInputProps = {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
};

const TextInput: FC<TextInputProps> = ({ label, value, onChange }) => {
  const [editable, setEditable] = useState<boolean>(false);

  const valueNode = editable ? (
    <Input
      value={value}
      onChange={(e) => {
        if (editable) {
          onChange(e.target.value);
        }
      }}
    />
  ) : (
    <ValueContainer>{value}</ValueContainer>
  );

  return (
    <InputContainer>
      <LabelContainer>{label}: </LabelContainer>
      {valueNode}
      <AiFillEdit
        onClick={() => {
          setEditable((prevEdit) => !prevEdit);
        }}
        style={{ cursor: 'pointer' }}
        size={18}
      />
    </InputContainer>
  );
};

type AccountSettingsProps = {
  firstName: string;
  lastName: string;
};

export const AccountSettings: FC<AccountSettingsProps> = ({
  firstName: defaultFirstName,
  lastName: defaultLastName
}) => {
  const [firstName, setFirstName] = useState<string>(defaultFirstName);
  const [lastName, setLastName] = useState<string>(defaultLastName);

  return (
    <Container>
      <Title>Account Settings</Title>
      <SubTitle>Personal Information</SubTitle>
      <TextInput label='First Name' value={firstName} onChange={setFirstName} />
      <TextInput label='Last Name' value={lastName} onChange={setLastName} />
    </Container>
  );
};
