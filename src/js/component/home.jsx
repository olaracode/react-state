import React from "react";
import Card from "./Card.jsx";
import { Footer, Navbar } from "./Layout.jsx";
import UserProfile from "./UserProfile.jsx";
import Student from "./Student.jsx";
//create your first component

/**
 * Props, Proptypes
 * hooks
https://picsum.photos/200/201 * eventos
 */

const Home = () => {
  const user = {
    name: "Jose Carlos",
    description: "Una descripcion",
    username: "jpermo07",
  };
  const secondUser = {
    name: "Jose Morrone",
    description: "Un crack en react",
    username: "jmorrone",
  };
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center my-5">
        <div className="w-75">
          <Student
            name={"Jose Carlos"}
            profile={{
              description: "Descripcion random",
              githubUser: "usuario de github",
              calificacion: 10,
            }}
          />
          <hr />

          <UserProfile
            name={user.name}
            description={user.description}
            username={user.username}
          />
          <Card
            title="Mi titulo"
            content="Mi otro contenido"
            price={10}
            src={"https://picsum.photos/200/201"}
          />
          <hr />
          <UserProfile
            name={secondUser.name}
            description={secondUser.description}
            username={secondUser.username}
          />
          <Card
            title="Mi titulo"
            content="Mi otro contenido"
            price={10}
            src={"https://picsum.photos/200/201"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
