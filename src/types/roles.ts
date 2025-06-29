export type UserRole = "farmer" | "driver" | "admin";

export type User = {
  uid: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  createdAt: number;
  password:string;
};

export type Vehicle = {
  id: string;
  driverId: string;
  type: "tractor" | "truck" | "van";
  registrationNumber: string;
  capacityInKg: number;
  availability: boolean;
  location: string;
};

export type TransportRequest = {
  id: string;
  farmerId: string;
  cropType: string;
  quantityInKg: number;
  pickupLocation: string;
  dropLocation: string;
  status: "pending" | "accepted" | "rejected" | "completed";
  createdAt: number;
};

export type Booking = {
  id: string;
  requestId: string;
  vehicleId: string;
  driverId: string;
  farmerId: string;
  confirmedAt: number;
  status: "active" | "completed" | "cancelled";
};

export type Location = {
  id: string;
  name?: string | null;
  lat: number;
  lng: number;
  description?: string;

};

//  Re-export all as a single namespace-style object
type FarmDriveTypes = {
  // these are just aliases for cleaner imports; types still need to be imported directly
  UserRole: UserRole;
  User: User;
  Vehicle?: Vehicle;
  TransportRequest?: TransportRequest;
  Booking?: Booking;
  Location?: Location;
};

export default FarmDriveTypes;
