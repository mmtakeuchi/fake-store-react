import electronics from "../../assets/electronics.jpg";
import jewelery from "../../assets/jewelery.jpg";
import mens from "../../assets/mens-clothing.jpg";
import womens from "../../assets/womens-clothing.jpg";

const images = [electronics, jewelery, mens, womens];

export const addCategoryImage = (categories) => {
  let slices = categories?.slice(1)?.map((category) => {
    let img = images.find((image) => {
      return (
        image.split("/")[3].split(".")[0].split("-")[0] ===
        category.title.toLowerCase().replace(/'/g, "").split(" ")[0]
      );
    });
    return { ...category, image: img };
  });

  return [categories[0], ...slices];
};
