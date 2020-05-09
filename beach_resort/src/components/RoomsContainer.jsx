// Using Higher Order Components to wrap components withing context consumer
import React from "react";
import { RoomsFilter, RoomsList, Loading } from "./";
import { withRoomsConsumer } from "../context";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomsConsumer(RoomsContainer);

// Using Consumer from context API
// import React from "react";
// import { RoomsFilter, RoomsList, Loading } from "./";
// import { RoomConsumer } from "../context";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
