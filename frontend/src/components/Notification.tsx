import { Alert, AlertColor, Snackbar } from '@mui/material';

const Notification = ({
  isOpen,
  onClose,
  severity = 'success',
  message,
}: {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  severity?: AlertColor;
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={1000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant='filled'
        sx={{ width: '100%' }}
        data-cy='notification-message'
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
export default Notification;
