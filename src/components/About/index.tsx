import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { About as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
// import { HandEffect } from "../HandEffect";

export const About = (): JSX.Element => {
  return (
    <FooterWrapper id="social-media">
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              About me! {/* <HandEffect /> */}
            </Text>
            <Text type="body1" color="grey2">
              Technology has always been part of my life, since I was 9 years
              old. In 2020, I had the opportunity to deepen my knowledge in web
              development and its technologies while working at Kit Do Designer,
              where I was introduced to web development with HTML and CSS. In
              2022, I decided to dive headlong into the world of programming and
              dedicated all my time to studying the main technologies on the
              market. I started the Systems Analysis and Development course at
              FAM, along with the Full Stack Development course at Kenzie
              Academy Brasil, where I carried out several projects that allowed
              me to gain greater knowledge in the area. I'm always looking for
              new challenges and opportunities to apply my knowledge in
              technology and programming.
            </Text>
          </Box>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
