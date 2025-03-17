import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="container mx-auto p-3 grid gap-3 my-3">
      <Link to="/" className="block">
        <img
          className="w-full"
          src="https://images.boutiqaat.com/opticalshrink/v1/image/Top_Big_Ad__bede261d_743a_4c84_bb39_b88fed55243c.webp?resource=page2&type=slider"
          alt="Offer 1"
        />
      </Link>

      <div className="grid grid-cols-2 gap-3">
        <Link to="/" className="block">
          <img
            className="w-full"
            src="https://images.boutiqaat.com/opticalshrink/v1/image/Long_Ad___New_5f56d8eb_99de_46d1_9fa0_28061efcede5.webp?resource=page2&type=advertisement"
            alt="Offer 2"
          />
        </Link>
        <Link to="/" className="block">
          <img
            className="w-full"
            src="https://images.boutiqaat.com/opticalshrink/v1/image/Long_Ad___New_71d0bd54_2983_4bd3_a84a_7667e7830e02.webp?resource=page2&type=advertisement"
            alt="Offer 3"
          />
        </Link>
      </div>

      <Link to="/" className="block">
        <img
          className="w-full"
          src="https://images.boutiqaat.com/opticalshrink/v1/image/New___Big_Ad_1_513dcb94_b288_4085_aa7c_41cdfd5bd007.webp?resource=page2&type=slider"
          alt="Offer 4"
        />
      </Link>
    </div>
  );
};

export default Offers;
