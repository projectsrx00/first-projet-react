import React from "react";
import "./styleMainPage.css";
import Header from "./components/Header";
import DashboardHead from "./components/DashboardHead";
import AddPotion from "./components/AddPotion";
import PotionFilter from "./components/PotionFilter";
import ResetPotion from "./components/resetPotion";
import PotionList from "./components/PotionList";

function MainPage () {
    return (
        <div className="main-page">
            <Header />

            <main>
                <DashboardHead />
                <AddPotion />
                <PotionFilter />
                <PotionList />
                <ResetPotion />
            </main>
        </div>
    );
};

export default MainPage;