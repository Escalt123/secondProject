import "./style.css";

import QualityImg from "./Quality.svg";
import AffordableImg from "./Affordable.svg";
import EasyBookingImg from "./EasyBooking.svg";
import CustomerSatisfactionImg from "./CustomerSatisfaction.svg";



const WhyChooseDrivoxeAboutPage = () => {



    return (
      <div className="WhyChooseDrivoxe-holder">
        <div className="WhyChooseDrivoxe-cont">
          <div className="WhyChooseDrivoxe-title">Why Choose Drivoxe?</div>

          <ul className="WhyChooseDrivoxe-descList">
            <li className="WhyChooseDrivoxe-descItem">
              <div className="WhyChooseDrivoxe-descItem-title">
                <img src={QualityImg} alt="QualityImg" />
                <div className="WhyChooseDrivoxe-descItem-title-text">
                  Quality & Variety
                </div>
              </div>

              <div className="WhyChooseDrivoxe-descItem-text">
                Discover our diverse range of meticulously maintained vehicles,
                ensuring you always drive in style. From sleek sedans to rugged
                SUVs, our fleet offers the perfect ride for every occasion. We
                meticulously maintain each vehicle to the highest standards,
                ensuring not just style but also performance and reliability on
                your journey.
              </div>
            </li>

            <li className="WhyChooseDrivoxe-descItem">
              <div className="WhyChooseDrivoxe-descItem-title">
                <img src={AffordableImg} alt="AffordableImg" />
                <div className="WhyChooseDrivoxe-descItem-title-text">
                  Affordable Rates
                </div>
              </div>

              <div className="WhyChooseDrivoxe-descItem-text">
                We believe that luxury travel should be accessible to all. We
                offer competitive prices without hidden fees, giving you the
                freedom to experience the comfort and style of our premium
                vehicles without breaking the bank. We're committed to providing
                affordable luxury for your travels.
              </div>
            </li>

            <li className="WhyChooseDrivoxe-descItem">
              <div className="WhyChooseDrivoxe-descItem-title">
                <img src={EasyBookingImg} alt="EasyBookingImg" />
                <div className="WhyChooseDrivoxe-descItem-title-text">
                  Easy Booking
                </div>
              </div>

              <div className="WhyChooseDrivoxe-descItem-text">
                Reserving your dream car is a breeze with Drivoxe. Our
                user-friendly online platform and mobile app make the booking
                process straightforward and efficient. In just a few clicks, you
                can secure your choice of vehicle and hit the road, ensuring a
                seamless and hassle-free experience from start to finish.
              </div>
            </li>

            <li className="WhyChooseDrivoxe-descItem">
              <div className="WhyChooseDrivoxe-descItem-title">
                <img
                  src={CustomerSatisfactionImg}
                  alt="CustomerSatisfactionImg"
                />
                <div className="WhyChooseDrivoxe-descItem-title-text">
                  Customer Satisfaction
                </div>
              </div>

              <div className="WhyChooseDrivoxe-descItem-text">
                Our loyal customers trust Drivoxe for the excellence of our
                service and the exquisite selection in our fleet. From the
                moment you book to the final mile of your journey, we are
                dedicated to providing top-notch service. We pride ourselves on
                our responsive customer support, available 24/7 to assist you.
                Your satisfaction is our ultimate reward.
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}
 
export default WhyChooseDrivoxeAboutPage;