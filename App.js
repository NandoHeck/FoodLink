import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import InicioScreen from "./Screens/InicioScreen";
import LoginScreen from "./Screens/LoginScreen";
import LoginDoador from "./Screens/LoginDoador";
import ProfileScreen from "./Screens/ProfileScreen";
import HomeReceptorScreen from "./Screens/HomeReceptorScreen";
import HomeDoadorScreen from "./Screens/HomeDoadorScreen";
import CadastroScreen from "./Screens/CadastroScreen";
import RecuperacaoScreen from "./Screens/RecuperacaoScreen";
import DetalhesDoacaoScreen from "./Screens/DetalhesDoacaoScreen";
import SolicitacoesScreen from "./Screens/SolicitacoesScreen";
import ResumoImpactoScreen from "./Screens/ResumoImpactoScreen";
import CadastroDoacoes from "./Screens/CadastroDoacoes";
import HistoricoScreen from "./Screens/HistoricoScreen";

export default function App() {
  const [screen, setScreen] = useState("inicio");
  const [selectedDonation, setSelectedDonation] = useState(null);

  const openDonationDetails = (donation) => {
    setSelectedDonation(donation);
    setScreen("detalhesDoacao");
  };

  const renderScreen = () => {
  switch (screen) {
    case "login":
      return <LoginScreen setScreen={setScreen} />;
    case "loginDoador":
      return <LoginDoador setScreen={setScreen} />;
    case "homeReceptor":
      return (
        <HomeReceptorScreen
          setScreen={setScreen}
          openDonationDetails={openDonationDetails}
        />
      );
    case "homeDoador":
      return <HomeDoadorScreen setScreen={setScreen} />;
    case "cadastro":
      return <CadastroScreen setScreen={setScreen} />;
    case "cadastroDoacoes":
      return <CadastroDoacoes setScreen={setScreen} />;
    case "recuperacao":
      return <RecuperacaoScreen setScreen={setScreen} />;
    case "detalhesDoacao":
      return (
        <DetalhesDoacaoScreen
          setScreen={setScreen}
          donation={selectedDonation}
        />
      );
    case "solicitacoes":
      return <SolicitacoesScreen setScreen={setScreen} />;
    case "resumoImpacto":
      return <ResumoImpactoScreen setScreen={setScreen} />;
    case "historico":
      return <HistoricoScreen setScreen={setScreen} />;
    case "profile":
      return <ProfileScreen setScreen={setScreen} />;
    case "inicio":
    default:
      return <InicioScreen setScreen={setScreen} />;
  }
};

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});