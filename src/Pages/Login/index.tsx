import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { FaClosedCaptioning, FaLock, FaLockOpen } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Button from "@/Components/atoms/Button";
import Input from "@/Components/atoms/Input";
// import { Spinner } from '../../components/Spinner/styles';
import AuthContext from "../../contexts/auth";
import {
  Brand,
  Container,
  ContainerError,
  Header,
  TextError,
  Transition,
  Wrapper,
} from "./styles";

const Login: React.FC = () => {
  const { signIn, addMessage, message } = useContext(AuthContext);
  const [type, setType] = useState("password");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };
      try {
        signIn(user);
        // notifySuccess('Especialidade cadastrada com sucesso!');
        formik.setSubmitting(false);
      } catch (error) {
        const messageError = "Oops algo deu errado";
        addMessage(messageError);
        console.log(messageError);

        formik.setSubmitting(false);
      }
    },
    validate: (values) => {
      const errors: any = {};

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "*Email Invalid";
      }

      if (!values.password) {
        errors.password = "*Required";
      }

      return errors;
    },
  });

  useEffect(()=>{
    setTimeout(() => {
      addMessage('')
    }, 3000);
  },[message])

  const handleCloseError = () => {
    addMessage("");
  };

  return (
    <Wrapper>
      <Transition>
        {message ? (
          <ContainerError>
            <span>
              <IoIosClose onClick={handleCloseError} />
            </span>
            <TextError><span>{message}</span></TextError>
          </ContainerError>
        ) : (
          ""
        )}

        <Container>
          <Header>
            <Brand>Bookstore</Brand>
            <h3> | Login</h3>
          </Header>

          <form onSubmit={formik.handleSubmit}>
            <Input
              name="email"
              type="email"
              value={formik.values.email}
              placeholder="EMAIL"
              onChange={formik.handleChange}
            />
            <Input
              name="password"
              value={formik.values.password}
              placeholder="SENHA"
              type={type}
              onChange={formik.handleChange}
            >
              {type === "text" ? (
                <FaLockOpen onClick={() => setType("password")} />
              ) : (
                <FaLock
                  onClick={() => {
                    setType("text");
                  }}
                />
              )}
            </Input>
            <Button color="btnLogin" submit text="Login" />
          </form>
        </Container>
      </Transition>
    </Wrapper>
  );
};

export default Login;
