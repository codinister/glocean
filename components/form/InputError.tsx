type InputErrorType = {
  error: string | undefined;
};
const InputError = ({ error }: InputErrorType) => {
  return <div className="form-error">{error}</div>;
};

export default InputError;
