import React, { useState, useEffect } from "react";
import "./mainPageUser.css";
import FormEdit from "../components/formEdit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainPageUser() {
  const user = useSelector((state) => state.user);
  const userName = user?.user?.userName || "Guest";
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    if (!user.token) {
      navigate("/Connexion");
    }
  }, [user.token, navigate]);
  return (
    <div className="user_container">
      <main className="main bg-dark">
        {isEditing ? (
          <FormEdit
            onCancel={handleCancelClick}
            defaultUsername={user.user.userName}
            defaultFirstName={user.user.firstName}
            defaultLastName={user.user.lastName}
            user={user}
          />
        ) : (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {userName}
            </h1>
            <button className="edit-button" onClick={handleEditClick}>
              Edit name
            </button>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPageUser;
