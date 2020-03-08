import { GroupContainer, FormInputContainer, FormInputLabel } from './FormInput.styles';

interface IProps {
  label: string;
  value: any;
  type: string;
  name: string;
  required: boolean;
}
const FormInput = ({ label, ...props }: IProps) => (
  <GroupContainer>
    <FormInputContainer {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>{label}</FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
