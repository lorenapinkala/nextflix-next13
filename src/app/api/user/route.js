import { createUser } from "./postController";
import { addFavorite } from "./postController";

export default {
    POST: {
      '/api/user': createUser,
      '/api/user/favorite': addFavorite,
    },
};



// //update a user
// router.put("/update/:_id", UserController.updateUser);

// //unsubscribe a user
// router.put("/unsubscribe/:_id", UserController.unsubscribeUser);

// //get an user
// router.get("/findone/:_id", UserController.findoneUser);

// //get all users
// router.get("/findall", UserController.findallUser);

// //delete a movie from favorites-- id del usuario- id de la peli
// router.delete("/unsuscribe/:_id/:movieId", UserController.removeMovie);


// router.get("/favorite/:_id", UserController.getFavorites);