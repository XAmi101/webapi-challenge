const express = require('express');
const Action = require('../data/helpers/actionModel.js')
// const {validateAction, validateActionId} = require('./middleware//index');

const router = express.Router();
router.use(express.json());


router.get("/", (req, res,) => {
    Action.get()
    .then(action => res.status(200).json(action))
    .catch(() => res.status(500).json({ error: "unable to retrieve actions" }));
}); 

router.get('/:id', (req, res) => {
    id = req.params.id
    Action.get(id)
    .then(action => res.status(200).json(action))
    .catch(() => res.status(500).json({ error: "unable to retrieve actions with given id" }));
});

router.post('/', (req, res) => {
    const change = req.body
    // const change = {...req.body, project_id: req.params.id};
    // console.log("change", change);
    // if(
    //     typeof project_id === 'number' 
    //     && typeof notes === 'string'
    //     && typeof description === 'string'
    // ) {
    Action.insert(change)
    .then(action => res.status(201).json(action))
    .catch(() =>
        res.status(500).json({ errorMessage: "unable to add the action in the database" })
      );
});

router.delete('/:id', (req, res) => {
    const id = req.params.id

    Action.remove(id)
    .then(action => res.status(200).json({ message: 'The post has been deleted' }))
    .catch(() =>
      res
        .status(500)
        .json({ error: "Unable to delete action" })
    );
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;

    Action.update(id, changes)
    .then(action => res.status(200).json(action))
    .catch(() =>
      res.status(500).json({ errorMessage: "action could not be updated" })
    );
});


// function validate(req, res, next) {
//     const body = req.body;

//   if (body) {
//       if (!req.body.project_id || !req.body.description || !req.body.notes || req.body.completed === undefined) {
//           res.status(400).json({message: "missing data field"})
//       } else {
//           res.json(body)
//       }
//   } else {
//       res.status(400).json({ message: "missing user data"})
//   }
//   next();
// };

// function validateAction(req, res, next) {
//     const body = req.body
//     const name = req.body.name
//     if (Object.keys(body).length === 0) {
//         res.status(400).json({message: "Missing user data"})
//     } 
//     else if (!name) {
//         res.status(400).json({message: "Missing required name field"})
//     } else {
//         next()
//     }
// };

// function validateActionId(req, res, next) {
//     const id = req.params.id
//     Action.getById(id)
//     .then(user => {
//         if (user) {
//             req.user = user
//             next()
//         } else {
//             res.status(400).json({message: "Invalid user id"})
//         }
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json(err)
//     })
// };


module.exports = router;