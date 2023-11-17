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

export default function SignupScreen() {
  return (
    <Screen>
      <Heading textAlign="center" mb="$5">
        Register for an account
      </Heading>
      <VStack space="xl" mb="$5">
        <FormControl size={"md"} isRequired={false}>
          <Input>
            <InputField type="email" placeholder="Email" />
          </Input>
        </FormControl>

        <FormControl size={"md"} isRequired={false}>
          <Input>
            <InputField type="text" placeholder="Username" />
          </Input>
        </FormControl>

        <FormControl size={"md"} isRequired={false}>
          <Input>
            <InputField type="password" placeholder="Password" />
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
        <ButtonText>Register</ButtonText>
      </Button>
    </Screen>
  );
}
