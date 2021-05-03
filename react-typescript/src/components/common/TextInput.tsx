import { FC, FormEvent, useState } from "react";
import {
  Wrapper,
  Input,
  Label,
} from "../../styled-components/common/textInput.styles";

interface Props {
  label: string;
  type: string;
  value: any;
  id: string;
  required: boolean;
  onValueChanged: (id: string, value: string) => void;
}

const TextInput: FC<Props> = ({
  label,
  value,
  type,
  id,
  required,
  onValueChanged,
}): JSX.Element => {
  function onChange({ currentTarget }: FormEvent<HTMLInputElement>) {
    const { id, value } = currentTarget;
    onValueChanged(id, value);
  }

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        required={required}
      />
    </Wrapper>
  );
};

export default TextInput;
