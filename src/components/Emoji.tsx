import React from "react";
import facebook from "../assets/fb_logo.png";
import apple from "../assets/apple_logo.png";
import google from "../assets/google_logo.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: facebook, alt: "facebook" },
    4: { src: apple, alt: "apple" },
    5: { src: google, alt: "google" },
  };
  return <Image {...emojiMap[rating]} boxSize={25} marginTop={10} />;
};

export default Emoji;
