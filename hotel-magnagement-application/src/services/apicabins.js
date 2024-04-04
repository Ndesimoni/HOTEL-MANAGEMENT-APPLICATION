import supabase from "./supabase";

async function getCabinApi() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error.message);
    throw new Error("there was and error with the api call");
  }

  return data;
}

export default getCabinApi;
