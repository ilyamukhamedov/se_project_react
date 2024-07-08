import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  fetchItems,
  loadItems,
  removeItems,
  likeCard,
  dislikeCard,
} from "../../utils/api";
import { signUp, signIn, update, getUser } from "../../utils/auth";
import DeleteModal from "../DeleteModal/DeleteModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import MenuModal from "../MenuModal/MenuModal";

export default function App() {
  const [activeModal, setActiveModal] = useState("");

  const [selectedCard, setSelectedCard] = useState({});

  const [weather, setWeather] = useState(0);

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [clothingItems, setClothingItems] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [setIsLiked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleConfirmModal = () => {
    setActiveModal("confirm");
  };

  const handleLogInModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };

  const handleMobileModal = () => {
    setActiveModal("mobile");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = (values) => {
    setIsLoading(true);
    loadItems(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
      })
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleDeleteCard = (cardId) => {
    setIsLoading(true);
    removeItems(cardId)
      .then(() => {
        setClothingItems(clothingItems.filter((card) => card._id !== cardId));
      })
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  function checkloggedIn() {
    const jwt = localStorage.getItem("jwt");
    return getUser(jwt)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch(console.error);
  }

  const loginUser = (user) => {
    setIsLoading(true);
    signIn(user)
      .then((res) => {
        localStorage.setItem("jwt", res.token);

        return checkloggedIn();
      })
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const registerUser = (data) => {
    signUp(data)
      .then(() => {
        loginUser(data);
        setCurrentUser(data);
      })
      .catch(console.error);
  };

  const updateUser = (user) => {
    setIsLoading(true);
    const jwt = localStorage.getItem("jwt");
    update(user, jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const logoutUser = () => {
    localStorage.removeItem("jwt");

    setCurrentUser({});

    setLoggedIn(false);

    history.push("/");
  };

  const handleCardLike = (id, isLiked) => {
    if (!isLiked) {
      likeCard(id)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((card) => (card._id === id ? updatedCard : card))
          );
          setIsLiked(true);
        })
        .catch(console.error);
    } else {
      dislikeCard(id)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((card) => (card._id === id ? updatedCard : card))
          );
          setIsLiked(false);
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    fetchItems().then(setClothingItems).catch(console.error);

    getForecastWeather()
      .then((data) => {
        setWeather(parseWeatherData(data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    const closeOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    window.addEventListener("mousedown", closeOutside);

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("mousedown", closeOutside);
    };
  }, [activeModal]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkloggedIn(jwt).catch((err) => {
        if (err.response && err.response.status === 401) {
          console.error("Token expired or invalid. Logging out...");
          logoutUser();
        } else {
          console.error("Error fetching user data:", err);
        }
      });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__section">
            <Header
              cityName={weather.city}
              onCreateModal={handleCreateModal}
              onLogInModal={handleLogInModal}
              onRegisterModal={handleRegisterModal}
              onMobileModal={handleMobileModal}
              loggedIn={loggedIn}
            />
            <Switch>
              <Route exact path="/">
                <Main
                  weather={weather}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  handleCardLike={handleCardLike}
                  isLoggedIn={loggedIn}
                />
              </Route>
              <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                <Profile
                  onSelectCard={handleSelectedCard}
                  onCreateModal={handleCreateModal}
                  clothingItems={clothingItems}
                  logout={logoutUser}
                  editProfile={handleEditProfileModal}
                  handleCardLike={handleCardLike}
                />
              </ProtectedRoute>
            </Switch>
            <Footer />
          </div>
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              onAddItem={handleAddItemSubmit}
              isLoading={isLoading}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              handleDeleteCard={handleConfirmModal}
              loggedIn={loggedIn}
            />
          )}
          {activeModal === "confirm" && (
            <DeleteModal
              onClose={handleCloseModal}
              selectedCard={selectedCard}
              handleDeleteCard={handleDeleteCard}
              isLoading={isLoading}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              openRegisterModal={handleRegisterModal}
              loginUser={loginUser}
              isLoading={isLoading}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              openLogInModal={handleLogInModal}
              registerUser={registerUser}
              isLoading={isLoading}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              updateUser={updateUser}
              isLoading={isLoading}
            />
          )}
          {activeModal === "mobile" && (
            <MenuModal
              handleCloseModal={handleCloseModal}
              onCreateModal={handleCreateModal}
              onLogInModal={handleLogInModal}
              onRegisterModal={handleRegisterModal}
              onMobileModal={handleMobileModal}
              loggedIn={loggedIn}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}
