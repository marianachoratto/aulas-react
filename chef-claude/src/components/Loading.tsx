import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

export default function Loading() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Button
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Loading
        </Button>
      </Stack>
    </Stack>
  );
}
