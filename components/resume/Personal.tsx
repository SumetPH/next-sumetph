import Image from "next/image";
import Profile from "~/assets/img/profile.png";
import Card from "./_Card";

const Personal = () => {
  return (
    <Card title="Personal">
      <div className="flex justify-center">
        <Image
          className="h-32 w-32 rounded-full mx-auto"
          src={Profile.src}
          alt=""
          width={130}
          height={130}
        />
      </div>
      <h2 className="font-bold text-2xl">Personal</h2>
      <p>
        Name : Sumet Phongphila
        <br />
        Birthday: 11 February 1997
        <br />
        Nationality : Thai
      </p>
    </Card>
  );
};

export default Personal;
