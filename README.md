# pharmacy
A simple vaccination appointements app 

The First iteration on this app should offer the following features:

- Allow pharmacies to register and maintain their stock of vaccines (Hopefully we can integrate automatic stock management with the distributor)
- Allow visitors to look up pharmacies by location, preview the stock availble of each vaccine, and book an appointment.
- Upon booking, the pharmacist should be able to confirm the appointment and and a sms notification is, then, sent back to the vaccine candidate.
- with each confirmation, the vaccine stock should update the Reserved quantity and the Remaining one.

More features to follow.

Pharmacy object:
  - Name
  - Address [Street] [number] [City] [State] [ZipCode]
  - MapLocation (optional)
  - PhoneNumber
  - email
  - VaccineStock: [VaccineTypeA : remainingQty, reservedQty], [VaccineTypeB : remainingQty, reservedQty],... ,[VaccineTypeN : remainingQty, reservedQty]
  
  
