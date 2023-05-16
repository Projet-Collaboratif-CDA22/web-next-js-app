import { validateHeaderName } from "http";
import { useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";

export interface InputProps {
  setValue: any;
  value: string;
  message: string;
}

export default function InputStack({ value, setValue, message }: InputProps) {
  const [valid, setValid] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>("");
  const messageError = "Champ invalide";

  function setValue_() {
    console.log("setValue_", newValue);
    setValue(newValue);
  }

  function checkValue() {
    console.log("checkValue", value);
    if (value === "") {
      setValid(false);
      return;
    }
    if (value === undefined) {
      setValid(false);

      return;
    }
    setValid(true);
    return;
  }
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="me-auto"
          placeholder={message}
          // value={value}
          onChange={(e) => {
            setNewValue(e.target.value);
            checkValue();
          }}
        ></Form.Control>
        {!valid && (
          <Form.Control.Feedback type="invalid">
            {messageError}
          </Form.Control.Feedback>
        )}
        <Button
          variant="secondary"
          disabled={!valid}
          onClick={() => {
            // console.log(value);
            setValue_();
          }}
        >
          {message}
        </Button>
        <div className="vr" />
      </Stack>
    </>
  );
}
