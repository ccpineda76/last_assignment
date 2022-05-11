/*==================================================
seedDB.js
It seeds the database with some initial students and campuses
================================================== */
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		imageLink:"https://s29068.pcdn.co/wp-content/uploads/hunter-campus.jpg" ,
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		imageLink:"https://www.theknightnews.com/wp-content/uploads/2021/05/photo1078.jpeg" ,
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		imageLink:"http://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg" ,
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});

	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
		lastname: "Smith",
		imageLink: 'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=20&m=1045886560&s=612x612&w=0&h=JL8Dy_sRUXJo6PofsX7XkQpWjSTDhD8LuV071LMlb3Y=',
		email: "joejoe450@myhunter.cuny.edu",
		gpa: 3.7,
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
		lastname: "Johnson",
		imageLink: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
		email: "marymary123@myqueens.cuny.edu",
		gpa: 3.8,
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

module.exports = seedDB;