import React, { useContext } from "react";
import { FormControl, FormGroup, TextField } from "@mui/material";
import { counterContext } from "../../context/contextCounter";
import { Button } from "@mui/material";
export const Contacto = () => {
  const { value } = useContext(counterContext);
  return (
    <div
      className="mx-lg-auto p-2 py-4 rounded-2"
      style={{
        backgroundColor: "rgba(255,255,255,1)",
        maxWidth: "800px",
      }}
    >
      <div
        className="mx-auto p-2"
        style={{
          color: "#000",
        }}
      >
        <h3 className="border-bottom fw-bold">
          {value.isEnglish ? "Contact me" : "Contactáme"}
        </h3>
        <form
          action="https://formsubmit.co/2420f7d56093354f54dda6cb6a57d801"
          //   action="https://formsubmit.co/exeraineri15@gmail.com"
          method="POST"
        >
          <FormGroup className="gap-3">
            <FormGroup className="flex-row gap-3">
              <FormControl className="col">
                <TextField
                  variant="filled"
                  label={value.isEnglish ? "Name" : "Nombre"}
                  type="text"
                  name="name"
                  required
                ></TextField>
              </FormControl>
              <FormControl className="col-12 col-sm-7">
                <TextField
                  variant="filled"
                  label="Email"
                  name="email"
                  type="email"
                  required
                ></TextField>
              </FormControl>
            </FormGroup>
            <FormControl>
              <TextField
                multiline
                rows={3}
                id="message"
                name="message"
                required
                variant="filled"
                label={value.isEnglish ? "Message" : "Mensaje"}
              ></TextField>
            </FormControl>
            <FormControl className="flex-row gap-3 justify-content-end">
              <Button type="reset" className="col-4" variant="outlined">
                {value.isEnglish ? "Reset" : "Limpiar"}
              </Button>
              <Button type="submit" className="col-4" variant="contained">
                {value.isEnglish ? "Send" : "Enviar"}
              </Button>
            </FormControl>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};
