import "./OurMenu.css";
import { MenuList } from "./OurMen.js";

function OurMenu({ category, setcategory }) {
  return (
    <div className="exploremenu" id="explore-menu">
      <h2>Explore more menu</h2>
      <p>
        Always Belive in Yourself There is a only way and the way is Hardwork{" "}
      </p>
      <div className="exploremenu_list">
        {MenuList.map((item, index) => {
          return (
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.Menu_Name ? "All" : item.Menu_Name
                )
              }
              key={index}
              className="menuimg"
            >
              <img
                className={category === item.Menu_Name ? "active" : ""}
                src={item.Menu_Image}
                alt=""
              />
              <p>{item.Menu_Name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default OurMenu;
