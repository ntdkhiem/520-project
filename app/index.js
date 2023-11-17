import { Button, ButtonText } from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function index() {
  return (
    <>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/prompt">Prompt</Link>
    </>
  );
}
