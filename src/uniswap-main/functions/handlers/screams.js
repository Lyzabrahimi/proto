
const { db } = require('../util/admin');

exports.getAllScreams = (req,res) => {
    db.
        collection('screams').
        orderBy('createdAt', 'desc').
        get().
        then((data) => {
            let screams = [];
            data.forEach((doc) => {
                screams.push({
                  screamId: doc.id,
                  body: doc.data().body,
                  nom: doc.data().nom,
                  prenom:doc.data().prenom,
                  createdAt: doc.data().createdAt,
                  commentCount: doc.data().commentCount,
                  likeCount: doc.data().likeCount,
                  userImage: doc.data().userImage,
                  
                  


                });
            })
            return res.json(screams);
        })
        .catch((err) =>{ console.error(err);
    res.status(500).json({ error: err.code });
});
}
exports.postOneScream = (req,res) => {
    if (req.body.body.trim() === '') {
        return res.status(400).json({ body: 'Body must not be empty' });
      }
    const newScream = {
        body: req.body.body,
        
        nom : req.user.nom, 
        prenom:req.user.prenom,
        userImage:req.user.imageUrl,
        likeCount:0,
        commentCount:0,
      
       createdAt: new Date().toISOString(),
       
   

        
    };
    db.
        collection('screams')
        .add(newScream)
        .then((doc) => {
          
          const resScream = newScream;
          resScream.screamId = doc.id;
          res.json(resScream);
        })
        .catch((err) => {
            res.status(500).json({ error: `somthing went wrong` });
            console.error(err);

        });
}
exports.getScream = (req, res) => {
  let screamData = {};
  db.doc(`/screams/${req.params.screamId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Scream not found' });
      }
      screamData = doc.data();
      screamData.screamId = doc.id;
      return db
         .collection('comments')
        .orderBy('createdAt', 'desc')
        .where('screamId', '==', req.params.screamId)
        .get();
    })
    .then((data) => {
      screamData.comments = [];
      data.forEach((doc) => {
        screamData.comments.push(doc.data());
      });
      return res.json(screamData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.commentOnScream = (req, res) => {
  if (req.body.body.trim() === '')
    return res.status(400).json({ comment: 'Must not be empty' });

  const newComment = {
    body: req.body.body,
    createdAt: new Date().toISOString(),
    screamId: req.params.screamId,
    nom: req.user.nom,
    prenom:req.user.prenom,
    userImage: req.user.imageUrl,
    likeCount: 0,
    commentCount: 0
  };
  console.log(newComment);

  db.doc(`/screams/${req.params.screamId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Scream not found' });
      }
      return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
    })
    .then(() => {
      return db.collection('comments').add(newComment);
    })
    .then(() => {
      res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};
exports.likeScream = (req, res) => {
  const likeDocument = db
    .collection('likes')
    .where('email', '==', req.user.email)
    .where('screamId', '==', req.params.screamId)
    .limit(1);

  const screamDocument = db.doc(`/screams/${req.params.screamId}`);

  let screamData;

  screamDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        screamData = doc.data();
        screamData.screamId = doc.id;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: 'Scream not found' });
      }
    })
    .then((data) => {
      if (data.empty) {
        return db
          .collection('likes')
          .add({
            screamId: req.params.screamId,
            userHandle: req.user.handle
          })
          .then(() => {
            screamData.likeCount++;
            return screamDocument.update({ likeCount: screamData.likeCount });
          })
          .then(() => {
            return res.json(screamData);
          });
      } else {
        return res.status(400).json({ error: 'Scream already liked' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

