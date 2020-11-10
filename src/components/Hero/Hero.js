import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../Button/ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1></HeroH1>
        <HeroP>Sign up for a new account Today!</HeroP>
        <HeroBtnWrapper>
          <Button
            primary={true}
            dark={true}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-82}
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward></ArrowForward> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
