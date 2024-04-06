import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import getCabinApi from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabinApi().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://cwmszxwmdowfvosijamv.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg?t=2024-04-04T15%3A43%3A03.836Z"
        alt="luxury-wood-cabin"
      />
    </Row>
  );
}

export default Cabins;
