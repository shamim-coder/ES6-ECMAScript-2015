const NFTStore = {
    artPieces: [
        {
            pieceName: "Emo Flamingos",
            price: 30,
            ownerList: [
                {
                    name: "Fida Ernest",
                    userID: 23849,
                    purchaseDate: "09/13/2021",
                },
                {
                    name: "Eric Karger",
                    userID: 23510,
                    purchaseDate: "09/13/2021",
                },
            ],
        },
        {
            pieceName: "Where is my bit wallet",
            price: 100,
            ownerList: ["kamal", "jamal, pamal", "ramal"],
        },
    ],
    storeCredits: 1000,
};

// const { name, userID, purchaseDate } = NFTStore.artPieces[0].ownerList[0];
const users = NFTStore.artPieces[0].ownerList.map((owner) => {
    const { userID, name } = owner;
    return { userID, name };
});
console.log(users);
// const { pieceName, price, ownerList } = NFTStore.artPieces[1];

// console.log(name, userID, purchaseDate);
// console.log(pieceName, price, ownerList);
