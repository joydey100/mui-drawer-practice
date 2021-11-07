import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    margin: "25px 0!important",
  },
});

const Practice = () => {
  // Essential States
  const [category, setCategory] = useState("dance");

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(category);
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        {" "}
        Create New Note
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="standard"
          fullWidth
          type="text"
          className={classes.field}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          className={classes.field}
        />
        <TextField
          label="Description"
          variant="filled"
          multiline
          rows={4}
          fullWidth
          type="email"
          className={classes.field}
        />

        {/* Check Fields */}
        <Box sx={{ my: 2 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Categories</FormLabel>
            <RadioGroup
              aria-label="categories"
              value={category}
              name="radio-buttons-group"
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="dance"
                control={<Radio />}
                label="Dance"
              />
              <FormControlLabel
                value="study"
                control={<Radio />}
                label="Study"
              />
              <FormControlLabel
                value="sport"
                control={<Radio />}
                label="Sport"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<AdbIcon />}
          type="submit"
        >
          {" "}
          Submit{" "}
        </Button>
      </Box>
    </Container>
  );
};

export default Practice;
