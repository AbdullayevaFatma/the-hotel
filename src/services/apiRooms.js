import supabase, { supabaseUrl } from "./supabase";

export async function getRooms() {
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }
  return data;
}

export async function createEditRoom(newRoom, id) {
  const hasImagePath = newRoom.image?.startsWith?.(supabaseUrl);
  const imageName = encodeURIComponent(newRoom.image.name);
  const imagePath = hasImagePath
    ? newRoom.image
    : `${supabaseUrl}/storage/v1/object/public/room-images/${imageName}`;

  const safeId = typeof id === "number" || typeof id === "string" ? id : null;

  let query = supabase.from("rooms");

  if (!safeId) {
    query = query.insert([{ ...newRoom, image: imagePath }]);
  }

  if (safeId)
    query = query.update({ ...newRoom, image: imagePath }).eq("id", safeId);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Room could not be created");
  }

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("room-images")
    .upload(imageName, newRoom.image, { upsert: true });

  if (storageError) {
    await supabase.from("rooms").delete().eq("id", data.id);
    throw new Error(
      "Room image could not be uploaded and the room was not created",
    );
  }
  return data;
}

export async function deleteRoom(id) {
  const { data, error } = await supabase.from("rooms").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Room could not be deleted");
  }

  return data;
}
