import "../../../src/App.css";
import Slogan from "../../components/Slogan/Slogan";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import icon_chat from "../../assets/icon-chat.png";
import icon_money from "../../assets/icon-money.png";
import icon_security from "../../assets/icon-security.png";

/**
 * Displays main page
 * @returns {JSX}
 */

function Home() {
  const chatTitle = "You are our #1 priority";
  const moneyTitle = "More savings means higher rates";
  const securityTitle = "Security you can trust";
  const chatContent = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.";
  const moneyContent = "The more you save with us, the higher your interest rate will be!";
  const securityContent = "We use top of the line encryption to make sure your data and money is always safe.";

  return (
    <>
      <Header></Header>
      <main>
        <Slogan />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem icon={icon_chat} title={chatTitle} content={chatContent}></FeatureItem>
          <FeatureItem icon={icon_money} title={moneyTitle} content={moneyContent}></FeatureItem>
          <FeatureItem icon={icon_security} title={securityTitle} content={securityContent}></FeatureItem>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
