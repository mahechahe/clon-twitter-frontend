import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Typography, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Ring } from "@uiball/loaders";

export const ModalForm = ({ close }) => {
  const [login, setLogin] = useState(false);
  const [loadingForm, setLoadingForm] = useState(true);
  const intialState = {
    email: '',
    name: '',
    password: ''
  }
  const [dataUser, setDataUser] = useState(intialState)

  useEffect(() => {
    setTimeout(() => {
      setLoadingForm(false);
    }, 2000);
  }, []);

  const handleChange = (e) => {
    setDataUser({...dataUser, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    console.log(dataUser);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "85%",
          borderRadius: "20px",
          background: "black",
          position: "relative",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {loadingForm ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ring size={40} lineWeight={5} speed={2} color="#119afb" />
          </div>
        ) : (
          <>
            <IconButton
              onClick={close}
              style={{ position: "absolute", left: "15px", top: "15px" }}
            >
              <CloseIcon style={{ color: "white" }} />
            </IconButton>
            <TwitterIcon
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                marginTop: "20px",
              }}
            />
            <Typography
              variant="h4"
              color={"white"}
              style={{ fontWeight: "bold", marginTop: "74px" }}
            >
              {login ? "Inicia sesión en Twitter" : "Crear un usuario en Twitter"}
            </Typography>
            <input
              style={{
                width: "365px",
                border: "1px solid rgb(113, 118, 123)",
                background: "none",
                height: "45px",
                color: "white",
                padding: "4px",
                marginTop: "30px",
                borderRadius: "4px",
                fontSize: "16px",
                paddingLeft: "10px",
              }}
              value={dataUser.email}
              onChange={(e) => handleChange(e)}
              name='email'
              className="input"
              placeholder="Correo electronico"
              type="text"
            />
            {!login && (
              <input
                style={{
                  width: "365px",
                  border: "1px solid rgb(113, 118, 123)",
                  background: "none",
                  height: "45px",
                  color: "white",
                  padding: "4px",
                  marginTop: "20px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  paddingLeft: "10px",
                }}
                name='name'
                value={dataUser.name}
                onChange={handleChange}
                placeholder="Nombre"
                type="text"
              />
            )}
            <input
              style={{
                width: "365px",
                border: "1px solid rgb(113, 118, 123)",
                background: "none",
                height: "45px",
                color: "white",
                padding: "4px",
                marginTop: "20px",
                borderRadius: "4px",
                fontSize: "16px",
                paddingLeft: "10px",
              }}
              name='password'
              value={dataUser.password}
              onChange={handleChange}
              className="input"
              placeholder="Contraseña"
              type="password"
            />
            <Button
              variant="contained"
              sx={{
                background: "#119afb",
                borderRadius: "10px",
                marginTop: "30px",
                marginBottom: "10px",
                width: "365px",
              }}
              onClick={handleClick}
            >
              {login ? "Iniciar Sesion" : "Crear usuario"}
            </Button>
            <div
              style={{ width: "365px", textAlign: "start", marginTop: "10px" }}
            >
              <Typography color={"rgb(113, 118, 123)"}>
                {login ? "¿No tienes una cuenta? " : "¿Ya tienes una cuenta? "}
                <span
                  onClick={() => setLogin(!login)}
                  style={{ color: "#119afb", cursor: "pointer" }}
                >
                  {!login ? "Iniciar Sesion" : "Regístrate"}
                </span>
              </Typography>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
