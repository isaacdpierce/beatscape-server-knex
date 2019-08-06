const express = require('express');
const SoundscapesService = require('../services/soundscapes-service');

const soundscapesRouter = express.Router();
const jsonParser = express.json();

soundscapesRouter.route('/').get((req, res, next) => {
  const knexInstance = req.app.get('db');
  SoundscapesService.getAllSoundscapes(knexInstance)
    .then(soundscapes => {
      res.json(soundscapes);
    })
    .catch(next);
});

soundscapesRouter.route('/:soundscape_id').get((req, res, next) => {
  const knexInstance = req.app.get('db');
  SoundscapesService.getById(knexInstance, req.params.soundscape_id)
    .then(soundscape => {
      if (!soundscape) {
        return res.status(404).json({
          error: { message: `Soundscape doesn't exist` },
        });
      }
      res.json(soundscape);
    })
    .catch(next);
});

module.exports = soundscapesRouter;

// ! Code for fetching aws data on server - works but currently too slow - need to do more research
// ! If using - need to require axios
// soundscapesRouter.route('/:soundscape_id').get((req, res, next) => {
//   const knexInstance = req.app.get('db');
//   SoundscapesService.getById(knexInstance, req.params.soundscape_id)
//     .then(async dbResponse => {
//       const urls = dbResponse.stems.map(stem => stem.sources[0]);
//       const promises = urls.map(async url => {
//         const response = await axios({
//           responseType: 'arraybuffer',
//           url: url,
//           method: 'get',
//           headers: {
//             'Content-Type': 'audio/mp3',
//           },
//         })
//         console.log(response.data.data);
//         return response.data
//       })
//       const results = await Promise.all(promises)
//       res.json(results)
//     })
//     .catch(next);
// });