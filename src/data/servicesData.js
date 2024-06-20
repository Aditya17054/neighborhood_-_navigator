const servicesData = [
  {
    id: 1,
    name: "Aura The Restaurant & Banquet",
    category: "Restaurants",
    description:
      "Aura Restaurant and Banquet, located in Chandkheda Zundal, Ahmedabad, Welcome to Aura Restaurant and Banquet, where culinary excellence meets elegant ambiance. Indulge in a delightful array of dishes crafted with passion and precision. Our menu showcases a fusion of flavors to tantalize your taste buds. From intimate dinners to grand celebrations, our versatile banquet facilities cater to every occasion. Immerse yourself in luxury as our attentive staff cater to your every need. Experience the perfect blend of sophistication and comfort at Aura. Come join us and create unforgettable memories at Aura Restaurant and Banquet.",
    address:
      "Shop No. 101 to 108, First Floor, Aamrakunj Business Centre Opp AMC Water Tank, Satymev Hospital Road, Chandkheda - Zundal Rd, Ahmedabad, 382424",
    contact: "095741 10429",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNbvmSEXlTVlhAzTdbnBeTcV5epK6tb46eg&s",
  },
  {
    id: 2,
    name: "JAY AMBE FOOD CORNER",
    category: "Restaurants",
    description:
      "Has all you can eat · Has outdoor seating · Serves vegan dishes",
    address: "Green Aura Block-G, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "097264 46767",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 3,
    name: "Ghar Ka Khana",
    category: "Restaurants",
    description:
      "BEST HOME MADE AND HYGENIC THALI AVAILABLE .WE USE PURE OIL AND MINERAL WATER .TASTE GUARNTEED",
    address:
      "A803, PANCHAM PENTAGON, Vithhal marg, near aura restaurant, Chandkheda, Tragad, Ahmedabad, Gujarat 382424",
    contact: "088665 62760",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-ScXoC9jrEbbuAW5EsGPN8Pa28D545SLmg&s",
  },
  {
    id: 4,
    name: "US Pizza Chandkheda",
    category: "Restaurants",
    description:
      "An Outlet of US PIZZA serving Soup, Salads, Starters, Yummy Pizza and Mocktails at Chankheda area. Nice place for Birthday parties and Kitty Parties for a crowd up to 100Persons.",
    address:
      "Aamrakunj Business Centre, SHOP NO:110 -112, Tragad Rd, behind KB ROYAL PHOENIX, Chandkheda, Ahmedabad, Gujarat 382421",
    contact: "076001 25050",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWjIaBxPVEmDm0oYv0DUsjCCs7R9cI7VR_Q&s",
  },
  {
    id: 5,
    name: "Healthy Bites",
    category: "Restaurants",
    description: "Serves vegan dishes",
    address:
      "Shop No 2 Sepal Elegant 2, Satyamev Road, near Akshay Resedency, Ahmedabad, Gujarat 382424",
    contact: "063525 77823",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 6,
    name: "Faasos Chandkheda",
    category: "Restaurants",
    description:
      "Wrap yourself with love ! Choose from an exciting range of Fab Signature and classic wraps, rice bowls, desserts and beverages!! Go ahead, unwrap goodness!.",
    address:
      "Shop No. 38, 1st Floor, KB ROYAL PHOENIX, D Block, Zundal - Tragad Rd, near PANCHSHLOK RESIDENCY, behind Satyamev Hospital, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "077000 20020",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLjFJVceJbSwMCAqyT90ZbvM3U8QvQIsgZw&s",
  },
  {
    id: 7,
    name: "ELITE RESTAURANT & BANQUET",
    category: "Restaurants",
    description:
      "We arrange the party of 500 persons to 600 persons like Marriage, Ring Ceremony, Reception, Get Together and many more finctions... We have a Banquet space of 50 to 500 Persons.",
    address:
      "Second Floor, SHREE SARJU ARENA, New, opposite Kadi Nagarik Bank, behind Satymev Hospital, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "090545 04429",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nF4gKQ4CPiu0Yb_ZwZySem4WUb3h7S6UiQ&s",
  },
  {
    id: 8,
    name: "Mr. IDLIMAN",
    category: "Restaurants",
    description:
      "Welcome to Mr. IdliMan, your go-to destination for authentic South Indian food in Chandkheda, Ahmedabad Gujarat. We take pride in offering an extensive menu featuring a variety of mouthwatering dishes such as our signature fluffy Idlis, crispy Vadas, and flavorful Dosas. Our dishes are prepared with the highest quality ingredients to ensure a delightful cooking experience every time. Our team is dedicated to providing a warm & welcoming atmosphere where you can enjoy your meal with friends and family. Beside this - we've got you covered with our unique Idli on cycle service, delivering our delicious Idlis throughout the city. Come visit us today and discover why we're known for serving the best South Indian dishes in Ahmedabad.",
    address:
      "Ground Floor Shop No 7, Monarc Crystal, Sneh Plaza Rd, beside Himalaya Pinnacle, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "+918780223672",
    imageUrl:
      "https://yt3.googleusercontent.com/klzVa2kk0BKqOnahNvKu2NdMF_wWLFv2_ztpqNo4kqzQNfkRGguEL1ULfwkrm7_PeBdD49fyxQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 9,
    name: "Jay Bhavani Vadapav",
    category: "Restaurants",
    description:
      "We don’t just cook food; we blend perfection and taste in every bite. On top of that, our fast, organized processes ensure perfection in every bite.",
    address:
      "Panchshlok Residency, KB ROYAL PHOENIX, G-20, Ahmedabad, Gujarat 382424",
    contact: "075758 05489",
    imageUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover/b37c136e-b77c-4937-a093-3b584a13cacf.png",
  },
  {
    id: 10,
    name: "Dhakka Mukki Eatery - Chandkheda",
    category: "Restaurants",
    description:
      "Dhakka Mukki Is Gujarat's fastest growing fastfood chain. Having more than 140+ outlets statewide. Best fastfood is served with best quality and affordable pricing.",
    address:
      "Shop No. 25, Shree Sarju Arena Complex, New, opp. Kadi Nagrik Bank, Chandkheda, Ahmedabad, Gujarat 382470",
    contact: "070464 71474",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsTjkgpsdvwwJFniSqrzukLinpL2xtdHViw&s",
  },
  {
    id: 11,
    name: "South Dosa Corner",
    category: "Restaurants",
    description: "A restaurant for all the types of south indian food.",
    address:
      "GF 20, Kb Royal Altezza, nr. GREEN AURA, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "088660 99111",
    imageUrl: "https://www.hindustanyellowpages.in/CompanyImages/1008801/1.png",
  },
  {
    id: 12,
    name: "The Ocean Pizza",
    category: "Restaurants",
    description:
      "Unlimited Pizza in chandkheda, Unlimited Punjabi Food, South Indian Food, Chinese Food, Chaat, Cold drinks, Garlic bread, Pastry, pizza, panipuri, etc.",
    address:
      "First Floor, Shri Sarju Arena, 138-140, Tragad Rd, opp. Kadi Nagrik Bank, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "073173 13436",
    imageUrl:
      "https://content.jdmagicbox.com/comp/gandhinagar-gujarat/a6/9999pxx79.xx79.220325210531.p1a6/catalogue/the-ocean-pizza-bhat-gam-gandhinagar-gujarat-pizza-outlets-6is9avb0i9-250.jpg",
  },
  {
    id: 13,
    name: "Pomo's Pizza Chandkheda",
    category: "Restaurants",
    description:
      "Hello #CHANDKHEDAFOODIE 🍕🍕🍕 Get ready for unlimited fun with Pomos pizza 🔹55+ premium pizzas in your unlimited meal 🤤 🔹Pomos pizzas brings to you the best of unlimited meals for lunch and dinner. 🔹Enjoy the best of our delicacies in the heart of Ahmedabad city. 🔹Enjoy pizzas with live music & Celebrate your special occasion with us. 🔹Look for our special party packages to have enjoying and hassle free parties. 🔹Enjoy unlimited pizza meals with soups, hot starters, salads, garlic breads and exquisite pizzas.",
    address:
      "SHREE SARJU ARENA, Esha Food, 235-236, Tragad Rd, Behind Satyamev Hospital, Opposite Kadi Nagrik Bank, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098250 67111",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i3pocXj23aoUoyVVi0jYBZzZdEA50bVLQw&s",
  },
  {
    id: 14,
    name: "WHAT A SANDWICH!",
    category: "Restaurants",
    description:
      "We at WHAT’ A Sandwich! Indulge in a delectable array of sandwiches, subs, paninis, salads, burgers, wraps & Pav burgers at our Chandkheda, Ahmedabad outpost. Savor our signature sandwiches crafted with fresh ingredients and expertly grilled paninis. Enjoy the perfect blend of flavors with our diverse menu, including vegetarian and non-vegetarian options. Conveniently order via Zomato, Swiggy, Paytm, Magicpin, or ONDC Food for a delightful dining experience. Come discover your new favorite spot for satisfying cravings and wholesome meals!",
    address: "SWATI RESIDENCY, 5, New, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "070463 06861",
    imageUrl:
      "https://content.jdmagicbox.com/comp/ahmedabad/u9/079pxx79.xx79.221005210529.p6u9/catalogue/what-a-sandwich-vejalpur-ahmedabad-cmd73bslv7.jpg",
  },
  {
    id: 15,
    name: "SHAHI FOOD CORNER",
    category: "Restaurants",
    description:
      "SHAHI FOOD CORNER was small fast food and getting excellent response of food & service from guest side so we had planned to give bulk service to our valuable guest by catering service. Its my motto to share my 22 years experience job, different different star hotel and star restaurant categories experience to my lovely colleague and lovely Ahmadabadi guest that's why now SHAHI FOOD CORNER brings to you catering management expertise of more than a decade, renowned for creating unforgettable memories with the incredible power of food and hospitality. Be it simple or elaborate, an intimate affair, a grand scale or an exotic destination wedding - from inspiration to last minute details, we ensure that we deliver perfection and quality.",
    address:
      "Shahi Food Corner, A 101, Avkar height, Chandkheda - Zundal Rd, opp. Earth School, Gandhinagar, Gujarat 382421",
    contact: "074057 02623",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/delhi/i4/011pxx11.xx11.150617125853.l2i4/catalogue/shahi-food-corner-shahdara-delhi-north-indian-restaurants-03lidpjhwh.jpg",
  },
  {
    id: 16,
    name: "MeeSaaVi Eatery - Chandkheda",
    category: "Restaurants",
    description:
      "Welcome to MeeSaaVi Eatery, your destination for an unforgettable dining experience. Nestled in the heart of Ahmedabad, our restaurant cafe offers a perfect blend of delectable cuisine and a charming ambiance that will leave you wanting more. At MeeSaaVi Cafe, we take pride in our menu that features 25 unique dishes meticulously crafted by our talented culinary team. From mouthwatering appetizers to tantalizing main courses and decadent desserts, our menu is a culinary journey that caters to a variety of tastes and preferences.",
    address:
      "Ground Floor-4, Shree Sarju Arena, Chandkheda - Zundal Rd, opp. Kadi Nagrik Bank, near HDFC Bank, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "099259 91123",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kj-XCD10_aUZ8NSeFpLX1tcevb9ulZAWdg&s",
  },
  {
    id: 17,
    name: "Big Burger House",
    category: "Restaurants",
    description:
      "THE BURGER HOUSE ALL TYPE OF BURGER AND SANDWICH ITEM AVAILABLE COMBO AVAILABLE FRENCH FRIES MASKABAN AND PANEER BURGER AVAILABLE",
    address:
      "3, green aura flat, Mansarovar Rd, behind KB ROYAL PHOENIX, new, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "097125 85884",
    imageUrl:
      "https://zyapaar-app-storage.s3.ap-south-1.amazonaws.com/141/account-141-555e9b27d35687e9c5c2690bf8c8b7b2-ogP38Z3Xlf.jpg",
  },
  {
    id: 18,
    name: "House of Cheese",
    category: "Restaurants",
    description:
      "This restaurant is known for their mouth-watering fast food. The place has very casual and colorful interiors.The pocket-friendly menu of the place serves an incredible variety of fast food options. The place ensures to give its diners something different every time. The outlet is a perfect hangout spot for foodies.",
    address:
      "Shop No GF 11 Shree Narayan Louts Nr Bhulabhai Park, Mansarovar Rd, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "096878 24824",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvGBpKIopmsgT_UxUEbf2b_n_n-LVK6kojw&s",
  },
  {
    id: 19,
    name: "Chick-Kinger",
    category: "Restaurants",
    description:
      "Welcome to Chick-Kinger, where crispy, golden perfection meets savory satisfaction! We take pride in serving the finest fried chicken in town, made with a secret blend of spices that will tantalize your taste buds. At Chick-Kinger, we are committed to delivering a mouthwatering experience with every bite.",
    address:
      "Shop-4, Sanay Landmark, New, near Neelkanth Villa, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "087809 38799",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 20,
    name: "Shree mahakali restaurant",
    category: "Restaurants",
    description: "Shree mahakali multi hotel and restro(pure veg)",
    address:
      "Sardar Patel Ring Rd, near Ganga Residency, Zundal, Ahmedabad, Gujarat 382421",
    contact: "097141 50920",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 21,
    name: "Maharana Thal & Banquet",
    category: "Restaurants",
    description: "Authentic Thali, Contact number : 9687874999",
    address:
      "First floor, Sagun 108, near Devine Child Circle, Zundal, Ahmedabad, Gujarat 382421",
    contact: "096878 74999",
    imageUrl: "https://trademaklogos.s3.ap-south-1.amazonaws.com/6091031.jpeg",
  },
  {
    id: 22,
    name: "Sarvottam Banquet & Restaurant / Suraj Farm",
    category: "Restaurants",
    description:
      "Roomy eatery with banquet services, offering Indian, Mexican & Chinese cuisine in a casual space.",
    address:
      "Opp.Shagun-108, Nr. Suraj Farm, Divine Child Circle, S.P. Road At & Post - Zundal, Ahmedabad, Gujarat 382421",
    contact: "095741 41472",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNIL3b5a-L7JdaxhtyvJ4ZziR_0bmPDPcVg&s",
  },
  {
    id: 23,
    name: "BITTU DI KITCHEN (Cloud Kitchen)",
    category: "Restaurants",
    description:
      "O Tussi Khake To Dekho! Our priority is serving lip-smacking food and taking care of your health and hygiene at the same time. We use premium quality pieces and best quality oil.",
    address:
      "NAVPAD HELIOS, B 602, Sardar Patel Ring Rd, behind Ganga Residency, Zundal, Gujarat 382421",
    contact: "098250 44579",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 24,
    name: "Chulo-A flavour of smoke",
    category: "Restaurants",
    description:
      "We are ahmedabad based kathiywadi dhaba style restaurant. Serving freshly cooked kathiyawadi made on chulha.",
    address:
      "fly over, Chulo - A flavour of smoke, at the end of zundal, vaishnodevi, towards, Sardar Patel Ring Rd, Zundal, Gujarat 382424",
    contact: "091062 89585",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7m_cTfCoXSIZNDLscZiyZf3rsmPjSfGIoFA&s",
  },
  {
    id: 25,
    name: "Gokul Kathiyawadi Garden Restaurant",
    category: "Restaurants",
    description: "Welcome to our resturant for dilicious food",
    address:
      "Sabarmati-Adalaj Highway,Near DCIS CIRCLE, OFF, Sardar Patel Ring Rd, beside NARMADA CANAL, Adalaj, Gujarat 382421",
    contact: "091737 39011",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_81ZQBnay2b-nYPpKlwLAV4Zj__Gry-k9dQ&s",
  },
  {
    id: 26,
    name: "Zeus - A Creative Fleet Restro",
    category: "Restaurants",
    description:
      "Unveiling the Global Fusion Flavors with Greek Cuisine and Beyond Greek Cuisine in ahmedabad Best Greek Restaurant in ahmedabad First Time in Ahmedabad Chandkheda.",
    address:
      "Near, Chandkheda - Zundal Rd, near Vaishnodevi Road, Overbridge, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "+916356634354",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjEJnpMjlH_hakjQ8C4YFidxtOuD0zYkuIw&s",
  },
  {
    id: 27,
    name: "Kovallam Restaurant- The South Indian Kitchen",
    category: "Restaurants",
    description:
      "Kovallam is a authentic south indian restaurant located 1km from Vaishno Devi temple at the cbd shopping centre. We believe in quality food with personalized service. Our variety of Dosa and Idli will take you to the south of India. Customer Experience is our priority which has helped us create a brand in a short time. We would request all of you to give us a chance to serve you once.",
    address:
      "The CBD Shopping Center, Opp Hotel Hillock Between Vaishno Devi and, Circle, Sardar Patel Ring Rd, Zundal, Ahmedabad, Gujarat 382421",
    contact: "099250 31118",
    imageUrl: "https://foto2.sluurpy.com/locali/in/4420695/70706696.thumb.jpg",
  },
  {
    id: 28,
    name: "ASCENDIA RESTRO AND CAFE",
    category: "Restaurants",
    description:
      "Indulge in culinary delights at Ascendia Restro Cafe & Box, nestled in Zundal, Ahmedabad. Discover the fusion of flavors amidst the excitement of Gujarat's biggest box cricket. Your perfect destination for good food and great moments!",
    address:
      "FP NO.: 77, TOLL PLAZA, TP NO.: 410, NR, Tragad, Zundal, Gujarat 382421",
    contact: "+91 7777911439",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 29,
    name: "Aaojee Khaojee, ABC-Chandkheda",
    category: "Restaurants",
    description: "Indian, Chinese, Italian and Fast Food Taste to Remember",
    address:
      "Aamarkunj Business Centre, Zundal - Tragad Rd, above Reliance Smart Bazaar, Chandkheda, Ahmedabad, Gujarat 382421",
    contact: "+916355700696",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/a9/81/f3/aao-ji-khao-ji.jpg",
  },
  {
    id: 30,
    name: "Kake Di Hatti",
    category: "Restaurants",
    description:
      "Discover culinary bliss at Kake Di Hatti, a legendary North Indian gem in the heart of Old Delhi. Renowned as the best Punjabi restaurant, we are committed to delivering an authentic dining experience. Immerse yourself in the rich tapestry of North Indian flavors, where every dish is a symphony of great quality and the best taste. Our menu boasts mouthwatering Punjabi delicacies, each crafted with precision to ensure a delicious journey for your taste buds. At Kake Di Hatti, relish the finest North Indian food, from flavorful curries to the city's best naan. Our commitment to excellence makes us a go-to destination for those seeking an unforgettable dining experience.",
    address:
      "SHOP NO 142, THE CBD MALL beside Vaishnodevi Circle, Near Zundal Circle, Sardar Patel Ring Rd, Zundal, Gandhinagar, Gujarat 382421",
    contact: "+919328835541",
    imageUrl:
      "https://franchisecapitals.com/assets/uploads/media-uploader/kdh-logo1689917834.jpg",
  },
  {
    id: 31,
    name: "Aranyani Restaurant",
    category: "Restaurants",
    description: "Bringing Class To Cuisine.",
    address:
      "Aranyani Restaurant, Sardar Patel Ring Rd, near Zundal - Tragad Road, Tolltax, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "094998 87788",
    imageUrl:
      "https://b.zmtcdn.com/data/reviews_photos/cae/f5593c74a7e4a2e6140ee6c5b47adcae_1711900757.jpg",
  },
  {
    id: 32,
    name: "D'loch Multicuisine Restaurant",
    category: "Restaurants",
    description:
      "D’LOCH Scottish for : The Lake Surrounded by water bodies, D’Loch is an experiential fine dine that gives you a feel like never before, of an aquatic atmosphere while you have an artisanal feast!",
    address:
      "Sardar Patel Ring Rd, opp. the CBD, Zundal, Ahmedabad, Gujarat 382421",
    contact: "-",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 33,
    name: "One Ten Restaurant & Banquet",
    category: "Restaurants",
    description: "Themed Decor, Spicy, Good Service, Good Food, Price, Staff",
    address:
      "4H9J+CJ3, GJ SH 41, near Satyamave Hospital, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "090330 62552",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzG9D5pmW6hHio1q48yiCMjvPgmNFZNErKw&s",
  },
  {
    id: 34,
    name: "Rajputana Rassoi",
    category: "Restaurants",
    description:
      "Rajputana Rassoi is a one of its kind restaurant in Ahmedabad that specializes in authentic Rajasthani flavors. We take pride in our culinary skills and aspire to share the true taste of Rajashthani murg cookery with our customers.",
    address:
      "Shop 5, Sanay Landmark, near ATM Mall, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098752 56248",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 35,
    name: "Maya Samosa House",
    category: "Restaurants",
    description:
      "We make fresh spicy and delicious Punjabi Samosa And Take Orders As Per Your Need. We Deliver Samosa With Free Home Delivery Within Three Kilometres.",
    address:
      "BUS STOP, 23, Shubhlaxmi Tenament Opossite DCIS BRTS, Zundal - Tragad Rd, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098981 86668",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mHmSGplTdq4-lmuOc-gSFCPZId9FWn1G1g&s",
  },
  {
    id: 36,
    name: "Village Inn",
    category: "Restaurants",
    description:
      "Ready to embark on your feast at Village Inn, a rural-theme based Restaurant. Escape the urban cityscapes, and feel homely and village-like feel environment at our restaurant. When you are with us, you are never too far from heavenly food-induced euphoria and home-style pure indian gujarati cuisines. This place is very appealing and alluring. At Village Inn, you will feel nostalgic with taste just like back home. Tease your taste buds with scrumptious savories. It is designed in such a way which leads to keen attention to every detail.",
    address:
      "221/2 near sarthi bungalows, brts road, opp. swad gathiya Rath, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "099090 48080",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgmO189JiX17CjkB2tkM5Q107j_5yIIDmjw&s",
  },
  {
    id: 37,
    name: "Hotel Sher 'E' Punjab",
    category: "Restaurants",
    description: "Has all you can eat · Serves vegan dishes",
    address:
      "GF-1, offsite Pooja bunglow, Swastik Complex, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "091733 22700",
    imageUrl:
      "https://media.licdn.com/dms/image/C511BAQGu1O5tT0gbhg/company-background_1536_768/0/1584192827482?e=2147483647&v=beta&t=pTYY2uG3l5vzuSFNFmvSHhTzwRxZBe9R5hjMotUZW3c",
  },
  {
    id: 38,
    name: "Roasted Beans Cafe",
    category: "Restaurants",
    description:
      "The smell when you come in is as sweet as when you open up that fresh bag of coffee beans, and you inhale a long whiff of it, wanting to enjoy it forever. There are little nooks to sit alone or with others, sipping on dark coffee, and there are roof top so you can look out at the sunsets and the group of the stars, and there is mellow music playing in the background, maybe a live musician on his/her guitar, etc. Maybe a few long community tables to share, to do homework, work on your business, or have a Bible study at. It’s a beautiful and warm place to just think and observe. You can spend some time with your self or with your loves one!!",
    address:
      "Near Zundal Toll Plza, Sardar Patel Ring Rd, Zundal, Gujarat 382424",
    contact: "085110 14716",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJVstLME5RQZz-EeD8XkOH1TCfn3r8MPBpA&s",
  },
  {
    id: 39,
    name: "Queen's Restaurant and Banquet",
    category: "Restaurants",
    description:
      "Queen's is the one & only Casino Themed Fine Dne multicusine Restaurant in Chandkheda, Ahmedabad This Restaurant Provides Excellent Food Quality & Taste. It serves Indian, Chinese, Mexican, Italian, Continental, and Punjabi Food. It also serves Jain Food. It's Banquet Capacity is from 50 to 300 person, Where you can have Corporate events, Birthday Party, Baby Shower, Anniversary Celebration, Engagement Ring Ceremony, Marriage Function, Marriage Reception, Retirement Party etc. We also do Outdoor Catering for Engagement Ring Ceremony, Marriage Function, Marriage Reception etc.",
    address:
      "Highway Mall, Ground Floor,, GJ SH 41, near Satyamev Hospital, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "099257 37776",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfhP8RrrWLLhH7Wo5aPGSkCq4c6vPO2gRsg&s",
  },
  {
    id: 40,
    name: "Funpoint Garden Restaurant",
    category: "Restaurants",
    description:
      "Fun Point Restaurant is a Garden Restaurant and also party plot",
    contact: "077779 74429",
    imageUrl:
      "https://www.instantmenu.co/static/upload/store/storeImage-1595782228098.jpg",
  },
  {
    id: 41,
    name: "AMI WELLNESS CENTER",
    category: "Gyms",
    description:
      "Ami Wellness Center offers a comprehensive approach to health and wellness. Their services include weight management programs, personalized nutrition plans for all ages, fitness guidance, and also for skin, brain, immunity, eye, and heart health.",
    address:
      "406, 4TH FLOOR, SHARAN CIRCLE BUSINESS HUB, RELIANCE DIGITAL, CROSS ROAD, above CROMA, Zundal, Ahmedabad, Gujarat 382421",
    contact: "098989 98224",
    imageUrl:
      "https://pbs.twimg.com/profile_images/2532235242/357l8t8mph906zprh1kh_400x400.jpeg",
  },
  {
    id: 42,
    name: "Fitness classes",
    category: "Gyms",
    description:
      "My name is Savita Sutar and I am a entrepreneur, i have started fitness classes for people of all ages I also consult them with a proper diet plan for weight loss and gain I also do take online classes ...in my classes I teach yoga , cardio , full body exercise, weight lifting, stretching etc ...I also have my fitness youtube channel from which people can benefit online for more info contact me personally",
    address:
      "S P ring road, zundal circle, beside chroma shop, Ahmedabad, Gujarat 382424",
    contact: "-",
    imageUrl: "https://files.yappe.in/place/full/fitness-classes-9174006.webp",
  },
  {
    id: 43,
    name: "Plan Fitness",
    category: "Gyms",
    description:
      "Welcome to PLAN FITNESS GYM - Where Your Journey to a Healthier You Begins! With our cutting-edge facilities, personalized training programs, and a supportive community, we're here to help you conquer your fitness goals. Whether you're just starting or aiming to level up, we've got the perfect plan for you. Join us today and let's sculpt a better tomorrow together!",
    address:
      "505, The CBD Shopping Centre, Between Vaishno Devi & Zundal Circle, Sardar Patel Ring Rd, opp. The Hillock, Ahmedabad, Gujarat 382421",
    contact: "070434 34505",
    imageUrl: "https://img.fitimg.in/studio_logo_18500651F98A2C.png",
  },
  {
    id: 44,
    name: "Quick2Fit - Premium Gym",
    category: "Gyms",
    description:
      "Quick2Fit Premium Gym – a place for workout. The Quick 2 Fit is a premium category gym in the Chandkheda area with all the latest cardio and body building equipment. To provide better training to each of our customers, we have a certified trainer and coach team. Our slogan encapsulates who we are; we believe in quick fitness for all of our customers. We currently have two successful branches, and two more are on their way to your neighbourhood.",
    address:
      "601, Ganga Heights, New, nr. KB ROYAL PHOENIX, opp. AMC Garden & Water tank b/h Satymev Hospital, Chandkheda, Ahmedabad, Gujarat 382470",
    contact: "+91 95122 22542",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAApaey_eeyHQTmyVt3Czcy0f-o-jN18VXg&s",
  },
  {
    id: 45,
    name: "Fitness First Gym",
    category: "Gyms",
    description: "Gym & Fitness Centre",
    address:
      "601,602 - 6th floor, shree sarju arena, Satyamev hospital road, near kadinagrik bank, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "+91 95122 22542",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkp9iPk2fEocONCDiJ5nCrBfNcbJ3xKVZ5Lw&s",
  },
  {
    id: 46,
    name: "MAF FITNESS ( New Chandkheda )",
    category: "Gyms",
    description:
      "MAF FITNESS- The ultimate goal of a gym is to help make its members healthier. Create an awareness of Fitness. Gym is a place for indoor physical workout where various equipment and machines are typically used. Joining a gym makes you doing things easier and motivate your to achieve your Fitness goal - Exercise good for your Health, Mind, Stress Buster, keeps motivated you, Gain Knowledge, and Get you an all weather workout . Services inclusive of Cardio workout, Organized Group Activity, Yoga, Activity, Aerobics, Zumba, Weight Lifting Training, HIIT Training, CrossFit Training, Personal one on one training, Cardio kick boxing, Mix martial Arts, Weapon training, Karate , Taekwondo, Gymnastic, Fat loss training, Mass gain training.",
    address:
      "502-shree sarju arena near kadinagrik bank ,Satyamev hospital road Chandkheda, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "090991 10123",
    imageUrl: "https://img.fitimg.in/studio_logo_4642_ahmedabad.png",
  },
  {
    id: 47,
    name: "SFW THE GYM (Chandkheda)",
    category: "Gyms",
    description: "SFW THE GYM GUJARAT'S LARGEST GYM CHAIN",
    address:
      "Ganga Heights, 601/602, nr. KB ROYAL PHOENIX, opp. AMC Garden, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "07947129643",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur60nn3paxrxTlBdT6EUihoC4PyVzx4n3Ow&s",
  },
  {
    id: 48,
    name: "Health Champion Fitness Studio & Gym",
    category: "Gyms",
    description:
      "Welcome to Health Champion Gym Chandkheda, We bring you the best fitness trend and solution. With a focus on providing the best equipment and guidance to help you achieve results. We’ve seen a lot of changes in the fitness industry over the years, but our Gymnasium Goal is to offer the best equipment, knowledgeable advice in a positive environment that feeds our members’ motivation. We believe that fitness should take a 360 degree approach which should cover all elements of fitness like Personal Training, cardio, Kick Boxing, Yoga, Zumba and Aerobic. Our highly qualified trainers and experts are present to help you pick the right equipment for your body but also to design a personalized fitness studio, health club and workout plan for you.",
    address:
      "Shop No-231 Second Floor, Highway Mall, Bus Stop, beside Domino's Pizza, near Chandkheda, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "063533 79772",
    imageUrl:
      "https://5bestincity.com/profileimages/india/health-champion-fitness-studio-gym-chandkheda-ahmedabad-gujarat/51767-behea-1.jpg",
  },
  {
    id: 49,
    name: "Gym Lounge Premium New Chandkheda",
    category: "Gyms",
    description:
      "Want to be healthy and have a perfect body? GYM LOUNGE is the right decision for you! It will create your personal training program and balance your diet so you could get theshape of your dream shortly! We the “ GYM LOUNGE “ has started our journey from 10th Dec.2018 at Motera. Founder of Gym Lounge MR. VIJAY SENGER & MR. MAHESH SHARMA have started this journey with the staff of eight (8) persons. Now we are having branches in Ahmedabad at mentioned area below: New Ranip, South Bopal, Gota, Motera, Isanpur, Vastral, Nikol, New Chandkheda and Chankheda We also have a Branch in Surat. We have future expansion planning pan India. We have 25+ outlets 300+ employees in house training program and all certified trainers",
    address:
      "7th Floor, Central Square, New, near KB ROYAL PHOENIX, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "07947132789",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/m3/079pxx79.xx79.220129213906.c5m3/catalogue/gym-lounge-premium-chandkheda-ahmedabad-fitness-centres-83oy16cc0p.jpg",
  },
  {
    id: 50,
    name: "Shilpi Fitness",
    category: "Gyms",
    description:
      "Personal fitness trainer with the certification of Aerobics from IFA , Zumba, Diploma in Personal Training from k11",
    address: "Satyamev Hospital, Chandkheda, Ahmedabad, Gujarat 382470",
    contact: "097232 24624",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 51,
    name: "The CBD Shopping Centre",
    category: "Malls",
    description:
      "Expanded in size and dotted with showrooms and office spaces of various sizes, The Central Business District, popularly known as The CBD is the cynosure of eyes. Built with open-ness that’s not seen in other commercial spaces, the space can be quite a head-turner. Located at Zundal, the CBD gains footfalls from both the cities ie. Ahmedabad and Gandhinagar; making it a meeting ground for all brands big and small.",
    address:
      "Between Vaishno Devi Circle - Zundal Circle, Sardar Patel Ring Rd, Ahmedabad, Gujarat 382421",
    contact: "098251 61637",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xFl7tyFromTZEWjzelrutMrQow5pTHqbJg&s",
  },
  {
    id: 52,
    name: "Highway Mall, Chandkheda",
    category: "Malls",
    description: "Core cutting service",
    address:
      "54, Ahmedabad - Patan Highway Rd, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "07942688670",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 53,
    name: "Swagat Holiday Mall",
    category: "Malls",
    description:
      "Swagat Holiday Mall – A wholesome lifestyle creation from the house of prestigious Swagat Group. Nestled between the twin cities of Ahmedabad and Gandhinagar, Swagat Holiday Mall is designed to satiate the rising desire for an elating mall experience while offering a plethora of opportunities for business growth.",
    address:
      "Swagat City Mall, near IIFL FINANCE BANK, Adalaj, Gandhinagar, Gujarat 382421",
    contact: "070412 95098",
    imageUrl:
      "https://newprojects.99acres.com/projects/swagat_group_ahmedabad/swagat_holiday_mall/logo.jpg",
  },
  {
    id: 54,
    name: "ATM MALL",
    category: "Malls",
    description:
      "ATM Mall is the commercial evolution based in Chandkheda, Ahmedabad North, created by ATM ILYF LLP. It provides you with a chain of numerous shops and Offices are a rich area with world class amenities. The property spreads across a wide area and is recognized by Gujarat RERA.",
    address:
      "Highway New, Near Ananya vidhyalaya Opp Suryan Hope Town On 100 Feet, TP Road, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "097266 61177",
    imageUrl:
      "https://newprojects.99acres.com/projects/atm_ilyf_llp/atm_mall/8echede4.png",
  },
  {
    id: 55,
    name: "Orange Mall Chandkheda",
    category: "Malls",
    description:
      "If there's one thing that has the power to transform a dull day, it's shopping. However bad your mood is, once you get some retail therapy going, everything seems better. Sure, things may still be the same once you go back to reality. But, why ruin a moment by just worrying? Shopping centres have become so popular nowadays because, unlike individual shops, they offer a holistic experience.So, if you want to soak in the experiences of Shopping Centres, we suggest you check out Orange Mall in Chandkheda, Ahmedabad. It has received a 3.8 rating. Come here to experience the joys of retail therapy!",
    address: "GJ SH 41, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "-",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGKXw2nX83zgwn0kbcSLyn4RPH_Jy0i-_Ew&s",
  },
  {
    id: 56,
    name: "4D Square Mall, Motera",
    category: "Malls",
    description:
      "A visit to the mall is always welcomed by everyone in the family. Some want to shop; some want to eat at the food court. And, the little ones are probably eager to get on the rides or enter all the toy stores. You can even sit in a coffee shop with your laptop and get some work churned out while sipping on artisanal bakery and craft coffee. There's really something for everyone at a mall! If you've been looking for some good Malls, you might want to consider giving 4d Square Mall in Chandkheda, Ahmedabad a shot. It's been there since 2011. There are several stores here. Going by the statistics, this mall has received an average 4.3 rating taken from visitors. If you think that's a good bet, you must visit this mall.",
    address: "ONGC Cir, near tune hotel, Chandkheda, Ahmedabad, Gujarat 380005",
    contact: "-",
    imageUrl:
      "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/12/Photo_h600_w900/2024/Jan/12/70895347_1_0200227_600_900.jpg",
  },
  {
    id: 57,
    name: "CARE 4 AQUA",
    category: "Malls",
    description:
      "We are RO Water Purifier Manufacturer as per Customer Requirement . We Provide SALES and SERVICE also We Take AMC ( Annual maintenance Contract ) . Any Query Send me Whatsapp 24/7 on 9998280708 or call During Working hrs. Thanks",
    address:
      "Jagatpur Rd, Godrej Garden City, Jagatpur, Ahmedabad, Gujarat 382470",
    contact: "-",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 58,
    name: "S Mall",
    category: "Malls",
    description: "S Mall, Shoping Mall Shops & Office.",
    address:
      "Dwiti Creation, S MOLL, A-2, near H P Petrol Pump, Motera, Ahmedabad, Gujarat 382424",
    contact: "-",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 59,
    name: "Sanskrut Sparsh Arcade",
    category: "Malls",
    description:
      "Sanskrut Infra is a property development company committed to developing projects that are an excellent investment for the present that is bound to bear fruits in the future. It believes in maintaining business ethics and transparency in all the dealings to create an enduring customer base. The firm believes in delivering high-quality construction to the customers to help them realize their dream of owning a home. It ensures that there is no compromise on the quality of its projects.",
    address:
      "303, Sparsh Arcade, Dada Bhagwan Cir, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "-",
    imageUrl:
      "https://newprojects.99acres.com/projects/sanskrut_buildcon/sanskrut_pushti_sparsh_arcade/n7xf9rkf.jpg",
  },
  {
    id: 60,
    name: "Aamrakunj Business Centre",
    category: "Malls",
    description:
      "Every business deserves an impressive platform to build a saga of success. Aamrakunj Business centre, rising in the heart of the happening Chandkheda area of Ahmedabad, is designed to provide a much-coveted thrust to varied kind of businesses. The futuristic project has been designed by the renowned architect HM architects. with several city icons to its credit, the firm has left no stone unturned to make Aamrakunj Business centre truly exceptional. With an impressive mix of retail, entertainment and corporate space, it is a project set to create a new future for your business!",
    address: "4HCC+35W, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "083207 74351",
    imageUrl:
      "https://www.a2zproperty.in/Gujarat/Ahmedabad/aamrakunj-business-centre-abc/image-10060-1.jpg",
  },
  {
    id: 61,
    name: "Shree Balaji Agora Mall",
    category: "Malls",
    description:
      "Discover the Ultimate Shopping and Entertainment Destination in Ahmedabad - Agora Mall! Agora Mall proudly stands as the crown jewel of shopping and entertainment in Ahmedabad. Here's why Agora Mall is the best mall in the city: 🛍️ Shopping Extravaganza 🛍️ Step into a world of retail therapy with a diverse range of stores catering to men, women, and kids. 🍽️ Thematic Restaurants 🍽️ Indulge your taste buds in the culinary delights of our thematic restaurants, where you'll find the best food in the city. 🎮 Gamezone Fun 🎮 Keep the excitement alive at our Gamezone, a haven for kids and adults. 🎬 Latest Blockbusters 🎬 Experience cinematic magic in our Multiplex, where you can watch the latest movies in style and comfort.",
    address:
      "Tapovan Circle, Bhat Circle, Between 200 ft, Sardar Patel Ring Rd, Motera, Ahmedabad, Gujarat 382424",
    contact: "086906 42642",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8LFXGiDDEW3uPAkm6fw5jQ0zh_sPNaQVNA&s",
  },
  {
    id: 62,
    name: "Arved Transcube Plaza - The Family Mall",
    category: "Malls",
    description:
      "Arved Transcube Plaza Mall, Ahmedabad, is your one stop destination for all your basics and Quailty pleasures. You can roam the aisles, take inspiration from the stores and make your purchases speak for you. We have everything that makes your visit worth an experience; Shopping, movie, gaming, food and a lot of family time together! We take pride introducing our well-maintained business hub offices and shops at revised low rates and state of the art facilities that includes spacious furnished and unfurnished offices, common reception area, 24/7 security and lifts, hygienic washrooms, etc. all at a prime location that is near to the International Airport.",
    address:
      "near Arved transcube mall, Bandhu Nagar, Vijay Nagar, Ranip, Ahmedabad, Gujarat 382480",
    contact: "063591 41211",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTCp-yShFoxPlr14UoFqPRlx7CqcvPmIxQw&s",
  },
  {
    id: 63,
    name: "Reliance SMART Bazaar",
    category: "Malls",
    description:
      "SMART Bazaar is a one-stop shopping destination for all your needs. It offers a wide range of Groceries, Homeware & Stylish Affordable Fashion. Choose from our range of Fruits & Vegetables, Staples, Dairy, Packaged Food, Home & Personal Care, largest range of Homeware Brands, and trendy apparel for Men's, Women's & Kids",
    address:
      "Aamrakunj Business Centre, Satyamev Hospital, Road, opposite AMC Garden Road, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "1800 891 0001",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b8/Reliance_Smart_Bazaar.png",
  },
  {
    id: 64,
    name: "Zudio - Ahmedabad, Chandkheda",
    category: "Malls",
    description:
      "ZUDIO” a fashion store offering a fashion collection in menswear, women wear, ethnic wear, kids wear & Footwear. Come check out the irresistible Fashion today! T&C apply.",
    address: "Amarkunj Business Center, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "086558 60516",
    imageUrl:
      "https://lh3.googleusercontent.com/YPgl3qmorEU0X_QQj0gwIuKZ9_ovkI3ODciDVhvE7QaxO0jMpIsxFb24upERoVBYGyNGIEL3aXagpi3voJeboLtZN0gJrELkqRQDIIQ=w256-rw",
  },
  {
    id: 65,
    name: "Vedang Public School",
    category: "Schools",
    description:
      "Best English Medium Primary Schools in Ahmedabad, Gujarat. Vedang Public School associated with Shree Narnarayan Education Trust. The government approved courses, study materials, the professional and caring teachers, and the best facility make this school an good environment for children to develop to their highest potential and skills. School having best amenities like Gujarat Board, Computer lab, R.O. Water, Classrooms, Transport, Sports, Conference Hall",
    address:
      "B/h. Kalp-Taru Park, Ahmedabad - Kalol Highway, Near Chandkheda, Sardar Patel Ring Road, Zundal Circle, Zundal, Ahmedabad , Gujarat",
    contact: "+91-9727544400",
    imageUrl:
      "https://www.findmyshala.com/uploads/thumb/200_200_1531983523_school_logo_19072018122843.jpg",
  },
  {
    id: 66,
    name: "Swaminarayan Gurukul, Zundal",
    category: "Schools",
    description:
      "Swaminarayan Gurukul in Gandhinagar-gujarat is one of the leading businesses in the Schools. Also known for Schools, Primary Schools, Secondary Schools and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Swaminarayan Gurukul, Gandhinagar-gujarat.",
    address: "4HPP+2W7, Zundal, Gujarat 382421",
    contact: "09925991800",
    imageUrl: "https://i.ytimg.com/vi/Btv67uktjBU/maxresdefault.jpg",
  },
  {
    id: 67,
    name: "J M G / PRABHU SCHOOL",
    category: "Schools",
    description:
      "In this highly competitive world, education ( knowledge ) is a must for everyone. Challenges are the stepping stones for students nowadays. For the last many years, many challenges are seen in the education field. Level of the education rises which makes the students work hard more and more. But all the hard work of students is in vain without any support from good education institutions or guidelines to export intelligent teachers. Our institution promises to give quality education to your wards who can face any kind of challenges in the field of education. And every year we are touching the height of success which is proud for our institution",
    address: "JMG / PRABHU SCHOOL, Zundal, Gujarat 382421",
    contact: "099135 48923",
    imageUrl:
      "https://www.allschoolscolleges.com/images/school_logo/901672313399.jpg",
  },
  {
    id: 68,
    name: "Puna International School",
    category: "Schools",
    description:
      "To create a learning process where in each learner. Empowers himself to watch the optimum level as skill acquisition. Apart from the academic excellence, PUNA International School Zundal (Gurukul) bears the vision of inculcating in the students the right moral  values so that they grow up to be able citizens of tomorrow. We make every effort to ensure that our students are global citizens with an Indian heart.",
    address:
      "Shree swaminarayan Gurukul, Chandkheda - Zundal Rd, Chandkheda, Ahmedabad, Zundal, Gujarat 382424",
    contact: "099259 91800",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd43SB1isb4Oc5hly8aJhPo-tv94Rb2gpCbQ&s",
  },
  {
    id: 69,
    name: "Zundal Primary School",
    category: "Schools",
    description:
      "ZUNDAL PRI. SCHOOL was established in 1909 and it is managed by the Local body. It is located in Rural area. It is located in GANDHINAGAR block of GANDHINAGAR district of Gujrat. The school consists of Grades from 1 to 8. The school is Co-educational and it doesn't have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. Gujarati is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April.",
    address: "4HMM+V69, Zundal, Gujarat 382421",
    contact: "-",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 70,
    name: "Earth School",
    category: "Schools",
    description:
      "In today's time, when the world is progressing at a rapid speed, the importance of English cannot be overlooked. Learning English is imperative for the growth and development of children. It is one of the most commonly used languages in the world. There are many English Medium Schools available in Ahmedabad that offer a good quality education. If you are looking for a good school that can educate your child to be a responsible citizen, then look no further than Earth School in Chandkheda, Ahmedabad. Earth School is located Opposite Aaradhya Home, Behind Satyamev Hospital, Jundal, New Chandkheda. It has qualified and skilled professors that will provide quality education to your child.",
    address: "4HGF+362 Earth School, Zundal, Ahmedabad, Gujarat 382424",
    contact: "07947431973",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1mYysXGOEdtaJki9iHlvXVc2b9Q_n8TXFg&s",
  },
  {
    id: 71,
    name: "Swaminarayan Sanskar Vidhyalaya",
    category: "Schools",
    description:
      "Shree Swaminarayan Sanskar Pharmacy College (SSSPC) was established in the year 2005 by Shree Swaminarayan Sanskar Deep Trust, Zundal. under the visionary leadership of Param Pujya Shri Purushottam Charandasji Maharaj, Managing Trustee, SSSPC. The courses started with, a Bachelor of Pharmacy (2005) followed by M. Pharm Pharmaceutics and Pharmaceutical Quality Assurance and eventually Pharm. D (2022). The curriculum is approved by, the Pharmacy Council of India (PCI), and the college is affiliated with Gujarat Technological University.",
    address: "4HMQ+P3C, Zundal, Gujarat 382421",
    contact: "07947118206",
    imageUrl: "https://sspczundal.com/assets/css/final-logo-3.jpg",
  },
  {
    id: 72,
    name: "Ananya Vidyalaya",
    category: "Schools",
    description:
      "Ananya Vidyalaya is committed to providing knowledge that enlightens by creatively enhancing the learning process and integrating tradition with modern educational technology to contribute towards creating a new world.",
    address:
      "Zundal - Tragad Rd, Opposite to Kumkum Residency, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "087588 42524",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoWmnLuUKKTZfpe8nlCE_t-vLJRe-nMkJBQ&s",
  },
  {
    id: 73,
    name: "Hello Kids - Srijan",
    category: "Schools",
    description:
      "Education plays a crucial role in moulding a person's character, and you must ensure that your kid gets the proper education from the very beginning. As Kindergartens is just the beginning phase of learning for kids, you want to send your kids to a school that helps in the overall growth and personality development of kids. The schools use fun and interesting ways to teach the basics of developing problem solving skills and new ideas.",
    address:
      "1-3, First Floor, Ganga Residency, Opposite Shantavan Green Party Plot Near Savya Skyz, Zundal Circle, Sardar Patel Ring Rd, Zundal, Gujarat 382421",
    contact: "085111 22192",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VIrSFaOiDIPG8_4FeiSHf1xYGbSj4Wid4w&s",
  },
  {
    id: 74,
    name: "Leap International School",
    category: "Schools",
    description:
      "In today's time, when the world is progressing at a rapid speed, the importance of English cannot be overlooked. Learning English is imperative for the growth and development of children. It is one of the most commonly used languages in the world. There are many English Medium Schools available in Ahmedabad that offer a good quality education. If you are looking for a good school that can educate your child to be a responsible citizen, then look no further than Leap International School in Chandkheda, Ahmedabad. Leap International School is located Opposite Kumkum Residency. It has qualified and skilled professors that will provide quality education to your child.",
    address:
      "1149/2A, Chandkheda - Zundal Rd, opp. Kumkum Residency, sector 2B, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "083204 91143",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaKIwJAKykHPpgujFmwYnbB9Hoo1htzwyWQ&s",
  },
  {
    id: 75,
    name: "Divine Child International School",
    category: "Schools",
    description:
      "Divine Child International School also known as DCIS was established in 2008. It is managed by Shanku’s Foundation. The school is affiliated with the Central Board of Secondary Education (CBSE), and Cambridge Assessment International Education (CAIE). The school campus covers an area of 49258 square metres and offers facilities like student-led events, STEM, inter-house activities, internships, community outreach, laboratories and more. It is one of the top schools in Gujarat and offers admission to Nursery to Class 12th. There are around 88 teachers and 1250+ students enrolled. The school has 33 classrooms.",
    address:
      "Sabarmati-Adalaj Highway,Near DCIS Circle, Off. S.P.Ring Road, Beside Narmada Canal, Adalaj, Ahmedabad, Gujarat 382421",
    contact: "090990 80010",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pbyOVl9O_9sklsjNJasedq7Ss9Ob39P_kg&s",
  },
  {
    id: 76,
    name: "H3 Preschool Zundal",
    category: "Schools",
    description:
      "H3 Pre-school shares its values and philosophy with the Anand Niketan group of schools, an eminent name in the field of Education in Gujarat, which has given a wider vision to the world of education and focused on the holistic development of a child through its unique approach since 1996. At H3 Pre-school, we believe children are born with immense curiosity and imagination. We believe children are self-learners - all the time exploring, questioning, developing, imagining and contributing to learning.",
    address:
      "Satva, Plot no 178, opp. Shivaay, near Rhythm Heights, Zundal, Ahmedabad, Gujarat 382421",
    contact: "63572 70200",
    imageUrl:
      "https://content.jdmagicbox.com/v2/comp/ahmedabad/j8/079pxx79.xx79.230718220730.v2j8/catalogue/h3-preschool-new-chandkheda-chandkheda-ahmedabad-pre-schools-352i6un9eb.jpg",
  },
  {
    id: 77,
    name: "The Littlie Unicorn's Academy",
    category: "Schools",
    description:
      "Specially designed pre-school with all amenities, well trained staff, well designed curriculum respecting the ultimate child needs and holistic growth. Activity based learning helping to develop the growth",
    address:
      "Shree Sarju Greens, GF-4-5-6 Near Astha Prime, New Zundal, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "079905 69046",
    imageUrl:
      "https://thelittleunicorns.com/wp-content/uploads/2019/11/Logo-1.png",
  },
  {
    id: 78,
    name: "EuroKids Pre-School Ahmedabad-Chandkheda, Tragad Road",
    category: "Schools",
    description:
      "EuroKids Preschools provide a fun-based learning environment. Our Playschool has a Child First Safety First ideology, which ensures your kids' development, safety, and engagement needs are met in a home-like environment for children from 1.8 to 6 years of age. Our Kindergarten programs include “Eunoia” a mindful curriculum that enables holistic development of your child’s mind, body and soul. Kid's games at playgroup & nursery activities at our junior preschool are designed to encourage curiosity and fuel the creative side of your child. Our HomeBuddy app is a digital learning platform for children to provide an enjoyable learning experience. Join the EuroKids family and give your child a Flying Start!",
    address:
      "18, Narayani Bunglows - Part 2, Zundal - Tragad Rd, opp. Shyam Sarthi Bunglows, nr. Swad Ganthiya Rath, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "075729 79707",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87zUQ5ldO1I6HFuZ2-2fGbSG-U2N97LCClQ&s",
  },
  {
    id: 79,
    name: "Ahmedabad Juniors New Chandkheda",
    category: "Schools",
    description:
      "AHMEDABAD JUNIORS is a child-centric school that nurtures young minds with our customized curriculum. Our aim is to help every child become an explorer, decision-maker, and lifelong learner. We encourage parents to be part of their child's learning process. With over 38 years of experience, we have shaped and guided thousands of students. We offer effective workshops and exclusive parenting programs for young parents. At AHMEDABAD JUNIORS, we are determined to build a better future by providing a vision-based education.",
    address:
      "FF - 9,10,11 Satyaa Square, Zundal - Tragad Rd, New, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "096388 36868",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCDNUNn09aOGahIsScEjxNySyKlgqG7nElQ&s",
  },
  {
    id: 80,
    name: "Little Wonders Pre School",
    category: "Schools",
    description:
      "We are providing best education for play group, nursery,junior KG and senior KG. Having best education tools, experienced staff, best hospitality.",
    address:
      "Shree complex, Road, behind Pramukh Abode, opposite Shivanjali Imperia, Gandhinagar, Ahmedabad, Gujarat 382006",
    contact: "093775 35523",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WDzjKMip28xeiOWd3wVQXM6dQD0ms6fW-w&s",
  },
  {
    id: 81,
    name: "Junior Delhi School",
    category: "Schools",
    description: "-",
    address:
      "40, Gokul Dham Soc., Opp. Sarthi Bungalows BRTS, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "078746 88800",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujSaB4O1Sp4bkUAymJDfdvesUGPTP_p1ZwQ&s",
  },
  {
    id: 82,
    name: "DMC English School",
    category: "Schools",
    description:
      "Dmc English School in Gandhinagar-gujarat is one of the leading businesses in the Schools. Also known for Schools, Primary Schools, Secondary Schools and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Dmc English School, Gandhinagar-gujarat.",
    address: "Ariane Casa, opp. IOC Petrol Pump, Adalaj, Gujarat 382421",
    contact: "074350 33563",
    imageUrl:
      "https://play-lh.googleusercontent.com/H9JETfzjMQlvJxlkKN5CaJAGZuhKN3yaZwcVBD2LuUfVt0G2edybNZUDB0aYbzu7pvg",
  },
  {
    id: 83,
    name: "Lifespring Preschool - Kindergarten",
    category: "Schools",
    description:
      "We are a Child centered Preschool based on Maria Montessori method, using hands on practical things to let the child feel and learn. At our place the child learns more through enquiry and interactions, which develops the childs curiousity to a great extend. Creativity is equally given importance, the child has the freedom to express itself via story, drawing or any other medium, bringing out the creativity inside and giving a boost to it. Observing a child is very important for a facilitator to understand the child and work towards their betterment. Making the parents as equal stake holders makes the process much effective.",
    address:
      "105 Sanidhya complex,, Besides Pearl 100, 100 feet Tragad Road, New Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098790 30260",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/58138cde579fb3a18b3747f2/1477676906633-UCXMCVATCOHQH2GOPNX7/Screen+Shot+2016-10-28+at+10.44.55+AM.png",
  },
  {
    id: 84,
    name: "Kidzee New Chandkheda",
    category: "Schools",
    description:
      "Kidzee is having the Asia's Largest Preschool Chain. A pioneer in ECCE (Early Childhood Care and Education), we are the largest preschool chain in Asia. With an incredible network of more than 1900+ centers in over 750+ cities, we are committed to spearheading child development across the nation. Having touched the lives of more than 9,00,000 children in India, Kidzee, a decade on, remains focussed on nurturing the ‘unique potential’ in every child. Kidzee Chandkheda.",
    address:
      "Satyamev Hospital, Madhuram Royal, B/H, Tragad Rd, opp. Swati Greens, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "092655 34379",
    imageUrl:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/b151831bc7b1c542a96eeda6aa454067",
  },
  {
    id: 85,
    name: "The H B Kapadia New High School, Chandkheda",
    category: "Schools",
    description:
      "The H B Kapadia New High School(HBK) is the leading Educational Group in Ahmedabad providing quality education since 1956. HBK is currently present at 6 locations in and around Ahmedabad. HBK offers CBSE and GSEB curriculums. HBK consistently ranks in Top 5 Schools of Ahmedabad as ranked by leading magazine Education World. HBK has won the most prestigious British Council International School Award for three times in a row. HBK has also been the group with one of the highest Board Ranks and A1 Grades in the entire state of Gujarat",
    address: "Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "084606 69244",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xl07Pd9Q8UgBVhdWFud6mr0cAi87PEEmxg&s",
  },
  {
    id: 86,
    name: "Drona Public School",
    category: "Schools",
    description:
      "We at Drona Public School have made a humble attempt to begin with a Pre School in May 2011 in order to instil ideas in the little angels at the very inception of development of thought process. In order to bring our ideas to life. We have employed an intellectual team of teachers and a friendly staff to make learning a fun filled, interactive and rich experience for our little Angels.",
    address:
      "4H67+FQM, Dharti crystal,opp chandkheda railway station,ioc to tragad road, Tragad Rd, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098981 01920",
    imageUrl:
      "https://dronapublicschool.net/wp-content/uploads/2019/02/dronalogo-removebg-preview.png",
  },
  {
    id: 87,
    name: "Mani Prabhu High School",
    category: "Schools",
    description: "KG to std 12 comman stream.",
    address:
      "Nakshatra Arcade, Vivekanand Nagar, D-Cabin, Chandkheda, Ahmedabad, Gujarat 380019",
    contact: "079 2750 1623",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6HIZ1LM9ZCNs9VtYMI8nFTIjfblbF6nzVQ&s",
  },
  {
    id: 88,
    name: "Anjneya global preschool, Chandkheda",
    category: "Schools",
    description:
      "Anjneya is CBSE based preschool and INDIA'S TOP MOST BUSY BEES syllabus for play group, nursery, L KG,SR KG. The school premises is our own (not on rent) so no worried about shifting of school. Have seperate play area for kids of nursery&play group. small kids can enjoy seperately. We have also sun bath area for kids. 1 we have all musical instruments to find hidden talents in kids... 2 we provide painting facilities to kids to boast hidden skills. 3 we have small swimming pool area also for summer activities... 4 we are committed to provide 360° development of each kid... 4 we are providing clean and hygiene area and washing of mattresses every Saturday-sunday. Including all play toys. 5 we ensure pest control job on Saturday",
    address:
      "11,swastik bunglow, near Gathiya rath, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "072288 39320",
    imageUrl:
      "https://content.jdmagicbox.com/comp/ahmedabad/j9/079pxx79.xx79.200225011017.w6j9/catalogue/anjneya-global-pre-school-chandkheda-ahmedabad-xa0c64ne0q.jpg",
  },
  {
    id: 89,
    name: "Auspicious Beginning Pre school and Daycare",
    category: "Schools",
    description:
      "Pre Schools, also known as pre-primary or nursery schools, are a foundation for children in education. These schools are crucial for the growth and development of children. They aid in preparing the children for school with a holistic curriculum that combines playing with learning. Such schools aim at instilling values of equality, discipline, friendly behaviour, etc. in children. If you are on the hunt for a good pre-school in your vicinity, then we suggest you have a look at Auspicious Beginning Pre School And Daycare located in Chandkheda, Ahmedabad. Auspicious Beginning Pre School And Daycare is situated just Near Swad Ghantiya Rath, Opposite Sarthi Bunglows and has highly-qualified teachers that help children build a strong educational foundation.",
    address:
      "01, Swastik Bunglows, near Swad Ghantiya Rath, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "094273 11051",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9FB8jKgo5SwKomdClOCO8NaOfnEvv6kT8A&s",
  },
  {
    id: 90,
    name: "ASIAN GLOBAL SCHOOL",
    category: "Schools",
    description:
      "Asian Global School is a private educational establishment situated in the educational capital of Gujarat, Ahmedabad. AGS runs under the aegis of the CIP foundation.At AGS, we have a child-centered approach to learning. Our primary aim is to identify and appreciate the unique potential of every student. Students receive an excellent education from dedicated and qualified teachers. In addition to our broad curriculum, students can also enjoy a lot of fun activities besides classroom lessons to keep them excited and motivated throughout the school year.",
    address:
      "opposite Param 22, TP - 44, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "099098 05554",
    imageUrl:
      "https://www.asianglobalschool.com/wp-content/uploads/2022/09/asian_logo.png",
  },
  {
    id: 91,
    name: "Saraswati Higher Secondary School",
    category: "Schools",
    description:
      "Asian Global School is a private educational establishment situated in the educational capital of Gujarat, Ahmedabad. AGS runs under the aegis of the CIP foundation.At AGS, we have a child-centered approach to learning. Our primary aim is to identify and appreciate the unique potential of every student. Students receive an excellent education from dedicated and qualified teachers. In addition to our broad curriculum, students can also enjoy a lot of fun activities besides classroom lessons to keep them excited and motivated throughout the school year.",
    address: "4H6C+84X, IOC Rd, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "07947419323",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 92,
    name: "Oakvalley Public School",
    category: "Schools",
    description:
      "Oakvalley Public School in Ahmedabad is one of the leading businesses in the Schools. Also known for Schools, Primary Schools, Public Schools, Secondary Schools and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Oakvalley Public School, Ahmedabad.",
    address:
      "Nr sneh plaza shopping center, IOC Rd, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "085115 23898",
    imageUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_ku4gvVSAzlUtK7dFr6Fh4rAfkl4gxRDlv9n2cerwqwW3w=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 93,
    name: "Blooming Campus, Navrang School, Jagatpur",
    category: "Schools",
    description:
      "Education is not preparation for life; Education is life itself. We want student to learn to use the resources around them. we want them to read something or see something they are interest in and follow up on it. We want our students to score high on the “test if Emotional IQ” that life will inevitably through at them over and over again.",
    address:
      "4H75+PGG, Blooming Campus, Navrang International school,Nr, Jagatpur Rd, Godrej Garden City, Jagatpur, Ahmedabad, Gujarat 382470",
    contact: "099137 70554",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnFuBlkuHOT2xL7pgdRPgrsR-MRxGohQxXA&s",
  },
  {
    id: 94,
    name: "DV Montessori School",
    category: "Schools",
    description:
      "Day care, play group, nursury, lkg, ukg, class 1,class 2,class 3, class 4 and class 5 th",
    address:
      "Railway Station, 05, nr. Chandkheda, Buddhisagar Society, Krishnadham Tenement, Chandkheda, Ahmedabad, Gujarat 382470",
    contact: "090338 93389",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 95,
    name: "Shanti Juniors",
    category: "Schools",
    description:
      "Welcome to Shanti Juniors School Chandkheda, located on New CG Road, where we offer an enriching and nurturing environment for your child's early education. As the best preschool in Chandkheda, Shanti Juniors School on New CG Road is dedicated to fostering the intellectual, social, and emotional development of young minds. Our experienced educators provide a curriculum that combines play-based learning with essential academic foundations, ensuring your child is well-prepared for future success. Enroll today and give your child the gift of a strong educational start at Shanti Juniors School Chandkheda.",
    address: "Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "063526 69233",
    imageUrl:
      "https://images.click.in/classifieds/images/106/22_02_2017_19_15_41_qfvibat0rdo53j2m5t0dokbep2_z7ahc81tom.jpg",
  },
  {
    id: 96,
    name: "One health hospital",
    category: "Hospitals",
    description: "CONSULTANT PHYSICIAN AND DIABETOLOGIST MD physician",
    address:
      "DEF 110, Anand Ilyf, Sardar Patel Ring Rd, near vaishnodevi circle, Tragad, Gujarat 382470",
    contact: "084603 07872",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAFbwyeI5_klb5b_4dqvzo696uBXZwzflTQ&s",
  },
  {
    id: 97,
    name: "Devarshi Super Speciality Hospital",
    category: "Hospitals",
    description:
      "Devarshi Super Speciality Hospital listed under Hospitals in Chandkheda, Ahmedabad. Check Visiting Time, Fees, Address, Contact Number, Ratings & Reviews, Photos, Maps etc, on Justdial. Healthcare is something that can’t be compromised, can it? Hospitals have a huge role to play in developing the healthcare system of any country because, with a growing population, the healthcare demands too are growing and evolving. Providing the highest standard of care for both, minor and major health issues, hospitals create a safe space for the patients by offering end-to-end clinical, surgical, and diagnostic services.",
    address:
      "27, Swastik Complex, Chandkheda-Zundal BRTS Road, Nr, Sarthi Bunglows BRTS Stend, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "090999 52555",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 98,
    name: "PEARL Women's Hospital And Nursing Home",
    category: "Hospitals",
    description:
      "Pearl Women's Hospital is one of the biggest suppliers of fertility treatment services. In addition to offering key processes such as IUI, IVF and andrology facilities, Pearl provides several state-of-the-art systems such as vitrification to preserve embryos and eggs, embryoscope and ERA to determine the timing of the ability of the uterus to accept embryos. Pearl Women's Hospital is also involved in fetal medicine, endoscopy, obstetrics and gynecology, and cosmetic gynecology processes in Surat.",
    address:
      "2nd floor, Sparsh Arcade Opp Shell Petrol Pump Zundal Circle, to, Chandkheda BRTS road, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "096385 98599",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipPiFQGnaR0aC6HomIUmyHrHT8Kk8Nojjixyw6qy=w500-h500-k-no",
  },
  {
    id: 99,
    name: "ABC HOSPITALS",
    category: "Hospitals",
    description:
      "ABC Hospitals situated at nr kb royal phoenix new chandkheda.we are providing all medical facilities , emergency care at least nominal rate,which can affordable.we have all medical facilities like ICU, emergency trauma centre, critical care,isolation unit,general ward, special rooms,suit rooms ,day care.we have all departments like medicine , general surgery, orthopaedic, pediatrics,gynec,onco surgery,urology,spine surgery, cardiology, pulmonologist,skin,ent, psychiatric,pain management,gastrologist, nephrology ,proctologist, neurophysician,neuro surgery, emergency home visits,pt home care,ambulance visits,helath care at very nominal rate...motto save Life",
    address:
      "Amrakunj business center, 225-230, new, above reliance smart bazar, nr. KB ROYAL PHOENIX, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "-",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 100,
    name: "The Ethics Multispeciality Hospital",
    category: "Hospitals",
    description:
      "A 50 beded Multispeciality hospital with team of doctors. One of the best Emergency Care Hospital in Chandkheda, Ahmedabad. Hospital has facilities for multiple surgeries. Hospital has best Orthopaedic Surgeon in Chandkheda, Ahmedabad for best Orthopaedic Surgery in Chandkheda, Ahmedabad. Also you will get consulted by Best Laparoscopic Surgeon in Chandkheda, Ahmedabad and best Physician in Chandkheda, Ahmedabad. Most reputed Multispeciality hospital in Chandkheda, Ahmedabad provides you consultation with best Kidney Specialist in Chandkheda, Ahmedabad.",
    address:
      "Ganga Heights, Cross Road, Tragad Rd, near KB ROYAL PHOENIX, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "072020 50101",
    imageUrl:
      "https://images.click.in/classifieds/images/189/08_01_2024_12_35_44_a7f395247525c9e0c6fa645f3f4a5d1e_w.png",
  },
  {
    id: 101,
    name: "AD HOSPITAL (Physician & Children Hospital in Chandkheda)",
    category: "Hospitals",
    description:
      "Welcome to AD Hospital, the home of quality healthcare. Our focus as a hospital is to provide outstanding medical care based on physicians' and paediatricians' specializations. For an extensive variety of adult health worries, Dr. Apal Gandhi is an experienced physician who will give you the most reliable diagnosis and treatment. Dr. Drashty Gandhi is an experienced pediatrician deals with all issues that occur in children, including their health care from birth until they are of age. AD Hospital is a great place to receive the best healthcare services for all age groups, both young and old. At AD Hospital, your wellness is essential to us.",
    address:
      "113,114,115, Shyam Saanvi, B/H Satyamev Hospital, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "096649 66029",
    imageUrl:
      "https://images.jdmagicbox.com/comp/ahmedabad/z5/079pxx79.xx79.221013231017.v6z5/catalogue/ad-hospital-ahmedabad-hospitals-n82j1vjwb9-250.jpg?w=640&q=75 640w, https://images.jdmagicbox.com/comp/ahmedabad/z5/079pxx79.xx79.221013231017.v6z5/catalogue/ad-hospital-ahmedabad-hospitals-n82j1vjwb9-250.jpg?w=750&q=75 750w, https://images.jdmagicbox.com/comp/ahmedabad/z5/079pxx79.xx79.221013231017.v6z5/catalogue/ad-hospital-ahmedabad-hospitals-n82j1vjwb9-250.jpg?w=828&q=75 828w, https://images.jdmagicbox.com/comp/ahmedabad/z5/079pxx79.xx79.221013231017.v6z5/catalogue/ad-hospital-ahmedabad-hospitals-n82j1vjwb9-250.jpg?w=1080&q=75 1080w, https://images.jdmagicbox.com/comp/ahmedabad/z5/079pxx79.xx79.221013231017.v6z5/catalogue/ad-hospital-ahmedabad-hospitals-n82j1vjwb9-250.jpg?w=1200&q=75 1200w, https://images.jdmagicbox.com/comp/ahmedabad/z5/079pxx79.xx79.221013231017.v6z5/catalogue/ad-hospital-ahmedabad-hospitals-n82j1vjwb9-250.jpg?w=1920&q=75 1920w, https://images.jdmagicbox.com/comp/ahmedabad/z5/079pxx79.xx79.221013231017.v6z5/catalogue/ad-hospital-ahmedabad-hospitals-n82j1vjwb9-250.jpg?w=2048&q=75 2048w, https://images.jdmagicbox.com/comp/ahmedabad/z5/079pxx79.xx79.221013231017.v6z5/catalogue/ad-hospital-ahmedabad-hospitals-n82j1vjwb9-250.jpg?w=3840&q=75 3840w",
  },
  {
    id: 102,
    name: "Jincy Multispeciality Hospital",
    category: "Hospitals",
    description:
      "Laparoscopy n endoscopy n general surgery n general physician availability",
    address:
      "305,3rd Floor, The Orange Mall, near Bus Stand, opposite Sharda Petrol Pump, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "090330 51595",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbnyIysIajoBOy1MoQUTBC7iD3y6boMndxQ&s",
  },
  {
    id: 103,
    name: "Navya Orthopedic & Maternity Hospital",
    category: "Hospitals",
    description:
      "Best in Class Hospital Facility in the Orthopedics and Maternity Care",
    address:
      "Central Square, 304-310, New, near KB ROYAL PHOENIX, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "090818 84415",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6SlxwgxvACa3L63VpiRsDVEntsH1ABbjsg&s",
  },
  {
    id: 104,
    name: "Aashirwad Hospital",
    category: "Hospitals",
    description: "Hospital",
    address:
      "1st Floor, Orange Mall, Nigam Nagar, Gandhinagar, Ahmedabad, Gujarat 382424",
    contact: "094080 52575",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 105,
    name: "Shreeji Hospital - Dr.Nidhi & Dr.Nikesh Thakkar",
    category: "Hospitals",
    description:
      "1) We provide best health care Treatment in all types of disease like Maleria -Dengue, Chicken - Guniea, Typhoid, Jaundice, Diarrhoea, vomiting, Fungle - skin infection, COPD , Blood pressure, Diabetes 2) All type of blood reports ( Laboratory Test) will be done here 3) Ayurvedic treatment available For Blood pressure & Diabetes & Gas- Acidity ( without any side effects) 4) Glucometer (sugar check machine) & Nebulizer machine available & Spo2 machine available 5) In accident Case we will take Stitch with lattest Technology of Stepller without any pain 6) Ear Repairing ( kanni boot) will done here without any pain",
    address: "G/F 2, Vivaan Elementos Rd, Ahmedabad, Gujarat 382421",
    contact: "-",
    imageUrl:
      "https://content.jdmagicbox.com/comp/ahmedabad/w6/079pxx79.xx79.150803172840.k2w6/catalogue/dr-nilesh-thakkar-jalaram-hospital--jivraj-park-ahmedabad-microdentistry-clinics-0lstym0rrh.jpg",
  },
  {
    id: 106,
    name: "Satyamev Hospital - Multispeciality | Mediclaim | Emergency",
    category: "Hospitals",
    description:
      "Satyamev Hospital is multispecialty hospital ,situated in Chandkheda. Satyamev Hospital has 24/7 Emergency service with 16 bed ICU having ventilators and dialysis. Satyamev Hospital is on panel with all Mediclaim companies and corporates like ONGC.",
    address:
      "Satyamev Arcade, Bus Stop, State Highway, near Chandkheda, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "089800 18180",
    imageUrl:
      "https://mediniz-images-2018-100.s3.ap-south-1.amazonaws.com/post-images/ABOUT%20US%20%20copy%20copy_1667384100.jpg",
  },
  {
    id: 107,
    name: "Pushp Hospital And Maternity Home",
    category: "Hospitals",
    description:
      "Embrace a new era of women's healthcare at Pushp Hospital and Maternity Home, centrally positioned in Ahmedabad. Their commitment to providing comprehensive reproductive health services stems from a deep understanding of the sensitive nature of the choices women face. At their facility in Chandkheda, they prioritise confidentiality, safety, and empathy. They believe every woman should have autonomy over her body and access to safe medical procedures. That is why they offer judgement-free abortion services, contraception, STI testing and treatment, and more. Their team creates an atmosphere of compassion because they know this can be an emotionally difficult time.",
    address:
      "Shop number 54, KB ROYAL PHOENIX, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "078741 75152",
    imageUrl:
      "https://content.jdmagicbox.com/comp/ahmedabad/b9/079pxx79.xx79.170809105002.k2b9/catalogue/pushp-hospital-and-maternity-home-chandkheda-ahmedabad-hospitals-qj7o06e3rv.jpg",
  },
  {
    id: 108,
    name: "Unity Hospital, Chandkheda",
    category: "Hospitals",
    description:
      "Unity hospital is a 30 bedded Multispeciality hospital located at the center of Chandkheda area, Ahmedabad. It has ICU with ventilator & Dialysis facility, isolation room & admission facility which offers economy (general ward) to delux and semispecial rooms. The motto of Unity Hospital is care with quality cure for its patients.",
    address:
      "Shripal Nagar Soceity, 51, Ahmedabad - Patan Highway Rd, near BRTS Stand, Opposite Pebble Bay, Corner 51, Janta Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "094282 91000",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeNhBI3p0SWA8XFvUuCKzirHbVTN7qUvlsg&s",
  },
  {
    id: 109,
    name: "SMS Multi-Speciality Hospital",
    category: "Hospitals",
    description:
      "Smt Sms Multispeciality Hospital in Chandkheda, Ahmedabad is a top player in the category Hospitals in the Ahmedabad. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Ahmedabad. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Ahmedabad, this establishment occupies a prominent location in Chandkheda. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at Visat Gandhinagar Highway, Near Tapovan Circle, Opposite Akshar Complex 3, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Hospitals, Dermatologists, Orthopaedic Doctors, General Physician Doctors, Gynaecologist & Obstetrician Doctors, Dentists, Vaccination Centres, Multispeciality Hospitals.",
    address:
      "SMS MULTI SPECIALITY HOSPITAL, Gujarat State Highway 71, near Tapovan Circle, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "075739 49408",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqMiFSUh1r-kZ2nndC41hbB5fP9QoFU11DA&s",
  },
  {
    id: 110,
    name: "TLGH HOSPITALS",
    category: "Hospitals",
    description:
      "Established in the year 2018, Tlgh Hospitals in Chandkheda, Ahmedabad is a top player in the category Multispeciality Hospitals in the Ahmedabad. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Ahmedabad. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Ahmedabad, this establishment occupies a prominent location in Chandkheda. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at , Near Maruti Furniture, Opposite Sharda Petrol Pump, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Hospitals, Orthopaedic Doctors, Pathology Labs, ENT Doctors, General Physician Doctors, Neurologists, Gynaecologist & Obstetrician Doctors, Gastroenterologists.",
    address:
      "18/H ,karnavatisociety,Nr.maruti furniture, opp. sharda petrol pump, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "079 2329 2262",
    imageUrl:
      "https://content.jdmagicbox.com/comp/ahmedabad/u3/079pxx79.xx79.190516120542.g7u3/catalogue/tlgh-hospitals-chandkheda-ahmedabad-multispeciality-hospitals-0cayzlzd4s.jpg",
  },
  {
    id: 111,
    name: "ANSH MULTISPECIALITY HOSPITAL",
    category: "Hospitals",
    description: "Multi specialty Hospital",
    address:
      "1811, 276, IOC Rd, Subhash Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "079 2329 9999",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8x2v5hB4hd2YbqMnNiPB4AhSa9qGZGsm9Zw&s",
  },
  {
    id: 112,
    name: "Sitaba Children Hospital",
    category: "Hospitals",
    description:
      "# SITABA CHILDREN HOSPITAL, DR. CHIRAG PRAJAPATI, MBBS, DCH, EX. MAJOR... 11 years of Experience, 5 years in Indian Army, 1 year in Railway hospital, 2 year in government hospital, 3 year in private hospital, Poojan children hospital, KD hospital, Aashka hospital",
    address: "KB ROYAL PHOENIX, 53, COMPLEX, Ahmedabad, Gujarat 382424",
    contact: "075679 46319",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/k4/079pxx79.xx79.190924133602.w6k4/catalogue/sitaba-children-s-hospital-chandkheda-ahmedabad-paediatricians-z6gk86wilh.jpg",
  },
  {
    id: 113,
    name: "Shushrut Multi Speciality Hospital",
    category: "Hospitals",
    description:
      "Hospitals have been making healthcare accessible to one and all and Sushrut Multispeciality Hospital in Krishna Nagar, Ahmedabad is one such reliable hospital that is committed to providing expert medical care. Having established a firm presence as a trusted name in Hospitals, it is renowned for offering specialised services and treatments like Treatment For Diseases In Pregnancy, etc. ",
    address:
      "Rudraksh Complex, IOC Rd, opposite Bus Stand, Shantikunj Society, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098790 12005",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 114,
    name: "Nirbhay Hospital",
    category: "Hospitals",
    description:
      "Nirbhay hospital is a multispeciality hospital where ecery patient treated very well by staff and doctors. Nirbhay hospital is one stop solution with all facilities and every department of treatment like cardiology, gynecology, orthopaedic, pediatric, general surgery, nephrology, general physician, etc. ",
    address:
      "Shopper's Plaza, Shop No:15 & 16, Ground Floor, Nr. H B Kapadia school, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "075672 63108",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFZGqx9A0GaE7TFhAUy4KXNWZFIu2wJxWrw&s",
  },
  {
    id: 115,
    name: "The Lifeline Group of Hospitals",
    category: "Hospitals",
    description:
      "Multi-speciality hospital with 7beded icu ,ultra modern operation theatre, specialist ms/md O.p.D., superspeciality opd,mediclaim cashless,24#7,emergency care available",
    address:
      "IOC Rd, opp. pramukh swami mandir, Gujarat Housing Board, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098981 22262",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwj49TmZbX6jLlAppCuQJJIr7R9AtMk5-uuA&s",
  },
  {
    id: 116,
    name: "Saion Multispeciality Hospital & ICU",
    category: "Hospitals",
    description:
      "We are providing emergency medical/surgical/ambulance/pharmacy services for patients of all age groups.",
    address:
      "SAMYAK GALAXY, 1-2, Godrej Garden City Rd, nr. Umabhavani Railway Crossing Jagatpur, Ahmedabad, Gujarat 382470",
    contact: "094099 49555",
    imageUrl:
      "https://pr0.nicelocal.in/rnzPoO_uRTD5gvcQWq8D5A/630x384,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2X_0VHY9t0V_IrUdZWvdFJnNm2YYhUDYXStf4cI5I6MR7Ao95IZtBh-P1xJNd1FOjA",
  },
  {
    id: 117,
    name: "Nirmal Children Hospital",
    category: "Hospitals",
    description:
      "Our team of experienced pediatric specialists shares a common mission: to offer the highest quality medical care to children in a warm, welcoming, and child-friendly environment. We understand that children have unique healthcare needs, and we strive to make each visit to our hospital a positive and stress-free experience for both children and their parents. Our hospital is not just a healthcare facility; it's a place where children can receive expert care, grow, thrive, and smile. At children's hospital in Chandkheda, your child's health and happiness are our top priorities, and we look forward to being your trusted partner in their journey towards a healthy and bright future",
    address:
      "Shree Sarju Arena Complex, 134-135, opp. Kadi Nagrik Bank, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "093168 74674",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 118,
    name: "Satyam Hospital Laboratory & ICU Orange Mall Chandkheda",
    category: "Hospitals",
    description:
      "Ex professor medicine dept civil. Ex head of department civil Gmers. Professor and MD medicine examiner of Gujarat university.Senior MD PHYSICIAN. COMPLETE BODY CHECK UP. TREATMENT OF LUNGS HEART INTESTINE BRAIN DISEASE S. FEVER, DIARROHEA , DENGUE MALARIA PARALYSIS BLOOD PRESSURE DIABETES POISONING TREATMENT. LABORATORY 24 hour. ONGC AND LIC PANEL PHYSICIAN",
    address:
      "Orange Mall, Ahmedabad - Patan Highway Rd, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "077779 91113",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrC3dTTgM0WzvzmMi4xAVfoQihQvskJk2o4Q&s",
  },
  {
    id: 119,
    name: "Janani Maternity Home & Womens' Hospital",
    category: "Hospitals",
    description:
      "Janani Maternity And Women'S Hospital in Chandkheda, Ahmedabad is one of the most renowned Infertility Doctors in the area. Countless locals in Chandkheda have placed immense trust in the practitioner over the years. Janani Maternity And Women'S Hospital is situated at A 1st floor , kb royal alteza, dhrangad road, b/h satymev hospital, Chandkheda-382424 near dhrangad road, which is easily accessible through various modes of transport.",
    address: "4HC9+3QV, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098796 99320",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpkO5hW4g2sCYszc3AF7qQEuPTlOLUt4LmA&s",
  },
  {
    id: 120,
    name: "Vedika hospital chandkheda ahmedabad",
    category: "Hospitals",
    description:
      "Hypertension,diabetes ,heart diseases and infectious diseases specilist physician",
    address:
      "New chandkheda, first floor, Aastha Square, C 08, Tragad Rd, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "093167 99551",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97qI2KBT7_PEMePj-cE2XcczeTC6Fq-zBvA&s",
  },
  {
    id: 121,
    name: "Sentara Hospital",
    category: "Hospitals",
    description:
      "Sentara Hospital is the brainchild of Dr.Jenis Patel. He is himself an eminent Orthopedic Surgeon and guides a team of efficient and caring doctors with many beds. we can provide a NO-Compromise treatment approach to our patients.",
    address:
      "Bus Stand, 45, Karnavati Society, near Shivshakti Brts, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "088666 00922",
    imageUrl:
      "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1791042/sentara-logo_xndci0.png",
  },
  {
    id: 122,
    name: "Laxmi hospital chandkheda",
    category: "Hospitals",
    description:
      "In Ahmedabad, Gujarat, Divine Gastro & Liver hospital is a particular emergency clinic devoted to giving quality medical services to gastrointestinal issues. Dr. Gautam Tamboliya is a considerate specialist who pays attention to his patient’s concerns. He is generally viewed as the best gastroenterologist specialist in Chandkheda, Ahmedabad. He has been helping lots of patients for a long time and desires to grow his administrations the nation over. As an extraordinary endoscopy clinic and facility focus in Ahmedabad, we invest wholeheartedly in effectively serving clients in Ahmedabad, Gujarat",
    address:
      "333,334, SHREE SARJU ARENA, NEW, opp. KADI NAGRIK BANK, behind SATAYAMEV HOSPITAL, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "079841 57971",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/i7/079pxx79.xx79.220426131120.y7i7/catalogue/-dhdnkjdign.jpg",
  },
  {
    id: 123,
    name: "Rhythm Clinic and Pharmacy",
    category: "Hospitals",
    description:
      "Facilities available at our place: • Diagnosis and primary treatment of all types of minor and major diseases • Dressing facility will be given. • Nebulizer and Glucometer facility available. • Bottles of glucose will be provided. OPD timings: Monday to Saturday 10:30 AM to 1:00 PM, 6:00 PM to 8:30 PM Pharmacy Timings: Monday to Saturday 9:30 AM to 1:30 PM, 4:30 PM to 9:30 PM Sunday: 9:30 AM to 1:30 PM",
    address:
      "Shop no. 12, Rhythm Heights Near Vivaan Infinity, Off S.P. Ring Road, Zundal Circle, Ahmedabad, Gujarat 382424",
    contact: "084019 64196",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/q1/079pxx79.xx79.170520161659.c7q1/catalogue/rhythm-heart-medical-hospital-chandkheda-ahmedabad-cardiologists-9cj3f0d21y.jpg",
  },
  {
    id: 124,
    name: "Akshat Multispeciality Hospital - Gastroenterologist, Gynecologist, Cardiologist, Laparoscopic Surgeon in Ahmedabad",
    category: "Hospitals",
    description:
      "Discover AKSHAT Hospital in Motera, Ahmedabad, your most premium super-specialty private hospital with superior ICU/Critical Care services and a broad range of tertiary care services. We provide cutting-edge Modular OT as well as modern Diagnostic Machines such as X-Ray, CT Scan, MRI, Sonography, ECG, Blood Tests, and full Body Health Checkups. Physicians, neurologists, urologists, gastroenterologists, gynaecologists, endocrinologists, cardiologists, orthopedicians, paediatricians, dentists, ENT specialists, laparoscopic surgeons, and others make up our expert medical staff. We accept CGHS, ESIC, ECHS, Railways, State Pensioners, as well as a variety of insurance companies and TPAs. We also have a floor dedicated to COVID-19 treatment.",
    address:
      "Akshat Multispeciality Hospital - Gastroenterologist, Gynecologist, Cardiologist, Laparoscopic Surgeon in Ahmedabad",
    contact: "088491 00497",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/y4/079pxx79.xx79.220520231323.b4y4/catalogue/akshat-multispeciality-hospital-motera-ahmedabad-hospitals-r28fc7tgnq.jpg",
  },
  {
    id: 125,
    name: "Aditi Chilren Hospital",
    category: "Hospitals",
    description:
      "A hospital that only caters to infants, children, adolescents, and young adults is known as a children's hospital. These hospitals are equipped with all the latest technology and medical practices. Children Hospitals in Ahmedabad provide the best treatments for almost all illnesses or medical conditions children may suffer from.",
    address:
      "Rudraksh Complex, IOC Rd, Shantikunj Society, Subhash Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "079 2750 2769",
    imageUrl:
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg",
  },
  {
    id: 126,
    name: "Utkarsh Hospital",
    category: "Hospitals",
    description:
      "Utkarsh Hospital in Chandkheda, Ahmedabad is one of the most renowned Hospitals in the area. Countless locals in Chandkheda have placed immense trust in the practitioner over the years. Utkarsh Hospital is situated at 24, Utkarsh Bunglows 2, Behind Janta Nagar, Chandkheda-382424 near Behind Janta Nagar, which is easily accessible through various modes of transport.",
    address:
      "24, Utkarsh Bunglows-2, Chandkheda, behind Janta Nagar, Ahmedabad, Gujarat 382424",
    contact: "098794 73662",
    imageUrl:
      "https://images.jdmagicbox.com/comp/ahmedabad/f6/079pxx79.xx79.130824171849.k2f6/catalogue/utkarsh-hospital-chandkheda-ahmedabad-hospitals-jmwv1-250.jpg",
  },
  {
    id: 127,
    name: "Shree Sai Children Hospital",
    category: "Hospitals",
    description:
      "Paediatricians are responsible for understanding the specific needs of a growing child. These doctors are expert in diagnosing and treating health issues in infants and kids. They also monitor the changes in behaviour, skills and mental and physical development of children at every stage. If you are looking for a good paediatrician for your child, then we suggest you visit Dr. Mitesh Kanjibhai Raj (Shree Sai Children Hospital) in Chandkheda, Ahmedabad. Dr. Mitesh Kanjibhai Raj (Shree Sai Children Hospital) has been a part of the healthcare system since 2016. Dr. Mitesh Kanjibhai Raj (Shree Sai Children Hospital) has a great reputation in the industry for treating children and keeping them in the best of health.",
    address:
      "Orange Mall, 410, Sakal 59th St, near Sharda Petrol Pump, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "099131 58742",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhStSBLQ3UluYuwDOHi8wJCdDbZC93qpbSg&s",
  },
  {
    id: 128,
    name: "KRISHNA CLINIC",
    category: "Hospitals",
    description:
      "OPD SERVICE,INDOOR AND ADMISSION SERVICE, LABORATORY REPORTS, RADIOLOGY REPORTS,HOME CARE,COVID CARE,HOME BASED NURSING SERVICES, EMERGENCY OPD AND HOME VISIT SERVICE,ETC.",
    address:
      "Aastha Square, 19, satyamev hospital road, beside kadi nagrik bank, New, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "087583 69597",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/q2/079pxx79.xx79.210713135302.l4q2/catalogue/krishna-pediatric-rehabilitation-clinic-chandkheda-ahmedabad-rehabilitation-centres-1u7i9vm7c7.jpg",
  },
  {
    id: 129,
    name: "Om Maternity and Nursing home",
    category: "Hospitals",
    description:
      "Om Maternity And Nursing Home in Adalaj, Gandhinagar-gujarat is a top player in the category Hospitals in the Gandhinagar-gujarat. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Gandhinagar-gujarat. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Gandhinagar-gujarat, this establishment occupies a prominent location in Adalaj. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at Shreeji Avenue, Opposite Petrol Pump, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Hospitals, Maternity Hospitals, ICU, Nursing Homes, Maternity Care Services, OPD Services.",
    address:
      "Shreeji Avenue, Opp Petrol Pump, Patno kuvo, Adalaj First Floor F F-11, Gujarat 382421",
    contact: "070965 09946",
    imageUrl:
      "https://content.jdmagicbox.com/comp/gandhinagar-gujarat/p1/9999pxx79.xx79.220705211829.x5p1/catalogue/om-maternity-and-nursing-home-adalaj-gandhinagar-gujarat-hospitals-2c3blwskxz.jpg",
  },
  {
    id: 130,
    name: "Chitra Hospital (Dr Rohit Choudhary)",
    category: "Hospitals",
    description:
      "The core value of CHITRA HOSPITAL is serveing humanity by providing medical services accessible and affordable to all. CHITRA HOSPITAL took form in the year 1999 with a capacity of 15 beds. Dr Rohit choudhary has taken the good work forward by serving patient care.CHITRA HOSPITAL is now providing emergency services with ICU facility equipped with modern medical equipments, , well-trained staff and experienced doctors. We have received overwhelming support for our services ensures that we get to serve maximum number of people.",
    address:
      "BRTS Stop, Ekta Complex, New CG Rd, opp. Jantanagar, Corner, Kalpana Nagar, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "098250 89895",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/t9/079pxx79.xx79.090417141815.t1t9/catalogue/chitra-hospital-chandkheda-ahmedabad-hospitals-w6ohidmzoj.jpg",
  },
  {
    id: 131,
    name: "Jalaram care unit",
    category: "Hospitals",
    description:
      "Paediatricians are responsible for understanding the specific needs of a growing child. These doctors are expert in diagnosing and treating health issues in infants and kids. They also monitor the changes in behaviour, skills and mental and physical development of children at every stage. If you are looking for a good paediatrician for your child, then we suggest you visit Jalaram Children Hospital And Neonatal Care Unit in Chandkheda, Ahmedabad. Jalaram Children Hospital And Neonatal Care Unit has been a part of the healthcare system since 2010. Jalaram Children Hospital And Neonatal Care Unit has a great reputation in the industry for treating children and keeping them in the best of health.",
    address:
      "4H7F+4R4, Jalaram Children Hospital and neonatal care unit - Chandkheda, Ahmedabad",
    contact: "079 3041 6389",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/f9/079pxx79.xx79.110205124007.m2f9/catalogue/jalaram-children-hospital-and-neonatal-care-unit-chandkheda-ahmedabad-hospitals-44ymp.jpg",
  },
  {
    id: 132,
    name: "One health hospital # DR Radhik patel/ MD",
    category: "Hospitals",
    description: "CONSULTANT PHYSICIAN AND DIABETOLOGIST MD physician",
    address:
      "DEF 110, Anand Ilyf, Sardar Patel Ring Rd, near vaishnodevi circle, Tragad, Gujarat 382470",
    contact: "084603 07872",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/l9/079pxx79.xx79.221122210636.w3l9/catalogue/one-health-hospital-dr-radhik-patel-ahmedabad-efsrnsfpkw.jpg",
  },
  {
    id: 133,
    name: "Sanjivani Hospital",
    category: "Hospitals",
    description: "-",
    address: "Opp.post office, Adalaj, Gujarat 382421",
    contact: "093761 23616",
    imageUrl:
      "https://content.jdmagicbox.com/comp/gandhinagar-gujarat/r3/9999pxx79.xx79.131022171926.y5r3/catalogue/sanjeevni-general-hospital-adalaj-gandhinagar-gujarat-private-hospitals-me32d3mnac.jpg",
  },
  {
    id: 134,
    name: "Rhythm Heart And Medical Hospital",
    category: "Hospitals",
    description: "-",
    address:
      "4H7M+C74, Opp. Orange Mall, GJ SH 41, near Shivam Hospital, Chandkheda, Ahmedabad, Gujarat 382424",
    contact: "07947064211",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/ahmedabad/q1/079pxx79.xx79.170520161659.c7q1/catalogue/rhythm-heart-medical-hospital-chandkheda-ahmedabad-cardiologists-9cj3f0d21y.jpg",
  },
];

export default servicesData;
