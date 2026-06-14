// shirt price_1TblytCp2AIg2GkuyYEVKHZ3
// sticker price_1Tc3fbCp2AIg2GkuidTs3EfB
const merchArray = [
  {
    // switch back to live when ready
    id: "price_1TblytCp2AIg2GkuyYEVKHZ3",
    name: "short-sleeve shirt",
    img: "/media/shirt-nobackground.png",
    price: 20,
  },
  {
    // switch back to live id when ready
    id: "price_1Tc3fbCp2AIg2GkuidTs3EfB",
    name: "sticker",
    img: "/media/sticker-nobackground.png",
    price: 2,
  },
];
// helper function to retrieve all of an item's data based on the id of item in shopping cart
// id being passed here from cartProduct
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
