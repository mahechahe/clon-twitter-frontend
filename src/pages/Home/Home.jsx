import React, {useState} from "react";
import backgroundTwitter from "../../assets/fondo_twitter.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography, Button, Modal } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { ModalForm } from "../../components/ModalForm";

export const Home = () => {
    const [openModal, setOpenModal] = useState(false)

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "100%", backgroundPosition: "cover" }}
          src={backgroundTwitter}
          alt="background_twitter"
        />
        <TwitterIcon
          style={{
            position: "absolute",
            left: "180px",
            width: "400px",
            height: "400px",
            top: "130px",
            color: "white",
          }}
        />
      </div>
      <div style={{ position: "relative", paddingLeft: "50px" }}>
        <TwitterIcon
          style={{
            position: "absolute",
            left: "50px",
            width: "50px",
            height: "50px",
            top: "30px",
            color: "white",
          }}
        />
        <div style={{ width: "90%", marginTop: "180px" }}>
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "60px",
              fontFamily:
                'TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}
          >
            Lo que está pasando ahora
          </h1>
          <Typography
            sx={{ marginTop: "40px" }}
            variant="h4"
            color={"white"}
            fontWeight="bold"
          >
            Únete a Twitter hoy mismo.
          </Typography>
        </div>
        <Button
          variant="contained"
          onClick={() => setOpenModal(true)}
          sx={{
            background: "#119afb",
            borderRadius: "15px",
            marginTop: "50px",
            marginBottom: '10px',
            width: '280px'
          }}
        >
          Registrate
        </Button>
        <Typography variant="body2" color={"white"} style={{width: '60%'}}>
          Al registrarte, aceptas los Términos de servicio y la Política de
          privacidad, incluida la política de Uso de Cookies.
        </Typography>
        <Typography variant="h6" color={"white"} style={{ marginTop: "30px" }}>
          ¿Ya tienes una cuenta?
        </Typography>
        <Button
          startIcon={<HowToRegIcon />}
          variant="contained"
          onClick={() => setOpenModal(true)}
          sx={{
            background: "#119afb",
            borderRadius: "15px",
            marginTop: "10px",
            marginBottom: '10px',
            width: '280px'
          }}
        >
          Iniciar sesion
        </Button>
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
        >
            <ModalForm close={() => setOpenModal(false)}/>
        </Modal>
      </div>
    </div>
  );
};
