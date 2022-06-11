const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const data1 = await promiseTheaterIXX();
    const data2 = await promiseTheaterVGC();
    const arrFilm = (await data1).concat(await data2);
    return arrFilm.filter((Element) => Element.hasil === emosi).length;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
