import { useContext, useState } from "react";
import { counterContext } from "../../context/contextCounter";
import axios from "axios";
import { useForm } from "react-hook-form";
import Loading from "react-loading-components";
import { Button, FormControl, FormGroup, TextField } from "@mui/material";
export const Contacto = () => {
  const { value } = useContext(counterContext);
  const { handleSubmit, register, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [msjError, setMsjError] = useState(null);
  const onSubmit = () => {
    setIsLoading(true);
    const url = "https://formsubmit.co/" + import.meta.env.VITE_EMAIL;
    axios.post(url).then((response) => {
      setIsLoading(false);
      if (response.status === 200) {
        setMsjError(value.isEnglish ? "Send!" : "Enviado!");
      } else {
        setMsjError(value.isEnglish ? "Error send" : "Error al enviar mensaje");
      }
      reset();
    });
  };
  return (
    <div
      id="contacto"
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
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto p-4 rounded-2 "
            style={{
              width: "100%",
              maxWidth: "800px",
              boxShadow: "0 0 10px rgba(38, 64, 102, .8)",
              background:
                "linear-gradient(320deg, rgba(38, 64, 102, 1),rgba(38, 64, 102, 0)30% )",
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
                    {...register("name")}
                  ></TextField>
                </FormControl>
                <FormControl className="col-12 col-sm-7">
                  <TextField
                    {...register("email")}
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
                  {...register("message")}
                  required
                  variant="filled"
                  label={value.isEnglish ? "Message" : "Mensaje"}
                ></TextField>
              </FormControl>
              <FormControl className="flex-row gap-3 justify-content-end">
                <Button type="reset" className="col-4" variant="outlined">
                  {value.isEnglish ? "Reset" : "Limpiar"}
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="col-4"
                  variant="contained"
                >
                  {isLoading ? (
                    <Loading type="oval" width={30} height={30} fill="#fff" />
                  ) : value.isEnglish ? (
                    "Send"
                  ) : (
                    "Enviar"
                  )}
                </Button>
              </FormControl>
              {msjError && (
                <cite className="text-white text-end">{msjError}</cite>
              )}
            </FormGroup>

            <input
              hidden
              {...register("_next")}
              name="_next"
              value={"https://exeraineri.com"}
            />
            <input
              hidden
              {...register("_captcha")}
              name="captcha"
              value={"false"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
