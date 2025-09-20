// export type UserLocation = {
//   lat: number;
//   lng: number;
//   address?: string;
// };

// export async function getUserLocation(
//   withAddress: boolean = false,
//   apiKey?: string
// ): Promise<UserLocation> {
//   return new Promise((resolve, reject) => {
//     if (!navigator.geolocation) {
//       reject(new Error("Geolocation is not supported by your browser"));
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

//         let address: string | undefined;

//         if (withAddress && apiKey) {
//           try {
//             const res = await fetch(
//               `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
//             );
//             const data = await res.json();
//             address = data.results?.[0]?.formatted_address || "Address not found";
//           } catch (err) {
//             console.error("Failed to fetch address:", err);
//           }
//         }

//         resolve({ lat, lng, address });
//       },
//       (err) => {
//         reject(err);
//       }
//     );
//   });
// }

export type UserLocation = {
  lat: number;
  lng: number;
};

export async function getUserLocation(): Promise<UserLocation> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
}

