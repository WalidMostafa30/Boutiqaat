import { Link } from "react-router-dom";

const OffersArray = [
  {
    id: 1,
    link: "/",
    widthFull: true,
    src: "https://images.boutiqaat.com/opticalshrink/v1/image/Top_Big_Ad__bede261d_743a_4c84_bb39_b88fed55243c.webp?resource=page2&type=slider",
  },
  {
    id: 2,
    link: "/",
    widthFull: false,
    src: "https://images.boutiqaat.com/opticalshrink/v1/image/Long_Ad___New_5f56d8eb_99de_46d1_9fa0_28061efcede5.webp?resource=page2&type=advertisement",
  },
  {
    id: 3,
    link: "/",
    widthFull: false,
    src: "https://images.boutiqaat.com/opticalshrink/v1/image/Long_Ad___New_71d0bd54_2983_4bd3_a84a_7667e7830e02.webp?resource=page2&type=advertisement",
  },
  {
    id: 4,
    link: "/",
    widthFull: true,
    src: "https://images.boutiqaat.com/opticalshrink/v1/image/New___Big_Ad_1_513dcb94_b288_4085_aa7c_41cdfd5bd007.webp?resource=page2&type=slider",
  },
];
const LandingOffers = () => {
  return (
    <section className="container mx-auto p-3 grid grid-cols-2 gap-2 md:gap-5 my-3">
      {OffersArray.map((offer, index) => (
        <Link
          key={index}
          to={offer.link}
          className={`${offer.widthFull ? "col-span-2" : "col-span-1"}`}
        >
          <img
            loading="lazy"
            className="w-full"
            src={offer.src}
            alt={`Offer ${offer.id}`}
          />
        </Link>
      ))}
    </section>
  );
};

export default LandingOffers;
