import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  rating,
  price,
  description,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemTobasket = () => {
    const product = {
      id,
      image,
      title,
      price,
      description,
      hasPrime,
      rating,
    };
    dispatch(addToBasket(product));
  };
  const removeItemfromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div
      style={{ display: "grid", gridColumn: 5 }}
      className="grid grid-cols-5"
    >
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-auto my-3">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((i) => (
              <StarIcon id={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>${price}
        .00
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="ad"
              loading="lazy"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex  flex-col my-2 space-y-3  justify-self-end">
        <button onClick={addItemTobasket} className="button ">
          Add To Basket
        </button>
        <button onClick={removeItemfromBasket} className="button my-2">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
