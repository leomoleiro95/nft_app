import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
import React from "react";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store for buying, selling & trading NFTs"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 10+ million people using Lmoleiro NFT Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a smooth UI of Lmoleiro NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Lmoleiro NFT is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with hard work, sweat (some tears) and love: by <span className="bold">Leonardo Moleiro</span>
        </p>
      </div>
    </>
  );
};

export default App;
