import React, { useState } from "react";
import styled from "styled-components";
import bgImage from "../assets/bgLogin.jpg";
import { CiUser, CiLock } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
  display: grid;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  background-color: hsla(0, 0%, 10%, 0.1);
  border: 2px solid white;
  margin-inline: 1.5rem;
  padding: 3rem 3rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
`;

const BgImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  top: 0;
  left: 0;
  z-index: -1;
`;

const LoginTitle = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const LoginContent = styled.div`
  display: grid;
`;

const LoginBox = styled.div`
  display: grid;
`;

const LoginIcon = styled.i`
  font-size: 1.25rem;
`;

const IconWithProps = ({ IconComponent }) => {
  return (
    <LoginIcon>
      <IconComponent /> {/* pass the Icon component as a prop */}
    </LoginIcon>
  );
};

const LoginBoxInput = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const LoginInput = styled.input`
  width: 100%;
  padding-block: 0.8rem;
  background: none;
  color: hsl(0, 0%, 100%);
  position: relative;
  z-index: 1;
  padding-left: 10px;
  border-radius: 10px;
  outline: none;
`;

const LabelLogin = styled.label`
  position: absolute;
  left: 0;
  top: 13px;
  padding-left: 10px;
  font-weight: 500;
  transition: top 0.3s, font-size 0.3s;
  opacity: 0.5;
`;

const LoginEye = styled.i`
  position: absolute;
  right: 0;
  top: 18px;
  z-index: 10;
  cursor: pointer;
`;

const LoginCheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const LoginCheckGroup = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const LabelGroup = styled.label`
  font-size: 0.8rem;
`;

const CheckGroup = styled.input`
  font-size: 0.8rem;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: hsl(0, 0%, 80%);
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Link = styled.a`
  font-size: 0.8rem;
  color: whitesmoke;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    font-weight: 400;
  }
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <LoginContainer>
      <BgImg src={bgImage} alt="" />
      <Container>
        <LoginTitle>
          Test Login page
          <br /> by Styled-Components
        </LoginTitle>

        <LoginContent>
          <LoginBox>
            <IconWithProps IconComponent={CiUser} />
            <LoginBoxInput>
              <LoginInput
                type="email"
                required
                id="login-email"
                placeholder=""
              />
              <LabelLogin>Email</LabelLogin>
            </LoginBoxInput>
          </LoginBox>

          <LoginBox>
            <IconWithProps IconComponent={CiLock} />
            <LoginBoxInput>
              <LoginInput
                type={showPassword ? "text" : "password"}
                required
                id="login-password"
                placeholder=""
              />
              <LabelLogin>Password</LabelLogin>
              <LoginEye onClick={togglePasswordVisibility}>
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </LoginEye>
            </LoginBoxInput>
          </LoginBox>

          <LoginCheckBox>
            <LoginCheckGroup>
              <CheckGroup
                type="checkbox"
                id="remember-me"
                name="remember-me"
                value="remember-me"
              />
              <LabelGroup>Remember Me</LabelGroup>
            </LoginCheckGroup>
            <LabelGroup>
              <Link href="">Forgot Password?</Link>
            </LabelGroup>
          </LoginCheckBox>

          <LoginButton type="submit">Login</LoginButton>

          <LabelGroup>
            Don't have an account? <Link href="">Register</Link>
          </LabelGroup>
        </LoginContent>
      </Container>
    </LoginContainer>
  );
};

export default Login;
