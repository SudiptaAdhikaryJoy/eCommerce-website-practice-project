import { Footer } from "./common/Footer";
import { Header } from "./common/Header";

export const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <div>TheLayout</div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
