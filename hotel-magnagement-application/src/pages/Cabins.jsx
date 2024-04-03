import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  // this iis for testing only
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://cwmszxwmdowfvosijamv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-04-03T15%3A32%3A19.494Z" />
    </Row>
  );
}

export default Cabins;
