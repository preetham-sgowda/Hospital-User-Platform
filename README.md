
# **Hospital Platform**

## **Overview**
The **Hospital Platform** is a modern, user-friendly web application designed to simplify healthcare management. Serving as a centralized hub, it empowers patients and healthcare providers to connect, collaborate, and access essential medical features. 

The platform includes capabilities such as appointment scheduling, digital prescriptions, health monitoring, and guided exercises. Advanced functionalities like an AI chatbot, heart disease detection using machine learning, and AI-assisted mental health resources elevate the platform to meet diverse healthcare needs. Additional features include video consultations with doctors, blood donation management, and nutritional guidance.
![59f7503cd70282eb8d8c2372581efbac6f6e0e3d 1](https://github.com/user-attachments/assets/9faff179-9bf1-42f8-9728-544eeb03734a)


---

## **Key Features**

### **1. Appointment Booking**
- Patients can schedule appointments with doctors directly from the platform.
- Doctors can provide prescriptions through a user-friendly interface.
![1c0cceafc147423bfcf619905cd62e5f3ed57966 1](https://github.com/user-attachments/assets/b6cbc6c5-905f-4f89-a0b6-c96f8b156b11)
![3dfc474b3ab19e955ea3ad7da76ce4a36ee99c90 1](https://github.com/user-attachments/assets/bf13fe20-9abe-4501-84b5-7da5ff7e5356)
![ab121ff0aafe4c4eae9e889c2f5b726f030c5740 1](https://github.com/user-attachments/assets/4952628e-3640-4718-97e9-ba4cd488d626)
![e4b4265981cafb1f7c21ea90b76fc6d3404bf4d1 1](https://github.com/user-attachments/assets/bb0646b9-1e49-4cb2-a206-826cd7249e48)




### **2. Digital Prescriptions**
- Users can access and download prescriptions anytime, reducing paperwork.
![d4b045f4224c5ae624f0bbec2b3c19af587c91aa 1](https://github.com/user-attachments/assets/749bfcfa-86f1-48f0-ad8a-b6838c640052)


### **3. Health Monitoring**
- **Vitals Tracking**: Monitor blood pressure, heart rate, and other health metrics.
- **BMI Calculator**: Quickly calculate your Body Mass Index based on height and weight.
- **Guided Breathing Exercises**: Perform exercises designed to improve lung capacity and overall respiratory health.
![41e1f952192835041bef5be376d8b54d4ae6b88e 1](https://github.com/user-attachments/assets/f5ed50c5-0048-49f3-a6c8-363f504cb770)
![759d151915f082d92361150a6d38b9da38f4a8ac 1](https://github.com/user-attachments/assets/cea95c3c-b331-431b-95c0-b4415f8b1df5)



### **4. AI-Powered Chatbot**
- An intelligent AI assistant for real-time interaction.
- Handles user queries related to platform navigation, appointment booking, or general health tips.
![20c581d9fbd3cbe69171dd1305ae12c9f7f37dda 1](https://github.com/user-attachments/assets/c28d2393-7c1f-4374-b44a-f8acab669383)


### **5. Heart Disease Detection**
- Uses a machine learning model to assess user input (e.g., symptoms, vitals) and provides risk predictions for heart disease.
- Promotes early diagnosis and encourages users to seek medical attention when necessary.
![f3e117a87f0f647061a57f1c23e3cc853965dfd9 1](https://github.com/user-attachments/assets/8c2c72d9-05f6-4a23-8a09-48bd4a1fbc2d)
![0d2bdf0b221528fb16bedf6331ffcdc237b54da2 1](https://github.com/user-attachments/assets/43f82bee-4e54-4d4e-b045-d9a501c26bb1)


### **6. Mental Health Resource Page**
- Access a curated library of articles, videos, and self-help resources for mental health.
- Includes an **AI Mental Health Assistant** for conversation and support, designed to provide a safe space for users.
![d755b6cc180ebd41d372b2fa6149281b51fa819a 1](https://github.com/user-attachments/assets/589857f1-bdac-4f65-8a09-3ec222ea3d8e)
![033fd3981bc8d3543e2c3a2c017e803a5a28be71 1](https://github.com/user-attachments/assets/0b38156a-ad70-41ff-b738-828ab7a42c13)



### **7. Video Consultancy**
- Schedule and conduct video consultations with doctors directly through the platform.
- Facilitates remote healthcare, especially for users in rural or underserved areas.
![5ec6fce4628ac63e2bf7ee836e99c41ab44dcf94 1](https://github.com/user-attachments/assets/7b91346e-4e06-4838-aee4-2da6304fc885)


### **8. Nutrition Value Charts**
- Offers detailed nutritional charts for staple diets.
- Provides insights into balanced meal planning for better health management.
![c757604c8a61171294ee27270bcc52a98ebc80bb 1](https://github.com/user-attachments/assets/93832182-6ce5-4a5d-b804-096f5aabaaf7)


### **9. Blood Donation Management**
- Register as a donor, check donor availability, or locate blood donation camps.
- Maintain records of blood donation history.
![e1edea33d403d5b10dbb446bbb0ee288c09b5084 1](https://github.com/user-attachments/assets/e28fa5ac-a4bb-4e06-9cb4-11303ac682aa)
![ba20a3b52484ff1d4c2e4973f0cb61d41193c55c 1](https://github.com/user-attachments/assets/91f13bf0-ec3a-487b-9aad-cd5f60c03897)



---

## **Technology Stack**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL (via phpMyAdmin with XAMPP)
- **Machine Learning Model**: Integrated via Python (Flask/other frameworks for API connectivity)
- **Video Consultancy**: WebRTC or third-party integration (e.g., Zoom API or Twilio)

---

## **Setup Instructions**

### 1. Install XAMPP
   - Download and install XAMPP on your system.
   - Start the following services from the XAMPP Control Panel:
     - **Apache**
     - **MySQL**
  ![image](https://github.com/user-attachments/assets/c59b1d0c-0a8f-4bdf-829e-65988fcae68d)

### 2. Access phpMyAdmin
   - Open a web browser and navigate to `localhost`.
   - From the XAMPP dashboard, access **phpMyAdmin**.
  ![IMG-20241030-WA0032 1](https://github.com/user-attachments/assets/1de74211-8146-4c4e-b738-bfa791091c64)


### 3. Set Up the Database
   - Create a database named `hospital_platform`.
   - Import the provided SQL file to set up required tables:
     - **Users**: Stores details of patients and doctors.
     - **Appointments**: Manages booking information.
     - **Vitals**: Tracks health metrics.
     - **Prescriptions**: Stores prescription data.
     - **Donors**: Maintains blood donor details.
     - **MentalHealthResources**: Contains mental health articles and videos.
     - **NutritionCharts**: Stores dietary information.

### 4. Configure AI Features
   - **AI Chatbot**: Integrate the chatbot service using APIs or custom AI/ML models hosted on a server.
   - **Heart Disease Detection**: Deploy the machine learning model using Python and Flask. Connect the backend via APIs for user input and result processing.
   - **Video Consultancy**: Set up WebRTC or configure APIs for video communication.

### 5. Connect Backend to Database
   - Update database configuration files in PHP to enable smooth data retrieval and storage.
   - Test connectivity by registering a user or booking a test appointment.

---

## **Usage**
1. **User Registration**: Create a user profile for personalized access.
2. **AI Chatbot**: Ask queries about healthcare services or the platform.
3. **Vitals Monitoring**: Log and track health metrics and BMI.
4. **Heart Risk Assessment**: Input symptoms to check heart disease risk using the ML model.
5. **Mental Health Assistant**: Engage in conversations for mental health support.
6. **Video Consultation**: Book and attend virtual appointments with doctors.
7. **Blood Donation**: Register as a donor or search for donors.
8. **Nutrition Guidance**: Access charts to understand diet composition.

---

## **Additional Information**
- Ensure XAMPP is installed and running before accessing the platform locally.
- AI features require external APIs or Python-based model hosting.
- Contributions are welcome via pull requests.

---

## **Contributing**
We welcome enhancements! Feel free to submit pull requests for new features or improvements.

---

## **License**
This project is open-source under the [MIT License](LICENSE).
