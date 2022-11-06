import { FormEvent, useState, useRef } from "react";
import {
  TextField,
  Grid,
  Box,
  Container,
  Alert,
  IconButton,
} from "@mui/material";
import { ButtonAuth, Copyright, AuthComponent } from "../../components";
import Image from "next/image";
import logo from "../../assets/images/logo/logo-drinktime.png";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [path, setPath] = useState("Login");

  const usernameRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const body = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    if (path === "Sign Up") {
      const bodySignUp = { ...body, name: nameRef.current?.value };

      axios
        .post("https://drinktime-server.herokuapp.com/auth/signup", bodySignUp)
        .then(() => {
          setPath("Login");
          setMessage("");
        })
        .catch((err) => {
          const msg = err.response.data.message
            .split("failed: ")
            .pop()
            .replace("username: ", "")
            .replace("password: ", "")
            .replace("name: ", "");

          setMessage(msg);
        })
        .finally(() => setIsLoading(false));
    } else {
      axios
        .post("https://drinktime-server.herokuapp.com/auth/signin", body)
        .then((data) => {
          console.log(data.data.data.token);
          router.push("/");
        })
        .catch((err) => {
          const msg = err.response.data.message
            .split("failed: ")
            .pop()
            .replace("username: ", "")
            .replace("password: ", "");

          setMessage(msg);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const onClickPath = (text: string) => {
    if (usernameRef.current) {
      usernameRef.current.value = "";
    }
    if (nameRef.current) {
      nameRef.current.value = "";
    }
    if (passwordRef.current) {
      passwordRef.current.value = "";
    }
    setMessage("");
    setPath(text);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ backgroundColor: "white", borderRadius: 10, height: 700 }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image src={logo} alt="drinktime" width={273} height={76} />

          <AuthComponent path={path} onClickPath={onClickPath} />
        </Box>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {message && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="error"
                  size="small"
                  onClick={() => {
                    setMessage("");
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {message}
            </Alert>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                variant="standard"
                fullWidth
                autoComplete="new-username"
                inputRef={usernameRef}
              />
            </Grid>
            {path === "Sign Up" && (
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  variant="standard"
                  fullWidth
                  autoComplete="new-username"
                  inputRef={nameRef}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                variant="standard"
                type="password"
                autoComplete="new-password"
                fullWidth
                inputRef={passwordRef}
              />
            </Grid>
          </Grid>

          <ButtonAuth label={path} disabled={isLoading} />
        </Box>
      </Box>
      <Copyright sx={{ pb: 5 }} />
    </Container>
  );
}
