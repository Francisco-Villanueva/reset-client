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
  const [barb, setBarb] = React.useState(1);
  const [hs, setHs] = React.useState("");

  const handleBarb = (event, newBarb) => {
    setBarb(newBarb);
  };

  const handleHs = (e, newHs) => {
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
          {barbers
            .sort((a, b) => a.id - b.id)
            ?.map((m) => (
              // <Card barber={m} key={m.id} handleBarber={handleBarber} />
              <ToggleButton
                key={m.id}
                value={m.id}
                onClick={() => handleBarber(m.id)}
              >
                {m.name}
              </ToggleButton>
            ))}
        </ToggleButtonGroup>
      )}
      <div>
        <ToggleButtonGroup
          size="small"
          value={client.time}
          exclusive
          color="primary"
          onChange={handleHs}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1em",
          }}
        >
          {turnos?.map((m) => (
            <ToggleButton
              key={m.hs}
              value={m.hs}
              onClick={() => handleTime(m.hs)}
              disabled={!m.avaliable}
            >
              {m.hs}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </>
  );
}
