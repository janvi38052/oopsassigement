class Entity {
    constructor(id) {
        if (new.target === Entity) {
            throw new Error("We cannot create an instance of the Entity class");
        }
        this.id = id;
    }

    getId() {
        return this.id;
    }

    describe() {
        throw new Error("Method describe must be implemented");
    }
}

class Station extends Entity {
    constructor(id, stationId, name) {
        super(id);
        this.stationId = stationId;
        this.name = name;
    }

    describe() {
        return `Station ID: ${this.stationId} (Entity ID: ${this.getId()})\nName: ${this.name}\nWelcome to Station ${this.name}. Start your journey!`;
    }
}

class Train extends Entity {
    constructor(id, trainId, seatAvailable, source, destination, startTime) {
        super(id);
        this.trainId = trainId;
        this.seatAvailable = seatAvailable;
        this.source = source;
        this.destination = destination;
        this.startTime = startTime;
    }

    describe() {
        return `Train ID: ${this.trainId} (Entity ID: ${this.getId()})\nSeats Available: ${this.seatAvailable}\nRoute: ${this.source} to ${this.destination}\nDeparture Time: ${this.startTime} o'clock`;
    }
}

class Passenger extends Entity {
    constructor(id, passengerId, name, address) {
        super(id);
        this.passengerId = passengerId;
        this.name = name;
        this.address = address;
    }

    describe() {
        return `Passenger ID: ${this.passengerId} (Entity ID: ${this.getId()})\nName: ${this.name}\nAddress: ${this.address}\nWishing you a pleasant journey!`;
    }
}

class Payment extends Entity {
    constructor(id, paymentId, paymentMethod, amount, ticketId) {
        super(id);
        this.paymentId = paymentId;
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.ticketId = ticketId;
    }

    describe() {
        return `Payment ID: ${this.paymentId} (Entity ID: ${this.getId()})\nAmount: ${this.amount}\nMethod: ${this.paymentMethod}\nTicket ID: ${this.ticketId}`;
    }
}

class RailwayCompany extends Entity {
    constructor(id, companyId, name, headquarters, establishedDate) {
        super(id);
        this.companyId = companyId;
        this.name = name;
        this.headquarters = headquarters;
        this.establishedDate = establishedDate;
    }

    describe() {
        return `Company ID: ${this.companyId} (Entity ID: ${this.getId()})\nName: ${this.name}\nHeadquarters: ${this.headquarters}\nEstablished Date: ${this.establishedDate}`;
    }
}

class Cancellation extends Entity {
    constructor(id, cancellationId, ticketId, cancellationDate, reason) {
        super(id);
        this.cancellationId = cancellationId;
        this.ticketId = ticketId;
        this.cancellationDate = cancellationDate;
        this.reason = reason;
    }

    describe() {
        return `Cancellation ID: ${this.cancellationId} (Entity ID: ${this.getId()})\nTicket ID: ${this.ticketId}\nCancellation Date: ${this.cancellationDate}\nReason: ${this.reason}`;
    }
}

class Booking extends Entity {
    constructor(id, bookingId, passengerId, trainId, bookingDate, numberOfSeats) {
        super(id);
        this.bookingId = bookingId;
        this.passengerId = passengerId;
        this.trainId = trainId;
        this.bookingDate = bookingDate;
        this.numberOfSeats = numberOfSeats;
    }

    describe() {
        return `Booking ID: ${this.bookingId} (Entity ID: ${this.getId()})\nPassenger ID: ${this.passengerId}\nTrain ID: ${this.trainId}\nBooking Date: ${this.bookingDate}\nNumber of Seats: ${this.numberOfSeats}`;
    }
}

class BookingAgent extends Entity {
    constructor(id, agentId, name, contactNumber, email, agencyName) {
        super(id);
        this.agentId = agentId;
        this.name = name;
        this.contactNumber = contactNumber;
        this.email = email;
        this.agencyName = agencyName;
    }

    describe() {
        return `Agent ID: ${this.agentId} (Entity ID: ${this.getId()})\nName: ${this.name}\nContact Number: ${this.contactNumber}\nEmail: ${this.email}\nAgency Name: ${this.agencyName}`;
    }
}

class TrainStation extends Entity {
    constructor(id, trainId, stationId) {
        super(id);
        this.trainId = trainId;
        this.stationId = stationId;
    }

    describe() {
        return `Train ID: ${this.trainId} (Entity ID: ${this.getId()})\nStation ID: ${this.stationId}`;
    }
}

class PassengerTrain extends Entity {
    constructor(id, passengerId, trainId) {
        super(id);
        this.passengerId = passengerId;
        this.trainId = trainId;
    }

    describe() {
        return `Passenger ID: ${this.passengerId} (Entity ID: ${this.getId()})\nTrain ID: ${this.trainId}`;
    }
}

class PassengerStation extends Entity {
    constructor(id, passengerId, stationId) {
        super(id);
        this.passengerId = passengerId;
        this.stationId = stationId;
    }

    describe() {
        return `Passenger ID: ${this.passengerId} (Entity ID: ${this.getId()})\nStation ID: ${this.stationId}`;
    }
}

class DiContainer {
    constructor() {
        this.service = {};
    }

    register(name, dependency) {
        this.service[name] = dependency;
    }

    get(name) {
        return this.service[name];
    }
}

// Creating the Instance for DiContainer
const diContainer = new DiContainer();

// Registering Dependencies
diContainer.register('station', new Station(1, 101, "Ratnagiri"));
diContainer.register('train', new Train(2, 23, 50, "Ratnagiri", "Pune", 12));
diContainer.register('passenger', new Passenger(3, 301, "Janvi Mungekar", "Sindhudurg"));
diContainer.register('payment', new Payment(4, "Cash", 2000, 2));
diContainer.register('railwayCompany', new RailwayCompany(5, "MetroRail", "New York", '2024-09-23'));
diContainer.register('cancellation', new Cancellation(6, 2, 2, "2024-09-09", 'Personal Reason'));
diContainer.register('booking', new Booking(7, 3, 2, 2, '2024-07-01', 230));
diContainer.register('bookingAgent', new BookingAgent(8, "Janvi Mungekar", '345567854', 'mungekarjanvi@gmail.com', "India"));
diContainer.register('trainStation', new TrainStation(9, 2, 101));
diContainer.register('passengerTrain', new PassengerTrain(10, 301, 2));
diContainer.register('passengerStation', new PassengerStation(11, 301, 101));

// Retrieving and using dependencies
const station = diContainer.get('station');
console.log(station.describe());

const train = diContainer.get('train');
console.log(train.describe());

const passenger = diContainer.get('passenger');
console.log(passenger.describe());

const payment = diContainer.get('payment');
console.log(payment.describe());

const railwayCompany = diContainer.get('railwayCompany');
console.log(railwayCompany.describe());

const cancellation = diContainer.get('cancellation');
console.log(cancellation.describe());

const booking = diContainer.get('booking');
console.log(booking.describe());

const bookingAgent = diContainer.get('bookingAgent');
console.log(bookingAgent.describe());

const trainStation = diContainer.get('trainStation');
console.log(trainStation.describe());

const passengerTrain = diContainer.get('passengerTrain');
console.log(passengerTrain.describe());

const passengerStation = diContainer.get('passengerStation');
console.log(passengerStation.describe());
