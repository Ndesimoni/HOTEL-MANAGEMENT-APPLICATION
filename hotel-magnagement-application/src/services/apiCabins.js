import supabase from "./supabase";

// getting the data from supabase file in our app printing it to the console

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("cabins could not be found");
  }
  return data;
}
