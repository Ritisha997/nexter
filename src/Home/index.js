import React from "react";
import "./index.scss";
import main from '../assets/img/logo.png'
import logo from "../assets/img/sprite.svg";
import story from "../assets/img/story-1.jpeg";
import story1 from "../assets/img/story-2.jpeg";
import house1 from "../assets/img/house-1.jpeg";
import house2 from "../assets/img/house-2.jpeg";
import house3 from "../assets/img/house-3.jpeg";
import house4 from "../assets/img/house-4.jpeg";
import house5 from "../assets/img/house-5.jpeg";
import house6 from "../assets/img/house-6.jpeg";
import gal1 from '../assets/img/gal-1.jpeg'
import gal2 from '../assets/img/gal-2.jpeg'
import gal3 from '../assets/img/gal-3.jpeg'
import gal4 from '../assets/img/gal-4.jpeg'
import gal5 from '../assets/img/gal-5.jpeg'
import gal6 from '../assets/img/gal-6.jpeg'
import gal7 from '../assets/img/gal-7.jpeg'
import gal8 from '../assets/img/gal-8.jpeg'
import gal9 from '../assets/img/gal-9.jpeg'
import gal10 from '../assets/img/gal-10.jpeg'
import gal11 from '../assets/img/gal-11.jpeg'
import gal12 from '../assets/img/gal-12.jpeg'
import gal13 from '../assets/img/gal-13.jpeg'
import gal14 from '../assets/img/gal-14.jpeg'
import bbc from '../assets/img/logo-bbc.png'
import bi from '../assets/img/logo-bi.png'
import forbes from '../assets/img/logo-forbes.png'
import tech from '../assets/img/logo-techcrunch.png'
import real1 from '../assets/img/realtor-1.jpeg'
import real2 from '../assets/img/realtor-2.jpeg'
import real3 from '../assets/img/realtor-3.jpeg'


const Home = () => {
	return (
		<>
			<div className="home">
				<div className="home-container">
					<div className="sidebar">
						<button className="nav-btn"></button>
					</div>
					<div className="main">
						<img src={main} alt="logo" className="main_logo" />
						<h3 className="heading-3">Your own home:</h3>
						<h1 className="heading-1">The ultimate personal freedom</h1>
						<button className="btn main_btn">View our properties</button>
						<div className="main_seenon-text">Seen on</div>
						<div className="main_seenon-logos">
							<img src={bbc} alt="bbc" />
							<img src={forbes} alt="forbes" />
							<img src={bi} alt="bi" />
							<img src={tech} alt="tech" />
						</div>
					</div>
					<div className="realtor">
						<h3 class="heading-3">Top 3 Realtors</h3>
						<div className="realtor_list">
							<img src={real1} alt="realtor-1" className="realtor_img"/>
							<div class="realtor_details">
								<h4 class="heading-4">Erik Feinman</h4>
								<p class="realtor_sold">245 houses sold</p>
							</div>
							<img src={real2} alt="realtor-2" className="realtor_img"/>
							<div class="realtor_details">
								<h4 class="heading-4">Erik Feinman</h4>
								<p class="realtor_sold">245 houses sold</p>
							</div>
							<img src={real3} alt="realtor-3" className="realtor_img"/>
							<div class="realtor_details">
								<h4 class="heading-4">Erik Feinman</h4>
								<p class="realtor_sold">245 houses sold</p>
							</div>
						</div>
					</div>
					<div className="feature">
						<div className="feature-detail">
							<svg>
								<use xlinkHref={`${logo}#icon-global`}></use>
							</svg>
							<h4>World's best luxury homes</h4>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Tenetur distinctio necessitatibus pariatur voluptatibus.
							</p>
						</div>
						<div className="feature-detail">
							<svg>
								<use xlinkHref={`${logo}#icon-trophy`}></use>
							</svg>
							<h4>Only the best properties</h4>
							<p>
								Voluptatum mollitia quae. Vero ipsum sapiente molestias
								accusamus rerum sed a eligendi aut quia
							</p>
						</div>
						<div className="feature-detail">
							<svg>
								<use xlinkHref={`${logo}#icon-map-pin`}></use>
							</svg>
							<h4>All homes in in top locations</h4>
							<p>
								Tenetur distinctio necessitatibus pariatur voluptatibus quidem
								consequatur harum.
							</p>
						</div>
						<div className="feature-detail">
							<svg>
								<use xlinkHref={`${logo}#icon-key`}></use>
							</svg>
							<h4>New home in one week</h4>
							<p>
								Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum
								dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
						<div className="feature-detail">
							<svg>
								<use xlinkHref={`${logo}#icon-presentation`}></use>
							</svg>
							<h4>Top 1% realtors</h4>
							<p>
								Quidem consequatur harum, voluptatum mollitia quae. Tenetur
								distinctio necessitatibus pariatur voluptatibus.
							</p>
						</div>
						<div className="feature-detail">
							<svg>
								<use xlinkHref={`${logo}#icon-lock`}></use>
							</svg>
							<h4>Secure payments on nexter</h4>
							<p>
								Pariatur voluptatibus quidem consequatur harum, voluptatum
								mollitia quae.
							</p>
						</div>
					</div>
					<div className="buyer-img">
						<img src={story} alt="story-img" className="story-main" />

						<img src={story1} alt="story-img" className="story-sub" />
					</div>
					<div className="buyer">
						<h3 className="buyer-heading">Happy Customers</h3>
						<h2 className="buyer-sub">
							&ldquo;The best decision
							<br /> of our lives&rdquo;
						</h2>
						<p className="buyer-text">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
							distinctio necessitatibus pariatur voluptatibus. Quidem
							consequatur harum volupta!
						</p>
						<button class="btn">Find your own home</button>
					</div>

					<div className="cards">
						<div class="card">
							<img src={house1} alt="House 1" class="card_img" />
							<svg class="card_like">
								<use xlinkHref={`${logo}#icon-heart-full`}></use>
							</svg>
							<h5 class="card_name">Beautiful Familiy House</h5>
							<div class="card_location">
								<svg>
									<use xlinkHref={`${logo}#icon-map-pin`}></use>
								</svg>
								<p>USA</p>
							</div>
							<div class="card_rooms">
								<svg>
									<use xlinkHref={`${logo}#icon-profile-male`}></use>
								</svg>
								<p>5 rooms</p>
							</div>
							<div class="card_area">
								<svg>
									<use xlinkHref={`${logo}#icon-expand`}></use>
								</svg>
								<p>
									325 m<sup>2</sup>
								</p>
							</div>
							<div class="card_price">
								<svg>
									<use xlinkHref={`${logo}#icon-key`}></use>
								</svg>
								<p>$1,200,000</p>
							</div>
							<button class="btn card_btn">Contact realtor</button>
						</div>

						<div class="card">
							<img src={house2} alt="House 1" class="card_img" />
							<svg class="card_like">
								<use xlinkHref={`${logo}#icon-heart-full`}></use>
							</svg>
							<h5 class="card_name">Beautiful Familiy House</h5>
							<div class="card_location">
								<svg>
									<use xlinkHref={`${logo}#icon-map-pin`}></use>
								</svg>
								<p>USA</p>
							</div>
							<div class="card_rooms">
								<svg>
									<use xlinkHref={`${logo}#icon-profile-male`}></use>
								</svg>
								<p>5 rooms</p>
							</div>
							<div class="card_area">
								<svg>
									<use xlinkHref={`${logo}#icon-expand`}></use>
								</svg>
								<p>
									325 m<sup>2</sup>
								</p>
							</div>
							<div class="card_price">
								<svg>
									<use xlinkHref={`${logo}#icon-key`}></use>
								</svg>
								<p>$1,200,000</p>
							</div>
							<button class="btn card_btn">Contact realtor</button>
						</div>

						<div class="card">
							<img src={house3} alt="House 1" class="card_img" />
							<svg class="card_like">
								<use xlinkHref={`${logo}#icon-heart-full`}></use>
							</svg>
							<h5 class="card_name">Beautiful Familiy House</h5>
							<div class="card_location">
								<svg>
									<use xlinkHref={`${logo}#icon-map-pin`}></use>
								</svg>
								<p>USA</p>
							</div>
							<div class="card_rooms">
								<svg>
									<use xlinkHref={`${logo}#icon-profile-male`}></use>
								</svg>
								<p>5 rooms</p>
							</div>
							<div class="card_area">
								<svg>
									<use xlinkHref={`${logo}#icon-expand`}></use>
								</svg>
								<p>
									325 m<sup>2</sup>
								</p>
							</div>
							<div class="card_price">
								<svg>
									<use xlinkHref={`${logo}#icon-key`}></use>
								</svg>
								<p>$1,200,000</p>
							</div>
							<button class="btn card_btn">Contact realtor</button>
						</div>

						<div class="card">
							<img src={house4} alt="House 1" class="card_img" />
							<svg class="card_like">
								<use xlinkHref={`${logo}#icon-heart-full`}></use>
							</svg>
							<h5 class="card_name">Beautiful Familiy House</h5>
							<div class="card_location">
								<svg>
									<use xlinkHref={`${logo}#icon-map-pin`}></use>
								</svg>
								<p>USA</p>
							</div>
							<div class="card_rooms">
								<svg>
									<use xlinkHref={`${logo}#icon-profile-male`}></use>
								</svg>
								<p>5 rooms</p>
							</div>
							<div class="card_area">
								<svg>
									<use xlinkHref={`${logo}#icon-expand`}></use>
								</svg>
								<p>
									325 m<sup>2</sup>
								</p>
							</div>
							<div class="card_price">
								<svg>
									<use xlinkHref={`${logo}#icon-key`}></use>
								</svg>
								<p>$1,200,000</p>
							</div>
							<button class="btn card_btn">Contact realtor</button>
						</div>

						<div class="card">
							<img src={house5} alt="House 1" class="card_img" />
							<svg class="card_like">
								<use xlinkHref={`${logo}#icon-heart-full`}></use>
							</svg>
							<h5 class="card_name">Beautiful Familiy House</h5>
							<div class="card_location">
								<svg>
									<use xlinkHref={`${logo}#icon-map-pin`}></use>
								</svg>
								<p>USA</p>
							</div>
							<div class="card_rooms">
								<svg>
									<use xlinkHref={`${logo}#icon-profile-male`}></use>
								</svg>
								<p>5 rooms</p>
							</div>
							<div class="card_area">
								<svg>
									<use xlinkHref={`${logo}#icon-expand`}></use>
								</svg>
								<p>
									325 m<sup>2</sup>
								</p>
							</div>
							<div class="card_price">
								<svg>
									<use xlinkHref={`${logo}#icon-key`}></use>
								</svg>
								<p>$1,200,000</p>
							</div>
							<button class="btn card_btn">Contact realtor</button>
						</div>

						<div class="card">
							<img src={house6} alt="House 1" class="card_img" />
							<svg class="card_like">
								<use xlinkHref={`${logo}#icon-heart-full`}></use>
							</svg>
							<h5 class="card_name">Beautiful Familiy House</h5>
							<div class="card_location">
								<svg>
									<use xlinkHref={`${logo}#icon-map-pin`}></use>
								</svg>
								<p>USA</p>
							</div>
							<div class="card_rooms">
								<svg>
									<use xlinkHref={`${logo}#icon-profile-male`}></use>
								</svg>
								<p>5 rooms</p>
							</div>
							<div class="card_area">
								<svg>
									<use xlinkHref={`${logo}#icon-expand`}></use>
								</svg>
								<p>
									325 m<sup>2</sup>
								</p>
							</div>
							<div class="card_price">
								<svg>
									<use xlinkHref={`${logo}#icon-key`}></use>
								</svg>
								<p>$1,200,000</p>
							</div>
							<button class="btn card_btn">Contact realtor</button>
						</div>
					</div>
					<div className="gallery">
						<img src={gal1} alt="gal" className="gallery-1 img" />
						<img src={gal2} alt="gal" className="gallery-2 img" />
						<img src={gal3} alt="gal" className="gallery-3 img" />
						<img src={gal4} alt="gal" className="gallery-4 img" />
						<img src={gal5} alt="gal" className="gallery-5 img" />
						<img src={gal6} alt="gal" className="gallery-6 img" />
						<img src={gal7} alt="gal" className="gallery-7 img" />
						<img src={gal8} alt="gal" className="gallery-8 img" />
						<img src={gal9} alt="gal" className="gallery-9 img" />
						<img src={gal10} alt="gal" className="gallery-10 img" />
						<img src={gal11} alt="gal" className="gallery-11 img" />
						<img src={gal12} alt="gal" className="gallery-12 img" />
						<img src={gal13} alt="gal" className="gallery-13 img" />
						<img src={gal14} alt="gal" className="gallery-14 img" />
					</div>
					<div className="footer">
						<ul class="nav">
							<li class="nav_item">
								<a href="#" class="nav_link">
									Find your dream home
								</a>
							</li>
							<li class="nav_item">
								<a href="#" class="nav_link">
									Request proposal
								</a>
							</li>
							<li class="nav_item">
								<a href="#" class="nav_link">
									Download home planner
								</a>
							</li>
							<li class="nav_item">
								<a href="#" class="nav_link">
									Contact us
								</a>
							</li>
							<li class="nav_item">
								<a href="#" class="nav_link">
									Submit your property
								</a>
							</li>
							<li class="nav_item">
								<a href="#" class="nav_link">
									Come work with us!
								</a>
							</li>
						</ul>
						<p class="copyright">
							&copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this
							project for your own purposes. This does NOT apply if you plan to
							produce your own course or tutorials based on this project.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
