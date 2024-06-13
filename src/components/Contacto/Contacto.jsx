import React, { useContext } from "react";
import { FormControl, FormGroup, Input, TextField } from "@mui/material";
import { counterContext } from "../../context/contextCounter";
import { Button } from "@mui/material";
export const Contacto = () => {
  const { value } = useContext(counterContext);
  return (
    <div
      className="rounded-2 mx-auto"
      style={{
        margin: "10em 0",
        maxWidth: "100%",
      }}
    >
      <div
        className="mx-auto p-2"
        style={{
          color: "#000",
        }}
      >
        {/* <h4 className="border-bottom fw-bold text-white text-center">
          {value.isEnglish ? "Contact me" : "Contactáme"}
        </h4> */}
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="bloque-titulos"
        >
          {value.isEnglish ? (
            <>
              <h3 className="fondo-titulo">Contact Me</h3>
              <h4 className="titulo">Contact Me</h4>
            </>
          ) : (
            <>
              <h3 className="fondo-titulo">Contáctame</h3>
              <h4 className="titulo">Contáctame</h4>
            </>
          )}
        </div>
        <div className="container">
          <form
            className="mx-auto p-4 rounded-2 "
            style={{
              // backgroundColor: "rgba(255,255,255,.2)",
              width: "100%",
              maxWidth: "800px",
              boxShadow: "0 0 10px rgba(38, 64, 102, .8)",
              background:
                "linear-gradient(320deg, rgba(38, 64, 102, 1),rgba(38, 64, 102, 0)30% )",
            }}
            action={"https://formsubmit.co/" + import.meta.env.VITE_KEY_FORM}
            method="POST"
            onSubmit={() => {
              setTimeout(() => {
                window.location.href = "/";
              }, 1000);
            }}
          >
            <FormGroup className="gap-3">
              <FormGroup className="flex-row gap-3">
                <FormControl className="col ">
                  <TextField
                    className="rounded-2"
                    variant="filled"
                    sx={{
                      backgroundColor: "rgba(38, 64, 102, .1)",
                      border: "solid rgba(38,64,102,1) 1px",
                    }}
                    InputProps={{
                      slotProps: {
                        input: {
                          style: { color: "rgba(255,255,255,.8)" },
                        },
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: "white" },
                    }}
                    label={value.isEnglish ? "Name" : "Nombre"}
                    type="text"
                    name="name"
                    required
                  ></TextField>
                </FormControl>
                <FormControl className="col-12 col-sm-7">
                  <TextField
                    className="rounded-2"
                    sx={{
                      backgroundColor: "rgba(38, 64, 102, .1)",
                      border: "solid rgba(38,64,102,1) 1px",
                    }}
                    InputProps={{
                      slotProps: {
                        input: {
                          style: { color: "rgba(255,255,255,.8)" },
                        },
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: "white" },
                    }}
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
                  className="rounded-2"
                  sx={{
                    backgroundColor: "rgba(38, 64, 102, .1)",
                    border: "solid rgba(38,64,102,1) 1px",
                  }}
                  InputProps={{
                    slotProps: {
                      input: {
                        style: { color: "rgba(255,255,255,.8)" },
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: "white" },
                  }}
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
    </div>
  );
};
