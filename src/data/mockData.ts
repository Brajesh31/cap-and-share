import { FoodPost } from '../types/food';

// Helper function to add hours to current date
const addHours = (hours: number): string => {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  return date.toISOString();
};

export const mockFoodPosts: FoodPost[] = [
  {
    id: '1',
    title: 'Homemade Vegetable Biryani',
    description: 'Freshly made vegetable biryani. Made too much for our hostel event. Contains rice, mixed vegetables, and mild spices.',
    servings: 5,
    location: 'Block A Hostel, Common Room',
    expiryTime: addHours(4),
    postedBy: 'Priya S.',
    imageUrl: 'https://images.pexels.com/photos/7438539/pexels-photo-7438539.jpeg',
    postedAt: addHours(-1)
  },
  {
    id: '2',
    title: 'Extra Pizza Slices',
    description: 'Leftover pizza from department meeting. 8 slices of vegetable pizza, still warm!',
    servings: 8,
    location: 'Computer Science Building, Room 202',
    expiryTime: addHours(2),
    postedBy: 'Raj M.',
    imageUrl: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
    postedAt: addHours(-0.5)
  },
  {
    id: '3',
    title: 'Fresh Fruit Platter',
    description: 'Leftover fruit platter from morning event. Includes apple slices, oranges, and grapes. All washed and ready to eat.',
    servings: 6,
    location: 'Student Center, Main Lobby',
    expiryTime: addHours(3),
    postedBy: 'Sarah K.',
    imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
    postedAt: addHours(-2)
  },
  {
    id: '4',
    title: 'Vegetable Sandwiches',
    description: 'Extra sandwiches from our club meeting. Contains cucumber, tomato, and cheese. Freshly made this afternoon!',
    servings: 4,
    location: 'Library Cafe',
    expiryTime: addHours(5),
    postedBy: 'Alex J.',
    imageUrl: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg',
    postedAt: addHours(-1.5)
  },
  {
    id: '5',
    title: 'Chocolate Brownies',
    description: 'Homemade brownies from baking club. Rich chocolate flavor, no nuts. About a dozen pieces left.',
    servings: 12,
    location: 'Arts Building, Room 101',
    expiryTime: addHours(10),
    postedBy: 'Maya P.',
    imageUrl: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
    postedAt: addHours(-3)
  },
  {
    id: '6',
    title: 'Pasta Salad',
    description: 'Cold pasta salad with vegetables and Italian dressing. Perfect for a quick lunch or dinner!',
    servings: 3,
    location: 'Sports Complex Cafeteria',
    expiryTime: addHours(6),
    postedBy: 'David T.',
    imageUrl: 'https://images.pexels.com/photos/6147096/pexels-photo-6147096.jpeg',
    postedAt: addHours(-4)
  },
  {
    id: '7',
    title: 'Masala Dosa',
    description: 'Fresh masala dosa with coconut chutney and sambar. Extra from morning breakfast.',
    servings: 4,
    location: 'South Indian Canteen',
    expiryTime: addHours(2),
    postedBy: 'Ravi K.',
    imageUrl: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    postedAt: addHours(-1)
  },
  {
    id: '8',
    title: 'Veg Spring Rolls',
    description: 'Crispy vegetable spring rolls from Chinese food fest. Served with sweet chili sauce.',
    servings: 10,
    location: 'International Food Court',
    expiryTime: addHours(3),
    postedBy: 'Lin W.',
    imageUrl: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
    postedAt: addHours(-2)
  },
  {
    id: '9',
    title: 'Gulab Jamun',
    description: 'Fresh and warm gulab jamun from cultural event. Perfect dessert!',
    servings: 15,
    location: 'Cultural Center',
    expiryTime: addHours(4),
    postedBy: 'Anita S.',
    imageUrl: 'https://images.pexels.com/photos/14467427/pexels-photo-14467427.jpeg',
    postedAt: addHours(-1)
  },
  {
    id: '10',
    title: 'Mixed Vegetable Curry',
    description: 'Homestyle mixed vegetable curry. Perfect with rice or rotis.',
    servings: 6,
    location: 'Girls Hostel Kitchen',
    expiryTime: addHours(5),
    postedBy: 'Meera R.',
    imageUrl: 'https://images.pexels.com/photos/7438715/pexels-photo-7438715.jpeg',
    postedAt: addHours(-3)
  },
  {
    id: '11',
    title: 'Fruit Custard',
    description: 'Creamy fruit custard with mixed fruits. Perfect dessert option!',
    servings: 8,
    location: 'Cafeteria Building',
    expiryTime: addHours(6),
    postedBy: 'Neha P.',
    imageUrl: 'https://images.pexels.com/photos/13998618/pexels-photo-13998618.jpeg',
    postedAt: addHours(-2)
  },
  {
    id: '12',
    title: 'Veg Manchurian',
    description: 'Indo-Chinese vegetable manchurian with gravy. Spicy and delicious!',
    servings: 5,
    location: 'Chinese Food Stall',
    expiryTime: addHours(3),
    postedBy: 'Amy L.',
    imageUrl: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg',
    postedAt: addHours(-1)
  }
];