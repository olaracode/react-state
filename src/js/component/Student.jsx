import React from "react";
import PropTypes from "prop-types";
/**
 * @props
 * name
 * profile
 * description
 * calificacion
 */

const Student = ({ name = "missing name prop", profile, src }) => {
  return (
    <>
      {src ? <img src={src} alt="student-picture" /> : "No tiene imagen"}
      <h2>Estudiante: {name} </h2>
      {profile ? (
        <>
          <p>Perfil de github: {profile.githubUser} </p>
          <p>Descripción: {profile.description} </p>
          <p>Calificación: {profile.calificacion} </p>
        </>
      ) : null}
    </>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  profile: PropTypes.object,
  src: PropTypes.string,
};

export default Student;
