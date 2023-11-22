"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
import { useSelector } from "react-redux";
import Profile from "../component/Profile/Profile";
import Header from "../component/Header";
import Protected from "../hooks/useProtected";

type Props = {};

const Page: FC<Props> = (props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  return (
    <div className='min-h-screen'>
      <Protected>
        <Heading
          title={`${user?.name} profile - Elearning`}
          description='ELearning is a platform for students to learn and get help from teachers'
          keywords='Prograaming,MERN,Redux,Machine Learning'
        />

        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />

        <Profile user={user} />
      </Protected>
    </div>
  );
};

export default Page;
