import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";
import { useContext } from "react";

function MeetupItem(props) {
  const favouritesContext = useContext(FavouritesContext);
  const itemIsFavourite = favouritesContext.itemIsFavourite(props.id);
  console.log(itemIsFavourite);
  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouritesContext.removeFavourite(props.id);
    } else {
      favouritesContext.addFavourite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  };
  const deleteItemHandler = () => {
    fetch(
      `https://react-http-1fd45-default-rtdb.firebaseio.com/meetups/${props.id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    favouritesContext.removeFavourite(props.id);
  };

  console.log(props.id);
  console.log(favouritesContext.favourites);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove From Favourites" : "Add To Favourites"}
          </button>
          <button onClick={deleteItemHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
