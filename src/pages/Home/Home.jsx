import "../../../src/App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import icon_chat from "../../assets/icon-chat.png";
import icon_money from "../../assets/icon-money.png";
import icon_security from "../../assets/icon-security.png";

function Home() {
  return (
    <body>
      <Header></Header>
      <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">High interest rates.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <div class="feature-item">
            <img src={icon_chat} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">You are our #1 priority</h3>
            <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
          </div>
          <div class="feature-item">
            <img src={icon_money} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">More savings means higher rates</h3>
            <p>The more you save with us, the higher your interest rate will be!</p>
          </div>
          <div class="feature-item">
            <img src={icon_security} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">Security you can trust</h3>
            <p>We use top of the line encryption to make sure your data and money is always safe.</p>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </body>
  );
}

export default Home;
