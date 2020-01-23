import React, { FunctionComponent } from "react";
interface Landing_HeaderProps {
  className?: string;
  image?: string;
  username?: string;
}
export const Landing_Header: FunctionComponent<Landing_HeaderProps> = props => {
  {
    const { className, image, username } = props;
    console.log("in landing header");
    return <div className={className}>Welcome Back, {username}</div>;
  }
};
