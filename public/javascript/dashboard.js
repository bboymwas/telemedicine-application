document.addEventListener("DOMContentLoaded", () => {
    const userProfile = {
        name: "",
        email: "",
        membership: "",
        image: "path/to/profile-image.jpg", // Replace with a valid image path or URL
        visitHistory: [] // Initially empty as we will fetch data from the server
    };

    // Load user profile data
    async function fetchUserProfile() {
        try {
            const response = await fetch('/userProfile'); 
            if (!response.ok) {
                throw new Error('Network problem!');
            }
            const profile = await response.json();
            document.getElementById("userName").textContent = profile.name || 'N/A';
            document.getElementById("userEmail").textContent = profile.email || 'N/A';
            document.getElementById("userMembership").textContent = profile.membership || 'N/A';
            document.getElementById("profileImage").src = profile.image || 'path/to/default-image.jpg'; // default image
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }

    async function fetchAppointments() {
        const response = await fetch('/appointments');
        const appointments = await response.json();
        const appointmentList = document.getElementById('appointmentList');
        appointmentList.innerHTML = ''; // Clear existing list
        appointments.forEach(appointment => {
            const li = document.createElement('li');
            li.textContent = `Doctor ID: ${appointment.doctor_id}, Date: ${appointment.appointment_date}, Time: ${appointment.appointment_time}`;
            appointmentList.appendChild(li);
        });
    }

    // Handle appointment booking
    document.getElementById("appointmentForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const response = await fetch('/appointments', {
            method: 'POST',
            body: new URLSearchParams(formData)
        });

        if (response.ok) {
            alert('Appointment booked successfully!');
            fetchAppointments(); // Refresh the appointment list after successful booking
        } else {
            alert('Failed to book appointment.');
        }
    });

    document.getElementById('imageUpload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profileImage').src = e.target.result;
            }
            reader.readAsDataURL(file); // Generate base64 URL for the image
        }
    });

    // Fetch appointments and user profile on page load
    fetchAppointments(); 
    fetchUserProfile(); 
});