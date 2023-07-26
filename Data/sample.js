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
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Jane Danny",
        postImage: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
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

const Data = [
    {
        filterType: "Food",
        filterCategoryCategory: "Indian",
        filterName: "Chicken Tikka Masala",
        webLinkFrom: "facebook",
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
        filterType: "Food",
        filterCategoryCategory: "Indian",
        filterName: "Naan",
        webLinkFrom: "twitter",
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
        filterType: "Food",
        filterCategoryCategory: "Indian",
        filterName: "Samosa",
        webLinkFrom: "twitter",
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
        filterType: "Music",
        filterCategoryCategory: "Electronic",
        filterName: "Calvin Harris",
        webLinkFrom: "twitter",
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
        filterType: "Movies",
        filterCategoryCategory: "Actions",
        filterName: "Expendebles",
        webLinkFrom: "twitter",
        createdAt: "10 mins",
        postersImage: "https://my-profile-murex-five.vercel.app/img/profile1.8e973a6d.jpeg",
        creatorName: "Daniel Danny",
        postImage: "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=800",
        socialMediaIcon: "https://example.com/facebook-icon.png",
        postBody:
            "This is the first post. Hello, world! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend sapien a justo facilisis, nec dignissim libero malesuada. Cras elementum, elit at suscipit luctus, urna magna viverra odio, vitae luctus metus orci in enim. Proin hendrerit purus ut tellus venenatis, et lobortis risus porttitor. Duis nec enim eleifend, vulputate ligula eu, vulputate neque. Aenean a ligula eget urna volutpat tincidunt. Sed vitae ipsum eget odio cursus venenatis. Nulla id arcu at turpis sagittis pellentesque. Aliquam pharetra turpis et quam malesuada pharetra. Vivamus non facilisis quam, in commodo neque.",
        deleted: false,
        liked: 56,

    }
];



export default posts;
