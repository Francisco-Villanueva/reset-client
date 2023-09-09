import React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function Cards({
  turnos,
  barbers,
  handleTime,
  handleBarber,
  client,
}) {
  const [barb, setAlignment] = React.useState(1);
  const [hs, setHs] = React.useState("");

  const handleBarb = (event, newBarb) => {
    setAlignment(newBarb);
  };

  const handleHs = (e, newHs) => {
    console.log(newHs);
    setHs(newHs);
  };
  return (
    <>
      {barbers && (
        <ToggleButtonGroup
          value={client.barberId}
          exclusive
          color="primary"
          onChange={handleBarb}
        >
          {barbers?.map((m) => (
            // <Card barber={m} key={m.id} handleBarber={handleBarber} />
            <ToggleButton
              key={m.id}
              value={m.id}
              onClick={() => handleBarber(m.id)}
            >
              {m.barber_firstName}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
      <div>
        <ToggleButtonGroup
          size="small"
          value={hs}
          exclusive
          color="primary"
          onChange={handleHs}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1em",
            // background: "red",
          }}
        >
          {turnos?.map((m) => (
            <ToggleButton
              key={m.id}
              value={m.horario_value}
              onClick={() => handleTime(m.horario_value)}
            >
              {m.horario_label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </>
  );
}
