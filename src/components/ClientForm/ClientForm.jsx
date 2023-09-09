import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ValidationTextFields({ handleInputChange, client }) {
  // console.log();
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      // noValidate
      autoComplete="off"
      color={"primary"}
    >
      <div>
        <TextField
          label="Nombre"
          variant="outlined"
          name="client_name"
          value={client.client_name}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="client_email"
          value={client.client_email}
          onChange={handleInputChange}
        />
        <TextField
          label="Telefono"
          type="number"
          variant="outlined"
          name="client_number"
          value={client.client_number}
          onChange={handleInputChange}
        />
      </div>
    </Box>
  );
}
