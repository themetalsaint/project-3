const db = require('../config/connection');
const { User, Notes } = require('../models');
const userSeeds = require('./userSeeds.json');
const notesSeeds = require('./thoughtSeeds.json');

db.once('open', async () => {
  try {
    await Notes.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < notesSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Notes.create(notesSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
