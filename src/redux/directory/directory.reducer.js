const INITIAL_STATE = {
    dirSections: [
        {
            title: "HATS",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            layoutLarge: false,
            linkUrl: "hats"
        },
        {
            title: "JACKETS",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            layoutLarge: false,
            linkUrl: "jackets"
        },
        {
            title: "SNEAKERS",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            layoutLarge: false,
            linkUrl: "sneakers"
        },
        {
            title: "MEN",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            layoutLarge: true,
            linkUrl: "men"
        },
        {
            title: "WOMEN",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            layoutLarge: true,
            linkUrl: "women"
        }
    ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default directoryReducer;
