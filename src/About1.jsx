import User from "./User";
import UserClass from "./UserClass";
import react from "react";
import { useState } from "react";
const About1 = () => {
  return (
    <div className="flex justify-between bg-pink-400">
      <h1>This is About page</h1>
      <User name={"Ankit Kumar(function)"} />
      <UserClass name1={ "Akshay Saini(classes)"} />{" "}
      {/* This is Class Based Component*/}
    </div>
  );
};
export default About1;
