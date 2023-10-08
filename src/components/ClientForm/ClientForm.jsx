import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ValidationTextFields({ handleInputChange, client }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      color={"primary"}
    >
      <div>
        <TextField
          label="Nombre"
          variant="outlined"
          name="name"
          value={client.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={client.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Telefono"
          type="number"
          variant="outlined"
          name="phone"
          value={client.phone}
          onChange={handleInputChange}
        />
      </div>
    </Box>
  );
}
