const ImagesFromFolder = (r) => {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
};

export default ImagesFromFolder;