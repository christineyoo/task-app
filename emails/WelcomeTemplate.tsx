import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome!</Preview>
      <Tailwind>
        <Body className="bg-white font-bold">
          <Container>
            <Text style={heading}>Hello {name}</Text>
            <Link href="https://codeiwthmosh.com">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const heading: CSSProperties = {
  fontSize: "31px",
};

export default WelcomeTemplate;
