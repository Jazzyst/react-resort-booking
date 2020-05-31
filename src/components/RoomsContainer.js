import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} =context;
    if(loading){
       return <Loading/>
    }
    return(
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}
export default withRoomConsumer(RoomContainer);






// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';
//
// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) =>{
//                     console.log(value);
//                     const {loading, sortedRoms, rooms} =value;
//                     if(loading){
//                        return <Loading/>
//                     }
//                     return(
//                         <div>
//                             Hello from Rooms Container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRoms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//
//     );
// };
//
// export default RoomsContainer;
