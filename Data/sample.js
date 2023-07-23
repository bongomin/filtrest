const posts = [
    {
        createdAt: "10 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/facebook-icon.png",
        postBody:
            "This is the first post. Hello, world! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend sapien a justo facilisis, nec dignissim libero malesuada. Cras elementum, elit at suscipit luctus, urna magna viverra odio, vitae luctus metus orci in enim. Proin hendrerit purus ut tellus venenatis, et lobortis risus porttitor. Duis nec enim eleifend, vulputate ligula eu, vulputate neque. Aenean a ligula eget urna volutpat tincidunt. Sed vitae ipsum eget odio cursus venenatis. Nulla id arcu at turpis sagittis pellentesque. Aliquam pharetra turpis et quam malesuada pharetra. Vivamus non facilisis quam, in commodo neque.",
        deleted: false,
        liked: 56,
    },
    {
        createdAt: "40 mins",
        postersImage: "src/assets/profile1.jpeg",
        creatorName: "Jane Danny",
        postImage: "src/assets/image1.jpg",
        socialMediaIcon: "https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&w=800",
        postBody:
            "Hey, here's my second post. Have a great day! Duis vel congue odio. Etiam consectetur blandit nunc, sit amet fermentum augue malesuada in. Nunc fringilla massa nec neque faucibus, ut varius massa cursus. Pellentesque congue dapibus erat, vel pellentesque nisi facilisis ac. In hac habitasse platea dictumst. Donec pellentesque, justo et venenatis blandit, quam mi semper sapien, a gravida purus neque nec enim. Maecenas at dignissim enim. In hac habitasse platea dictumst.",
        deleted: false,
        liked: 102,
    },
    {
        createdAt: "60 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Bob Johnson",
        postImage: "https://images.pexels.com/photos/4087609/pexels-photo-4087609.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/instagram-icon.png",
        postBody:
            "This is the third post. Feeling blessed! Curabitur venenatis aliquet fermentum. Pellentesque convallis sem ac dui varius, vel aliquam sapien dignissim. Etiam nec tristique arcu. Pellentesque eu massa ac eros bibendum venenatis ac nec elit. Duis tincidunt ex eu nulla scelerisque tincidunt. Integer id sagittis nisl, vitae lacinia eros. Sed vitae interdum nulla. Nullam nec enim sed purus interdum aliquet. Aenean id hendrerit arcu.",
        deleted: true,
        liked: 28,
    },
    // Add more posts as needed...
];

const Data = [{
    items: {
        Food: [
            {
                createdAt: "60 mins",
                category: "streetFood",
                postersImage: "https://example.com/profile3.jpeg",
                creatorName: "Bob Johnson",
                postImage: "https://example.com/image2.jpg",
                socialMediaIcon: "https://example.com/instagram-icon.png",
                postBody:
                    "This is the third post. Feeling blessed! Curabitur venenatis aliquet fermentum. Pellentesque convallis sem ac dui varius, vel aliquam sapien dignissim. Etiam nec tristique arcu. Pellentesque eu massa ac eros bibendum venenatis ac nec elit. Duis tincidunt ex eu nulla scelerisque tincidunt. Integer id sagittis nisl, vitae lacinia eros. Sed vitae interdum nulla. Nullam nec enim sed purus interdum aliquet. Aenean id hendrerit arcu.",
                deleted: true,
                liked: 28,
            },
            {
                createdAt: "40 mins",
                category: "snacks",
                postersImage: "https://example.com/profile2.jpeg",
                creatorName: "Alice Smith",
                postImage: "https://example.com/image1.jpg",
                socialMediaIcon: "https://example.com/twitter-icon.png",
                postBody:
                    "Yummy snacks for the evening! Cras eget velit ac est ornare condimentum. Sed gravida risus id tempus pellentesque. Phasellus mattis nulla et nunc efficitur, vel pharetra purus feugiat.",
                deleted: false,
                liked: 14,
            },
            // Add more dummy data for the Food category (if available)
        ],
        Music: [
            {
                genre: "Pop",
                artist: "Adele",
                song: "Someone Like You",
                releaseYear: 2011,
                albumCover: "https://example.com/adele-album-cover.jpg",
                musicVideo: "https://example.com/adele-music-video.mp4",
            },
            {
                genre: "Electronic",
                artist: "Calvin Harris",
                song: "Summer",
                releaseYear: 2014,
                albumCover: "https://example.com/calvin-harris-album-cover.jpg",
                musicVideo: "https://example.com/calvin-harris-music-video.mp4",
            },
            // Add more dummy data for the Music category (if available)
        ],
        Movies: [
            {
                title: "Inception",
                director: "Christopher Nolan",
                year: 2010,
                genre: "Science Fiction",
                poster: "https://example.com/inception-poster.jpg",
                trailer: "https://example.com/inception-trailer.mp4",
            },
            {
                title: "The Shawshank Redemption",
                director: "Frank Darabont",
                year: 1994,
                genre: "Drama",
                poster: "https://example.com/shawshank-redemption-poster.jpg",
                trailer: "https://example.com/shawshank-redemption-trailer.mp4",
            },
            // Add more dummy data for the Movies category (if available)
        ],
        News: [
            {
                title: "COVID-19 Vaccine Update",
                description: "New vaccine breakthrough reported in combating COVID-19.",
                source: "CNN",
                date: "2023-07-22",
            },
            {
                title: "Space Exploration",
                description: "NASA announces plans for new space missions.",
                source: "BBC News",
                date: "2023-07-22",
            },
            {
                title: "Tech Giant's Earnings Report",
                description: "Apple Inc. reports record-breaking revenue for Q2 2023.",
                source: "Reuters",
                date: "2023-07-22",
            },
            {
                title: "Climate Change Conference",
                description: "World leaders gather to discuss climate change solutions.",
                source: "The Guardian",
                date: "2023-07-22",
            },
            {
                title: "Sports Update",
                description: "Football championship finals to be held in the coming week.",
                source: "ESPN",
                date: "2023-07-22",
            },
            // Add more dummy data for the News category (if available)
        ],
    },
}];



export default posts;
