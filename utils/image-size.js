export const getWidthAndHeight = (image) => {
  return {
    width: image.split("/")[5].split("x")[0],
    height: image.split("/")[5].split("x")[1],
  };
};
