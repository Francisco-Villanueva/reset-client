CREATE TABLE "Peluquero" (
  "peluquero_ID" integer PRIMARY KEY,
  "peluquero_NAME" text
);

CREATE TABLE "Turno" (
  "turno_ID" integer PRIMARY KEY,
  "peluquero_ID" integer,
  "cliente_name" text,
  "time" time,
  "date" date
);

CREATE TABLE "TurnoSlot" (
  "turno_slot_ID" integer PRIMARY KEY,
  "peluquero_ID" integer,
  "time" time,
  "date" date,
  "available" boolean
);

ALTER TABLE "Turno" ADD FOREIGN KEY ("peluquero_ID") REFERENCES "Peluquero" ("peluquero_ID");

ALTER TABLE "TurnoSlot" ADD FOREIGN KEY ("peluquero_ID") REFERENCES "Peluquero" ("peluquero_ID");
