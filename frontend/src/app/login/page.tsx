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
        router.push("/home");
      })
      .catch((err) => {
        console.error("An error occurred on signIn: ", err);
      });
  }

  function signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((v) => {
        router.push("/home");
      })
      .catch((err) => {
        console.error("An error occurred on signIn: ", err);
      });
  }

  return (
    <>
      <Container>
        <Card>
          <Heading>Sign In</Heading>
          <Form>
            <Input
              type="text"
              className="border-red-300 border-4"
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
            <Button onClick={() => signIn(email, password)}>Sign In</Button>
            <Button onClick={() => signUp(email, password)}>Sign Up</Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}
