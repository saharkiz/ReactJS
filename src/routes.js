import React from 'react';
/* --- New Routes --- */
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/List_user'));
const Admins = React.lazy(() => import('./views/users/List_admin'));
/*const Tickets = React.lazy(() => import('./views/tickets/List_ticket'));
const ViewTicket = React.lazy(() => import('./views/tickets/View_ticket'));
const AddTicket = React.lazy(() => import('./views/tickets/Add_ticket'));
const ViewChat = React.lazy(() => import('./views/chats/View_chat'));
const Chats = React.lazy(() => import('./views/chats/List_chat'));
const OpenChats = React.lazy(() => import('./views/chats/List_openchat'));*/

const NewEmail = React.lazy(() => import('./views/email/New_email'));
const NewAdmin = React.lazy(() => import('./views/users/New_admin'));
const CalendarBooking = React.lazy(() => import('./views/booking/Calendar_booking'));
const CalendarCourse = React.lazy(() => import('./views/course/Calendar_course'));
const ViewBooking = React.lazy(() => import('./views/booking/View_booking'));
const PendingBooking = React.lazy(() => import('./views/booking/List_pendingbooking'));
const ListBooking = React.lazy(() => import('./views/booking/List_booking'));
const NewBooking = React.lazy(() => import('./views/booking/New_booking'));
const ViewCustomer = React.lazy(() => import('./views/customer/View_customer'));
const ListRental = React.lazy(() => import('./views/diveshop/List_rental'));
const ListMaintenance = React.lazy(() => import('./views/diveshop/List_maintenance'));
const ListHistory = React.lazy(() => import('./views/diveshop/List_history'));
const ViewShop = React.lazy(() => import('./views/diveshop/View_shop'));
const NewItemDiveshop = React.lazy(() => import('./views/diveshop/New_item'));
const NewCourse = React.lazy(() => import('./views/course/New_course'));
const ViewCourse = React.lazy(() => import('./views/course/View_course'));
const ViewResult = React.lazy(() => import('./views/search/View_result'));

/* --- testing -- */

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users/list_user', name: 'Users List', component: Users },
  { path: '/users/list_admin', name: 'Admin List', component: Admins },
  { path: '/users/new_admin', name: 'New Admin', component: NewAdmin },
  { path: '/email/new_email', name: 'New Email', component: NewEmail },
  { path: '/search/View_result/:term/', name: 'Result', component: ViewResult },

  { path: '/customer/View_customer/:id/', name: 'View Customer', component: ViewCustomer },
  { path: '/booking/Calendar_booking', name: 'Booking Calendar', component: CalendarBooking },
  { path: '/course/Calendar_course', name: 'Course Calendar', component: CalendarCourse },
  { path: '/booking/view_booking/:id/', name: 'View Booking', component: ViewBooking },
  { path: '/booking/new_booking/:id/', name: 'New Booking', component: NewBooking },
  { path: '/booking/list_pendingbooking', name: 'Pending Booking', component: PendingBooking },
  { path: '/booking/list_booking', name: 'List Booking', component: ListBooking },
  { path: '/diveshop/list_rental', name: 'List Rental', component: ListRental },
  { path: '/diveshop/list_maintenance', name: 'List Maintenance', component: ListMaintenance },
  { path: '/diveshop/list_history', name: 'List History', component: ListHistory },
  { path: '/diveshop/view_shop/:id/', name: 'View Shop', component: ViewShop },
  { path: '/diveshop/new_item', name: 'New Item', component: NewItemDiveshop },
  { path: '/course/view_course/:id/', name: 'View Course', component: ViewCourse },
  { path: '/course/new_course', name: 'New Course', component: NewCourse },
  /*
  { path: '/tickets/list_ticket', name: 'Tickets List', component: Tickets },
  { path: '/chats/list_chat', name: 'Chat List', component: Chats },
  { path: '/chats/list_openchat', name: 'Chat List', component: OpenChats },
  { path: '/tickets/view_ticket/:id/:email', name: 'View Ticket', component: ViewTicket },
  { path: '/tickets/add_ticket', name: 'Add Ticket', component: AddTicket },
  { path: '/chats/view_chat/:id/:email', name: 'View Chat', component: ViewChat },*/

];

export default routes;
