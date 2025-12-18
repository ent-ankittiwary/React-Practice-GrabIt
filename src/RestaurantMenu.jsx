// import { useEffect, useState } from "react";
// import { MENU_API } from "./utils/constants";
// import { useParams } from "react-router-dom";
// const RestaurantMenu = () => {
//   const menuUrl = useParams();
//   console.log(menuUrl);
//   const fetchMenu = async () => {
//     const data = await fetch(
//       `${MENU_API}${menuUrl}`
//     );
//     const json = await data.json();
//     console.log(json);
//   };

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   return (
//     <div className="menu">
//       {/* <h1>{json.page_info.name}</h1> */}
//       <h2>Menu</h2>
//       <ul>
//         <li>Biryani</li>
//         <li>Burgers</li>
//         <li>Diet Coke</li>
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import { MENU_API } from "./utils/constants";

const RestaurantMenu = () => {
  const { newMenuUrl } = useParams();
  console.log(newMenuUrl);
  // const location = useLocation();
  // const finalUrl = location.state?.finalUrl;

  // ✅ Store full menu JSON here
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 added

  useEffect(() => {
    // if (!finalUrl) return;

    const fetchMenu = async () => {
      try {
        const response = await fetch(`${MENU_API}/kanpur/${newMenuUrl}/order`);
        const json = await response.json();
        console.log(json);

        // ✅ Save JSON globally in component
        setMenuData(json);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false); // 🔹 stop shimmer
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <ShimmerMenu />;
  }

  return (
    <div className="menu">
      {/* <h1>Restaurant ID: {resId}</h1> */}
      {/* ✅ Use any JSON field safely */}
      <h2>{menuData?.page_info?.pageTitle}</h2>
      {/* <h3>Rating: {menuData?.data?.rating}</h3>
      <p>City: {menuData?.data?.city}</p> */}

      <h2>Menu</h2>
    </div>
  );
};

export default RestaurantMenu;
