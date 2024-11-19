const specialtySelect = document.getElementById('specialty-select');
const doctorListings = document.getElementById('doctor-listings');
const viewAppointmentsBtn = document.getElementById('view-appointments');
const appointmentsModal = document.getElementById('appointments-modal');
const videoCallModal = document.getElementById('video-call-modal');
const appointmentsList = document.getElementById('appointments-list');

const doctors = [
    {
        id: 1,
        name: 'Dr. Sarah Wilson',
        specialty: 'ent',
        description: 'ENT Specialist with 10+ years of experience',
        image: 'img/d1.jpg',
    },
    {
        id: 2,
        name: 'Dr. John Smith',
        specialty: 'ent',
        description: 'ENT Surgeon specializing in pediatric cases',
        image: 'img/d2.jpg',
    },
    {
        id: 3,
        name: 'Dr. Linda Brown',
        specialty: 'ent',
        description: 'ENT Specialist with a focus on adult ENT health',
        image: 'img/d3.jpg',
    },
    {
        id: 4,
        name: 'Dr. Michael Chen',
        specialty: 'gastroenterology',
        description: 'Senior Gastroenterologist, 15 years experience',
        image: 'img/d4.jpg',
    },
    {
        id: 5,
        name: 'Dr. Carla Johnson',
        specialty: 'gastroenterology',
        description: 'Gastroenterologist specializing in digestive health',
        image: 'img/d5.jpg',
    },
    {
        id: 6,
        name: 'Dr. Peter King',
        specialty: 'gastroenterology',
        description: 'Gastroenterologist with expertise in endoscopy',
        image: 'img/d6.jpg',
    },
    {
        id: 7,
        name: 'Dr. Emily Brown',
        specialty: 'dental',
        description: 'Dental Surgeon specializing in orthodontics',
        image: 'img/d7.jpg',
    },
    {
        id: 8,
        name: 'Dr. Steven White',
        specialty: 'dental',
        description: 'Pediatric Dentist with 8 years experience',
        image: 'img/d8.jpg', // Corrected to 'd8.png' for consistency
    },
    {
        id: 9,
        name: 'Dr. Laura Green',
        specialty: 'dental',
        description: 'Cosmetic Dentist with a focus on restorative dentistry',
        image: 'img/d9.jpg',
    },
];

specialtySelect.addEventListener('change', (event) => {
    const selectedSpecialty = event.target.value;
    displayDoctors(selectedSpecialty);
});

viewAppointmentsBtn.addEventListener('click', showAppointments);

function displayDoctors(specialty) {
    doctorListings.innerHTML = '';
    const filteredDoctors = doctors.filter(doctor => doctor.specialty === specialty).slice(0, 3);

    filteredDoctors.forEach(doctor => {
        const doctorCard = createDoctorCard(doctor);
        doctorListings.appendChild(doctorCard);
    });
}

function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.className = 'doctor-card';

    card.innerHTML = `
        <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
        <div class="doctor-info">
            <h3 class="doctor-name">${doctor.name}</h3>
            <p class="doctor-specialty">${capitalizeFirstLetter(doctor.specialty)}</p>
            <p class="doctor-description">${doctor.description}</p>
            <input type="date" class="date-picker" id="date-${doctor.id}">
            <button class="book-button" onclick="bookAppointment(${doctor.id})" disabled>Book Appointment</button>
        </div>
    `;

    const datePicker = card.querySelector('.date-picker');
    const bookButton = card.querySelector('.book-button');

    datePicker.addEventListener('change', () => {
        bookButton.disabled = !datePicker.value;
    });

    return card;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function bookAppointment(doctorId) {
    const datePicker = document.getElementById(`date-${doctorId}`);
    const selectedDate = datePicker.value;
    const doctor = doctors.find(d => d.id === doctorId);

    if (selectedDate && doctor) {
        const appointment = { doctorId, doctorName: doctor.name, date: selectedDate };
        saveAppointment(appointment);
        alert(`Appointment booked with ${doctor.name} on ${selectedDate}`);
        datePicker.value = '';
        datePicker.nextElementSibling.disabled = true;
    }
}

function saveAppointment(appointment) {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

function showAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointmentsList.innerHTML = '';

    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<p>No appointments booked.</p>';
    } else {
        appointments.forEach(appointment => {
            const appointmentElement = document.createElement('div');
            appointmentElement.innerHTML = `
                <p>${appointment.doctorName} - ${appointment.date}</p>
                <button onclick="startVideoCall(${appointment.doctorId})">Start Video Call</button>
            `;
            appointmentsList.appendChild(appointmentElement);
        });
    }

    appointmentsModal.style.display = 'block';
}

function startVideoCall(doctorId) {
    videoCallModal.style.display = 'block';
    appointmentsModal.style.display = 'none';

    // Add iframe to the video call modal
    videoCallModal.innerHTML = `
        <iframe
            allow="camera; microphone; fullscreen; speaker; display-capture"
            src="https://aarogya.yourvideo.live/672e6abd07c75e658ddcb9c3"
            width="100%" height="100%" style="border:none;">
        </iframe>
        <button id="end-call" style="position:absolute;top:10px;right:10px;">End Call</button>
    `;

    document.getElementById('end-call').addEventListener('click', endVideoCall);
}


function endVideoCall() {
    videoCallModal.style.display = 'none';
    videoCallModal.innerHTML = '';  // Clear iframe on call end
}

window.onclick = function(event) {
    if (event.target == appointmentsModal || event.target == videoCallModal) {
        appointmentsModal.style.display = 'none';
        videoCallModal.style.display = 'none';
    }
}

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        appointmentsModal.style.display = 'none';
        videoCallModal.style.display = 'none';
    }
});
//server
const peer = new Peer(undefined, {
    host: 'localhost',  // This should be 'localhost' or your server's address
    port: 9000,  // Ensure this matches the port your PeerJS server is running on
    path: '/peerjs'  // This is usually '/peerjs' unless you've configured it differently
});

