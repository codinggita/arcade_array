import React from 'react';
import '../styles/Catagory.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/arcade_alley_logo.png';

import img5 from '../assets/image5.png';
import img6 from '../assets/image6.png';
import img7 from '../assets/image7.png';
import img8 from '../assets/image8.png';
import img9 from '../assets/image9.png';
import img10 from '../assets/image10.png';
import img11 from '../assets/image11.png';
import img12 from '../assets/image12.png';
import img13 from '../assets/image13.png';
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';
import image4 from '../assets/img4.png';
import image5 from '../assets/img5.png';
import image6 from '../assets/img6.png';

const GameStore = () => {
    const navigate = useNavigate();

    const popularGames = [
        {
            id: 1,
            category: "Action Games",
            games: [
                { id: 1, title: "Game 1", price: "$29.99", imageUrl: img5 },
                { id: 2, title: "Game 2", price: "$39.99", imageUrl: img6 },
                { id: 3, title: "Game 3", price: "$19.99", imageUrl: img7 }
            ]
        },
        {
            id: 2,
            category: "Action-Adventure Games",
            games: [
                { id: 4, title: "Game 4", price: "$49.99", imageUrl: img8 },
                { id: 5, title: "Game 5", price: "$34.99", imageUrl: img9 },
                { id: 6, title: "Game 6", price: "$34.99", imageUrl: img10 },
            ]
        },
        {
            id: 3,
            category: "Adventure Games",
            games: [
                { id: 7, title: "Game 7", price: "$49.99", imageUrl: img11 },
                { id: 8, title: "Game 8", price: "$34.99", imageUrl: img12 },
                { id: 9, title: "Game 9", price: "$34.99", imageUrl: img13 },
            ]
        }
    ];

    const newReleases = [
        { id: 1, title: "New Game 1", price: "$59.99", imageUrl: img10, discount: "30%" },
        { id: 2, title: "New Game 2", price: "$49.99", imageUrl: img11 },
        { id: 3, title: "New Game 3", price: "$39.99", imageUrl: img12 },
        { id: 4, title: "New Game 4", price: "$29.99", imageUrl: img13 },
        { id: 1, title: "New Game 1", price: "$59.99", imageUrl: img10, discount: "30%" },
        { id: 2, title: "New Game 2", price: "$49.99", imageUrl: img11 }
    ];

    const SavingSpotlight = [
        { id: 1, title: "New Game 1", price: "$59.99", imageUrl: image1, discount: "30%" },
        { id: 2, title: "New Game 2", price: "$49.99", imageUrl: image2 },
        { id: 3, title: "New Game 3", price: "$39.99", imageUrl: image3 },
        { id: 4, title: "New Game 4", price: "$29.99", imageUrl: image4 },
        { id: 1, title: "New Game 1", price: "$59.99", imageUrl: image5, discount: "30%" },
        { id: 2, title: "New Game 2", price: "$49.99", imageUrl: image6 }
    ];


    return (
        <>
        <div className="game-store1">
            <div className="upper1">
            <nav className="sidebar">
                <div className="logo">
                    <img src={logo} alt="Arcade Alley" />
                </div>
                <a href="#" className="sidebarItem" onClick={() => navigate("/home")}>🏠 Home</a>
                <a href="#" className="sidebarItem" onClick={() => navigate("/catagory")}>📁 Category</a>
                <a href="#" className="sidebarItem" onClick={() => navigate("/login")}>👥 Community</a>
                <a href="#" className="sidebarItem" onClick={() => navigate("/friends")}>👫 Friends</a>
                <a href="#" className="sidebarItem">❤️ Wishlist</a>
                <a href="#" className="sidebarItem" onClick={() => navigate("/login")}>⬇️ Download</a>
                <a href="#" className="sidebarItem">⚙️ Setting</a>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                <div className='main-content'>
                {/* Header */}
                <header className="header">
                    <div className="searchBar">
                        <input type="text" placeholder="Search" className="searchInput" />
                    </div>
                    <div className="auth-buttons">
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        <Link to="/signup">
                            <button>Signup</button>
                        </Link>
                    </div>
                </header>

                {/* Popular Games Section */}
                <section className="popular-section">
                    <div className="section-header">
                        <h2 className="heading-secondary">Popular Games</h2>
                        <div className="navigation-arrows">
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>

                    <div className="categories-grid">
                        {popularGames.map(category => (
                            <div key={category.id} className="category-card">
                                <div className="category-images">
                                    {category.games.map(game => (
                                        <img key={game.id} src={game.imageUrl} alt={game.title} className="category-image" />
                                    ))}
                                </div>
                                <div className="category-name">{category.category}</div>
                            </div>
                        ))}
                    </div>
                </section>
                </div>

                
            </main>


            </div>
                <section className="gameCarousel">
                    <div className="carouselHeader1">
                        <h2 className="heading-secondary">New Released</h2>
                        <div className="navigation-arrows">
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>

                    <div className="gameGrid1">
                        {newReleases.map(game => (
                            <div key={game.id} className="game-card">
                                <div className="game-image">
                                    <img src={game.imageUrl} alt={game.title} />
                                    {game.discount && <span className="discount">-{game.discount}</span>}
                                </div>
                                <h3 className="subheading">{game.title}</h3>
                                <p className="price">{game.price}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="gameCarousel">
                    <div className="carouselHeader1">
                        <h2 className="heading-secondary">Saving Spotlight</h2>
                        <div className="navigation-arrows">
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>

                    <div className="gameGrid1">
                        {SavingSpotlight.map(game => (
                            <div key={game.id} className="game-card">
                                <div className="game-image">
                                    <img src={game.imageUrl} alt={game.title} />
                                    {game.discount && <span className="discount">-{game.discount}</span>}
                                </div>
                                <h3 className="subheading">{game.title}</h3>
                                <p className="price">{game.price}</p>
                            </div>
                        ))}
                    </div>
                </section>


                <footer className="footer">
        <div className="footerContainer">
          <div className="socialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIconLink">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialIconLink">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="socialIconLink">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          <div className="section">
            <h4 className="sectionHeader">Resources</h4>
            <ul className="list">
              <li><a href="#" className="link">Support A-Creator</a></li>
              <li><a href="#" className="link">Distribute on Epic Games</a></li>
              <li><a href="#" className="link">Careers</a></li>
              <li><a href="#" className="link">Company</a></li>
            </ul>
          </div>

          <div className="section">
            <h4 className="sectionHeader">Fan Art Policy</h4>
            <ul className="list">
              <li><a href="#" className="link">UX Research</a></li>
              <li><a href="#" className="link">Store EULA</a></li>
            </ul>
          </div>

          <div className="section">
            <h4 className="sectionHeader">Online Services</h4>
            <ul className="list">
              <li><a href="#" className="link">Community Rules</a></li>
              <li><a href="#" className="link">Epic Newsroom</a></li>
            </ul>
          </div>

          <div className="section">
            <p className="sectionHeader">Made By Archade Array</p>
            <ul className="list">
              <li className="link">Battle Breakers</li>
              <li className="link">Robo Recall</li>
              <li className="link">Fortnite</li>
              <li className="link">Shadow Complex</li>
              <li className="link">Infinity Blade</li>
              <li className="link">Unreal Tournament</li>
            </ul>
          </div>

          <div className="copyright">
            <p>© 2024 Archade Array, Inc. All rights reserved. Epic, Archade Array, the Archade Array logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Tournament logo, Tournament, and the Unreal Tournament logo are trademarks of their respective owners or affiliates.</p>
          </div>

          <div className="legalLinks">
            <a href="#" className="link">Terms of Service</a>
            <a href="#" className="link">Privacy Policy/Store</a>
            <a href="#" className="link">Refund Policy</a>
          </div>
        </div>
      </footer>
        </div>
        

        </>
    );
};

export default GameStore;