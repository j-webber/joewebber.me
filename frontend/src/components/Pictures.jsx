import family from "../assets/family.jpg";
import joePebble from "../assets/joe-pebble.jpeg";
import lilyJoe from "../assets/lily-joe.jpeg";
import skiing from "../assets/skiing.jpeg";
import roo from "../assets/roo.jpeg";
import lilyJoeBig from "../assets/lily-joe-big.jpeg";
import joeLouWalter from "../assets/joe-lou-walter.jpg";

export default function Pictures() {
  return (
    <div className="columns-2 sm:columns-3 gap-4 mt-14">
      <img
        src={joeLouWalter}
        alt="Joe and Lou with Walter"
        className="max-w-full h-auto inline-block rounded-md shadow mb-4"
      />
      <img
        src={family}
        alt="Joe, Lily, and Lou"
        className="max-w-full h-auto inline-block rounded-md shadow mb-4"
      />
      <img
        src={joePebble}
        alt="Joe at Pebble Beach"
        className="md:hidden max-w-full h-auto inline-block rounded-md shadow"
      />
      <img
        src={lilyJoe}
        alt="Lily and Joe"
        className="hidden max-w-full h-auto md:inline-block rounded-md shadow mb-4"
      />
      <img
        src={lilyJoeBig}
        alt="Lily and Joe"
        className="md:hidden max-w-full h-auto inline-block rounded-md shadow mb-4"
      />
      <img
        src={joePebble}
        alt="Joe at Pebble Beach"
        className="hidden max-w-full h-auto md:inline-block rounded-md shadow mb-4"
      />
      <img
        src={roo}
        alt="The family dog Roo"
        className="max-w-full h-auto inline-block rounded-md shadow mb-4"
      />
      <img
        src={skiing}
        alt="Joe skiing"
        className="max-w-full h-auto inline-block rounded-md shadow mb-4"
      />
    </div>
  );
}
