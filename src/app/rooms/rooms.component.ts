import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!:RoomList

  rooms: Room = {
    totalRooms:20,
    availableRooms:77,
    bookedRooms:5,

  }
  roomList : RoomList[] = []
//     {
//     roomNumber:1,
//     roomType: 'Deluxe Room',
//     amenities:'Air Conditioner, Free Wifi',
//     price:1000,
//     photos:'https://www.word.com',
//     checkinTime: new Date('11-Nov-2022'),
//     checkOutTime:new Date('12-Nov-2022'),
//     rating:4.5,
//     },
//     {
//       roomNumber:2,
//       roomType: 'Deluxe Room',
//       amenities:'Air Conditioner, Free Wifi',
//       price:1500,
//       photos:'https://www.word.com',
//       checkinTime: new Date('11-Nov-2022'),
//       checkOutTime:new Date('12-Nov-2022'),
//       rating:3.5,
//       },
//       {
//         roomNumber:3,
//         roomType: 'Private Room',
//         amenities:'Air Conditioner, Free Wifi',
//         price:1500,
//         photos:'https://www.word.com',
//         checkinTime: new Date('11-Nov-2022'),
//         checkOutTime:new Date('12-Nov-2022'),
//         rating:3.43454,
//         },

// ];
  constructor() { }

  // ngOnInit(): void {};

  ngOnInit(): void { this.roomList = [
    {
    roomNumber:1,
    roomType: 'Deluxe Room',
    amenities:'Air Conditioner, Free Wifi',
    price:1000,
    photos:'https://www.word.com',
    checkinTime: new Date('11-Nov-2022'),
    checkOutTime:new Date('12-Nov-2022'),
    rating:4.5,
    },
    {
      roomNumber:2,
      roomType: 'Deluxe Room',
      amenities:'Air Conditioner, Free Wifi',
      price:1500,
      photos:'https://www.word.com',
      checkinTime: new Date('11-Nov-2022'),
      checkOutTime:new Date('12-Nov-2022'),
      rating:3.5,
      },
      {
        roomNumber:3,
        roomType: 'Private Room',
        amenities:'Air Conditioner, Free Wifi',
        price:1500,
        photos:'https://www.word.com',
        checkinTime: new Date('11-Nov-2022'),
        checkOutTime:new Date('12-Nov-2022'),
        rating:3.43454,
        },

];}

  toggle(){
    this.rooms.availableRooms--
    this.hideRooms = !this.hideRooms;
  }

  deleteRoom(){
    this.rooms.availableRooms--
  }
  selectRoom(room:RoomList){
    this.selectedRoom = room;
  
  }

  addRoom(){
    const room:RoomList={
      roomNumber:4,
      roomType: 'Private Room',
      amenities:'Air Conditioner, Free Wifi',
      price:2000,
      photos:'https://www.word.com',
      checkinTime: new Date('11-Nov-2022'),
      checkOutTime:new Date('12-Nov-2022'),
      rating:3.43454,

    };
    room.roomNumber++
    this.roomList = [...this.roomList,room]
    
    console.log(room,">>>>>>>>>>>>>>>>>>>>>", this.roomList)

  }

}
