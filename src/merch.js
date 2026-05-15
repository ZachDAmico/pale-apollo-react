const merchArray = [
  {
    id: "1",
    name: "short-sleeve shirt",
    img: "https://placehold.co/300x300",
    price: 20,
  },
  {
    id: "2",
    name: "sticker",
    img: "https://placehold.co/300x300",
    price: 2,
  },
];
// helper function to retrieve all of an item's data based on the id of item in shopping cart
const getMerchData = (id) => {
  let merchData = merchArray.find((item) => item.id === id);

  // checking to make sure id matches item in database
  //   could also be merchData == undefined
  if (!merchData) {
    console.log(`Merch data does not exist for ${id}`);
    return undefined;
  }
  return merchData;
};
export { merchArray, getMerchData };
