import React from "react";
import { useStore } from "../context/BarberContext";
import ConfirmationAlert from "./ConfirmationAlert";
import RejectionAlert from "./RejectionAlert";

export default function AlertContent() {
  const { step } = useStore();
  switch (step) {
    case 4:
      return <ConfirmationAlert />;
    case 5:
      return <RejectionAlert />;
  }
}
