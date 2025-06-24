const menuData = {
  dishes: [
    {
      id: 1,
      img: require('../assyts/tea 1.png'),
      main_dish: 'Spaghetti Carbonara',
      description:
        'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    },
    {
      id: 2,
      img: require('../assyts/Vector.png'),
      main_dish: 'Cheeseburger',
      description:
        'A juicy grilled beef patty topped with melted cheese, lettuce, tomato, and a soft bun.',
    },
    {
      id: 3,
      img: require('../assyts/Vector (1).png'),
      main_dish: 'Sushi Platter',
      description:
        'A selection of fresh sushi rolls and sashimi, served with soy sauce and wasabi.',
    },
    {
      id: 4,
      img: require('../assyts/slice.png'),
      main_dish: 'Margherita Pizza',
      description:
        'A simple and delicious pizza topped with fresh tomato sauce, mozzarella, and basil.',
    },
  ],
  extra_images: [
    {
      id: 1,
      title: 'Chocolate Cake',
    },
    {
      id: 2,
      title: 'Fresh Orange Juice',
    },
  ],
  services: [
    {
      id: 1,
      img: require('../assyts/hand.png'),
      main_dish: 'Caterings',
      description:
        'In the new era of technology we look in the future with certainty for life.',
    },
    {
      id: 2,
      img: require('../assyts/birthday.png'),
      main_dish: 'Birthdays',
      description:
        'In the new era of technology we look in the future with certainty for life.',
    },
    {
      id: 3,
      img: require('../assyts/wedding.png'),
      main_dish: 'Weddings',
      description:
        'In the new era of technology we look in the future with certainty for life.',
    },
    {
      id: 4,
      img: require('../assyts/friends.png'),
      main_dish: 'Events',
      description:
        'In the new era of technology we look in the future with certainty for life.',
    },
  ],
  reviews: [
    {
      id:1,
      title: 'The best restaurant',
      content:
        'The food was absolutely delicious, and the service was top-notch. Will definitely visit again!',
      author: 'Sophire Robson',
      location: 'Los Angeles, CA',
      img: require('../assyts/Sophire Robson.png'),
    },
    {
      id:2,

      title: 'Amazing Experience',
      content:
        'The food was absolutely delicious, and the service was top-notch. Will definitely visit again!',
      author: 'mat cannon',
      location: 'New York, NY',
      img: require('../assyts/mat cannon.png'),
    },
    {
      id:3,

      title: 'Highly Recommended',
      content:
        'The food was absolutely delicious, and the service was top-notch. Will definitely visit again!',
      author: 'andy smith',
      location: 'Chicago, IL',
      img: require('../assyts/andy smith.png'),
    },
  ],
  blogPosts: [
    {
      id: 1,
      img: require('../assyts/burger.png'),
      date: 'January 5, 2023',
      title: 'The ultimate guide to crafting delicious pasta dishes',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Gravida nisi cras enim quis nibh varius amet gravida ut facilisis.',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 2,
      img: require('../assyts/frize.png'),
      date: 'January 6, 2023',
      title: '5 secrets to making the best homemade sushi',
      content: 'Some blog content here...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 3,
      img: require('../assyts/chicken.png'),
      date: 'January 7, 2023',
      title: 'How to bake a perfect chocolate cake',
      content: 'Some blog content here...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 4,
      img: require('../assyts/cupcake.png'),
      date: 'January 8, 2023',
      title: 'Tips for grilling the juiciest steak at home',
      content: 'Some blog content here...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 5,
      img: require('../assyts/slicepizza.png'),
      date: 'January 9, 2023',
      title: 'The best ways to enhance your morning coffee',
      content: 'Some blog  here...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 6,
      img: require('../assyts/frize.png'),
      date: 'January 10, 2023',
      title: 'Healthy smoothie recipes to kickstart your day',
      content:
        'Learn how to blend the perfect smoothie for energy and health...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 7,
      img: require('../assyts/frize.png'),
      date: 'January 11, 2023',
      title: 'The art of making a perfect fresh salad',
      content:
        'Discover the best ingredients and dressings for a tasty salad...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 8,
      img: require('../assyts/frize.png'),
      date: 'January 12, 2023',
      title: 'Warm up with these homemade soup recipes',
      content: 'Simple and delicious soups to keep you cozy during winter...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 9,
      img: require('../assyts/frize.png'),
      date: 'January 13, 2023',
      title: 'Fluffy pancake recipes for the perfect breakfast',
      content: 'Step-by-step guide to making light and airy pancakes...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 10,
      img: require('../assyts/frize.png'),
      date: 'January 14, 2023',
      title: 'How to make homemade ice cream like a pro',
      content: 'Cool down with these easy and fun ice cream recipes...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 11,
      img: require('../assyts/frize.png'),
      date: 'January 14, 2023',
      title: 'How to make homemade ice cream like a pro',
      content: 'Cool down with these easy and fun ice cream recipes...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
    {
      id: 12,
      img: require('../assyts/frize.png'),
      date: 'January 14, 2023',
      title: 'How to make homemade ice cream like a pro',
      content: 'Cool down with these easy and fun ice cream recipes...',
      titleprepare: 'How to make it',
      contentprepare:
        'Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful resultsSeasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beefs natural flavors without overshadowing them.Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty thats firm enough to hold together, but not compressed.Cooking: High heat is crucial. Whether youre grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.',
    },
  ],
  menuz: [
    {
      id: 1,
      name: 'Fried Eggs',
      price: 9.99,
      category: 'Breakfast',
      description: 'Made with eggs, lettuce, salt, oil, and other ingredients.',
      img: require('../assyts/egg.jpg'),
    },
    {
      id: 2,
      name: 'Omelette',
      price: 7.99,
      category: 'Breakfast',
      description: 'Eggs mixed with veggies, cheese, and seasoning.',
      img: require('../assyts/egg.jpg'),
    },
    {
      id: 3,
      name: 'Pancakes',
      price: 8.99,
      category: 'Breakfast',
      description: 'Fluffy pancakes served with syrup and fresh fruits.',
      img: require('../assyts/egg.jpg'),
    },
    {
      id: 4,
      name: 'French Toast',
      price: 10.99,
      category: 'Breakfast',
      description: 'Golden brown toast topped with powdered sugar and syrup.',
      img: require('../assyts/egg.jpg'),
    },

    // 🍰 Dessert (4 items)
    {
      id: 5,
      name: 'Chocolate Cake',
      price: 14.99,
      category: 'Dessert',
      description: 'Rich chocolate cake with a creamy filling.',
      img: require('../assyts/ee.png'),
    },
    {
      id: 6,
      name: 'Cheesecake',
      price: 12.99,
      category: 'Dessert',
      description: 'Creamy cheesecake with a graham cracker crust.',
      img: require('../assyts/ee.png'),
    },
    {
      id: 7,
      name: 'Ice Cream Sundae',
      price: 8.99,
      category: 'Dessert',
      description: 'Vanilla ice cream topped with chocolate sauce and nuts.',
      img: require('../assyts/ee.png'),
    },
    {
      id: 8,
      name: 'Apple Pie',
      price: 9.99,
      category: 'Dessert',
      description: 'Classic apple pie with cinnamon flavor.',
      img: require('../assyts/ee.png'),
    },

    // 🍗 Main Dish (4 items)
    {
      id: 9,
      name: 'Grilled Chicken',
      price: 19.99,
      category: 'Main Dish',
      description: 'Juicy grilled chicken served with fresh vegetables.',
      img: require('../assyts/food2.png'),
    },
    {
      id: 10,
      name: 'Steak',
      price: 25.99,
      category: 'Main Dish',
      description: 'Tender, juicy steak grilled to perfection.',
      img: require('../assyts/food2.png'),
    },
    {
      id: 11,
      name: 'Spaghetti Carbonara',
      price: 15.99,
      category: 'Main Dish',
      description: 'Pasta with creamy sauce, bacon, and Parmesan cheese.',
      img: require('../assyts/food2.png'),
    },
    {
      id: 12,
      name: 'Salmon Fillet',
      price: 21.99,
      category: 'Main Dish',
      description: 'Grilled salmon fillet with lemon butter sauce.',
      img: require('../assyts/food2.png'),
    },

    // 🥤 Drinks (4 items)
    {
      id: 13,
      name: 'Orange Juice',
      price: 4.99,
      category: 'Drinks',
      description: 'Freshly squeezed orange juice.',
      img: require('../assyts/glass.png'),
    },
    {
      id: 14,
      name: 'Lemonade',
      price: 3.99,
      category: 'Drinks',
      description: 'Refreshing homemade lemonade with mint.',
      img: require('../assyts/glass.png'),
    },
    {
      id: 15,
      name: 'Iced Coffee',
      price: 5.99,
      category: 'Drinks',
      description: 'Cold brewed coffee with ice and milk.',
      img: require('../assyts/glass.png'),
    },
    {
      id: 16,
      name: 'Green Tea',
      price: 4.49,
      category: 'Drinks',
      description: 'Hot green tea with honey and lemon.',
      img: require('../assyts/glass.png'),
    },
  ],

  categories: [
    { id: 1, name: 'Main Dish' },
    { id: 2, name: 'Breakfast' },
    { id: 3, name: 'Dessert' },
    { id: 4, name: 'Drinks' },
  ],
};

export default menuData;
