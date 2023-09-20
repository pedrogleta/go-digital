"use client";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase-config";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Card, Container, Form, Heading, Input } from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function signIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((v) => {
        router.push("/");
      })
      .catch((err) => {
        console.error("An error occurred on sign in: ", err);
        window.open(err);
      });
  }

  function signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((v) => {
        router.push("/");
      })
      .catch((err) => {
        console.error("An error occurred on sign up: ", err);
        window.open(err);
      });
  }

  return (
    <Container>
      <Card>
        <Heading>Sign In</Heading>
        <Form>
          <Input
            type="text"
            placeholder="email"
            onChange={(v) => {
              setEmail(v.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(v) => {
              setPassword(v.target.value);
            }}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn(email, password);
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              signUp(email, password);
            }}
          >
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
