import React from "react";
import {
  Button,
  ButtonText,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Input,
  InputField,
  AlertCircleIcon,
  VStack,
  Heading,
} from "@gluestack-ui/themed";

import Screen from "./Screen";

export default function LoginScreen() {
  return (
    <Screen justifyContent="center" flex={1}>
      <Heading textAlign="center" mb="$5">
        Sign in to your account
      </Heading>
      <VStack space="xl" mb="$5">
        <FormControl size={"md"} isRequired={false}>
          <Input>
            <InputField type="email" placeholder="Email" />
          </Input>
        </FormControl>

        <FormControl size={"md"} isRequired={false}>
          <Input>
            <InputField type="password" placeholder="password" />
          </Input>

          <FormControlHelper>
            <FormControlHelperText>
              Must be at least 6 characters.
            </FormControlHelperText>
          </FormControlHelper>

          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
      </VStack>
      <Button action={"primary"} variant={"solid"} isDisabled={false}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Screen>
  );
}
