import './home.scss';

import Slider from '../../../layouts/user/home/Slider';
import NewPerfumer from '../../../layouts/user/home/NewPerfumer';
import MenPerfumer from '../../../layouts/user/home/MenPerfumer';
import Unisex from '../../../layouts/user/home/Unisex';
import Payment from '../../../layouts/user/home/Payment';
import HomeOffer from '../../../layouts/user/home/HomeOffer';
import CategoryHome from '../../../layouts/user/home/CategoryHome';
import News from '../../../layouts/user/home/News';

export default function HomeUser() {
  return (
    <>
      {/* <!-- Slider --> */}
      <Slider />
      {/* <!-- EndSlider --> */}

      {/* <!-- payment  --> */}
      <Payment />
      {/* <!-- end payment --> */}

      {/* <!-- NewPerfumer --> */}
      <NewPerfumer />
      {/* <!-- end NewPerfumer --> */}
      {/* offers */}
      <HomeOffer />
      {/* end offers */}
      {/* Product news */}
      <CategoryHome />
      {/* End product news */}

      {/* menPerfumer */}
      <MenPerfumer />
      {/* end menPerfumer */}

      {/* unisex */}
      <Unisex />
      {/* end unisex */}

      {/* news */}
      <News />
      {/* end news */}
    </>
  );
}
