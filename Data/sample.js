const data = [
    {
        filterType: "Food",
        filterCategory: "Indian",
        filterName: "Chicken Tikka Masala",
        webLinkFrom: "facebook",
        createdAt: "10 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/facebook-icon.png",
        postBody: "Craving some authentic Indian flavors? Try my lip-smacking recipe for Chicken Tikka Masala! #IndianCuisine #Foodie",
        deleted: false,
        liked: 56,
    },
    {
        filterType: "Food",
        filterCategory: "Indian",
        filterName: "Naan",
        webLinkFrom: "twitter",
        createdAt: "10 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/1755785/pexels-photo-1755785.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/facebook-icon.png",
        postBody: "Who doesn't love the heavenly taste of freshly baked Naan bread? #NaanBread #IndianFood",
        deleted: false,
        liked: 56,
    },
    {
        filterType: "Food",
        filterCategory: "Indian",
        filterName: "Samosa",
        webLinkFrom: "twitter",
        createdAt: "10 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/14883752/pexels-photo-14883752.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/facebook-icon.png",
        postBody: "Craving a delicious and crispy snack? Try my favorite Samosa recipe! #SamosaLove #IndianSnacks",
        deleted: false,
        liked: 56,
    },
    {
        filterType: "Music",
        filterCategory: "Electronic",
        filterName: "Calvin Harris",
        webLinkFrom: "twitter",
        createdAt: "10 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/3774606/pexels-photo-3774606.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/facebook-icon.png",
        postBody: "Let's get the party started with some electrifying beats by Calvin Harris! 🎧🎶 #CalvinHarris #ElectronicMusic #PartyVibes",
        deleted: false,
        liked: 56,
    },
    {
        filterType: "Movies",
        filterCategory: "Action",
        filterName: "Expendables",
        webLinkFrom: "twitter",
        createdAt: "10 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://dotcomstories.com/wp-content/uploads/2022/06/The-Expendables-4.jpg",
        socialMediaIcon: "https://example.com/facebook-icon.png",
        postBody: "Get ready for an adrenaline-pumping movie night with 'The Expendables' franchise! 🎬🔥 #TheExpendables #ActionMovies #MovieNight",
        deleted: false,
        liked: 56,
    },
    {
        filterType: "Travel",
        filterCategory: "Beaches",
        filterName: "Maldives",
        webLinkFrom: "instagram",
        createdAt: "15 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/4011385/pexels-photo-4011385.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/instagram-icon.png",
        postBody: "Dreaming of a tropical paradise? The Maldives is the ultimate destination for sun, sand, and sea! 🌴🏝️ #Maldives #BeachVacation",
        deleted: false,
        liked: 73,
    },
    {
        filterType: "Travel",
        filterCategory: "Mountains",
        filterName: "Swiss Alps",
        webLinkFrom: "instagram",
        createdAt: "20 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/3609119/pexels-photo-3609119.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/instagram-icon.png",
        postBody: "Embark on an unforgettable journey through the breathtaking Swiss Alps! ⛰️🇨🇭 #SwissAlps #MountainAdventure",
        deleted: false,
        liked: 68,
    },
    {
        filterType: "Travel",
        filterCategory: "Cities",
        filterName: "Tokyo",
        webLinkFrom: "instagram",
        createdAt: "25 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/7070141/pexels-photo-7070141.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/instagram-icon.png",
        postBody: "Discover the vibrant and futuristic city of Tokyo! 🏙️🗼 #Tokyo #CityExploration",
        deleted: false,
        liked: 91,
    },
    {
        filterType: "Books",
        filterCategory: "Fantasy",
        filterName: "Harry Potter",
        webLinkFrom: "facebook",
        createdAt: "30 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/7965850/pexels-photo-7965850.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/facebook-icon.png",
        postBody: "Step into the enchanting world of magic with the Harry Potter series! 🧙‍♂️🔮 #HarryPotter #FantasyBooks",
        deleted: false,
        liked: 82,
    },
    {
        filterType: "Sports",
        filterCategory: "Basketball",
        filterName: "NBA Finals",
        webLinkFrom: "twitter",
        createdAt: "35 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/1332237/pexels-photo-1332237.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/twitter-icon.png",
        postBody: "Get ready for the intense NBA Finals action! 🏀🏆 #NBAFinals #Basketball",
        deleted: false,
        liked: 64,
    },
    {
        filterType: "Sports",
        filterCategory: "Football",
        filterName: "Champions League",
        webLinkFrom: "twitter",
        createdAt: "40 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/twitter-icon.png",
        postBody: "The battle for Europe's top football club is on! ⚽🏆 Watch the epic Champions League matches unfold. #ChampionsLeague #Football",
        deleted: false,
        liked: 78,
    },
    {
        filterType: "Sports",
        filterCategory: "Rugby",
        filterName: "Six Nations",
        webLinkFrom: "twitter",
        createdAt: "45 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/264300/pexels-photo-264300.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/twitter-icon.png",
        postBody: "Experience the thrill of Six Nations rugby championship! 🏉🏆 Brace yourself for intense battles on the field. #SixNations #Rugby",
        deleted: false,
        liked: 53,
    },
    {
        filterType: "Sports",
        filterCategory: "Basketball",
        filterName: "Street Ball",
        webLinkFrom: "instagram",
        createdAt: "50 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/7236367/pexels-photo-7236367.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/instagram-icon.png",
        postBody: "Dribble, dunk, and dominate the streets with your best moves in street basketball! 🏀🏙️ #StreetBall #BasketballFun",
        deleted: false,
        liked: 67,
    },
    {
        filterType: "Sports",
        filterCategory: "Football",
        filterName: "Premier League",
        webLinkFrom: "instagram",
        createdAt: "55 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/17160688/pexels-photo-17160688/free-photo-of-emirates-stadium-in-london-england.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/instagram-icon.png",
        postBody: "Cheer for your favorite Premier League teams as they battle for football supremacy! ⚽🏴󠁧󠁢󠁥󠁮󠁧󠁿 #PremierLeague #FootballFever",
        deleted: false,
        liked: 72,
    },
];

export default data;
