import "./App.css";
import Logo from "./assets/assets/img/gallery/logo.png";
import header1 from "./assets/assets/img/illustrations/bg.png";
import header2 from "./assets/assets/img/illustrations/hero-header.png";
import Farmer from "./man-farmer-dark-skin-tone-svgrepo-com.svg";
import Growth from "./growth-svgrepo-com.svg";
import Planting from "./growth-money-svgrepo-com.svg";
import Shortterm from "./assets/assets/img/gallery/short-terms.png";
import Fullyfunded from "./assets/assets/img/gallery/fully-funded.png";
import Progress from "./progress.png";
import Background from "./assets/assets/img/illustrations/how-it-works.png";
import Qoutes from "./assets/assets/img/illustrations/testimonial-bg.png";
import User1 from "./assets/assets/img/gallery/user-1.png";
import User2 from "./assets/assets/img/gallery/user-2.png";
import User3 from "./assets/assets/img/gallery/user-3.png";
import { FaRegUser } from "react-icons/fa";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <div className="left">
          <img className="logo" src={Logo} alt="" />
          <ul className="ul">
            <li>
              <a href="./App.jsx">Home</a>
            </li>
            <li>
              <a href="#Opportunites">Opportunities</a>
            </li>
            <li>
              <a href="#Testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#Invest">Invest</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <h1>ngwije.co.in</h1>
          <button className="signup-btn">Sign up</button>
        </div>
      </nav>

      <div className="invest">
        <img className="img1" src={header1} alt="" />
        <h1>
          A new way to Invest <br /> in Agriculture
        </h1>
        <p>
          Zou provides farmers, ranchers, private foresters, and <br />{" "}
          agricultural producers with online self service applications and{" "}
          <br /> educational materials
        </p>

        <button className="header-btn">Invest Now</button>

        <img className="img2" src={header2} alt="" />
      </div>

      <section id="Opportunites">
        <div className="opportunities">
          <div className="top">
            <h1>New Opportunities</h1>
            <p>
              We are the first and the only crowdfunding platform enabling you
              to help finance our farmers.
            </p>
          </div>
          <div className="below">
            <div className="box1">
              <img className="svg" src={Farmer} alt="Farmer Icon" />
              <h1>Connect with our farmers</h1>
              <p>
                Nemo enim ipsum voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequntur magni dolores eos qui ratione
              </p>
            </div>
            <br />
            <br />
            <div className="box1">
              <img className="svg" src={Growth} alt="Farmer Icon" />
              <h1>Grow your business</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                nihil porro amet officia. Odio, debitis quod.
              </p>
            </div>
            <br />
            <br />
            <div className="box1">
              <img className="svg" src={Planting} alt="Farmer Icon" />
              <h1>Social impact investiment</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                porro dolorum optio aspernatur odit ut laudantium deserunt
                perspiciatis.
              </p>
            </div>
          </div>
        </div>

        <div className="investiment">
          <div className="above">
            <h1>Invest On your convinience</h1>
            <p>
              Autem vel eum iure reprehenderit qui in ea voluptate velit esse
              quam nihil molestiae consequateur, ver illum qui dorem eum fugiat
              quo voluptas nulla
            </p>
          </div>
          <div className="bottom">
            <div className="image1">
              <p className="p1">NEW FARM LOOK</p>
              <h1 className="h1">
                Short terms <br /> Investiments
              </h1>
              <p className="p2">
                Invest in farms that will be ready for <br /> harvest in 3-18
                farms
              </p>
              <button className="btn1">Browse Farm</button>
              <img className="pic1" src={Shortterm} alt="" />
            </div>
            <div className="image1">
              <p className="p3">FULL FUNDED</p>
              <h1 className="h2">
                Long terms <br /> Investiments
              </h1>
              <p className="p4">
                Consider farms that have long term investiment programs
              </p>
              <button className="btn2">Learn More</button>
              <img className="pic1" src={Fullyfunded} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="howitworks">
        <center>
          <h1 className="heading1">How it works</h1>
          <p className="para1">
            Take your picture in the supply chain and participate in
            agribusiness <br /> projects that are backed up only by Zou, but
            also by the best land, family <br /> heritage, innovation and
            overall superior expertise
          </p>
          <img className="progress-img" src={Progress} alt="" />
        </center>
        <h1 className="heading2">
          Select from your farmshare and <br /> complete reservation from <br />{" "}
          here
        </h1>
        <p className="para2">
          Et harum quidem rerum facilis est expedita <br /> distinctio. Nam
          libero tempore, cum soluta nobis est <br /> eligendi optio comque
          nihil impedit quo minus id quod <br /> maxime placeat facere
        </p>
        <img className="bg-img" src={Background} alt="" />
      </div>

      <section id="Testimonial">
        <div className="otherinvestors">
          <div className="heading">
            <h1 className="head">
              What investors like you are <br /> saying about Zou{" "}
            </h1>
            <img className="quot-img" src={Qoutes} alt="" />
          </div>
          <div className="users">
            <div className="user1">
              <img src={User1} alt="" />
              <p className="par1">
                <strong>Karori Nelson</strong>
              </p>
              <p className="par2">Telecommunication engineer</p>
              <p className="par3">
                "Quis atem vel eum iure reprehenderit quia <br /> in eat
                voluptas velite esse quam nihi <br /> molestiae
              </p>
            </div>
            <div className="user2">
              <img src={User2} alt="" />
              <p className="par1">
                <strong>Kalisa Nelson</strong>
              </p>
              <p className="par2">Head of Agrogofund groups</p>
              <p className="par3">
                "Quis atem vel eum iure reprehenderit quia <br /> in eat
                voluptas velite esse quam nihi <br /> molestiae
              </p>
            </div>
            <div className="user3">
              <img src={User3} alt="" />
              <p className="par1">
                <strong>Ngwije Nelson</strong>
              </p>
              <p className="par2">Herbalist</p>
              <p className="par3">
                "Quis atem vel eum iure reprehenderit quia <br /> in eat
                voluptas velite esse quam nihi <br /> molestiae
              </p>
            </div>
            <div className="arrows">
              <span className="span1">&larr;</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="span2">&rarr;</span>
            </div>
          </div>
        </div>
      </section>

      <section id="Invest">
        <div className="future">
          <center>
            <h1>
              The future of <span>Farm investing</span> is Zou
            </h1>
            <br />
            <button className="invest-btn">Invest now</button>
          </center>
        </div>
      </section>

      <section id="Contact">
        <div className="contact">
          <div className="row1">
            <ul>
              <li>
                <strong>COMPANY</strong>
              </li>
              <li>About Us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="row2">
            <ul>
              <li>
                <strong>INVEST</strong>
              </li>
              <li>Features</li>
              <li>How it works</li>
              <li>Pricing</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="row3">
            <ul>
              <li>
                <strong>LEGAL</strong>
              </li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="row4">
            <h2>Blog Zou</h2>
            <p>write email to usinfo@zoufarm.com</p>
            <button>
              <span>
                <FaRegUser />
              </span>
              &nbsp;&nbsp;&nbsp;Sign in
            </button>
          </div>
        </div>
      </section>

      <div className="line"></div>

      <div className="footer">
        <img src={Logo} alt="" />
        <p>Copyright All rights reserved &copy; HUMURA PROJECTS 2024</p>
      </div>
    </>
  );
}

export default App;
