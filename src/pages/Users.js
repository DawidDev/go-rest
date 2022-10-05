import React from "react";

// Import grafiki dla tego komponentu
import userSearch from "../images/user-research.png";

// Import komponentów 
import Inventive from "../components/Incentive";
import UserRecord from "../components/UserRecord";
import UserRecordTitle from "../components/UserRecordTitle";

const Users = () => {
  // Obiekt reprezentujący właściwości do wyświetlenia w sekcji powitalnej danej strony
  // Przekazywany jest do osobnego komponentu ze względu, który renderuje zawartość dla danej podstrony
  // Rozwiązanie użyte z powodu na powtarzalność wykonania tego samego kodu
  const infoAboutThisPage = {
    name: "Users",
    headerTitle: "Users downloaded from GoREST",
    additionalInfo:
      "On this page You can check information about Users downloaded from ",
    btnText: "Add user",
    btnFunction: "",
    btnAdditionalInfo: "or check actual list below",
    image: userSearch,
  };

  const usersFromAPI = [

    {
        "id": 4533,
        "name": "Aagam Tagore",
        "email": "aagam_tagore@quigley.co",
        "gender": "male",
        "status": "active"
    },
    {
        "id": 4532,
        "name": "Vedang Agarwal",
        "email": "vedang_agarwal@hyatt.name",
        "gender": "female",
        "status": "inactive"
    },
    {
        "id": 4531,
        "name": "Krishnadas Marar",
        "email": "krishnadas_marar@turner.org",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4530,
        "name": "Bhagavaan Adiga",
        "email": "bhagavaan_adiga@bednar.co",
        "gender": "female",
        "status": "inactive"
    },
    {
        "id": 4375,
        "name": "Ghanshyam Guha",
        "email": "ghanshyam_guha@russel-erdman.com",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4370,
        "name": "Miss Mani Somayaji",
        "email": "somayaji_mani_miss@hudson.io",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4363,
        "name": "Aadrika Pilla",
        "email": "pilla_aadrika@emard.com",
        "gender": "male",
        "status": "inactive"
    },
    {
        "id": 4362,
        "name": "Gauranga Iyengar PhD",
        "email": "iyengar_phd_gauranga@leffler.co",
        "gender": "female",
        "status": "inactive"
    },
    {
        "id": 4361,
        "name": "Vrinda Khanna IV",
        "email": "iv_khanna_vrinda@schaden-daugherty.name",
        "gender": "male",
        "status": "active"
    },
    {
        "id": 4360,
        "name": "Chinmayananda Varrier",
        "email": "chinmayananda_varrier@cole.org",
        "gender": "female",
        "status": "active"
    }

]

const usersList = usersFromAPI.map(user => (
  <UserRecord key={user.id} user={user}/>
))

  return(
    <>
    <Inventive infoAboutPage={infoAboutThisPage} />
    <UserRecordTitle />
    {usersList}
    </>
  ) 
};

export default Users;
