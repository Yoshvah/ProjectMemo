import React from "react";
 import AccountOptions from "./Account.jsx";
 
function MainMessage({ selectedMenu }) {
  let content;

  switch (selectedMenu) {
    case "message":
      content = <div>Hello </div>;
      break;
    case "Ai":
      content = <div>Bienvenue sur la page Ai</div>;
      break;
    case "settings":
      content = <div>Bienvenue sur la page setting</div>;
      break;
    case "logout":
      content = <div> <AccountOptions/>
        
      </div>;
      break;

    default:
      content = <div>Veuillez sélectionner une option</div>;
  }

  return <div>{content}</div>;
}

export default MainMessage;
