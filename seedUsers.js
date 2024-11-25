require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/user');

const seedUsers = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await User.create([
    { name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { name: 'Jane Doe', email: 'jane@example.com', password: 'password123' },
  ]);

  console.log('Users seeded successfully');
  process.exit();
};

seedUsers();
