import { ErrorContainer } from './styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <ErrorContainer>
      <p>{message}</p>
    </ErrorContainer>
  );
};

export default ErrorMessage;
