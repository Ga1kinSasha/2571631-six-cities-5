import { OfferType } from "../../mocks/offer";
import { OfferList } from "../../components/list-of-offers/list-of-offers";
import Map from "../../components/map/map";
import { MapType } from '../../exports/map-types';

type SimpleCard = {
    isPremium: boolean;
    imageLink: string;
    price: number;
    isFavourite: boolean;
    rating: number;
    description: string;
    placeType: string;
};

type MainPageProps = {
    availableCards: SimpleCard[];
    offers: OfferType[];
};

const MainPage = ({ offers }: MainPageProps) => (
    <div className="page page--gray page--main">
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <a className="header__logo-link header__logo-link--active">
                            <img
                                className="header__logo"
                                src="img/logo.svg"
                                alt="6 cities logo"
                                width={81}
                                height={41}
                            />
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item user">
                                <a className="header__nav-link header__nav-link--profile" href="#">
                                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                                    <span className="header__user-name user__name">
                                        Oliver.conner@gmail.com
                                    </span>
                                    <span className="header__favorite-count">3</span>
                                </a>
                            </li>
                            <li className="header__nav-item">
                                <a className="header__nav-link" href="#">
                                    <span className="header__signout">Sign out</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
                <section className="locations container">
                    <ul className="locations__list tabs__list">
                        {["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"].map((city, index) => (
                            <li className="locations__item" key={city}>
                                <a
                                    className={`locations__item-link tabs__item ${index === 3 ? "tabs__item--active" : ""}`}
                                    href="#"
                                >
                                    <span>{city}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            <div className="cities">
                <div className="cities__places-container container">
                    <section className="cities__places places">
                        <h2 className="visually-hidden">Places</h2>
                        <b className="places__found">312 places to stay in Amsterdam</b>
                        <form className="places__sorting" action="#" method="get">
                            <span className="places__sorting-caption">Sort by</span>
                            <span className="places__sorting-type" tabIndex={0}>
                                Popular
                                <svg className="places__sorting-arrow" width={7} height={4}>
                                    <use xlinkHref="#icon-arrow-select"></use>
                                </svg>
                            </span>
                            <ul className="places__options places__options--custom places__options--opened">
                                {["Popular", "Price: low to high", "Price: high to low", "Top rated first"].map(
                                    (option, index) => (
                                        <li
                                            className={`places__option ${index === 0 ? "places__option--active" : ""}`}
                                            key={option}
                                            tabIndex={0}
                                        >
                                            {option}
                                        </li>
                                    )
                                )}
                            </ul>
                        </form>
                        <div className="cities__places-list places__list tabs__content">
                            <OfferList offers={offers} />
                        </div>
                    </section>
                    <div className="cities__right-section">
                        <Map city={offers[0].city} offers={offers} mapType={MapType.mainMap} />
                    </div>
                </div>
            </div>
        </main>
    </div>
);

export default MainPage;
